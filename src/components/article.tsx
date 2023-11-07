import ArticleHeader from './article-header';
import { getLocalFile } from '@/utils/fetch';
import processor from './unified-markdown';

export default function Article({ srcPath }: { srcPath: string }) {

  const md = getLocalFile(srcPath);
  const content = processor.processSync(md);
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