// "use client";
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkMdx from 'remark-mdx'
import rehypeReact from "rehype-react";
import remarkFrontmatter from "remark-frontmatter";
import CodeBlock from './code-block';
import remarkBreaks from "remark-breaks";
import { inspect } from "unist-util-inspect";
import * as prod from "react/jsx-runtime";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import yaml from "yaml";
import { parseSelector } from "hast-util-parse-selector";
import { LinkCard } from './link-card';

//
// extensions
//
function extractCodeBlock() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'code' && parent.tagName === 'pre') {
        // parent.tagName = node.tagName;
        parent.children = node.children;
        parent.properties.className = node.properties.className;
      }
      else if (node.tagName === "code") {
        node.properties.className = "inline-code-block"
      }
    });
  };
}

function chanegeFootnoteName() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === "h2" && node.properties.id === "footnote-label") {
        node.children[0].value = "参考文献";
      }
    });
  };
}

function tableWrapper() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === "table") {
        const wrapper = parseSelector("div");
        wrapper.children = [node];
        wrapper.properties.className = "table-wrapper";
        parent.children[index as number] = wrapper;
      }
    });
  };
}

//
// processor
//
const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkExtractFrontmatter, {
    yaml: yaml.parse,
    name: 'frontMatter'
  })
  .use(remarkBreaks)
  .use(remarkGfm)
  .use(remarkMdx)
  .use(remarkRehype)
  .use(extractCodeBlock)
  .use(rehypeReact, {
    ...prod,
    components: {
      pre: (props: any) => {
        var lang: string | undefined;
        var fileName: string | undefined;
        const className = props.className?.replace("language-", "").split(":");
        if (className && className.length === 1) {
          lang = className[0];
        }
        else if (className && className.length === 2) {
          lang = className[0];
          fileName = className[1];
        }
        return (
          <CodeBlock
            lang={lang}
            fileName={fileName}
          >
            {props.children}
          </CodeBlock>
        )
      },
      // a: (props: any) => {
      //   return (
      //     <LinkCard
      //       href={props.href}
      //     />
      //   )
      // }
    },
  } as any)
  .use(chanegeFootnoteName)
  .use(tableWrapper)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypeToc, { headings: ["h2", "h3"] });

export default processor;