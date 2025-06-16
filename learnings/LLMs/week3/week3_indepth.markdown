# Week 3 In-Depth Overview (June 9–15, 2025)

## Overview
Week 3 deepened my expertise in advanced LLM topics, focusing on ethics, conversational models, fine-tuning, interpretability, and deployment. I analyzed bias in DialoGPT, fine-tuned it for dialogue, adapted DistilBERT for Twitter sentiment, used SHAP for interpretability, and built a multi-task system with RoBERTa (classification) and GPT-2 (generation) deployed via FastAPI. This prepared me for **Week 4**’s focus on multimodal learning, evaluation metrics, and optimization.

## Key Learnings
- **Ethics (Day 1)**: DialoGPT’s response to “typical software engineer” showed gender and location biases (e.g., “guy from Silicon Valley”). Bias mitigation requires diverse datasets and prompt engineering.
- **Conversational Models (Day 2)**: Fine-tuned DialoGPT on DailyDialog, achieving coherent responses but noting its struggle with long-term context. See: [DialoGPT Paper](https://arxiv.org/abs/1911.00536).
- **Fine-Tuning (Day 4)**: Adapted DistilBERT from SST-2 (82% accuracy) to Twitter sentiment (67.4% accuracy), highlighting domain shift challenges (formal reviews to informal tweets).
- **Interpretability (Day 5)**: Used SHAP on DistilBERT for “I love AI,” revealing token contributions (`love`=0.0044 to POSITIVE). SHAP aids debugging and transparency. See: [SHAP Paper](https://arxiv.org/abs/1705.07874).
- **Multi-Task System (Days 6–7)**: Built a system combining RoBERTa (86.4% accuracy on IMDb) and GPT-2 (story generation), deployed via FastAPI. This mimics real-world applications like movie review platforms with classification and creative generation.
- **Deployment (Day 7)**: FastAPI deployment on M3 Pro required memory management for two models, showing the importance of optimization (e.g., potential quantization).

## Challenges and Improvements
- **Day 4**: Twitter sentiment accuracy dropped to 67.4% (target >75%) due to domain shift and label mismatch (2 to 3 labels). Fixed with `ignore_mismatched_sizes=True`; suggest continued pretraining on Twitter data.
- **Day 5**: DistilBERT’s low confidence (54.4%) for “I love AI” reflects small dataset size (2000 samples). Increasing data or fine-tuning could improve robustness.
- **Day 7**: Managing memory for RoBERTa and GPT-2 in FastAPI was challenging. Future improvements could include model quantization or ONNX optimization.

## Advanced Resources
- [Fairness in NLP](https://arxiv.org/abs/1910.06407): Bias detection and mitigation strategies.
- [Hugging Face Transformers](https://huggingface.co/docs/transformers): Fine-tuning, deployment, and interpretability guides.