import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
// import remarkMdx from 'remark-mdx'
import rehypeReact from "rehype-react";
import remarkFrontmatter from "remark-frontmatter";
import CodeBlock from '../components/code-block';
// import remarkBreaks from "remark-breaks";
// import { inspect } from "unist-util-inspect";
import * as prod from "react/jsx-runtime";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import remarkExtractFrontmatter from "remark-extract-frontmatter";
import yaml from "yaml";
import { parseSelector } from "hast-util-parse-selector";
import LinkCard from '../components/link-card';
import MdImg from '@/components/md-img';
// import islandStyles from '@/components/island.module.scss';
// import { rehypeGithubAlerts } from "rehype-github-alerts";
import remarkDeflist from "remark-deflist";
// import remarkDirective from "remark-fenced-divs";
import remarkDirective from "remark-directive";
// import remarkGfmAdmonitions from 'remark-github-beta-blockquote-admonitions'
import { h } from 'hastscript'
import FencedDiv from '@/components/fenced-div';
// import rehypeMermaid from 'rehype-mermaid';
import styles from "@/components/markdown.module.scss";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import rehypeDocument from 'rehype-document';

import dynamic from 'next/dynamic'



//
//
// export process function
export function MdProcess(content: string, dir: string, toc: boolean) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkExtractFrontmatter, {
      yaml: yaml.parse,
      name: 'frontMatter'
    })
    // .use(remarkBreaks)
    .use(remarkGfm)
    // .use(remarkMdx)
    .use(remarkDeflist)
    // .use(remarkGfmAdmonitions)
    .use(remarkMath)
    .use(remarkDirective)
    .use(remarkFencedDiv)
    .use(remarkRehype)
    // .use(rehypeDocument, {
    //   css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
    // })
    .use(rehypeKatex)
    .use(extractCodeBlock)
    // .use(remarkUnwrapImages)
    .use(unwrapImage)
    .use(unwrapLink)
    .use(extractRowLink)
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
        img: ({ src, alt }: { src: string, alt: string }) => {
          return (
            <MdImg
              dir={dir}
              src={src}
              alt={alt}
            />
          )
        },
        a: (props: any) => { 
          if (props.className === "row-link") {
            return (
              <LinkCard
                href={props.href}
              />
            )
          }
          return <a {...props}></a>
        },
        div: (props: any) => {
          if (!props.className) return <div {...props}></div>
          if (props.className.includes("fenced-dev")) {
            const type = props.className.split(" ")[1];
            return (
              <FencedDiv type={type}>
                {props.children}
              </FencedDiv>
            )
          }
          return <div {...props}></div>
        },
      },
    } as any)
    .use(changeFootnoteName)
    .use(tableWrapper)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);
  // .use(rehypeFencedDiv);
  if (toc) {
    processor.use(rehypeToc, { headings: ["h2", "h3"] })
      .use(tocWrapper);
  }

  return processor.processSync(content);
}


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
        node.properties.className = styles.inlineCodeBlock;
      }
    });
  };
}


function changeFootnoteName() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === "h2" && node.properties.id === "footnote-label") {
        node.children[0].value = "脚注";
      }
    });
  };
}


function tableWrapper() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === "table") {
        const wrapper = parseSelector("div") as any;
        wrapper.children = [node];
        wrapper.properties.className = styles.tableWrapper;
        parent.children[index as number] = wrapper;
      }
    });
  };
}


// function nextImage() {
//   return (tree: any) => {
//     visit(tree, 'element', (node, index, parent) => {
//       if (node.tagName === "img") {

//       }
//     });
//   };
// }


function unwrapImage() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img' && parent.tagName === 'p') {
        parent.tagName = "div";
      }
    });
  };
}


function tocWrapper() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === "nav") {
        const details = parseSelector("details") as any;
        const summary = parseSelector("summary") as any;
        summary.children = [{ type: "text", value: "目次" }];
        details.children = [summary, node];
        details.properties.className = styles.tocWrapper;
        parent.children[index as number] = details;
      }
    });
  };
}


function unwrapLink() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'a' && parent.tagName === 'p') {
        parent.tagName = "div";
      }
    });
  };
}


function extractRowLink() {
  return (tree: any) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'a'
        && parent.tagName === 'div'
        && node.children[0].value
        && node.children[0].value.startsWith("http")
      ) {
        node.properties.className = "row-link";
      }
    });
  };
}


function remarkFencedDiv() {
  return (tree: any) => {
    visit(tree, (node, index, parent) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'note'
          && node.name !== "warning"
        ) return

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div'
        const className = `fenced-dev ${node.name}`

        data.hName = tagName
        data.hProperties = h(tagName, node.attributes || {}).properties
        data.hProperties = { ...data.hProperties, className: className }
      }
    });
  };
}


// function rehypeFencedDiv() {
//   return (tree: any) => {
//     visit(tree, 'element', (node, index, parent) => {
//       if (node.tagName === "div"
//         && node.properties.className
//         && node.properties.className.includes("fenced-dev")
//       ) {
//         console.log(node);
//         node = <div>asdf</div>
//         console.log(node);
//         console.log(node);
//       }
//     });
//   };
// }


// function remove