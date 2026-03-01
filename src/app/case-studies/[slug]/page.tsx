import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { caseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {};
  }
  return buildMetadata({
    title: `${study.title} case study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Case study"
        title={study.title}
        description={`${study.industry} • ${study.engagementLength}`}
      >
        <p className="text-base text-slate-300">{study.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
          {study.impacts.map((impact) => (
            <span key={impact} className="rounded-full border border-white/10 px-3 py-1">
              {impact}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Challenge">
        <Card title="What we walked into" description={study.challenge} />
      </Section>

      <Section title="Approach">
        <div className="grid gap-5 md:grid-cols-3">
          {study.approach.map((item) => (
            <Card key={item} description={item} />
          ))}
        </div>
      </Section>

      <Section title="Outcomes">
        <div className="grid gap-5 md:grid-cols-2">
          {study.outcomes.map((item) => (
            <Card key={item} description={item} />
          ))}
        </div>
      </Section>

      <Section title="Stack & Services">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Stack" description="Technologies and platforms that powered the engagement.">
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {study.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Card>
          <Card title="Services" description="Consulting tracks we led end-to-end.">
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {study.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <CTA />
    </div>
  );
}
