import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import { listPosts } from "@/lib/posts";
import { formatDate } from "@/lib/dates";
import { ObservabilityPipeline } from "@/components/diagrams/ObservabilityPipeline";

export const metadata = buildMetadata(pageMeta.observability);

const pillars = [
  {
    title: "Tracing",
    description:
      "Distributed traces across prompt construction, tool usage, and downstream APIs tie every action to a user, dataset, and IAM policy.",
  },
  {
    title: "Evaluation",
    description:
      "Automated checks measure quality, coverage, and regressions against golden datasets and production replay traffic.",
  },
  {
    title: "Incident response",
    description:
      "Runbooks, alert routes, and cost guardrails keep your team ready for outages, abuse, or surprising spend.",
  },
];

const instrumentation = [
  "Correlate traces from gateway to LLM runtime to external tools.",
  "Capture structured spans for prompt templates, retrieval sets, and tool arguments.",
  "Emit guardrail results and policy decisions so auditors can reproduce the call path.",
  "Expose dashboards that blend business KPIs with runtime metrics.",
];

export default async function LlmObservabilityPage() {
  const posts = await listPosts();
  const related = posts
    .filter((post) => post.frontmatter.tags.includes("observability"))
    .slice(0, 2);

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Reliability"
        title="LLM observability & reliability"
        description="We treat observability as a product surface. Engineers, operators, and executives should see the same narrative about how the agent behaves and what it costs."
      >
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <ObservabilityPipeline />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </Section>

      <Section title="Instrumentation highlights">
        <div className="grid gap-4">
          {instrumentation.map((line) => (
            <div key={line} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              {line}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recommended reading">
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/60"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {formatDate(post.frontmatter.date)}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{post.frontmatter.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{post.frontmatter.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </div>
  );
}
