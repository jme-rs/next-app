import styles from "./home.module.scss";
import Island from "@/components/island";
import PageHeader from "@/components/page-header";
import LinkCard from "@/components/link-card";


export default function Home() {
  return (
    <>
      <PageHeader title="Home" />

      <Island expansion>
        <h2>このサイトについて</h2>
        <p>
          このサイトは個人的に作成したブログサイトで、
          技術記事や日記などを投稿していく予定です。
        </p>
        <p>
          サイト作成に当たって web技術を学ぶ事を目的としています。
        </p>
      </Island>

      <Island expansion>
        <h2>作者</h2>
        <ul>
          <li>芝浦工業大学 情報工学科 3年 佐々木孟</li>
          <li>千葉県</li>
          <li>低レイヤー</li>
        </ul>
      </Island>

      <Island expansion>
        <h2>リンク</h2>

        <h3>GitHub</h3>
        <LinkCard href="https://github.com/jme-rs" />

        <h3>サイトのソースコード</h3>
        <LinkCard href="https://github.com/jme-rs/next-app" />
      </Island>
    </>
  )
}
