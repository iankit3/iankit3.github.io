# Week 1 LLM Learning Plan: In-Depth Overview
**Author**: Your Name  
**Date**: May 26–June 2, 2025  

## Introduction
This document provides an in-depth yet brief overview of Week 1 LLM learning, covering tokenization, word embeddings, RNNs, transformers, and fine-tuning. It includes advanced resources for revision, ideal for a full-stack web engineer to revisit concepts and deepen NLP expertise.

## Topic Overview

### Tokenization
**Overview**: Tokenization splits text into tokens (words, subwords) for numerical processing in LLMs. NLTK and BERT’s WordPiece handle different granularities.  
**Key Insights**: Tokens convert to IDs; subword tokenization (e.g., “LLMs” to “ll” + “##ms”) manages rare words.  
**Week 1 Application**: Tokenized “I love learning about LLMs” (NLTK) and “Transformers power modern LLMs” (BERT).  
**Advanced Resources**:  
- [Hugging Face Tokenizer Guide](https://huggingface.co/docs/transformers/tokenizer_summary): Details WordPiece, BPE.  
- [Subword Tokenization Paper](https://arxiv.org/abs/1907.11692): Explores efficiency in LLMs.

### Word Embeddings
**Overview**: Embeddings (e.g., Word2Vec, GloVe) map tokens to vectors, capturing semantic context.  
**Key Insights**: Skip-gram predicts context; GloVe uses co-occurrence matrices. Cosine similarity measures relatedness (e.g., “king” vs. “queen”: 0.7839).  
**Week 1 Application**: Computed similarity with `gensim`’s GloVe.  
**Advanced Resources**:  
- [Word2Vec Paper](https://arxiv.org/abs/1301.3781): Deep dive into Skip-gram/CBOW.  
- [GloVe Project](https://nlp.stanford.edu/projects/glove): Co-occurrence mechanics.

### RNNs and LSTMs
**Overview**: RNNs process sequences sequentially; LSTMs mitigate vanishing gradients for longer contexts.  
**Key Insights**: RNNs struggle with long dependencies; LSTMs use gates to retain memory.  
**Week 1 Application**: Studied limitations vs. transformers’ parallel attention.  
**Advanced Resources**:  
- [LSTM Paper](https://arxiv.org/abs/1406.1078): Original architecture details.  
- [Colah’s RNN Guide](https://colah.github.io/posts/2015-09-NN-Types-FP): Advanced RNN variants.

### Transformers
**Overview**: Transformers use self-attention and FFNs for parallel, context-aware processing.  
**Key Insights**: Attention weights token relationships; BERT’s encoder-only design excels in classification.  
**Week 1 Application**: Explored attention, tokenized with BERT, ran sentiment analysis (score: 0.99983).  
**Advanced Resources**:  
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762): Transformer paper.  
- [The Illustrated BERT](https://jalammar.github.io/illustrated-bert): Visualizes BERT’s flow.

### Fine-Tuning
**Overview**: Fine-tuning adapts pre-trained models (e.g., DistilBERT) to specific tasks like sentiment classification.  
**Key Insights**: Hyperparameters (learning rate, epochs) impact accuracy. Validation loss monitors overfitting.  
**Week 1 Application**: Fine-tuned DistilBERT on IMDB (92.4% accuracy, later 87.7% after tweaks).  
**Advanced Resources**:  
- [Hugging Face Fine-Tuning](https://huggingface.co/docs/transformers/training): Advanced techniques.  
- [BERT Paper](https://arxiv.org/abs/1810.04805): Fine-tuning strategies.