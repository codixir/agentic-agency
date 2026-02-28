import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import { listPosts } from "@/lib/posts";
import { formatDate } from "@/lib/dates";
import { AgenticPipeline } from "@/components/diagrams/AgenticPipeline";

export const metadata = buildMetadata(pageMeta.agenticApps);

const readinessLayers = [
  {
    title: "Process-first architecture",
    description:
      "We map every agent workflow to clear triggers, policies, IAM scopes, and escalation paths so governance teams understand how the system behaves before it ships.",
  },
  {
    title: "Guardrails & constraints",
    description:
      "Tool selection policies, budget enforcement, and context validation logic keep every action explainable and reversible.",
  },
  {
    title: "Observability from day zero",
    description:
      "Tracing, evaluation harnesses, and incident response hooks make it easy to measure accuracy, latency, and safety objectives.",
  },
];

const deliverables = [
  {
    title: "Architecture & delivery playbook",
    description: "System blueprint, IAM map, model/tool choices, and rollout plan covering the first 90 days of iteration.",
  },
  {
    title: "Working reference implementation",
    description: "A hardened agent runtime plus UI that handles the critical path workflows tied to your KPIs.",
  },
  {
    title: "Launch readiness packets",
    description: "Operational runbooks, dashboards, and escalation templates so your internal teams can own production.",
  },
];

export default async function AgenticApplicationConsultingPage() {
  const posts = await listPosts();
  const related = posts
    .filter((post) => post.frontmatter.tags.includes("agentic-apps"))
    .slice(0, 2);

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Consulting"
        title="Agentic applications that withstand production"
        description="We turn prototypes into governed products. By pairing architecture memos with iteration-ready engineering, leadership gets the confidence to launch while operators gain the observability and controls they need."
      >
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <AgenticPipeline />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {readinessLayers.map((layer) => (
            <Card key={layer.title} title={layer.title} description={layer.description} />
          ))}
        </div>
      </Section>

      <Section
        title="What we deliver"
        description="We operate as your elastic AI engineering team—authoring technical docs, building the runtime, and pairing with product owners to hit measurable adoption targets."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-300">
          Founded by Mike Lawson, a senior engineer with 9+ years of enterprise delivery experience, we assemble specialized collaborators across AI engineering, cloud infrastructure, and UX for larger moments when you need extra lift.
        </p>
      </Section>

      <Section
        title="Recommended reading"
        description="Detailed breakdowns of how we keep agentic systems reliable."
      >
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
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Start with an architecture review">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
          <p>
            Share the workflows you want to automate and we will respond with a documented architecture sketch—IAM flows, observability plan, and the delivery risks we see.
            It is the same process used while launching enterprise agent platforms at SADA and Flybits.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white">
              Book architecture review
            </Link>
            <Link href="/blog/why-agentic-apps-fail" className="text-sm font-semibold text-sky-300">
              Read how we harden agentic apps ↗
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
