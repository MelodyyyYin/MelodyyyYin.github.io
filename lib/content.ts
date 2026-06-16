/**
 * Single source of truth for all site content.
 * Curated from résumé + verified GitHub activity. No invented facts.
 */

export const profile = {
  name: "Yue (Melody) Yin",
  shortName: "Melody Yin",
  role: "Software Engineer",
  summary:
    "I build the infrastructure that makes AI systems fast, reliable, and production-ready — across LLM serving, distributed systems, and cloud.",
  location: "United States · No sponsorship required",
  email: "melodyyin31@gmail.com",
  github: "https://github.com/MelodyyyYin",
  linkedin: "https://www.linkedin.com/in/yue-yin-ucsd2025/",
  resume: "/Melody_Yin_Resume.pdf",
  photo: "/melody.jpg",
  highlights: [
    { img: "/logos/cmu-icon.png", label: "M.S. @ Carnegie Mellon" },
    { img: "/logos/servicenow-icon.png", label: "SWE Intern @ ServiceNow" },
    { img: "/logos/sglang-icon.png", label: "Open source @ SGLang-Omni" },
  ],
};

export type NewsItem = {
  date: string;
  text: string;
  tag: string;
  highlight?: boolean;
};

export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    text: "Joining Amazon as a Software Engineering Intern (SDE).",
    tag: "Incoming",
    highlight: true,
  },
  {
    date: "Jun 2026",
    text: "Began contributing to SGLang-Omni, an open-source serving framework for multimodal LLMs.",
    tag: "Open source",
  },
  {
    date: "May 2026",
    text: "Started as a Software Engineering Intern at ServiceNow (Santa Clara), working on cloud infrastructure and observability.",
    tag: "New role",
  },
  {
    date: "Jan 2026",
    text: "Started my M.S. in Electrical & Computer Engineering at Carnegie Mellon University.",
    tag: "Education",
  },
  {
    date: "Jun 2025",
    text: "Graduated from UC San Diego — B.S. Mathematics–Computer Science and B.S. Cognitive Science (ML specialization).",
    tag: "Milestone",
  },
];

export const affiliations = [
  {
    name: "Carnegie Mellon University",
    src: "/logos/cmu.svg",
    href: "https://www.cmu.edu",
  },
  {
    name: "ServiceNow",
    src: "/logos/servicenow.svg",
    href: "https://www.servicenow.com",
  },
  { name: "Amazon", src: "/logos/amazon.svg", href: "https://www.amazon.com" },
  {
    name: "UC San Diego",
    src: "/logos/ucsd.svg",
    href: "https://ucsd.edu",
  },
];

export const about = {
  lead: "I'm drawn to the layer beneath the model — the systems that decide whether AI actually holds up in production.",
  // **double asterisks** render as bold in the About section.
  paragraphs: [
    "I'm finishing my **M.S. in ECE at Carnegie Mellon**, after a Math–Computer Science and Cognitive Science degree at **UC San Diego**. Right now I'm a software engineering intern at **ServiceNow**, working on cloud infrastructure and observability, and I contribute to **SGLang-Omni**, an open-source serving framework for multimodal LLMs.",
    "Along the way I've built **Go & gRPC backends**, a **Multi-Raft key–value store**, **RAG pipelines**, and **CI and benchmarks for LLM inference**. I'm happiest with problems where correctness and latency both matter — consensus, caching, and the trade-offs that only show up under load — and I care about systems that stay observable and predictable as they scale.",
  ],
  focus: [
    { emoji: "🤖", label: "AI infrastructure & LLM serving", dot: "bg-apricot-500" },
    { emoji: "🧩", label: "Distributed systems & consensus", dot: "bg-teal-500" },
    { emoji: "☁️", label: "Cloud infrastructure & backend platforms", dot: "bg-sky-500" },
    { emoji: "📊", label: "Observability, reliability & performance", dot: "bg-violet-500" },
  ],
  interests: {
    intro: "When I'm off the keyboard, you'll usually find me on a court, a course, or a mat. 🌿",
    items: [
      { emoji: "🎾", label: "Tennis", className: "border-emerald-200 bg-emerald-50 text-emerald-700" },
      { emoji: "⛳", label: "Golf", className: "border-lime-200 bg-lime-50 text-lime-700" },
      { emoji: "🏸", label: "Badminton", className: "border-sky-200 bg-sky-50 text-sky-700" },
      { emoji: "🧘‍♀️", label: "Yoga", className: "border-violet-200 bg-violet-50 text-violet-700" },
      { emoji: "🤸‍♀️", label: "Pilates", className: "border-rose-200 bg-rose-50 text-rose-700" },
    ],
    invite: "Always up for a match or a session — reach out and let's play together! 💪",
  },
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  stack: string[];
  location?: string;
  current?: boolean;
  link?: { href: string; label: string };
};

