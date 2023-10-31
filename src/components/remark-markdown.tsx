import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
// import rehypePrettyCode from 'rehype-pretty-code';
import { getLocalFile } from '@/utils/fetch';
import remarkMdx from 'remark-mdx'

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
    // .use(rehypePrettyCode, {
    //   theme: "dark-plus",
    // })
    .use(rehypeStringify)
    .process(src);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: String(file) }} />
    </>
  )
}