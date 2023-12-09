import PageHeader from "@/components/page-header";
import Island from "@/components/island";
import { getPosts } from "@/utils/post";
import toc from "rehype-toc";

export default function Page() {
  const md = getPosts("changelog.md", false);
  const post = md[0];

  return (
    <>
      <PageHeader title="Changelog" />
      <Island expansion>
        {post.content}
      </Island>
    </>
  )
}