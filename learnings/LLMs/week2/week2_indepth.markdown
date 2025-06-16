# Week 2 In-Depth Overview (June 2–8, 2025)

## Overview
Week 2 advanced my NLP skills through tokenization, attention mechanisms, fine-tuning, optimization, deployment, and text generation. I compared BERT and RoBERTa, visualized attention, optimized DistilBERT, quantized models, deployed via FastAPI, and generated stories with GPT-2, preparing for Week 3’s focus on ethics and advanced applications.

## Key Learnings
- **Tokenization (Day 1)**: RoBERTa’s BPE tokenization (e.g., `['LLM', 's']`) outperforms BERT’s WordPiece (`['llms']`) by preserving whole words, using dynamic masking and larger batches for efficiency. See: [RoBERTa Paper](https://arxiv.org/abs/1907.11692).
- **Attention (Day 2)**: Visualized BERT’s attention for "I love ai" ("love" attends to "ai," ~0.21–0.24). Multi-head attention runs scaled dot-product in parallel, capturing diverse relationships. See: [Attention Is All You Need](https://arxiv.org/abs/1706.03762).
- **Fine-Tuning (Day 3)**: Fine-tuned DistilBERT on SST-2 (82% accuracy) with mixed precision (FP16) and linear LR decay, reducing memory usage but risking slower training if misconfigured.
- **Optimization (Day 4)**: Quantized DistilBERT (255.54 MB to 64.49 MB) using INT8 precision, enabling efficient deployment. See: [Hugging Face Optimum](https://huggingface.co/docs/optimum/quantization).
- **Deployment (Day 5)**: Deployed the quantized model via FastAPI, testing "I love AI" (`"label": "POSITIVE", "score": 2.0178`). FastAPI’s async handling with Uvicorn ensures speed.
- **Generation (Day 6)**: Fine-tuned GPT-2 on TinyStories, generating coherent stories. Overcame pad_token issue by setting it to `eos_token`, highlighting the importance of preprocessing.
- **Reflection (Day 7)**: Revisited “Efficient Transformers,” noting sparse attention’s relevance to Day 2 and quantization’s alignment with Day 4. Tweaked GPT-2, improving story coherence by adjusting `max_length`, `temperature`, and adding `repetition_penalty`.

## Challenges and Improvements
- **Day 3**: Accuracy (82%) was below target (>85%). Suggested increasing dataset size, tweaking learning rate (3e-5), adding warmup steps.
- **Day 6**: Stories had abrupt endings. Tweaked on Day 7 (e.g., `max_length=150`, `temperature=0.6`), improving narrative closure.

## Advanced Resources
- [Efficient Transformers](https://arxiv.org/abs/2009.06732): Optimization techniques.
- [Hugging Face Transformers](https://huggingface.co/docs/transformers): Fine-tuning and deployment guides.