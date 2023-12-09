import ArticleHeader from './article-header';
import Island from './island';
import { Post } from "@/types/post";
import styles from './article.module.scss';

export default function Article(post: Post) {

  return (
    <>
      <ArticleHeader
        {...post.metadata}
      />
      <Island>
        {post.content}
      </ Island>
    </>
  )
}