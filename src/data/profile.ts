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


export const skills: { title: string; blurb: string; items: string[] }[] = [
  {
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
  title: string;
  blurb: string;
  metric: string;
  stack: string[];
  flow: string[];
}[] = [
  {
    title: "Learn AI Academy",
    blurb:
      "Users enter a learning requirement, and AI agents turn it into a curriculum, a roadmap and assignment questions. A dedicated reviewer agent critiques the output and sends it back to the builder agent for rework until quality is met. Approved content then goes to a human for sign-off, and only human-approved content is saved. To avoid infinite loops and control token cost, the agent review loop is capped at 3 revisions and human feedback at 2 rounds. Content that still fails is rejected.",
    metric: "Multi-agent + human review",
    stack: ["FastAPI", "Azure OpenAI", "RAG", "ChromaDB", "Pydantic"],
    flow: ["Requirement", "Builder agents", "Reviewer agent ≤3×", "Human review ≤2×", "Saved"],
  },
  {
    title: "Garbage Image Classifier",
    blurb:
      "Binary waste classifier that labels an item as organic or non-organic. A CNN trained on 3,000+ images after preprocessing and augmentation (flips, rotation, zoom) reached 91% accuracy. OpenCV captures live frames from the camera, so the model predicts in real time.",
    metric: "91% accuracy",
    stack: ["Python", "TensorFlow", "CNN", "OpenCV"],
    flow: ["Camera frame", "Preprocess", "CNN", "Organic / Non-organic"],
  },
  {
    title: "Sentence Autocompletion",
    blurb:
      "Predicts the next word as you type. An RNN/LSTM trained on a large text corpus (50k+ sentences) after NLP text processing: cleaning, tokenisation and padding. Tuned with learning-rate scheduling and dropout, it reached 87% next-word accuracy.",
    metric: "87% accuracy",
    stack: ["Python", "RNN / LSTM", "TensorFlow", "NLP"],
    flow: ["Typed text", "Tokenise & pad", "LSTM", "Next word"],
  },
  {
    title: "LegalSathi AI",
    blurb:
      "A Labour & Corporate Law assistant built on RAG. It answers only from a knowledge base of Indian labour-law PDFs and cites the page for every answer. A query planner feeds hybrid search (dense vectors + BM25, fused with RRF), and a cross-encoder reranks the results. If the documents don't cover a question, a relevance gate, an LLM self-check and a citation check make it say so instead of guessing.",
    metric: "Cited answers only",
    stack: ["FastAPI", "Azure OpenAI", "RAG", "Pinecone", "BM25", "OCR"],
    flow: ["Question", "Query planner", "Dense + BM25", "Rerank", "Gates", "Cited answer"],
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
];
