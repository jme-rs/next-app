import PageHeader from "@/components/page-header";
import Island from "@/components/island";
import { getPosts } from "@/utils/post";

export default function Page() {
  const changelog = getPosts("changelog.md", false);
  const todo = getPosts("todo.md", false);

  return (
    <>
      <PageHeader title="Todo" />

      <Island expansion>
        {todo[0].content}
      </Island>

      <PageHeader title="Changelog" />

      <Island expansion>
        {changelog[0].content}
      </Island>
    </>
  )
}