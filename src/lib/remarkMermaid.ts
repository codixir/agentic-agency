import { visit } from "unist-util-visit";
import type { Root, Code } from "mdast";
import type { Parent } from "unist";
import { JSDOM } from "jsdom";

let initialized = false;
let mermaidInstance: typeof import("mermaid").default | null = null;
let diagramIndex = 0;

const ensureMermaid = async (): Promise<typeof import("mermaid").default | null> => {
  if (initialized) {
    return mermaidInstance;
  }
  initialized = true;

  try {
    const dom = new JSDOM("", { pretendToBeVisual: true });
    const domWindow = dom.window as unknown as Window & typeof globalThis;
    const g = globalThis as typeof globalThis & {
      window: Window & typeof globalThis;
      document: Document;
      navigator: Navigator;
    };
    g.window = domWindow;
    g.document = domWindow.document;
    g.navigator = domWindow.navigator;

    // Import mermaid AFTER the DOM environment is set up
    const mod = await import("mermaid");
    const mermaid = mod.default;

    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        primaryColor: "#0ea5e9",
        primaryTextColor: "#0f172a",
        primaryBorderColor: "#38bdf8",
        lineColor: "#94a3b8",
        secondaryColor: "#1e293b",
        tertiaryColor: "#0f172a",
        nodeTextColor: "#0f172a",
      },
      securityLevel: "strict",
      fontFamily: "'Inter', 'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
    });

    mermaidInstance = mermaid;
    return mermaidInstance;
  } catch {
    return null;
  }
};

type HtmlNode = {
  type: "html";
  value: string;
};

export function remarkMermaid() {
  return async (tree: Root) => {
    const targets: Array<{ parent: Parent; index: number; node: Code }> = [];

    visit(tree, "code", (node: Code, index?: number, parent?: Parent) => {
      if (node.lang === "mermaid" && parent && typeof index === "number") {
        targets.push({ parent, index, node });
      }
    });

    if (!targets.length) {
      return;
    }

    const mermaid = await ensureMermaid();
    if (!mermaid) {
      return;
    }

    await Promise.all(
      targets.map(async ({ parent, index, node }) => {
        try {
          const id = `mermaid-${diagramIndex++}`;
          const { svg } = await mermaid.render(id, node.value.trim());
          const parentWithChildren = parent as Parent & { children: Array<Code | HtmlNode> };
          parentWithChildren.children[index] = {
            type: "html",
            value: svg,
          };
        } catch {
          // Leave as code block if rendering fails
        }
      }),
    );
  };
}
