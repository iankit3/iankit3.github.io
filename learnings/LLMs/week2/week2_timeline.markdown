# Week 2 Timeline Summary (June 2–8, 2025)

## Day 1: Tokenization Comparison (Monday, June 2, 7:00–8:00 PM IST)
- **Task**: Compared BERT and RoBERTa tokenization on "LLMs are transforming AI" (40 mins), explained RoBERTa’s advantages (20 mins).
- **Output**: BERT: `['llms', 'are', 'transform', '##ing', 'ai']` (WordPiece); RoBERTa: `['LLM', 's', 'are', 'transforming', 'AI']` (BPE). RoBERTa’s BPE preserves whole words better, uses dynamic masking, larger batches.
- **Correction**: None needed; strong understanding of tokenization differences.

## Day 2: Attention Visualization (Tuesday, June 3, 7:00–8:00 PM IST)
- **Task**: Visualized BERT attention for "I love ai" (40 mins), compared multi-head vs. scaled dot-product attention (20 mins).
- **Output**: Heatmap showed "love" attends to "ai" (~0.21–0.24). Multi-head attention captures diverse relationships by running scaled dot-product in parallel.
- **Correction**: None needed; heatmap and explanation were accurate.

## Day 3: Fine-Tuning with Optimization (Wednesday, June 4, 7:00–8:00 PM IST)
- **Task**: Fine-tuned DistilBERT on SST-2 with mixed precision (FP16) and LR scheduling (40 mins), shared accuracy (20 mins).
- **Output**: Accuracy: 82% (below target >85%). Mixed precision reduces memory usage but risks slower training if misconfigured.
- **Correction**: Increase dataset size (e.g., 2000 samples), tweak learning rate (3e-5), add warmup steps for better accuracy.

## Day 4: Model Compression (Thursday, June 5, 7:00–8:00 PM IST)
- **Task**: Quantized Day 3 DistilBERT model (40 mins), shared size reduction (20 mins).
- **Output**: Original: 255.54 MB; Quantized: 64.49 MB; Reduction: 191.06 MB. Quantization uses INT8 precision to reduce model size.
- **Correction**: None needed; excellent reduction (75%).

## Day 5: Model Deployment (Friday, June 6, 7:00–8:00 PM IST)
- **Task**: Deployed Day 4 quantized model as FastAPI endpoint (40 mins), tested on "I love AI" (20 mins).
- **Output**: `{"text": "I love AI", "label": "POSITIVE", "score": 2.0178}`. FastAPI is easy, uses Uvicorn for fast async handling.
- **Correction**: Convert logits to probabilities (softmax) for better interpretability.

## Day 6: Text Generation Mini-Project (Saturday, June 7, 7:00–9:00 PM IST)
- **Task**: Fine-tuned GPT-2 on TinyStories (1 hour), deployed as FastAPI endpoint, generated 5 story prompts (1 hour).
- **Output**: Generated coherent stories (e.g., "Once upon a time in a magical forest, there was a little boy named Timmy..."). Challenge: Had to set pad_token manually.
- **Correction**: Increase `max_length` to 150, adjust temperature for coherence.

## Day 7: Review and Reflect (Saturday, June 7, 5:31 PM IST, Ahead of Schedule)
- **Task**: Revisited “Efficient Transformers” (20 mins), tweaked Day 6 GPT-2 (1 hour), wrote 100-word summary (20 mins), answered 5-question quiz (20 mins).
- **Tweaked Output**: `{"prompt": "In a small village by the sea", "generated_text": "In a small village by the sea, a young boy named Timmy played with his toy boat near the shore. He dreamed of sailing across the vast ocean, so he asked his mom if he could try. She smiled and said, 'Of course, Tim, but stay close to the shore.' As he pushed his boat into the gentle waves, a gust of wind caught it, pulling it further out. Timmy watched in awe as the boat drifted, sparkling under the sun. He felt brave, like a real sailor, ready to explore new adventures beyond the horizon."}`
- **Summary**: In Week 2, I learned about models improving over BERT, like RoBERTa’s tokenization and efficiency. I created a heatmap of “I love ai,” visualizing how “love” attends to “ai.” I used DistilBERT with lower precision FP16 and optimizations for reduced memory usage. Quantization further decreased the model size significantly. I deployed the sentiment analysis model on FastAPI, enabling efficient inference. Then, I fine-tuned GPT-2 for sentence generation, creating coherent stories. These tasks deepened my understanding of tokenization, optimization, deployment, and generation, preparing me for Week 3’s challenges in ethics, advanced applications, and a capstone project.
- **Quiz Answers**:
  1. RoBERTa used BPE. (Noted: BERT uses WordPiece for contrast.)
  2. Multihead attention used scaled dot-product attention in parallel for observing diff relationships.
  3. It reduces the memory usage.
  4. Reduced the mode size. (Noted: 255.54 MB to 64.49 MB.)
  5. Had to set pad token manually.
- **Correction**: Quiz answers are accurate; adding specifics (e.g., quantization results) would enhance clarity.