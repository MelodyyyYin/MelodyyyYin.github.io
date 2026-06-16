---
title: "Debugging a Raft deadlock with pprof"
date: "2026-05-20"
summary: "Tracking down a lock-ordering stall in a Multi-Raft key–value store using Go pprof goroutine dumps."
tags: ["Raft", "Go", "Debugging"]
status: "wip"
---

> 🚧 **Work in progress.**

## Planned outline

- Symptom: the apply loop stalls under concurrent leader elections
- Reading goroutine stacks from a pprof dump to find who's blocked on what
- The lock-ordering bug and the fix
- Guardrails to keep it from coming back

_Full write-up coming soon._
