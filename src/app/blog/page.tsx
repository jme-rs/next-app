import PageHeader from "@/components/page-header";
import { PostCard, PostCardContainer }
  from "@/components/post-card";
import { getPosts } from "@/utils/post";

export default function Page() {
  const posts = getPosts("src/assets/posts/[1-9]*/*.md");

  return (
    <>
      <PageHeader
        title="Blog Posts"
        description="投稿した記事の一覧"
      />

      <PostCardContainer>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            href={`/blog/${post.id}`}
            {...post.metadata}
          />
        ))}
      </PostCardContainer>
    </>
  )
}