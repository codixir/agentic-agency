import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = buildMetadata(pageMeta.about);

const values = [
  {
    title: "Transparency",
    description:
      "Architecture memos, diagrams, and runbooks are shared early so stakeholders understand design choices and risk mitigations.",
  },
  {
    title: "Hands-on leadership",
    description:
      "You work directly with engineers who write the code, design the workflows, and manage the rollout.",
  },
  {
    title: "Elastic collaboration",
    description:
      "We expand the team only when the work calls for deep expertise in areas such as data engineering, infrastructure, or UX research.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="About"
        title="An agency built for accountable delivery"
        description="We built Ioxir because enterprises need more than demos. They need a partner that can carry agentic systems from executive whiteboards through production readiness."
      >
        <p className="text-base text-slate-300">
          Founded by Mike Lawson, a senior engineer with 9+ years of experience building enterprise-grade systems, we partner directly with product, operations, and security leads to make sure AI initiatives land. Mike led the launch of a generative AI application platform at SADA, introduced React and GraphQL delivery patterns at Flybits, and previously built high-throughput SMS onboarding flows for fintech teams. That background informs how we design every engagement: architecture-first, observability-rich, and focused on measurable impact.
        </p>
        <p className="mt-6 text-base text-slate-300">
          For larger engagements, we assemble specialized collaborators across AI engineering, cloud infrastructure, and UX. Each collaborator joins with clearly defined scopes and leaves when that scope is complete, keeping the team lean without sacrificing depth.
        </p>
      </Section>

      <Section title="How we show up">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      <Section title="Engagement snapshot">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <ul className="space-y-3">
            <li>Async by default with structured updates twice a week.</li>
            <li>Architecture artifacts delivered before the first sprint.</li>
            <li>Dedicated technical lead responsible for outcomes end-to-end.</li>
            <li>Access to our library of runbooks, evaluation harnesses, and IAM patterns.</li>
          </ul>
        </div>
      </Section>

      <CTA />
    </div>
  );
}
