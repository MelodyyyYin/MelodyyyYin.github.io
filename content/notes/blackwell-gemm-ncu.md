---
title: "Profiling a Blackwell GEMM kernel with Nsight Compute"
date: "2026-04-28"
summary: "Using NCU to find memory stalls and improve sustained throughput on a Blackwell GEMM kernel."
tags: ["CUDA", "GPU", "Performance"]
status: "wip"
---

> 🚧 **Work in progress.**

## Planned outline

- Baseline kernel and the NCU sections that matter (memory workload, warp state)
- Shared-memory tiling and double buffering
- Warp-level scheduling and the occupancy trade-offs
- Before / after numbers _(to add)_

_Full write-up coming soon._
