import type { ComponentProps, ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { clsx } from "clsx";
import { remarkMermaid } from "./remarkMermaid";

const mdxComponents = {
  a: (props: ComponentProps<"a">): ReactElement => (
    <a
      {...props}
      className={clsx(
        "text-sky-400 underline decoration-sky-400/70 underline-offset-4 transition-colors hover:text-sky-300",
        props.className,
      )}
    />
  ),
};

export const compileMdx = async <Frontmatter extends Record<string, unknown>>(
  source: string,
) =>
  compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMermaid],
      },
    },
    components: mdxComponents,
  });
