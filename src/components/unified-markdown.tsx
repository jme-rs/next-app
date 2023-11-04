// "use client";
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { getLocalFile } from '@/utils/fetch';
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


function extractCodeBlock() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'code' && parent.tagName === 'pre') {
        // parent.tagName = node.tagName;
        parent.children = node.children;
        parent.properties.className = node.properties.className;
      }
    });
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  // .use(remarkBreaks)
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
    },
  } as any)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings);


export default async function UnifiedMarkdown({
  srcPath,
}: {
  srcPath: string,
}) {

  const src = getLocalFile(srcPath);

  // const parsed = processor.parse(src);
  // console.log(inspect(parsed));
  // const hast = await processor.run(parsed);
  // console.log(inspect(hast));
  const content = processor.processSync(src).result;

  return (
    <>
      {content}
    </>
  )
}