# Week 3 Timeline Summary (June 9–15, 2025)

## Day 1: Ethics in LLMs – Bias Detection (Monday, June 9, 7:00–8:00 PM IST)
- **Task**: Read ethics guide (20 mins), analyzed bias in DialoGPT response (40 mins).
- **Output**: DialoGPT response to “typical software engineer”: “A guy in his 20s, probably from Silicon Valley…” Identified gender (“guy”), location (“Silicon Valley”), and age (“20s”) biases. Suggested diverse datasets for mitigation.
- **Correction**: None needed; thorough bias analysis.

## Day 2: Conversational Chatbot Mini-Project (Tuesday, June 10, 7:00–8:00 PM IST)
- **Task**: Read DialoGPT guide (20 mins), fine-tuned on DailyDialog (40 mins).
- **Output**: Generated conversation: User: “Hi, how’s it going?” DialoGPT: “Hey! I’m doing great…” Responses were coherent but occasionally off-topic.
- **Correction**: Use a larger model or add memory mechanisms for better context handling.

## Day 3: Text Classification Mini-Project (Wednesday, June 11)
- **Task**: Fine-tune BERT on IMDb, share accuracy.
- **Output**: Reused **Week 1 Day 6** results: 87% accuracy on IMDb (2000 train, 500 val).
- **Correction**: None needed; task completed earlier.

## Day 4: Advanced Fine-Tuning – Domain Adaptation (Thursday, June 12, 7:00–8:00 PM IST)
- **Task**: Read domain adaptation guide (20 mins), adapted **Week 2 Day 3** DistilBERT to Twitter sentiment (40 mins).
- **Output**: Accuracy: 67.4% (target >75%). Fixed label mismatch with `ignore_mismatched_sizes=True`. Noted domain shift (SST-2: 82% to Twitter: 67.4%).
- **Correction**: Continue pretraining on Twitter data or use a larger dataset.

## Day 5: Model Interpretability (Friday, June 13, 7:00–8:00 PM IST)
- **Task**: Read SHAP guide (20 mins), applied SHAP to **Week 2 Day 3** DistilBERT for “I love AI” (40 mins).
- **Output**: SHAP values: `I`=0.008, `love`=0.0044, `AI`=0.0045 (POSITIVE). Prediction: `LABEL_1` (POSITIVE), 54.4% confidence. Low confidence due to small dataset.
- **Correction**: Increase training data for better robustness.

## Day 6: Capstone Project – Part 1 (Saturday, June 14, Completed June 16)
- **Task**: Fine-tuned RoBERTa on IMDb (1 hour), generated GPT-2 stories (1 hour).
- **Output**: RoBERTa accuracy: 86.4% (>85% target). Generated 3 stories with GPT-2 (prompts: “Once upon a time in a magical forest,” etc.).
- **Correction**: None needed; strong results.

## Day 7: Capstone Project – Part 2 (Sunday, June 15, Completed June 16)
- **Task**: Deployed RoBERTa and GPT-2 in FastAPI (1 hour), tested on 5 inputs (1 hour).
- **Output**: Unified multi-task system with `/classify/` and `/generate/` endpoints. Tested classification (“This movie is great!”) and generation (“Once upon a time…”).
- **Correction**: Consider model quantization for better memory efficiency.