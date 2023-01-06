# Kafka
- A distributed, fault tolerant, immutable ledger of logs.
- consisting of servers and clients that communicate via a high-performance TCP network protocol.

## Intro

### Kafka server - A cluster of nodes
 - Some of these servers form the storage layer, called the brokers

### Kafka client 
 - Allow you to write distributed applications and microservices that read, write, and process streams of events in parallel, at scale, and in a fault-tolerant manner even in the case of network problems or machine failures


## Concepts
 ### Event
  - An event records somthing happened ( also called record / message)
  - ```json 
      {"key": "key", "value": "value", "timestamp": "now()", "!metadata": "optionalMeta"}
    ```
 ### Producers
 ### Consumers
  - Provides exactly-once and various processing gurantees
 ### Topics
  - Events are stored in topics
  - events are not deleted after consumption
  - Kafka's performance is effectively constant with respect to data size

  - Topics are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers.
  - When a new event is published to a topic, it is actually appended to one of the topic's partitions
  - **Events with the same event key (e.g., a customer or vehicle ID) are written to the same partition, and Kafka guarantees that any consumer of a given topic-partition will always read that partition's events in exactly the same order as they were written**

## Design
 ### Persistance
  - Uses files/disk for persistance rather than in-memory 
  - Kafka, since based on JVM cursed with the GC, so storing in-memory has lot of performace implications, and this in-memory data becomes almost double when stored in a Heap ( java )
  - [Reference](https://kafka.apache.org/documentation/#design_filesystem)

  - The persistent data structure used in messaging systems are often a per-consumer queue with an associated BTree or other general-purpose random access data structures to maintain metadata about messages.
  *This has near-linear(log(N)) performance but does not scale this linear peroformance if data is too big.*
  
  - Intuitively a persistent queue could be built on simple reads and appends to files as is commonly the case with logging solutions.
  *This structure has the advantage that all operations are O(1) and reads do not block writes or each other.*

### Efficiency
 - We discussed disk efficiency in the previous section. Once poor disk access patterns have been eliminated, there are two common causes of inefficiency in this type of system: 
  - 1. **too many small I/O operations**. 
    - **Solution** *Batching*, To avoid this, our protocol is built around a "message set" abstraction that naturally groups messages together. This allows network requests to group messages together and amortize the overhead of the network roundtrip rather than sending a single message at a time. The server in turn appends chunks of messages to its log in one go, and the consumer fetches large linear chunks at a time.
  - 2. **excessive byte copying**
    - **Solution** *New message format*, we employ a standardized binary message format that is shared by the producer, the broker, and the consumer (so data chunks can be transferred without modification between them). 

**_The message log maintained by the broker is itself just a directory of files, each populated by a sequence of message sets that have been written to disk in the same format used by the producer and consumer._**

 - Used UNIX **[sendfile](http://man7.org/linux/man-pages/man2/sendfile.2.html)** for *transferring data out of pagecache to a socket*
  - sendfile has zero copy optimization over general copying in kernal & user space and network & socket buffer
  - sendcopy does not work in SSL enabled config
  - [https://developer.ibm.com/articles/j-zerocopy/](Reference for Java sendcopy)

  - E2E batched compression ( gzip... etc)

## The producer
 - Load balancing
  - Request comes to the Leader
  - Each nodes has the metadata about where the leaders for the partition of the topic are and redirect
   - Async send  - buffering and batching
   - The client controls which partition it publishes messages to

## The consumer
   - requests fetch-with-an-offset from the broker leading the parition.
  ### Push vs pull
  - If producers pushs to client, the client overwhelm with the rate and to control it can ask the producer to slow down ( backoff) but this sounds compplicated
  - Pull will have optimal batching

  ### Consumer position
  - What ( till what offset ) the consumer has consumed and processed?
  - Traditional messaging systems 
    - *Send and forget* - may cause a message to be read twice
    - *Mark sent and wait of ack* - Double effort
    - **What if the message is processed but system went down before sending ACK?, would casue same issue of reprocessing the same msg.** 
  - Kafka does it differently
    - Topic is divided into a set of totally ordered partitions, each of which is consumed by exactly one consumer within each subscribing consumer group at any given time. This means that the position of a consumer in each partition is just a single integer, the offset of the next message to consume.
    - A consumer can deliberately rewind back to an old offset and re-consume data

### Offline Data Load
### Static Membership
 -  group coordinator allocates entity ids to group member
 - These generated ids are ephemeral and will change when members restart and rejoin.

## Message Delivery Semantics
 *Fun right?*
 - At most once—Messages may be lost but are never redelivered.
 - At least once—Messages are never lost but may be redelivered.
 - Exactly once—this is what people actually want, each message is delivered once and only once.

  *This breaks down into two problems: the durability guarantees for publishing a message and the guarantees when consuming a message*

 - Kafka marks messages to be commited 
 - Similar to DB it is Atomic or Transactional, either it fails to write or writes and marks as commited. ( depends on the choosen gurrantee config)

 <details>
  <summary>Notes - READ</summary>
  Prior to 0.11.0.0, if a producer failed to receive a response indicating that a message was committed, it had little choice but to resend the message. This provides at-least-once delivery semantics since the message may be written to the log again during resending if the original request had in fact succeeded. Since 0.11.0.0, the Kafka producer also supports an idempotent delivery option which guarantees that resending will not result in duplicate entries in the log. To achieve this, the broker assigns each producer an ID and deduplicates messages using a sequence number that is sent by the producer along with every message. Also beginning with 0.11.0.0, the producer supports the ability to send messages to multiple topic partitions using transaction-like semantics: i.e. either all messages are successfully written or none of them are. 
 </details>

 - **From consumer's perespective**
  - **At-most-once** 
    - read the messages, then save its position in the log, and finally process the messages. In this case there is a possibility that the consumer process crashes after saving its position but before saving the output of its message processing. In this case the process that took over processing would start at the saved position even though a few messages prior to that position had not been processed
  - **At-least-once**
    - read the messages, process the messages, and finally save its position. In this case there is a possibility that the consumer process crashes after processing messages but before saving its position. In this case when the new process takes over the first few messages it receives will already have been processed.
    - In consumer side, in many cases messages have a primary key and so the updates are idempotent (receiving the same message twice just overwrites a record with another copy of itself). 

  - **Exactly once** - Only When consuming from a Kafka topic and producing to another topic **Kafka Streams**
    - The consumer's position is stored as a message in a topic
    -  we can write the offset to Kafka in the same transaction as the output topics receiving the processed data. If the transaction is aborted, the consumer's position will revert to its old value and the produced data on the output topics will not be visible to other consumers, depending on their "isolation level."

  - BUT When writing to an external system
    **What about the gurantees of the consumers position which is stored as output**
    - The classic way of achieving this would be to introduce a two-phase commit between the storage of the consumer position and the storage of the consumers output.
    - But this can be handled more simply and generally by letting the consumer store its offset in the same place as its output.( similar of what we did in Kafka)]
    - *And we only need to worry about these above if messages do not have a primary key*
 - ***GIST***
  - Kafka only provides Exactly once gurrantess in Kafka-streams, when consumer is also a Kafka topic
  - Exactly-once delivery for other destination systems generally requires cooperation with such systems, but Kafka provides the offset which makes implementing this feasible (see also Kafka Connect). Otherwise, Kafka guarantees at-least-once delivery by default, and allows the user to implement at-most-once delivery by disabling retries on the producer and committing offsets in the consumer prior to processing a batch of messages. 


## Replication
 - Unit of replication is the topic partition
 - Follwers consume messages from leader like normal consumers
 - Livlines of a node is defined by below ( also called in-sync replicas ISRs)
    - Brokers must maintain an active session with the controller in order to receive regular metadata updates.
    - Brokers acting as followers must replicate the writes from the leader and not fall "too far" behind.
 - **Commited** - We can now more precisely define that a message is considered committed when all replicas in the ISR for that partition have applied it to their log,  Only committed messages are ever given out to the consumer
  - **GIST** - The guarantee that Kafka offers is that a committed message will not be lost, as long as there is at least one in sync replica alive, at all times. 
  - [https://kafka.apache.org/documentation/#design_replicatedlog](Replication log / ISR / Quorum) - State machine

### Availability and Durability Guarantees
When writing to Kafka, producers can choose whether they wait for the message to be acknowledged by 0,1 or all (-1) replicas. Note that "acknowledgement by all replicas" does not guarantee that the full set of assigned replicas have received the message. By default, when acks=all, acknowledgement happens as soon as all the current in-sync replicas have received the message
