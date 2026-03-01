import Script from "next/script";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { formatDate } from "@/lib/dates";
import { blogPostingJsonLd, buildMetadata } from "@/lib/seo";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    return buildMetadata({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      path: `/blog/${post.slug}`,
      canonical: post.frontmatter.canonical,
      image: post.frontmatter.image,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null);

  if (!post) {
    return notFound();
  }

  const jsonLd = JSON.stringify(blogPostingJsonLd(post.slug, post.frontmatter, post.body));

  return (
    <article className="space-y-12 pb-16">
      <header className="mx-auto max-w-3xl px-4 pt-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {formatDate(post.frontmatter.date)}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{post.frontmatter.title}</h1>
        <p className="mt-4 text-base text-slate-300">{post.frontmatter.description}</p>
      </header>
      <div className="mx-auto max-w-3xl px-4">
        <Prose>{post.content}</Prose>
      </div>
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-lg font-semibold text-white">Need help implementing this?</p>
          <p className="mt-3 text-sm text-slate-300">
            We architect, build, and launch agentic systems with the guardrails described above. Book a strategy call and we will map out your rollout plan.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Book Strategy Call
            </a>
            <a href="mailto:hello@yourdomain.com" className="text-sm font-medium text-sky-300">
              hello@yourdomain.com
            </a>
          </div>
        </div>
      </div>
      <Script id={`jsonld-blog-${post.slug}`} type="application/ld+json">
        {jsonLd}
      </Script>
    </article>
  );
}
