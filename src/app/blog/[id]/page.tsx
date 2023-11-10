import { posts } from "@/utils/post";
import { Post } from "@/types/post";
import ArticleHeader from "@/components/article-header";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  })); 
}

export default function Page({ params }: { params: {id: string} }) {
  const post = posts.find((post) => post.id === params.id) as Post;

  return (
    <>
      <ArticleHeader {...post.metadata} />
      {post.content}
    </>
  );
}