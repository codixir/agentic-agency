import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = buildMetadata(pageMeta.caseStudies);

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Case studies"
        title="Anonymous, production-grade engagements"
        description="We protect client confidentiality while still sharing the technical decisions, guardrails, and measurable outcomes from our work."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.slug} title={study.title} description={study.summary}>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                {study.metrics.map((metric) => (
                  <span key={metric} className="rounded-full border border-white/10 px-3 py-1">
                    {metric}
                  </span>
                ))}
              </div>
              <Link href={`/case-studies/${study.slug}`} className="mt-5 inline-flex text-sm font-semibold text-sky-300">
                View build notes →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CTA />
    </div>
  );
}
