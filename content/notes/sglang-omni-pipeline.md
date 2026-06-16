---
title: "Reading the SGLang-Omni serving pipeline"
date: "2026-06-10"
summary: "Mapping the multi-stage pipeline — preprocessing, encode, engine, vocoder — while adding a new MoE TTS model."
tags: ["SGLang", "LLM serving", "MoE"]
status: "wip"
---

> 🚧 **Work in progress** — notes I'm keeping while adding ZONOS2 to SGLang-Omni.

## Planned outline

- How the multi-stage pipeline is wired: preprocessing → speaker encode → TTS engine → vocoder
- Where a new model plugs in: model runner, weight loader, sampler
- Multi-codebook decoding and the delay pattern
- What to benchmark next: batched decode, RadixAttention + radix cache, CUDA-graph capture

_Full write-up coming soon._
