import type { Metadata } from "next";
import { siteConfig, siteUrl } from "./site";
import type { PageMeta } from "./pageMeta";
import type { PostFrontmatter } from "./posts";

const defaultOgImage = `${siteUrl}/og.png`;

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteUrl}${path}`;

export function buildMetadata(meta: PageMeta): Metadata {
  const canonicalUrl = absoluteUrl(meta.canonical ?? meta.path);
  const title = `${meta.title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title,
      description: meta.description,
      siteName: siteConfig.name,
      images: [
        {
          url: meta.image ?? defaultOgImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [meta.image ?? defaultOgImage],
    },
  };
}

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: Object.values(siteConfig.social),
  logo: `${siteUrl}/og.png`,
});

export const professionalServiceJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  serviceType: "AI engineering and agentic application consulting",
  areaServed: siteConfig.location,
  url: siteUrl,
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
    },
  },
});

export const blogPostingJsonLd = (
  slug: string,
  frontmatter: PostFrontmatter,
  body?: string,
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
  headline: frontmatter.title,
  description: frontmatter.description,
  datePublished: frontmatter.date,
  dateModified: frontmatter.date,
  author: {
    "@type": "Person",
    name: siteConfig.founder,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/og.png`,
    },
  },
  image: frontmatter.image ?? defaultOgImage,
  articleBody: body,
});
