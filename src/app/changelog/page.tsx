import PageHeader from "@/components/page-header";
import Island from "@/components/island";
import { getPosts } from "@/utils/post";

export default function Page() {
  const changelog = getPosts("changelog.md", false);
  const todo = getPosts("todo.md", false);

  return (
    <>
      <PageHeader title="Changelog" />

      <Island expansion>
        <h2>Todo</h2>
        {todo[0].content}
      </Island>

      <Island expansion>
        <h2>Changelog</h2>
        {changelog[0].content}
      </Island>
    </>
  )
}