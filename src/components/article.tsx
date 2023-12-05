import ArticleHeader from './article-header';
import { Post } from "@/types/post";
import styles from './article.module.scss';

export default function Article(post: Post) {

  return (
    <>
      <ArticleHeader
        {...post.metadata}
      />
      <div className={styles.container}>
        {post.content}
      </div>
    </>
  )
} 