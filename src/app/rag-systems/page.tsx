import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import { listPosts } from "@/lib/posts";
import { formatDate } from "@/lib/dates";
import { RAGArchitecture } from "@/components/diagrams/RAGArchitecture";

export const metadata = buildMetadata(pageMeta.ragSystems);

const checklist = [
  {
    title: "Corpus operations",
    description:
      "Delta-friendly pipelines, schema validation, and embedding versioning keep knowledge stores reproducible.",
  },
  {
    title: "Retrieval quality",
    description:
      "We run scheduled evaluations against golden datasets so you know when recall or precision drifts.",
  },
  {
    title: "Policy-aware generation",
    description:
      "Response templates balance structured data, search hits, and model completions with IAM rules baked in.",
  },
];

const tooling = [
  {
    title: "Data ingest",
    description: "Connectors, parsers, and redaction jobs for PDFs, structured exports, and streaming events.",
  },
  {
    title: "Retrieval orchestration",
    description: "Blend dense, sparse, and relational retrieval and make each decision auditable.",
  },
  {
    title: "Evaluation & reporting",
    description: "Dashboards that expose coverage, hallucinations, latency, and per-query cost.",
  },
];

export default async function RagSystemsPage() {
  const posts = await listPosts();
  const related = posts
    .filter((post) => post.frontmatter.tags.includes("rag"))
    .slice(0, 2);

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Knowledge systems"
        title="Retrieval that leaders can audit"
        description="We build RAG architectures that stand up in regulated industries. Retrieval logic is documented, evaluation harnesses are automated, and IAM context flows from source to prompt."
      >
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <RAGArchitecture />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {checklist.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section
        title="What the engagement includes"
        description="From data engineering to agent UX, we stay accountable through launch."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {tooling.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-300">
          We coordinate tightly with security, data, and compliance teams so the knowledge graph, embeddings, and evaluation reports align with your governance requirements.
        </p>
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
