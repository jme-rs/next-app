import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";

export default function Home() {
  return (
    <>
      <h1>Blog</h1>
      <InternalLinkContainer>
        <InternalLinkCard
          href="/blog"
        />
      </InternalLinkContainer>
    </>
  )
}
