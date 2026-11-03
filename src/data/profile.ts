import type { Art } from "@/components/ProjectArt";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  ChartColumn,
  CodeXml,
  Database,
  Eye,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Ayush Ranjan",
  role: "AI / ML Engineer",
  location: "Darbhanga, Bihar, India",
  email: "ayushranjan94300@gmail.com",
  phone: "+91 91224 92377",
  github: "https://github.com/ayushranjan828",
  linkedin: "https://www.linkedin.com/in/ayush-ranjan",
  headline: "I build AI that ships.",
  intro:
    "I train deep learning models for vision and language, and design RAG systems and AI agents that give grounded answers, know when to say \"I don't know\", and run reliably in production.",
  about: [
    "B.Tech Computer Science & Engineering graduate (2026) and AI/ML Engineer building end-to-end Generative AI applications, RAG pipelines and autonomous AI agents.",
    "Skilled in LLM integration, prompt engineering, vector databases and MLOps, with a strong foundation in Python, machine learning, deep learning and NLP. I deploy scalable AI solutions with FastAPI and LangGraph, and turn business requirements into production-ready, responsible AI systems.",
  ],
};

export const focus: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Database, title: "Grounded RAG", text: "Hybrid retrieval, reranking and citations, so answers come from the source, not the model's imagination." },
  { icon: Bot, title: "Reliable agents", text: "Multi-step LangGraph agents with state, tools, bounded loops and a human in the loop." },
  { icon: ShieldCheck, title: "Safe by design", text: "Guardrails, evals and relevance gates that let a system say \"I don't know\" instead of guessing." },
];

