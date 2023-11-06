import { LinkCard } from "@/components/link-card";

export default function Page() {
  return (
    <>
      <h1>External Link</h1>

      <p>
        外部リンクを表示するコンポーネント。
      </p>

      <LinkCard href="https://twitter.com/jack/status/20" />
    </>
  )
}
