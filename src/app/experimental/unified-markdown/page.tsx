import Article from "@/components/article";
import { getPosts } from "@/utils/post";

export default function Page() {
  const posts = getPosts("src/assets/posts/test/test.md");
  return (
    <>
      <Article {...posts[0]} />
    </>
  )
}