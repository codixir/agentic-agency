import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { CTA } from "@/components/CTA";
import { caseStudies } from "@/lib/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";

import { AgenticPipeline } from "@/components/diagrams/AgenticPipeline";

export const metadata = buildMetadata(pageMeta.home);

const services = [
  {
    title: "Agentic Application Development",
    description:
      "Architect, build, and launch AI copilots that respect IAM guardrails, tool budgets, and real-world SLAs.",
  },
  {
    title: "Knowledge & RAG Systems",
    description:
      "Corpus ingest, retrieval evaluation, and orchestration logic that keeps answers trustworthy across domains.",
  },
  {
    title: "AI Features for SaaS Products",
    description:
      "Ship net-new product surfaces that embed agentic tasks directly into the workflows your users already trust.",
  },
  {
    title: "Cloud Architecture for AI",
    description:
      "Terraform-backed infrastructure, infra cost controls, and MLOps automation for compliant deployments.",
  },
  {
    title: "Architecture & Delivery Rescue",
    description:
      "Recover projects stuck in demo-land with architecture reviews, playbooks, and incremental release plans.",
  },
];

const failureModes = [
  {
    title: "Authentication and permissions are ignored",
    description: "Agents inherit a single API key, so entitlements vanish and the system cannot prove who saw which data.",
  },
  {
    title: "Retrieval quality isn’t evaluated",
    description: "No golden datasets, no replay harnesses, and no alerts when recall drifts from week to week.",
  },
  {
    title: "Tool usage lacks constraints",
    description: "Shared credentials and unbounded budgets turn proof-of-concepts into security incidents overnight.",
  },
  {
    title: "No observability or cost controls",
    description: "Executives see a demo but ops teams never get traces, dashboards, or cost guardrails to keep the system alive.",
  },
  {
    title: "Demos are built without production realities in mind",
    description: "There are no architecture docs, no milestone plans, and no async updates, so projects stall for months.",
  },
];

const workPrinciples = [
  {
    title: "Clear milestones",
    description: "Stakeholders sign off within days because we share docs, acceptance criteria, and demo sandboxes frequently.",
  },
  {
    title: "Architecture first",
    description: "Architecture docs precede build so IAM, tool choices, and data contracts are clear before sprint one.",
  },
  {
    title: "Incremental delivery",
    description: "We run measurable checkpoints across data, runtime, and UX to de-risk before launch reviews.",
  },
  {
    title: "Minimal meetings",
    description: "Async memos and Loom walkthroughs keep executives in the loop without bloated standing calls.",
  },
  {
    title: "Dedicated lead",
    description: "You partner with a senior technical lead who codes, architects, and narrates trade-offs through delivery.",
  },
  {
    title: "Elastic collaborators",
    description: "Specialists join only when needed, so you never pay for idle bandwidth.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <Section className="text-center">
        <p className="text-base text-slate-300">
          Led generative AI platforms at SADA, shipped React ecosystems at Flybits, and delivered regulated onboarding flows for fintech teams.
        </p>
        <p className="mt-4 text-base text-slate-300">
          That experience translates into engagements where IAM, observability, and delivery guardrails are present from day one.
        </p>
      </Section>
      <Section
        eyebrow="Blueprint"
        title="How agentic workstreams stay governed"
        description="Identity flows with the request, orchestration enforces guardrails, and tools execute with audit-ready context. The diagram below mirrors how we stage build-outs for new clients."
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <AgenticPipeline />
        </div>
      </Section>

      <Section id="why" title="Why most agentic apps fail" className="bg-white/5">
        <div className="grid gap-6 md:grid-cols-2">
          {failureModes.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <p className="mt-8 text-lg font-semibold text-white">
          We build launch plans grounded in IAM, evaluation, and guardrails so production never feels like an afterthought.
        </p>
      </Section>

      <Section id="services" eyebrow="Services" title="Where we create leverage">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Typical engagements: 4–12 weeks. Async-first by default.
        </p>
      </Section>

      <Section id="work" eyebrow="Selected work" title="Case studies rooted in outcomes">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyPreview key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="How we work"
        title="Async-first by default."
        description="We run cohesive delivery loops that respect your stakeholders’ time and the realities of enterprise governance."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {workPrinciples.map((principle) => (
            <Card key={principle.title} title={principle.title} description={principle.description} />
          ))}
        </div>
      </Section>

      <CTA />
    </div>
  );
}
