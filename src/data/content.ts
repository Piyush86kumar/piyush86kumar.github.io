// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — single source of truth.
// Edit this file to update copy anywhere on the site. No component below
// this line needs to change for routine content updates.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Piyush Kumar Singh',
  initials: 'PK',
  role: 'AI Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'piyush86kumar@gmail.com',
  phone: '+91 83604 05438',
  links: {
    github: 'https://github.com/Piyush86kumar',
    linkedin: 'https://linkedin.com/in/piyushkumar86',
    huggingface: 'https://huggingface.co/Piyush86',
  },
  resumeFile: '/resume.pdf',
}

export const heroStats = [
  { value: '5+', label: 'yrs professional experience' },
  { value: '2', label: 'yrs hands-on AI / ML engineering' },
  { value: '25–30%', label: 'downtime cut in production' },
]

export const telemetryLines = [
  '[INFO] RAG query resolved · gemini-2.5-flash · 214ms',
  '[INFO] anomaly score computed · equipment #14 · risk 0.82',
  '[INFO] vector search · faiss · top_k=6 · 38ms',
  '[WARN] TPM guard triggered · backoff 1.6s · retry ok',
  '[INFO] inference API · /predict · 200 · 91ms',
  '[INFO] chunk size 2500 · retrieval quality maintained',
  '[INFO] early-warning signal issued · lead time 36h',
]

export const about = {
  eyebrow: 'About',
  heading: 'From selling AI systems to building them.',
  paragraphs: [
    'I spent three years as a pre-sales engineer, in rooms with enterprise stakeholders, scoping GCP data and AI platforms worth $250K–$2M for clients across the US and LATAM. I got fluent in what businesses actually need from an AI system before I ever trained a model.',
    'For the past two years I have been the one building it — production ML for industrial predictive maintenance, agentic RAG pipelines, and fine-tuned generative models, taken from a notebook to something a maintenance team or an end user actually depends on.',
    'That combination is the point: I write the retry logic and tune the chunk size, but I also know why a stakeholder needs a 36-hour lead time instead of a 4-hour one. Most portfolios show tools. I would rather show you what the tools were for.',
  ],
  signals: [
    { k: 'Now', v: 'ML Engineer @ VAMS Mechatronica' },
    { k: 'Before', v: 'Senior Sales Engineer @ Quantiphi' },
    { k: 'Certified', v: 'GCP · OCI AI Foundations' },
    { k: 'Based in', v: 'Pune, India' },
  ],
}

export type Project = {
  slug: string
  name: string
  tagline: string
  metric: { value: string; label: string }
  description: string
  bullets: string[]
  stack: string[]
  links: { demo?: string; code?: string; report?: string }
  kind: 'RAG' | 'ML' | 'Data' | 'GenAI'
}

