# Varinish cache
 - Varnish reverse proxy for HTTP caching
 - Delegates caching to kernal/os instead of manully doing it in old school 1975 way
 - A file backed virtual memory with pointers and size to each diff HTTP objs
 - **GYAN**: *Virtual memory was meant to make it easier to program when data was larger than the physical memory, but people have still not caught on*

 ### More gyan and references
 http://varnish-cache.org/docs/trunk/phk/notes.html#more-caches
  - Talks about how multi-cpu programming in difficult