# kernel-realization-atlas

**Meaning-aware kernel optimization with GPU hardware evidence**

`kernel-realization-atlas` is a research-oriented repository that connects three things:

- **optimization semantics** — what transformations are legally allowed,
- **GPU probing** — what the hardware actually favors,
- **kernel realization** — what implementation families are therefore worth pursuing.

This repository is **not** just a collection of CUDA kernels, and **not** yet a full compiler generator.
It is an attempt to build a more grounded path from:

> **semantic freedom → preservation boundary → measured hardware behavior → kernel realization choice**

---

## What this repository currently contains

This repository currently focuses on:

- CUDA probe kernels and microbenchmarks
- hardware characterization experiments
- execution-primitive-oriented performance analysis
- compiler-oriented documentation around legality and preservation
- a growing structure for connecting probe results back to optimization decisions

In practical terms, the repository is trying to answer questions like:

- When is a transformation **semantically safe**?
- When is it **numerically or structurally fragile**?
- When does the GPU **actually prefer** a given access or execution pattern?
- Which implementation family is worth exploring **before** writing a large optimized kernel by hand?

---

## What this repository is not

To keep the scope honest:

- it is **not yet** a full compiler generator,
- it is **not yet** a complete GPU reverse-engineering framework,
- it does **not** claim that probing alone fully explains hidden hardware internals,
- it does **not** claim general kernel generation from semantics alone.

The current value of the repository is in building the **evidence chain**, not in claiming a complete automated system.

---

## Why this repository exists

Many optimization discussions stop too early at one of these layers:

- operator names,
- handwritten schedules,
- isolated benchmark results,
- or standalone kernel tricks.

That is useful, but incomplete.

Real optimization decisions often depend on four linked questions:

1. **Meaning** — what changes are allowed?
2. **Preservation** — what must remain true?
3. **Hardware behavior** — what does the GPU actually favor?
4. **Realization** — what implementation structure is likely to survive in practice?

This repository exists because a useful optimization system eventually needs all four.

---

## A concrete example

A stride sweep probe is not interesting only because it produces timings.
It is useful because it can support an optimization decision.

For example:

1. Run a fixed-work global memory stride sweep.
2. Observe where throughput drops sharply.
3. Interpret the cliff as evidence of reduced coalescing efficiency or transaction waste.
4. Use that evidence to avoid an implementation family whose access structure depends on that bad regime.

In that sense, a probe result is not just a measurement.
It becomes **optimization evidence**.

---

## Core idea

The repository is built around one central claim:

> **Operator names alone are not enough.**
> Legal transformation rules, preservation boundaries, and measured hardware behavior must be studied together.

This leads to four working ideas.

### 1. Meaning matters

Optimization is not only about making something faster.
It is about changing execution **without breaking the meaning that must be preserved**.

### 2. Preservation matters

Many transformations are only valid under conditions such as:

- bounded numeric drift,
- dependency preservation,
- structural preservation,
- semantic consistency,
- controlled reordering.

Without explicit preservation thinking, optimization becomes guesswork.

### 3. Hardware evidence matters

Even a semantically valid transformation can perform badly on a real GPU.

Ignoring factors such as:

- coalescing,
- bank conflicts,
- occupancy cliffs,
- synchronization cost,
- shared memory pressure,
- register pressure,

often leads to poor optimization choices.

### 4. Execution primitives matter

Operator labels are often too coarse.
Many optimization decisions are better described in terms of execution forms such as:

- reduction topology,
- streaming update,
- weighted accumulation,
- rematerialization,
- tile staging,
- producer-consumer distance,
- synchronization structure.

These are often closer to the real kernel decision than the operator name itself.

---

## Project evolution

This repository did not start with “kernel realization atlas” as its original center.
Its direction changed as the actual problem moved.

### Phase 1 — Framework execution

The earliest focus was execution itself:

- tensor/module/function structure
- backend connection
- CUDA kernel invocation
- custom operator support
- end-to-end execution

The question at this stage was:

> **How do I make AI computation run?**

### Phase 2 — Compiler-oriented optimization

Execution alone was not enough.
The focus moved toward:

- graph capture
- lowering
- runtime constraints
- deterministic replay
- fusion and transformation legality

The question became:

> **How do I change execution without breaking meaning?**

This led to the emergence of:

