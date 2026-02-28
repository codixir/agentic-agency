export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  canonical?: string;
};

export const pageMeta = {
  home: {
    title: "Production-ready agentic applications",
    description:
      "Ioxir is an AI engineering agency that delivers secure, observable, and scalable agentic applications for regulated industries.",
    path: "/",
  },
  agenticApps: {
    title: "Agentic Application Consulting",
    description:
      "Architecture-first consulting for agentic applications that integrate governance, guardrails, and scalable delivery roadmaps.",
    path: "/agentic-application-consulting",
  },
  ragSystems: {
    title: "Knowledge & RAG Systems",
    description:
      "Design and build retrieval-augmented generation systems with documented evaluation, cost controls, and enterprise IAM.",
    path: "/rag-systems",
  },
  observability: {
    title: "LLM Observability & Reliability",
    description:
      "Tracing, evaluation, and incident response patterns for agentic systems with measurable SLOs.",
    path: "/llm-observability",
  },
  security: {
    title: "LLM Security & IAM",
    description:
      "Identity-aware agent stacks that respect least privilege, governance, and audit requirements.",
    path: "/llm-security-iam",
  },
  caseStudies: {
    title: "Agentic Application Case Studies",
    description:
      "Anonymous yet detailed snapshots of production-grade AI work spanning healthcare, finance, education, and media.",
    path: "/case-studies",
  },
  about: {
    title: "About Ioxir",
    description:
      "Founded by Mike Lawson, Ioxir assembles specialized collaborators to ship agentic systems that survive real-world demands.",
    path: "/about",
  },
  contact: {
    title: "Contact Ioxir",
    description:
      "Book a strategy call and outline the agentic application you need to take live.",
    path: "/contact",
  },
  blog: {
    title: "Agentic Systems Blog",
    description:
      "Research-backed writing on agentic architectures, retrieval, IAM, observability, and delivery patterns.",
    path: "/blog",
  },
};

export type PageMetaKey = keyof typeof pageMeta;

export const getPageMeta = (key: PageMetaKey) => pageMeta[key];