export const experience: Experience[] = [
  {
    company: "ServiceNow",
    role: "Software Engineering Intern",
    // TODO(Melody): refine summary/bullets/stack as the internship progresses.
    dates: "May 2026 – Present",
    location: "Santa Clara, CA",
    current: true,
    summary:
      "Working on cloud infrastructure and observability for internal platform systems.",
    bullets: [
      "Contributing to cloud-infrastructure and observability tooling across internal platform services.",
      "Working on agentic-workflow and platform-engineering initiatives within the cloud organization.",
    ],
    stack: ["Cloud Infrastructure", "Observability", "Agentic Workflows"],
  },
  {
    company: "SGLang-Omni",
    role: "Open Source Contributor",
    dates: "Jun 2026 – Present",
    current: true,
    summary:
      "Contribute to SGLang-Omni, a high-performance serving framework for multimodal LLMs — adding model support and inference benchmarking.",
    bullets: [
      "Added native serving for Zyphra ZONOS2, a 16-expert MoE text-to-speech model (9-codebook DAC audio @ 44.1 kHz, zero-shot voice cloning), into the multi-stage TTS pipeline — full model, weight loader, and sampler (~4.5K LOC), with greedy decode verified frame-for-frame against the reference. (PR #779)",
      "Built a concurrency-scaling benchmark and CI gate for Qwen3-ASR inference to track throughput and latency under load, and improved router resilience against transient worker failures. (PRs #647, #628)",
    ],
    stack: ["LLM Serving", "MoE", "PyTorch", "Python", "Benchmarking"],
    link: {
      href: "https://github.com/sgl-project/sglang-omni/pull/779",
      label: "PR #779",
    },
  },
  {
    company: "HU MEI USA",
    role: "Software Engineering Intern",
    dates: "Jun 2025 – Sep 2025",
    location: "Rancho Cucamonga, CA",
    summary:
      "Built an LLM-powered assistant with real-time, multimodal interaction and a retrieval backend.",
    bullets: [
      "Built an AI assistant supporting natural-language interaction in text and voice using LangChain, FastAPI, and WebSockets, with AI text-to-speech for real-time conversational guidance.",
      "Implemented long-term memory with Redis + LangChain to persist conversation state, improving multi-turn coherence and contextual consistency by ~45%.",
      "Designed a RAG pipeline with LangChain embeddings and a Qdrant vector store to retrieve context-relevant data, reducing hallucination rates by ~35% on complex queries.",
      "Integrated external web-search aggregation with internal data, applying ranking and filtering to surface the most relevant results.",
    ],
    stack: [
      "Python",
      "LangChain",
      "FastAPI",
      "WebSockets",
      "Redis",
      "Qdrant",
      "RAG",
      "Embeddings",
    ],
  },
  {
    company: "ETL Performance",
    role: "Software Engineering Intern",
    dates: "Jun 2024 – Sep 2024",
    location: "Remote",
    summary:
      "Built scalable Go microservices and a low-latency, fault-tolerant data pipeline for a testing platform.",
    bullets: [
      "Built scalable microservices in Go (Gin) with an event-driven architecture for real-time sensor-data ingestion, test logging, configuration management, and anomaly extraction.",
      "Implemented gRPC with connection pooling and keepalive to enable low-latency, high-throughput data exchange across dual-environment testing workflows.",
      "Designed and optimized MySQL schemas with indexing and query caching to accelerate analytics queries; added a Redis LRU cache that cut query latency ~23%.",
      "Configured Nginx for reverse proxy and load balancing and containerized services with Docker on Docker Swarm, improving pipeline scalability and fault tolerance.",
    ],
    stack: [
      "Go",
      "gRPC",
      "MySQL",
      "Redis",
      "Nginx",
      "Docker",
      "Docker Swarm",
    ],
  },
  {
    company: "UC San Diego Career Center",
    role: "Data Analyst Intern",
    dates: "Jan 2024 – Jun 2025",
    location: "San Diego, CA",
    summary:
      "Automated data pipelines and reporting for advising operations.",
    bullets: [
      "Automated ETL pipelines in Python (Pandas, NumPy) for cleaning, feature engineering, and transformation, replacing manual effort with repeatable reporting workflows.",
      "Applied statistical analysis and visualization to advising trends, delivering staffing-optimization insights that improved peak-hour coverage by ~20%.",
    ],
    stack: ["Python", "Pandas", "NumPy", "ETL", "Statistical analysis"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  link?: { href: string; label: string };
  tag: string;
};

export const projects: Project[] = [
  {
    name: "Blackwell GEMM Kernel Optimization",
    tag: "GPU / Performance",
    blurb:
      "Low-level GEMM kernel optimization on NVIDIA's Blackwell architecture — the matmul primitive under LLM inference and training.",
    bullets: [
      "Optimized a GEMM kernel for NVIDIA Blackwell, applying shared-memory tiling with double-buffered global→shared staging and warp-level scheduling to raise arithmetic intensity and hide memory latency.",
      "Profiled and tuned the memory hierarchy (global → shared → registers) to cut stalls and improve sustained throughput over a naive baseline.",
    ],
    stack: ["CUDA", "C++", "GEMM", "GPU Performance"],
    link: {
      href: "https://github.com/MelodyyyYin/assignment-tirx-gemm",
      label: "GitHub",
    },
  },
  {
    name: "Distributed Key–Value Store",
    tag: "Distributed Systems",
    blurb:
      "A linearizable, sharded key–value store built on Multi-Raft consensus.",
    bullets: [
      "Built a distributed KV store in Java with Multi-Raft consensus, reaching 99.9% availability, 50K QPS, and <10ms P99 latency for linearizable reads/writes.",
      "Implemented consistent hashing with virtual nodes for ~95% balanced distribution and dynamic shard rebalancing with <1% overhead.",
      "Integrated a RocksDB (LSM-tree) + in-memory B+ tree hybrid engine with MVCC snapshot isolation; optimized reads via ReadIndex, FollowerRead, and async apply batching — ~35% lower latency, ~2× throughput.",
    ],
    stack: ["Java", "Raft", "RocksDB", "MVCC", "Consistent Hashing"],
  },
  {
    name: "MyRPC — Distributed RPC Framework",
    tag: "Backend Infrastructure",
    blurb:
      "A gRPC-style RPC framework with service discovery, load balancing, and health monitoring.",
    bullets: [
      "Built an RPC framework using Protobuf as the IDL, supporting asynchronous calls, dynamic service registration/discovery, and heartbeat detection with Spring, Netty, and ZooKeeper.",
      "Implemented long-lived TCP connections and heartbeat detection over Netty; enabled load balancing with weighted round-robin and ZooKeeper-based health monitoring.",
      "Added FastJSON serialization for efficient transmission and dynamically generated proxy classes for remote interfaces via CGLIB.",
    ],
    stack: ["Java", "Netty", "ZooKeeper", "Protobuf", "Spring"],
  },
];

export type SkillGroup = {
  group: string;
  emoji: string;
  titleClass: string;
  chipClass: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    emoji: "💻",
    titleClass: "text-violet-600",
    chipClass: "border-violet-200 bg-violet-50 text-violet-700",
    items: ["C++", "Go", "Python", "Java", "TypeScript"],
  },
  {
    group: "AI / LLM Systems",
    emoji: "🤖",
    titleClass: "text-apricot-600",
    chipClass: "border-apricot-200 bg-apricot-50 text-apricot-600",
    items: [
      "LLM serving (SGLang-Omni)",
      "MoE serving",
      "Inference benchmarking",
      "RAG",
      "Vector DBs (Qdrant)",
    ],
  },
  {
    group: "GPU / Performance",
    emoji: "⚡",
    titleClass: "text-emerald-600",
    chipClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    items: ["CUDA", "GEMM kernels", "Profiling & tuning", "Benchmarking"],
  },
  {
    group: "Backend / Distributed",
    emoji: "⚙️",
    titleClass: "text-teal-600",
    chipClass: "border-teal-200 bg-teal-50 text-teal-700",
    items: ["gRPC", "Kafka", "Redis", "Raft consensus", "RocksDB", "PostgreSQL"],
  },
  {
    group: "Cloud / Infrastructure",
    emoji: "☁️",
    titleClass: "text-sky-600",
    chipClass: "border-sky-200 bg-sky-50 text-sky-700",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
  },
];

export type Education = {
  school: string;
  degree: string;
  dates: string;
  detail?: string;
  logo?: string;
};

export const education: Education[] = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. in Electrical & Computer Engineering (MSECE)",
    dates: "Jan 2026 – May 2027",
    detail: "Current graduate student.",
    logo: "/logos/cmu-icon.png",
  },
  {
    school: "University of California, San Diego",
    degree:
      "B.S. Mathematics–Computer Science · B.S. Cognitive Science (Machine Learning specialization)",
    dates: "Sep 2021 – Jun 2025",
    detail: "GPA 3.8 / 4.0 · Provost Honors (6×) · PACE Fellowships ’23, ’24",
    logo: "/logos/ucsd-icon.jpg",
  },
];
