import { getPosts } from "@/utils/post";
import { Post } from "@/types/post";
import ArticleHeader from "@/components/article-header";

const posts = getPosts("src/assets/posts/[1-9]*/*.md");

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params }: { params: {id: string} }) {
  const post = posts.find((post) => post.id === params.id) as Post;
  console.log("blog/[id]/page.tsx", post);

  return (
    <>
      <ArticleHeader {...post.metadata} />
      {post.content}
    </>
  );
}