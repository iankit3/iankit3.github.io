# Week 4 In-Depth Overview (June 16–18, 2025)

## Overview
Week 4, a compressed 3-day sprint, explored cutting-edge LLM topics: multimodal learning with CLIP, evaluation metrics for generation, and advanced optimization through pruning. I achieved perfect accuracy on a small text-image dataset, evaluated GPT-2 stories with BLEU/ROUGE, and experimented with pruning DistilBERT, uncovering significant optimization challenges.

## Key Learnings
- **Multimodal Learning (Day 1)**: Fine-tuned CLIP on `RIW/small-coco` (200 train samples), achieving 100% accuracy on 5 text-image pairs. Highlights CLIP’s text-image alignment power. See: [CLIP Paper](https://arxiv.org/abs/2103.00020).
- **Evaluation Metrics (Day 2)**: Applied BLEU and ROUGE-L to GPT-2 stories, yielding 0.000 and 0.089–0.108, respectively. Learned metrics are less suited for creative generation, favoring structural similarity over creativity.
- **Advanced Optimization (Day 3)**: Pruned DistilBERT, reducing size from 803.59 MB to 267.84 MB (66.7% reduction), but accuracy dropped from 82% to 50.2% (30% pruning) and 50% (2% pruning). Indicates model sensitivity to weight removal without retraining.

## Challenges and Improvements
- **Day 1**: 100% accuracy on `RIW/small-coco` suggests overfitting with 200 samples. Validate with new pairs to ensure generalizability.
- **Day 2**: Low BLEU/ROUGE scores reflect creative divergence. Qualitative assessment (e.g., coherence) could complement metrics.
- **Day 3**: A 32% accuracy drop with 2% pruning is excessive. Fine-tuning post-pruning, structured pruning, or custom methods (e.g., importance-based) could recover 75–80% accuracy.

## Advanced Resources
- [Hugging Face Datasets](https://huggingface.co/datasets): `RIW/small-coco` for multimodal tasks.
- [PyTorch Pruning Tutorial](https://pytorch.org/tutorials/intermediate/pruning_tutorial.html): Optimization techniques.