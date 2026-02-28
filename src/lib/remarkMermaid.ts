import { visit } from "unist-util-visit";
import type { Root, Code } from "mdast";
import type { Parent } from "unist";
import mermaid from "mermaid";
import { JSDOM } from "jsdom";

let mermaidReady = false;
let diagramIndex = 0;

const ensureMermaidEnvironment = () => {
  if (mermaidReady) {
    return;
  }

  const dom = new JSDOM("", { pretendToBeVisual: true });
  const domWindow = dom.window as unknown as Window & typeof globalThis;
  const globalWithDom = globalThis as typeof globalThis & {
    window: Window & typeof globalThis;
    document: Document;
    navigator: Navigator;
  };

  globalWithDom.window = domWindow;
  globalWithDom.document = domWindow.document;
  globalWithDom.navigator = domWindow.navigator;

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

  mermaidReady = true;
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

    ensureMermaidEnvironment();

    await Promise.all(
      targets.map(async ({ parent, index, node }) => {
        const id = `mermaid-${diagramIndex++}`;
        const { svg } = await mermaid.render(id, node.value.trim());
        const parentWithChildren = parent as Parent & { children: Array<Code | HtmlNode> };

        parentWithChildren.children[index] = {
          type: "html",
          value: svg,
        };
      }),
    );
  };
}
