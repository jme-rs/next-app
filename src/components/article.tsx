import ArticleHeader from './article-header';
import { getLocalFile } from '@/utils/fetch';
import processor from '../utils/mdProcessor';
import { PostMetadata} from '@/types/post';

export default function Article({ srcPath }: { srcPath: string }) {

  const md = getLocalFile(srcPath);
  const content = processor.processSync(md);
  const frontMatter = content.data.frontMatter as PostMetadata;

  return (
    <>
      <ArticleHeader
        { ...frontMatter }
      />
      {content.result}
    </>
  )
}