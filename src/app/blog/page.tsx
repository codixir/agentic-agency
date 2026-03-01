import Link from "next/link";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { listPosts } from "@/lib/posts";
import { formatDate } from "@/lib/dates";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = buildMetadata(pageMeta.blog);
export const dynamic = "force-static";
export const revalidate = false;

export default async function BlogPage() {
  const posts = await listPosts();

  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Insights"
        title="Deep dives on building agentic systems"
        description="We publish technical essays on architecture, retrieval, IAM, and observability. Each post comes from problems we solve with clients."
      >
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/60"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {formatDate(post.frontmatter.date)}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.frontmatter.title}</h2>
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

      <CTA />
    </div>
  );
}
