import M2H from "@/components/react-markdown";
import { getLocalFile } from "@/utils/fetch";

export default function Page() {
  return (
    <>
      <M2H markdown={getLocalFile("src/assets/articles/test.md")} />
    </>
  )
}