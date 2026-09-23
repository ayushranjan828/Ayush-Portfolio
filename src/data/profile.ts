import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Binary,
  Boxes,
  Braces,
  Brain,
  ChartSpline,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Gauge,
} from "lucide-react";

export const profile = {
  name: "Ayush Ranjan",
  firstName: "Ayush",
  role: "AI / ML Engineer",
  location: "Darbhanga, Bihar, India",
  email: "ayushranjan94300@gmail.com",
  phone: "+91 91224 92377",
  github: "https://github.com/ayushranjan828",
  linkedin: "https://www.linkedin.com/in/ayush-ranjan",
  available: "Open to AI/ML, Data Science & SDE roles",
  summary: [
    "B.Tech Computer Science graduate (2026) working as an AI Engineer. I sit where three disciplines meet: the modelling that makes a prediction useful, the analysis that proves it, and the software engineering that keeps it running.",
    "That means retrieval pipelines and multi-step agents, but equally the FastAPI services behind them, the evaluation that says whether a change helped, and the tests, containers and CI that get it to production.",
  ],
};

/* ------------------------------------------------------------------ *
 * Tracks — the same body of work, read through three hiring lenses.
 * ------------------------------------------------------------------ */

export type TrackId = "ai" | "ds" | "sde";

export type Track = {
  id: TrackId;
  label: string;
  short: string;
  icon: LucideIcon;
  typed: string[];
  headline: string;
  strengths: string[];
  /** Skill group ids, most relevant first. The first three are badged "Core". */
  skillOrder: string[];
  aboutTitle: string;
  focusEyebrow: string;
  focusLead: string;
  /** Floating code chips by the portrait; text before "|" takes the accent colour. */
  chips: [string, string];
};

export const tracks: Track[] = [
  {
    id: "ai",
    label: "AI / ML Engineer",
    short: "AI / ML",
    icon: Sparkles,
    typed: ["AI / ML Engineer", "Generative AI Developer", "RAG & Agent Builder"],
    headline:
      "I build generative AI systems that actually ship — RAG pipelines, autonomous agents, and the FastAPI services that hold them together.",
    strengths: [
      "RAG pipelines and multi-step agents on LangGraph",
      "LLM integration, prompt engineering and tool calling",
      "Guardrails, evals and cost-aware inference",
    ],
    chips: ["agent|.run()", "retriever.|topK=5"],
    skillOrder: ["genai", "agents", "ml", "backend", "ds", "cloud", "swe", "langs"],
    aboutTitle: "survive production",
    focusEyebrow: "Focus",
    focusLead:
      "The gap between a working prompt and a dependable product is mostly engineering. These are the areas I keep pushing on.",
  },
  {
    id: "ds",
    label: "Data Scientist",
    short: "Data Science",
    icon: ChartSpline,
    typed: ["Data Scientist", "ML Engineer", "Applied Researcher"],
    headline:
      "I turn messy data into models that hold up — trained, measured against a baseline, and explained in terms someone can act on.",
    strengths: [
      "Deep learning and classical ML: CNNs, LSTMs, scikit-learn",
      "EDA, feature engineering and statistical modelling in Python",
      "Rigorous evaluation — baselines, benchmarks, honest metrics",
    ],
    chips: ["df|.describe()", "val_acc|=0.91"],
    skillOrder: ["ds", "ml", "langs", "genai", "cloud", "backend", "agents", "swe"],
    aboutTitle: "stand up to scrutiny",
    focusEyebrow: "Method",
    focusLead:
      "A model is only worth what its evaluation says it is. This is the discipline I bring to the analysis side of the work.",
  },
  {
    id: "sde",
    label: "Software Engineer",
    short: "SDE",
    icon: Code2,
    typed: ["Software Engineer", "Backend Developer", "Python Engineer"],
    headline:
      "I write backend services that hold up under load — typed APIs, real persistence, tests that catch regressions, and containers that deploy the same everywhere.",
    strengths: [
      "REST APIs in FastAPI with JWT auth and Pydantic validation",
      "Python, Java and C++ on a CSE foundation of DSA, OOP and DBMS",
      "Pytest, Docker, Git and CI/CD as part of the default workflow",
    ],
    chips: ["@app|.post()", "pytest|: 24 passed"],
    skillOrder: ["backend", "swe", "langs", "cloud", "genai", "ml", "agents", "ds"],
    aboutTitle: "survive production",
    focusEyebrow: "Practice",
    focusLead:
      "Most of what makes software good is invisible from the outside. These are the habits I hold myself to.",
  },
];

