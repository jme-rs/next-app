import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";
import { posts } from "@/utils/post";

export default function Page() {
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