export const skills: { icon: LucideIcon; title: string; blurb: string; items: string[] }[] = [
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    blurb: "Turning foundation models into dependable product features.",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "Context Engineering",
      "Structured Outputs",
      "Function / Tool Calling",
      "LLM Gateways",
      "Model Routing & Fallbacks",
      "LLM Cost Optimization",
      "Semantic Caching",
    ],
  },
  {
    icon: Workflow,
    title: "Agents & Orchestration",
    blurb: "Multi-step agents with state, tools and a human in the loop.",
    items: [
      "LangGraph",
      "LangChain",
      "AI Agents",
      "Multi-step Reasoning",
      "Human-in-the-Loop",
      "Harness Engineering",
      "State & Memory",
      "Multi-agent Workflows",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    icon: Database,
    title: "RAG & Retrieval",
    blurb: "Retrieval quality decides answer quality long before the prompt does.",
    items: [
      "RAG Pipelines",
      "Vector Databases",
      "Embeddings",
      "Chunking Strategies",
      "Hybrid Search",
      "Re-ranking",
      "Document Loaders",
      "Grounded Answers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Guardrails, Evals & Safety",
    blurb: "Measuring and constraining model behaviour before and after release.",
    items: [
      "AI Guardrails",
      "Input / Output Validation",
      "Responsible AI",
      "Prompt-injection Awareness",
      "Evals",
      "LLM-as-Judge",
      "Tracing & Observability",
      "Regression Testing",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    blurb: "Models trained, benchmarked against a baseline and honestly evaluated.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "CNNs",
      "LSTMs / RNNs",
      "Transformers",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  {
    icon: Eye,
    title: "NLP & Computer Vision",
    blurb: "Language and image pipelines, from raw input to prediction.",
    items: [
      "Natural Language Processing",
      "Tokenization",
      "Text Classification",
      "Sequence Modelling",
      "Computer Vision",
      "Image Classification",
      "Data Augmentation",
      "OpenCV",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    blurb: "Typed, tested services that sit behind the models.",
    items: [
      "FastAPI",
      "REST API Design",
      "JWT Auth",
      "Pydantic",
      "Async Python",
      "SQL / SQLite",
      "Pytest",
      "Structured Logging",
    ],
  },
  {
    icon: ChartColumn,
    title: "Data Science & Analytics",
    blurb: "Exploration first, modelling second, communication always.",
    items: [
      "Data Analysis",
      "EDA",
      "Feature Engineering",
      "Statistical Modelling",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "Excel",
    ],
  },
  {
    icon: CodeXml,
    title: "Languages, DevOps & CS Core",
    blurb: "The fundamentals that keep everything else maintainable.",
    items: [
      "Python",
      "Java",
      "C++",
      "SQL",
      "Docker",
      "Git / GitHub",
      "CI/CD",
      "Linux",
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const experience = [
  {
    company: "LevelShift",
    role: "Trainee AI Engineer",
    period: "Jul 2026 — Present",
    location: "Chennai, India",
    points: [
      "Build RAG pipelines powering context-aware application workflows.",
      "Develop and deploy autonomous AI agents that automate business processes.",
      "Implement LLM cost-optimisation strategies to cut inference spend.",
    ],
  },
  {
    company: "Startcorn",
    role: "Machine Learning Engineer Intern",
    period: "Sep 2025 — Mar 2026",
    location: "Remote",
    points: [
      "Trained and evaluated ML and deep learning models for accuracy and reliability.",
      "Built RAG pipelines, multi-step AI agents and LLM-powered chatbots.",
      "Implemented AI guardrails for safer, more reliable deployed systems.",
    ],
  },
  {
    company: "Outlier AI",
    role: "Prompt Engineer",
    period: "Sep 2024 — Nov 2024",
    location: "Remote",
    points: [
      "Designed and evaluated 100+ LLM prompts for enterprise automation.",
      "Benchmarked LLM response quality across diverse NLP tasks.",
      "Built reusable templates that cut prompt iteration cycles by 40%.",
    ],
  },
];

export const projects: {
  icon: LucideIcon;
  title: string;
  tag: string;
  summary: string;
  highlights: string[];
  metric: string;
  stack: string[];
  flow: string[];
  art: Art;
}[] = [
  {
    icon: Network,
    title: "Learn AI Academy",
    tag: "Multi-agent system",
    summary:
      "Type a learning goal and a team of AI agents turns it into a curriculum, a roadmap and assignment questions, reviewed by an AI critic and a human before anything is saved.",
    highlights: [
      "Builder ↔ reviewer agent loop that reworks content until quality is met",
      "Human sign-off step; only human-approved content is saved",
      "Loops capped (3 agent revisions, 2 human rounds) to bound token cost; failures are rejected",
    ],
    metric: "Multi-agent + human review",
    stack: ["FastAPI", "Azure OpenAI", "RAG", "ChromaDB", "Pydantic"],
    flow: ["Requirement", "Builder agents", "Reviewer agent ≤3×", "Human review ≤2×", "Saved"],
    art: "agents",
  },
  {
    icon: ShieldCheck,
    title: "LegalSathi AI",
    tag: "RAG assistant",
    summary:
      "An Indian Labour & Corporate Law assistant that answers only from a knowledge base of law PDFs, and cites the page for every answer.",
    highlights: [
      "Query planner feeding hybrid search: dense vectors + BM25, fused with RRF",
      "Cross-encoder reranking for precise context",
      "Relevance gate, LLM self-check and citation check: it says so instead of guessing",
    ],
    metric: "Cited answers only",
    stack: ["FastAPI", "Azure OpenAI", "RAG", "Pinecone", "BM25", "OCR"],
    flow: ["Question", "Query planner", "Dense + BM25", "Rerank", "Gates", "Cited answer"],
    art: "rag",
  },
  {
    icon: Eye,
    title: "Garbage Image Classifier",
    tag: "Computer vision",
    summary:
      "A real-time waste classifier that looks through the camera and labels each item as organic or non-organic.",
    highlights: [
      "CNN trained on 3,000+ images with flips, rotation and zoom augmentation",
      "Reached 91% accuracy",
      "OpenCV captures live frames for real-time predictions",
    ],
    metric: "91% accuracy",
    stack: ["Python", "TensorFlow", "CNN", "OpenCV"],
    flow: ["Camera frame", "Preprocess", "CNN", "Organic / Non-organic"],
    art: "vision",
  },
  {
    icon: Brain,
    title: "Sentence Autocompletion",
    tag: "NLP · Deep learning",
    summary: "Predicts your next word as you type, powered by an RNN / LSTM language model.",
    highlights: [
      "Trained on 50k+ sentences after cleaning, tokenisation and padding",
      "Tuned with learning-rate scheduling and dropout",
      "Reached 87% next-word accuracy",
    ],
    metric: "87% accuracy",
    stack: ["Python", "RNN / LSTM", "TensorFlow", "NLP"],
    flow: ["Typed text", "Tokenise & pad", "LSTM", "Next word"],
    art: "text",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Lovely Professional University",
    period: "2022 — 2026",
  },
  {
    degree: "Senior Secondary (CBSE)",
    school: "Sarala Birla Public School, Ranchi",
    period: "2021",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
