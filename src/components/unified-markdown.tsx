import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { getLocalFile } from '@/utils/fetch';
import remarkMdx from 'remark-mdx'
import rehypeReact from "rehype-react";
import rehypeStringify from "rehype-stringify";

export default async function RemarkMarkdown({
  srcPath,
}: {
  srcPath: string,
}) {
  const src = getLocalFile(srcPath);

  const file = await unified()
    .use(remarkParse)
    // .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkMdx)
    .use(remarkRehype)
    // .use(rehypeReact, )
    .use(rehypeStringify)
    .process(src);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: String(file) }} />
    </>
  )
}