- **Property Atlas**
- **Preservation Guide**
- **Ops Explorer**

### Phase 3 — GPU understanding

Legal transformations still do not guarantee good performance.
That pushed the work into deeper GPU-level questions:

- coalescing
- shared-memory layout
- bank conflicts
- tile residency
- reduction structure
- rematerialization
- memory traffic minimization

The question became:

> **How do legal transformations become good kernels on real GPUs?**

### Phase 4 — Probing as evidence

To answer hardware-dependent questions, intuition was not enough.
The project needed evidence.

That led to a probing direction built around:

- probe kernels
- microbenchmarks
- fixed-work sweeps
- execution-pattern measurements
- implementation sensitivity analysis

The question became:

> **What does the GPU actually favor, and where are the practical limits?**

### Phase 5 — Toward rule-guided realization

The current direction is no longer only about writing one good kernel manually.
It asks:

> **Can semantic rules, preservation constraints, and measured hardware evidence jointly narrow the space of realizable kernels?**

That is the motivation behind the name **kernel-realization-atlas**.

---

## System view

The repository can be understood as four connected layers.

### 1. Execution substrate

The execution-capable foundation:

- framework/runtime work
- backend integration
- kernel execution
- custom operator support

### 2. Optimization semantics

The layer that defines what is legal and what must be preserved:

- Property Atlas
- Preservation Guide
- Ops Explorer
- legality thinking

### 3. Hardware evidence

The layer that measures what the GPU actually does:

- hardware characterization
- probe kernels
- performance sweeps
- implementation sensitivity measurements

### 4. Kernel realization direction

The emerging layer that tries to use the previous three:

- implementation family reasoning
- probe-informed optimization priors
- constrained kernel structure selection
- hardware-aware realization paths

The intended flow is:

```text
Semantics / Legality
    ↓
Property / Preservation Profiles
    ↓
GPU Probing / Hardware Evidence
    ↓
Execution Primitive Analysis
    ↓
Implementation Family Reasoning
    ↓
Kernel Realization Direction
```

---

## Optimization semantics

The semantics layer exists to answer one question:

> **What kinds of execution changes are allowed under meaning preservation?**

### Property Atlas

Property Atlas describes what structural or mathematical freedoms an operator or execution form has.

Examples:

- order rewritability
- tile composability
- streaming realizability
- rematerializability
- locality sensitivity
- numeric sensitivity

This is intended to support optimization reasoning, not just taxonomy.

### Preservation Guide

Preservation Guide describes what must remain invariant when execution changes.

Examples:

- semantic consistency
- bounded numeric drift
- structural preservation
- dependency preservation
- stability boundaries

This is the layer that defines safe optimization boundaries.

### Ops Explorer

Ops Explorer is the bridge from operator name to optimization interpretation.
It asks:

- what structural properties the operator has,
- what transformations those properties allow,
- and how fragile those transformations are.

---

## GPU Probing Lab

GPU Probing Lab is the hardware evidence arm of the repository.
It is not meant as a generic benchmark folder.

Its purpose is to measure:

- real performance regimes,
- sensitivity to access patterns,
- implementation crossover points,
- primitive-level viability on actual GPUs.

It is useful to think of this lab as two connected axes.

### Hardware Characterization Lab

This axis studies the GPU **as a machine**.

Typical questions:

- How does stride affect throughput?
- Where does coalescing break down?
- How sensitive is the device to bank conflicts?
- Where do occupancy/register/shared-memory tradeoffs become severe?
- What performance cliffs are observable?

Typical outputs:

- hardware profile
- performance envelope
- measured crossover points
- architectural sensitivity map

### Execution Primitive Lab

This axis studies execution forms **below the operator level**.

Typical questions:

- What reduction topology is favorable?
- When is rematerialization better than materialization?
- How viable is a streaming realization on this device?
- What tile staging structures survive well?
- How expensive are synchronization-heavy forms?

Typical outputs:

- primitive realization profile
- implementation family viability
- legality-to-cost observations
- execution priors for later realization decisions

### Why the split matters

A GPU can be measured as a machine, and execution forms can be measured as realizations.
These are related, but different.

- **Hardware Characterization** tells us what the device tends to favor.
- **Execution Primitive Lab** tells us how specific forms behave under those conditions.

Both are needed if measured results are going to influence optimization choices.

---

## Current scope

The current repository is centered on combinations of:

- CUDA-based probe kernels
- performance measurements
- hardware behavior experiments
- execution primitive reasoning
- documentation of legality and preservation concepts

Example active directions include:

- stride sweep probes
- fixed-work memory access analysis
- hardware characterization experiments
- execution primitive analysis
- documentation of optimization semantics

---

## Emerging direction

The repository is gradually moving toward:

- hardware-aware implementation family selection
- probe-informed optimization priors
- rule-guided kernel structure selection
- constrained kernel realization paths

This is the direction of travel.
It is **not** a claim that the repository already provides a generalized synthesis system.

---

## Repository structure

A repository layout may look like this:

```text
kernel-realization-atlas/
├─ probes/                  # CUDA probe kernels and microbenchmarks
├─ experiments/             # experiment specs and probe documents
├─ harness/                 # scripts and runners
├─ analysis/                # parsing, plotting, interpretation helpers
├─ docs/                    # architecture, semantics, design notes
├─ results/                 # JSON / CSV / reports
└─ README.md
```

Intended roles:

- `probes/` — executable measurement kernels
- `experiments/` — experiment definitions and rationale
- `harness/` — run and collect results
- `analysis/` — interpret outputs
- `docs/` — theory, architecture, and design notes
- `results/` — machine-readable outputs and derived artifacts

---

## Getting started

Adjust commands to the actual repository layout and toolchain on your system.

### Requirements

Typical requirements:

- NVIDIA GPU
- CUDA Toolkit
- CMake
- Ninja or another supported build system
- C++ compiler compatible with the installed CUDA version

### Build

```bash
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build -j
```

### Run a probe

Example:

```bash
./build/global_stride_sweep --max-stride 256 --block 256 --grid 256
```

Fixed-work example:

```bash
./build/global_stride_sweep_fixed_work --max-stride 256 --block 256 --grid 256 --total-accesses 16777216 --total-elems 67108864
```

### Expected output shape

Typical output is machine-readable, for example:

```json
{
  "probe": "global_stride_sweep_fixed_work",
  "device": {
    "name": "NVIDIA GPU"
  },
  "config": {
    "max_stride": 256
  },
  "results": [
    { "stride": 1, "avg_ms": 0.0 }
  ]
}
```

---

## Example workflows

### 1. Hardware characterization

- Run a stride or access-pattern probe.
- Observe regime changes in throughput or latency.
- Infer sensitivity to memory access structure.
- Record the result as hardware evidence.

### 2. Execution primitive analysis

- Start from a primitive-level question.
- Choose a targeted probe.
- Compare behavior under controlled configurations.
- Interpret implementation viability.

Examples of primitive-level questions:

- reduction topology
- staging strategy
- rematerialization tradeoff

### 3. Optimization reasoning

- Start from an optimization question.
- Identify relevant property and preservation constraints.
- consult probe-derived hardware evidence.
- Narrow the implementation family worth exploring.

---

## Roadmap

### Near-term

- expand core probe coverage
- improve machine-readable result formats
- document probe design principles more clearly
- strengthen the split between hardware characterization and execution primitive labs

### Mid-term

- formalize execution primitive vocabulary
- connect probe results to optimization evidence more directly
- improve analysis workflows and interpretation documents
- define narrower implementation-family case studies

### Long-term

- establish a more explicit realization constraint layer
- connect property, preservation, and hardware evidence in one flow
- build narrow hardware-aware kernel realization demonstrations
- explore constrained synthesis assistance for implementation candidates

---

## Why this repository matters

This repository treats optimization as more than:

- operator labels,
- isolated kernels,
- or heuristic tuning in the dark.

It moves toward a structure where:

- meaning defines legal change,
- preservation defines safe change,
- hardware evidence defines realistic change,
- and execution primitives define implementable change.

So the project is becoming less about:

> **How do I write one good kernel?**

and more about:

> **How do meaning, preservation, and hardware evidence jointly make good kernels systematically more reachable?**

---

## Status

This is an evolving research-oriented repository.
Some parts are implementation-heavy, some are experimental, and some are still architectural.

The direction is deliberate:

- from framework execution,
- to compiler-oriented optimization,
- to GPU evidence gathering,
- toward kernel realization guided by semantics and hardware evidence.

If that problem space overlaps with your interests, this repository is meant to be read both as code and as a system design trajectory.
