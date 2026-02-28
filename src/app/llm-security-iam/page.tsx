import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import { listPosts } from "@/lib/posts";
import { formatDate } from "@/lib/dates";
import { IAMFlow } from "@/components/diagrams/IAMFlow";

export const metadata = buildMetadata(pageMeta.security);

const controls = [
  {
    title: "Identity-aware prompts",
    description: "Attributes flow from your IdP to the agent runtime so every decision is scoped to the caller's entitlements.",
  },
  {
    title: "Policy orchestration",
    description: "Guardrails, secrets, and tool access are versioned, code-reviewed, and enforced in runtime.",
  },
  {
    title: "Audit-ready logging",
    description: "Structured events capture who asked for what, which data was used, and how the system responded.",
  },
];

const services = [
  "OIDC, SAML, and workload identity integration",
  "Scoped tool registries with environment-aware credentials",
  "Data redaction and tiered context storage",
  "Break-glass flows with human approval",
];

export default async function LlmSecurityIamPage() {
  const posts = await listPosts();
  const related = posts
    .filter((post) => post.frontmatter.tags.includes("iam") || post.frontmatter.tags.includes("security"))
    .slice(0, 2);

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Security"
        title="LLM security & identity"
        description="Every workflow respects least privilege and audit requirements. We connect your agent stack to IAM, secrets, and approval rails you already trust."
      >
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <IAMFlow />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {controls.map((control) => (
            <Card key={control.title} title={control.title} description={control.description} />
          ))}
        </div>
      </Section>

      <Section title="What we cover">
        <div className="grid gap-4">
          {services.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              {item}
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

      <Section title="Review your IAM posture">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200">
          <p>
            We can trace how identities, scopes, secrets, and tool credentials flow through your agent stack and highlight the gaps. Deliverable: a memo with policy recommendations, observability hooks, and incident playbooks.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white">
              Schedule IAM review
            </Link>
            <Link href="/blog/llm-iam-patterns" className="text-sm font-semibold text-sky-300">
              Read IAM patterns ↗
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
