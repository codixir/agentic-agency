export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  engagementLength: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  metrics: string[];
  stack: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-intake-agent",
    title: "Protected-health agentic intake",
    industry: "Healthcare",
    engagementLength: "10 weeks",
    summary:
      "Designed an intake co-pilot that orchestrates eligibility checks, consent capture, and secure note generation across HIPAA-governed APIs.",
    challenge:
      "Nurses were juggling four legacy systems, manual permissions, and time-consuming note templates before patients were even seen.",
    approach: [
      "Modeled clinical steps with guardrails that map to IAM scopes and audit events.",
      "Implemented retrieval policies that select between first-party data marts and vector search based on PHI flags.",
      "Instrumented task-level traces feeding an observability lake backed by BigQuery.",
    ],
    outcomes: [
      "Playbooks reduced onboarding effort for each new line of business.",
      "Cost alerts tuned fine-tuned model usage based on shift volume.",
      "Clinicians received explainable summaries routed to EHR inboxes.",
    ],
    metrics: [
      "~30–50% faster intake packet creation",
      "~40–60% reduction in idle time between queues",
      "Increased adoption and repeat usage"
    ],
    stack: ["Next.js", "LangChain", "Vertex AI", "Workflows"],
    services: [
      "Agentic Application Development",
      "LLM Security & IAM",
      "LLM Observability",
    ],
  },
  {
    slug: "finserv-rag-control",
    title: "Controlled RAG for financial research",
    industry: "Financial Services",
    engagementLength: "8 weeks",
    summary:
      "Implemented a retrieval governance layer that balances vector search, classical search, and structured data when composing research briefs.",
    challenge:
      "Analysts needed faster answers but compliance teams required deterministic audit trails and revocable entitlements.",
    approach: [
      "Authored evaluation harnesses that score retrieval sets weekly against golden datasets.",
      "Anchored tool choice policies to IAM attributes stored in the broker.",
      "Versioned embeddings alongside corpus snapshots for reproducibility.",
    ],
    outcomes: [
      "Research teams trusted the summaries because sources and IAM context shipped with each answer.",
      "Compliance gained exportable audit packs for regulator reviews.",
    ],
    metrics: [
      "~35–45% faster brief assembly",
      "~25–35% reduction in manual fact checks",
      "Increased adoption and repeat usage"
    ],
    stack: ["Next.js", "OpenSearch", "AWS Kendra", "Step Functions"],
    services: [
      "Knowledge & RAG Systems",
      "LLM Security & IAM",
      "Architecture & Delivery Rescue",
    ],
  },
  {
    slug: "media-ops-orchestrator",
    title: "Agentic operations for a media platform",
    industry: "Media",
    engagementLength: "6 weeks",
    summary:
      "Built an async operations layer that triages inbound tasks, enriches metadata, and hands off confident actions to human reviewers.",
    challenge:
      "An internal tools team faced escalating ticket queues because prior experiments failed to integrate with change management workflows.",
    approach: [
      "Modeled orchestration plans using event-sourced state machines with deterministic retries.",
      "Wired observability spans from the agent runtime into the company's Grafana stack.",
      "Wrapped every tool call with budget tracking and break-glass roles.",
    ],
    outcomes: [
      "On-call engineers received structured diagnostics with each alert.",
      "Leaders could prove ROI through cost-per-action dashboards.",
    ],
    metrics: [
      "~30–50% reduction in manual queue touch time",
      "~20–30% decrease in after-hours pages",
      "Increased adoption and repeat usage"
    ],
    stack: ["Next.js", "Temporal", "OpenAI", "Datadog"],
    services: [
      "Agentic Application Development",
      "Cloud Architecture for AI",
      "LLM Observability",
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);

export const getCaseStudySlugs = () => caseStudies.map((study) => study.slug);
