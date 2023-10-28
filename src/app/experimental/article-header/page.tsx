import ArticleHeader from "@/components/article-header";

export default function Page() {
  return (
    <>
      <ArticleHeader
        title="記事のタイトル Title of the article"
        description="記事の説明 Description of the article"
        tags={["タグ1", "タグ2"]}
        date="2023-10-27"
      />

      <h1>article-header</h1>

      <p>
        記事の上にメタ情報を表示する。
      </p>
    </>
  )
}