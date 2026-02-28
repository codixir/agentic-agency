import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ReactElement } from "react";
import { compileMdx } from "./mdx";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  canonical?: string;
  draft?: boolean;
  image?: string;
};

export type PostSummary = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export type PostDetail = PostSummary & {
  content: ReactElement;
  body: string;
};

const parseDate = (date: string) => new Date(date).getTime();

export const getAllSlugs = async () => {
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
};

const readPostFile = async (slug: string) => {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFile(filepath, "utf8");
};

export const listPosts = async (includeDraft = false): Promise<PostSummary[]> => {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const file = await readPostFile(slug);
      const { data } = matter(file);
      return { slug, frontmatter: data as PostFrontmatter };
    }),
  );

  return posts
    .filter((post) => includeDraft || !post.frontmatter.draft)
    .sort((a, b) => parseDate(b.frontmatter.date) - parseDate(a.frontmatter.date));
};

export const getPostBySlug = async (slug: string): Promise<PostDetail> => {
  const source = await readPostFile(slug);
  const { content: markdownBody } = matter(source);
  const { content, frontmatter } = await compileMdx<PostFrontmatter>(source);

  if (frontmatter.draft) {
    throw new Error("Draft posts are not accessible");
  }

  return {
    slug,
    frontmatter,
    content,
    body: markdownBody,
  };
};
