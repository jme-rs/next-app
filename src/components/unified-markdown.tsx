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
import rehypeToc from "rehype-toc";
import ArticleHeader from './article-header';
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import yaml from "yaml";
// import rehypeWrap from "rehype-wrap-all";
import { parseSelector } from "hast-util-parse-selector";

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
  .use(chanegeFootnoteName)
  .use(tableWrapper)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypeToc, { headings: ["h2", "h3"] });


export default async function UnifiedMarkdown({
  srcPath,
}: {
  srcPath: string,
}) {

  const src = getLocalFile(srcPath);


  //
  // debug
  //
  // const parsed = processor.parse(src);
  // console.log(inspect(parsed));
  // const hast = await processor.run(parsed);
  // console.log(inspect(hast));


  const content = processor.processSync(src);
  const frontMatter = content.data.frontMatter as {
    title: string,
    description: string
    tags: string[],
    date: string,
  };

  return (
    <>
      <ArticleHeader
        title={frontMatter.title}
        description={frontMatter.description}
        tags={frontMatter.tags}
        date={frontMatter.date}
      />
      {content.result}
    </>
  )
}