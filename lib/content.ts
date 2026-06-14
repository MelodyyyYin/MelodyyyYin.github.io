/**
 * Single source of truth for all site content.
 * Curated from résumé + verified GitHub activity. No invented facts.
 */

export const profile = {
  name: "Yue (Melody) Yin",
  shortName: "Melody Yin",
  role: "Software Engineer · AI Infrastructure & Distributed Systems",
  intro:
    "M.S. student at Carnegie Mellon, Software Engineering Intern at ServiceNow, and open-source contributor to SGLang-Omni.",
  tagline:
    "I build reliable infrastructure for AI systems — across cloud, distributed serving, LLM inference, and observability.",
  location: "United States · No sponsorship required",
  email: "melodyyin31@gmail.com",
  github: "https://github.com/MelodyyyYin",
  linkedin: "https://www.linkedin.com/in/yue-yin-ucsd2025/",
  resume: "/Melody_Yin_Resume.pdf",
  photo: "/melody.jpg",
  highlights: [
    { icon: "grad", label: "M.S. @ Carnegie Mellon" },
    { icon: "work", label: "SWE Intern @ ServiceNow" },
    { icon: "oss", label: "Open source @ SGLang-Omni" },
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
  lead: "I'm a software engineer focused on building reliable infrastructure for AI systems.",
  // **double asterisks** render as bold in the About section.
  paragraphs: [
    "My work spans **LLM serving**, **distributed systems**, **cloud infrastructure**, and **performance** — the layer that keeps AI applications fast, correct, and **production-ready** under load.",
    "I'm an **MSECE student at Carnegie Mellon** (grad. May 2027) and a **UC San Diego** alum (Math–CS & Cognitive Science, ML). I've built **gRPC backends**, **consensus & caching**, **RAG pipelines**, and **CI/benchmarking for multimodal LLM inference**.",
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
      "Contribute to SGLang-Omni, a high-performance serving framework for multimodal LLMs.",
    bullets: [
      "Contribute to SGLang-Omni — serving reliability, CI, and inference benchmarking for multimodal LLM workloads.",
      "Merged work includes a Qwen3-ASR CI gate with a concurrency-scaling benchmark and verified cookbook documentation for serving workflows.",
    ],
    stack: ["LLM Serving", "Python", "CI/CD", "Benchmarking"],
    link: {
      href: "https://github.com/MelodyyyYin/sglang-omni",
      label: "GitHub",
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
  {
    name: "Blackwell GEMM Kernel Optimization",
    tag: "GPU / Performance",
    blurb:
      "Low-level GEMM kernel optimization targeting NVIDIA's Blackwell architecture.",
    bullets: [
      "Explored GEMM kernel optimization for NVIDIA Blackwell GPUs, the matrix-multiply primitive underlying LLM inference and training.",
      "Focused on tiling, memory-hierarchy use, and throughput tuning for high-performance numerical kernels.",
    ],
    stack: ["CUDA", "GPU Kernels", "Performance"],
    link: {
      href: "https://github.com/MelodyyyYin/assignment-tirx-gemm",
      label: "GitHub",
    },
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
    items: ["Python", "Go", "Java", "C++", "TypeScript"],
  },
  {
    group: "AI / LLM Systems",
    emoji: "🤖",
    titleClass: "text-apricot-600",
    chipClass: "border-apricot-200 bg-apricot-50 text-apricot-600",
    items: [
      "LLM serving (SGLang-Omni)",
      "RAG",
      "LangChain",
      "Vector DBs (Qdrant)",
      "Inference benchmarking",
    ],
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
};

export const education: Education[] = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. in Electrical & Computer Engineering (MSECE)",
    dates: "Jan 2026 – May 2027",
    detail: "Current graduate student.",
  },
  {
    school: "University of California, San Diego",
    degree:
      "B.S. Mathematics–Computer Science · B.S. Cognitive Science (Machine Learning specialization)",
    dates: "Sep 2021 – Jun 2025",
    detail: "GPA 3.8 / 4.0 · Provost Honors (6×) · PACE Fellowships ’23, ’24",
  },
];
