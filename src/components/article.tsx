import ArticleHeader from './article-header';
import Island from './island';
import { Post } from "@/types/post";
import Markdown from './markdown';
import Head from 'next/head';

export default function Article(post: Post) {

  return (
    <>
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.description || post.metadata.title} />
      </Head>
      <ArticleHeader
        {...post.metadata}
      />
      <Island>
        <Markdown>
          {post.content}
        </Markdown>
      </ Island>
    </>
  )
}