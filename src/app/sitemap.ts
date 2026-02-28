import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { listPosts } from "@/lib/posts";
import { getCaseStudySlugs } from "@/lib/caseStudies";

const staticRoutes = [
  "/",
  "/agentic-application-consulting",
  "/rag-systems",
  "/llm-observability",
  "/llm-security-iam",
  "/case-studies",
  "/about",
  "/contact",
  "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPosts();
  const studies = getCaseStudySlugs();
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
    })),
    ...studies.map((slug) => ({
      url: `${siteUrl}/case-studies/${slug}`,
      lastModified,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.date),
    })),
  ];
}