export const defaultTrack: TrackId = "ai";

/* ------------------------------------------------------------------ */

export type Stat = { value: string; label: string; hint: string };

export const stats: Stat[] = [
  { value: "3", label: "Engineering roles", hint: "Prompt engineering → ML → applied GenAI" },
  { value: "100+", label: "Prompts engineered", hint: "Benchmarked across enterprise NLP tasks" },
  { value: "40%", label: "Faster iteration", hint: "Via a reusable prompt template library" },
  { value: "91%", label: "Model accuracy", hint: "CNN waste classifier, 3k+ images" },
];

export type SkillGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  items: string[];
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "genai",
    title: "Generative AI",
    icon: Sparkles,
    accent: "var(--accent)",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Vector Databases",
      "MCP",
      "Context Engineering",
      "LLM Cost Optimization",
    ],
  },
  {
    id: "agents",
    title: "Agents & Orchestration",
    icon: Workflow,
    accent: "var(--accent-2)",
    items: [
      "LangGraph",
      "LangChain",
      "Tool Calling",
      "Multi-step Reasoning",
      "Agent Harness Design",
      "Evals & LLM-as-Judge",
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: Brain,
    accent: "var(--accent-3)",
    items: [
      "Deep Learning",
      "Neural Networks",
      "CNNs",
      "LSTMs / RNNs",
      "NLP",
      "Computer Vision",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  {
    id: "ds",
    title: "Data Science & Analytics",
    icon: ChartSpline,
    accent: "var(--accent)",
    items: [
      "Data Analysis",
      "Exploratory Data Analysis",
      "Statistical Modeling",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Data Visualization",
      "Tableau",
      "Excel",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    accent: "var(--accent-2)",
    items: [
      "FastAPI",
      "REST API Design",
      "JWT Auth & Authorization",
      "Pydantic Validation",
      "Pytest",
      "SQL / SQLite",
      "Structured Logging",
    ],
  },
  {
    id: "swe",
    title: "CS Fundamentals",
    icon: Binary,
    accent: "var(--accent-3)",
    note: "B.Tech CSE coursework",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Design",
      "Testing & Debugging",
      "Code Review",
    ],
  },
  {
    id: "langs",
    title: "Languages & Libraries",
    icon: Braces,
    accent: "var(--accent)",
    items: ["Python", "Java", "C++", "SQL", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    id: "cloud",
    title: "Cloud, MLOps & Tools",
    icon: Cloud,
    accent: "var(--accent-2)",
    items: ["Docker", "Git / GitHub", "CI/CD Pipelines", "Linux", "VS Code"],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "LevelShift",
    role: "Trainee AI Engineer",
    location: "Chennai, India",
    period: "Jul 2026 — Present",
    current: true,
    points: [
      "Build Retrieval-Augmented Generation pipelines that power intelligent, context-aware application workflows.",
      "Develop and deploy autonomous AI agents that automate business processes and decision-making tasks.",
      "Integrate third-party and internal APIs into production systems to extend functionality and streamline data flow.",
      "Implement LLM cost optimization strategies, improving operational efficiency and reducing inference spend.",
    ],
    stack: ["RAG", "AI Agents", "API Integration", "LLMOps"],
  },
  {
    company: "Startcorn",
    role: "Machine Learning Engineer Intern",
    location: "India · Remote",
    period: "Sep 2025 — Mar 2026",
    points: [
      "Trained and evaluated ML and deep learning models to improve accuracy, performance and reliability.",
      "Built RAG pipelines for intelligent, context-aware AI applications.",
      "Developed AI agents capable of multi-step reasoning and interacting with external tools and systems.",
      "Implemented AI guardrails to improve the safety, reliability and responsible use of deployed systems.",
      "Designed intelligent chatbots using machine learning, generative AI and large language models.",
    ],
    stack: ["LangChain", "TensorFlow", "Guardrails", "Chatbots"],
  },
  {
    company: "Outlier AI",
    role: "Prompt Engineer",
    location: "Remote",
    period: "Sep 2024 — Nov 2024",
    points: [
      "Designed, evaluated and refined 100+ LLM prompts to improve relevance, factual accuracy and response quality for enterprise automation workflows.",
      "Ran systematic benchmarking and quality evaluation of LLM responses across diverse NLP tasks.",
      "Built reusable prompt templates adopted across multiple enterprise projects, cutting prompt iteration cycles by 40%.",
    ],
    stack: ["Prompt Engineering", "Benchmarking", "Evaluation"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  points: string[];
  stack: string[];
  icon: LucideIcon;
  metric: string;
  /** How the same project reads to each kind of interviewer. */
  lens: Record<TrackId, string>;
};

export const projects: Project[] = [
  {
    title: "AI Agent for Daily Water Intake Tracking",
    blurb:
      "An LLM-backed hydration agent that logs intake, remembers history and returns personalised, reasoned insights.",
    points: [
      "FastAPI service wired to LangChain and Mistral AI for real-time, LLM-generated analysis.",
      "REST endpoints for logging intake, retrieving user history and generating on-demand insights.",
      "SQLite persistence plus structured logging for monitoring, with prompts tuned for recommendation quality.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "Mistral AI", "SQLite"],
    icon: Network,
    metric: "End-to-end agent",
    lens: {
      ai: "An agent loop with memory and tools — the LLM reasons over stored history rather than a single prompt.",
      ds: "A longitudinal dataset per user: intake logged over time, then summarised into trends and personalised recommendations.",
      sde: "A real backend: REST resource design, a persistence layer, request validation and structured logs for monitoring.",
    },
  },
  {
    title: "Garbage Image Classifier",
    blurb: "A convolutional network that sorts waste into categories from a live camera feed.",
    points: [
      "CNN reaching 91% classification accuracy across 3,000+ labelled waste images.",
      "Data augmentation — flips, rotation, zoom — to improve robustness and generalisation.",
      "Real-time camera simulation pipeline in OpenCV for live inference demos.",
    ],
    stack: ["Python", "TensorFlow", "CNN", "OpenCV"],
    icon: Boxes,
    metric: "91% accuracy",
    lens: {
      ai: "A vision model deployed behind an inference loop rather than left in a notebook.",
      ds: "A 3,000-image labelled dataset, augmentation to fight overfitting, and accuracy measured on held-out data.",
      sde: "A streaming inference pipeline — frames in, predictions out, at camera frame rate.",
    },
  },
  {
    title: "Sentence Autocompletion",
    blurb:
      "Next-word prediction trained on 50k+ sentences, built as a full NLP pipeline from tokenisation to tuning.",
    points: [
      "LSTM sequence model hitting 87% next-word prediction accuracy.",
      "End-to-end pipeline: preprocessing, tokenisation, padding, training and hyperparameter tuning.",
      "Performance tuned with learning-rate scheduling and dropout regularisation.",
    ],
    stack: ["Python", "LSTM", "TensorFlow", "NLP"],
    icon: Database,
    metric: "87% accuracy",
    lens: {
      ai: "Sequence modelling from scratch — the mechanics underneath every language model I now work with.",
      ds: "A reproducible training pipeline with deliberate regularisation and learning-rate scheduling, scored on held-out text.",
      sde: "A deterministic preprocessing pipeline: tokenisation, padding and batching built to run the same way every time.",
    },
  },
];

export type Focus = { title: string; body: string; icon: LucideIcon };

export const focusByTrack: Record<TrackId, Focus[]> = {
  ai: [
    {
      title: "MCP server authoring",
      body: "Exposing internal tools and data to models through the Model Context Protocol, so agents get typed, permissioned capabilities instead of brittle glue code.",
      icon: Network,
    },
    {
      title: "Agent harness engineering",
      body: "The scaffolding around the model — tool routing, retries, state, memory and termination conditions. Most agent failures are harness failures, not model failures.",
      icon: Workflow,
    },
    {
      title: "Evals & observability",
      body: "Golden datasets, LLM-as-judge scoring and regression suites in CI, so prompt changes get measured instead of guessed at.",
      icon: Gauge,
    },
    {
      title: "Guardrails & responsible AI",
      body: "Input and output validation, grounding checks and refusal policies that keep generative features safe under real traffic.",
      icon: ShieldCheck,
    },
    {
      title: "Retrieval quality",
      body: "Chunking strategy, hybrid search and re-ranking — the parts of RAG that decide answer quality long before the prompt does.",
      icon: Database,
    },
    {
      title: "Cost-aware inference",
      body: "Caching, model routing and token budgets, so a generative feature stays affordable as usage grows.",
      icon: GitBranch,
    },
  ],
  ds: [
    {
      title: "Exploration before modelling",
      body: "Distributions, missingness, leakage and class balance first. Most of a model's ceiling is set by what the data can actually support.",
      icon: ChartSpline,
    },
    {
      title: "Feature engineering",
      body: "Encoding, scaling and transformation chosen for the model at hand — and for image and text work, augmentation that widens the data rather than copying it.",
      icon: Layers,
    },
    {
      title: "Honest evaluation",
      body: "A dumb baseline first, held-out data always, and the metric that matches the cost of being wrong rather than the one that flatters.",
      icon: Gauge,
    },
    {
      title: "Controlled experiments",
      body: "One variable at a time, tracked runs, and tuning — learning-rate schedules, dropout, regularisation — driven by validation curves rather than hunches.",
      icon: FlaskConical,
    },
    {
      title: "Reproducibility",
      body: "Seeded runs, pinned dependencies and scripted pipelines, so a result from last month still reproduces this month.",
      icon: GitBranch,
    },
    {
      title: "Communicating results",
      body: "Charts and write-ups aimed at the decision, with the uncertainty stated plainly. An unexplained model does not get deployed.",
      icon: Activity,
    },
  ],
  sde: [
    {
      title: "API design",
      body: "Resources modelled properly, typed request and response schemas via Pydantic, predictable status codes and errors a client can act on.",
      icon: Server,
    },
    {
      title: "Testing strategy",
      body: "Pytest around the logic that matters, fixtures instead of copy-paste setup, and a failing test written before the fix.",
      icon: TestTube2,
    },
    {
      title: "Data structures & algorithms",
      body: "Choosing the structure that makes the operation cheap, and being able to say why a solution is O(n log n) rather than O(n²).",
      icon: Binary,
    },
    {
      title: "Databases",
      body: "Schema design, indexing and query shape — the difference between a lookup that scales and one that quietly scans the table.",
      icon: Database,
    },
    {
      title: "Containers & CI/CD",
      body: "Docker so it runs identically everywhere, and pipelines that lint, test and build on every push rather than on request.",
      icon: GitBranch,
    },
    {
      title: "Observability & debugging",
      body: "Structured logs with enough context to reconstruct a failure, and the patience to reproduce a bug before changing code.",
      icon: Activity,
    },
  ],
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Jul 2022 — Jun 2026",
  },
  {
    degree: "Senior Secondary (CBSE — Class 12)",
    school: "Sarala Birla Public School",
    location: "Ranchi, Jharkhand",
    period: "2021",
  },
];

export const marquee = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "FastAPI",
  "REST APIs",
  "LangChain",
  "LangGraph",
  "RAG",
  "MCP",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Docker",
  "CI/CD",
  "DSA",
  "System Design",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];
