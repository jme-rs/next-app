import PageHeader from "@/components/page-header";
import Island from "@/components/island";
import { getPosts } from "@/utils/post";
import Markdown from "@/components/markdown";

export default function Page() {
  const changelog = getPosts("CHANGELOG.md", false);
  const todo = getPosts("TODO.md", false);

  return (
    <>
      <PageHeader title="Todo" />

      <Island expansion>
        <Markdown>
          {todo[0].content}
        </Markdown>
      </Island>

      <PageHeader title="Changelog" />

      <Island expansion>
        <Markdown>
          {changelog[0].content}
        </Markdown>
      </Island>
    </>
  )
}
