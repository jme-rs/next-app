import Island from "@/components/island";
import LinkCard from "@/components/link-card";


export default function Page() {
  return (
    <>
      <Island>
        <h2>外部リンク</h2>
        <p>
          外部リンクを表示するコンポーネント。
        </p>

        <LinkCard href="https://github.com/jme-rs" />
        <LinkCard href="https://zenn.dev/loglass/articles/open-loglass-tech-stack-2023" />
        <LinkCard href="https://www.youtube.com/watch?v=Qw93hxIId0w" />
        <LinkCard href="https://twitter.com/jack/status/20" />
      </Island>
    </>
  )
}
