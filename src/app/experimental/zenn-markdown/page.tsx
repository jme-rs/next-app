import M2H from "@/components/zenn-markdown";
import { getLocalFile } from "@/utils/file";

export default function Page() {
  return (
    <>
      <h1>zenn-markdown</h1>

      <p>
        zenn-markdown を使用。
      </p>

      <M2H markdown={getLocalFile("src/assets/posts/test/test.md")} />
    </>
  )
}
