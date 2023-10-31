import M2H from "@/components/zenn-markdown";
import { getLocalFile } from "@/utils/fetch";

export default function Page() {
  return (
    <>
      <h1>zenn-markdown</h1>

      <p>
        zenn-markdown を使用。
      </p>

      <M2H markdown={getLocalFile("src/assets/articles/test.mdx")} />
    </>
  )
}