export const projects: Project[] = [
  {
    slug: 'pdf-chatbot',
    name: 'PDF Chatbot — Agentic RAG System',
    tagline: 'Retrieval exposed as an agent tool, not a fixed pipeline',
    metric: { value: '40%', label: 'lower API cost per query' },
    description:
      'An agentic retrieval-augmented generation system where the LLM decides when to fetch context, rather than retrieving on every query by default.',
    bullets: [
      'Built with LangChain + Gemini 2.5 Flash + FAISS, with retrieval exposed as a LangChain agent tool',
      'Engineered TPM-aware rate limiting and 429 retry with exponential backoff for reliability under load',
      'Optimized chunk size from 1,500 → 2,500 characters, cutting API consumption 40% with no loss in retrieval quality',
      'Deployed on HuggingFace Spaces via Docker — public, source-grounded PDF Q&A',
    ],
    stack: ['LangChain', 'Gemini 2.5 Flash', 'FAISS', 'Streamlit', 'Docker', 'HuggingFace Spaces'],
    links: { demo: 'https://huggingface.co/Piyush86' },
    kind: 'RAG',
  },
  {
    slug: 'predictive-maintenance',
    name: 'Industrial Predictive Maintenance',
    tagline: 'Multivariate sensor data → 36-hour early warnings',
    metric: { value: '25–30%', label: 'reduction in unplanned downtime' },
    description:
      'Anomaly detection and risk scoring for industrial equipment, trained on vibration, temperature, current, and RPM sensor streams.',
    bullets: [
      'Ran EDA, cleaning, and feature engineering on multivariate time-series sensor data',
      'Trained and evaluated Isolation Forest and XGBoost models for equipment risk scoring',
      'Contributed to a ~25–30% reduction in unplanned downtime across pilot use cases',
      'Built a FastAPI inference service surfacing predictions to maintenance teams 24–48h ahead of failure',
    ],
    stack: ['Python', 'XGBoost', 'Isolation Forest', 'FastAPI', 'Pandas'],
    links: {},
    kind: 'ML',
  },
  {
    slug: 'sd-lora-finetune',
    name: 'Stable Diffusion 1.5 — LoRA Fine-tuning',
    tagline: 'Consistent character generation via targeted fine-tuning',
    metric: { value: 'LoRA', label: 'parameter-efficient fine-tune' },
    description:
      'Fine-tuned Stable Diffusion 1.5 with LoRA for consistent character generation, from dataset curation through evaluation.',
    bullets: [
      'Curated, preprocessed, and augmented a training dataset for character consistency',
      'Trained LoRA weights with KohyaSS on top of SD 1.5',
      'Built ComfyUI workflows for controlled generation and evaluated consistency across prompt variations',
    ],
    stack: ['Stable Diffusion 1.5', 'LoRA', 'KohyaSS', 'ComfyUI'],
    links: {},
    kind: 'GenAI',
  },
  {
    slug: 'vlrgg-scraper',
    name: 'VLR.gg Esports Data Pipeline',
    tagline: 'A scraper, an analysis, and a public dataset',
    metric: { value: '1,600+', label: 'dataset downloads · 60+ upvotes' },
    description:
      'An end-to-end data pipeline: a hybrid scraper for Valorant esports data, feeding an EDA and modeling pass that held up against real tournament outcomes.',
    bullets: [
      'Hybrid scraping architecture (BeautifulSoup4 + Selenium) coordinating 6 modules across a central orchestrator',
      'Streamlit interface for scrape → validate → export, with real-time progress tracking',
      'Composite player-performance score across 6 weighted metrics aligned with final tournament standings',
      'Quantified ADR–ACS correlation at 0.96; pistol-round control predicted map wins 90% vs 10%',
      'Published 9 datasets on Kaggle — 1,600+ downloads, 60+ upvotes',
    ],
    stack: ['Python', 'Selenium', 'BeautifulSoup4', 'Pandas', 'Streamlit'],
    links: { code: 'https://github.com/Piyush86kumar' },
    kind: 'Data',
  },
]

export type ExperienceEntry = {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Machine Learning Engineer',
    org: 'VAMS Mechatronica Pvt. Ltd.',
    location: 'Ludhiana, Punjab',
    period: 'Aug 2024 — Present',
    bullets: [
      'Built ML models for predictive maintenance across industrial environments using multivariate sensor data (vibration, temperature, current, RPM)',
      'Ran EDA, cleaning, and feature engineering on time-series data to improve model training quality',
      'Trained Isolation Forest and XGBoost models for risk scoring — contributing to a ~25–30% reduction in unplanned downtime in pilot use cases',
      'Built a FastAPI inference API delivering early-warning signals (~24–48h ahead) to internal dashboards',
    ],
  },
  {
    role: 'Senior Sales Engineer',
    org: 'Quantiphi Analytics',
    location: 'Bangalore, Karnataka',
    period: 'Apr 2021 — Jul 2024',
    bullets: [
      'Owned pre-sales for GCP cloud migration and data modernization deals — $250K–$2M — across 20+ enterprise clients in US Central and LATAM',
      'Ran requirement gathering, solution presentations, and technical scoping, translating architecture decisions into business value',
      'Contributed to regional pre-sales portfolio growth from $7M to $20M over 3 years',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Generative AI & LLMs',
    items: ['LangChain', 'LangGraph', 'RAG', 'Agentic AI', 'Prompt Engineering', 'FAISS / Vector DBs', 'LoRA / PEFT'],
  },
  {
    label: 'Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'NLP', 'CNNs', 'RNNs', 'Transformers'],
  },
  {
    label: 'Machine Learning & Data',
    items: ['Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Model Training', 'Model Evaluation'],
  },
  {
    label: 'Backend & Deployment',
    items: ['Python', 'SQL', 'FastAPI', 'Docker', 'Streamlit', 'Git'],
  },
  {
    label: 'Cloud & Tools',
    items: ['GCP', 'HuggingFace', 'BeautifulSoup', 'Selenium'],
  },
]

export const certifications = [
  {
    name: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Feb 2026',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI — Andrew Ng',
    date: 'Jan 2025',
  },
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud Platform',
    date: 'Feb 2022',
  },
]

export const education = {
  degree: 'B.Tech — Computer Science',
  school: 'Lovely Professional University, Jalandhar',
  period: 'Aug 2017 — Jul 2021',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
