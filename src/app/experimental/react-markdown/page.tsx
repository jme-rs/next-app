import M2H from "@/components/react-markdown";
import { getLocalFile } from "@/utils/fetch";

export default function Page() {
  return (
    <>
      <h1>react-markdown</h1>

      <p>
        react-markdown を使用。
      </p>

      <M2H markdown={getLocalFile("src/assets/articles/test.mdx")} />
    </>
  )
}