/**
 * Single source of truth for all site content.
 * Curated from résumé + verified GitHub activity. No invented facts.
 */

export const profile = {
  name: "Yue (Melody) Yin",
  shortName: "Melody Yin",
  role: "Software Engineer · AI Infrastructure & Distributed Systems",
  tagline:
    "I build scalable backend and AI systems across cloud infrastructure, distributed serving, LLM inference, and observability.",
  location: "United States · No sponsorship required",
  email: "melodyyin31@gmail.com",
  github: "https://github.com/MelodyyyYin",
  linkedin: "https://www.linkedin.com/in/yue-yin-ucsd2025/",
  resume: "/Melody_Yin_Resume.pdf",
  photo: "/melody.jpg",
};

export type NewsItem = {
  date: string;
  text: string;
  tag: string;
  highlight?: boolean;
};

export const news: NewsItem[] = [
  {
    date: "Fall 2026",
    text: "Joining Amazon as a Software Engineering Intern (SDE).",
    tag: "Incoming",
    highlight: true,
  },
  {
    date: "Jun 2026",
    text: "Started as a Software Engineering Intern at ServiceNow (Santa Clara), working on cloud infrastructure and observability.",
    tag: "New role",
  },
  {
    date: "Jun 2026",
    text: "Began contributing to sglang-omni, an open-source serving framework for multimodal LLMs.",
    tag: "Open source",
  },
  {
    date: "Fall 2025",
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
  paragraphs: [
    "My work spans LLM serving, distributed systems, cloud infrastructure, backend platforms, and performance-oriented engineering. I care about systems that stay fast and correct under load — the layer that makes AI applications production-ready.",
    "I'm an MSECE student at Carnegie Mellon University (graduating May 2027), and I graduated from UC San Diego with a double major in Mathematics–Computer Science and Cognitive Science (Machine Learning specialization). Across internships and open source, I've worked on distributed serving, gRPC backends, caching and consensus, RAG pipelines, and CI/benchmarking for multimodal LLM inference.",
  ],
  focus: [
    "AI infrastructure & LLM serving",
    "Distributed systems & consensus",
    "Cloud infrastructure & backend platforms",
    "Observability, reliability & performance",
  ],
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
};

export const experience: Experience[] = [
  {
    company: "ServiceNow",
    role: "Software Engineering Intern",
    // TODO(Melody): refine summary/bullets/stack as the internship progresses.
    dates: "Jun 2026 – Present",
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
    company: "sglang-omni",
    role: "Open Source Contributor",
    dates: "Jun 2026 – Present",
    current: true,
    summary:
      "Contribute to sglang-omni, a high-performance serving framework for multimodal LLMs.",
    bullets: [
      "Contribute to sglang-omni — serving reliability, CI, and inference benchmarking for multimodal LLM workloads.",
    ],
    stack: ["LLM Serving", "Python", "CI/CD", "Benchmarking"],
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

export const openSource = {
  intro:
    "I contribute to sglang-omni — a high-performance, multi-stage pipeline framework for serving omni / multimodal LLMs. My work focuses on serving reliability, CI, and inference benchmarking.",
  upstream: "https://github.com/sgl-project/sglang-omni",
  repo: "https://github.com/MelodyyyYin/sglang-omni",
  areas: [
    "Serving reliability",
    "CI & benchmarking",
    "Multimodal LLM inference",
    "Developer tooling",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "Java", "Go", "C++", "C", "JavaScript", "TypeScript"],
  },
  {
    group: "AI / LLM Systems",
    items: [
      "LLM serving (sglang-omni)",
      "Inference benchmarking",
      "RAG",
      "LangChain",
      "Embeddings",
      "Vector DBs (Qdrant)",
      "FastAPI",
      "WebSockets",
    ],
  },
  {
    group: "Backend / Distributed Systems",
    items: [
      "gRPC",
      "Protobuf",
      "Netty",
      "ZooKeeper",
      "Raft consensus",
      "RocksDB",
      "Kafka",
      "RocketMQ",
      "RabbitMQ",
      "Caching",
      "Concurrency",
      "Spring Boot / Cloud",
    ],
  },
  {
    group: "Cloud / Infrastructure",
    items: [
      "Docker",
      "Docker Swarm",
      "Kubernetes",
      "AWS (EC2 · S3 · Lambda)",
      "Nginx",
      "Jenkins",
      "CI/CD",
      "Linux",
      "Shell",
      "Git",
    ],
  },
  {
    group: "Data / Storage",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Pandas",
      "NumPy",
    ],
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
    dates: "Expected May 2027",
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
