import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";
import { getPosts } from "@/utils/post";

export default function Page() {
  const posts = getPosts("src/assets/posts/**/*.md");
  console.log(posts);

  return (
    <>
      <h1>Blog</h1>

      <InternalLinkContainer>
        {posts.map((post, index) => (
          <InternalLinkCard
            key={index}
            href={`/blog/${post.id}`}
            {...post.metadata}
          />
        ))}
      </InternalLinkContainer>
    </>
  )
}