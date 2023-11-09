import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";
import PageHeader from "@/components/page-header";

export default async function Page() {
  return (
    <>
      <PageHeader
        title="⚠️Experimental"
        description="実験的なコンポーネント置き場"
      />

      <InternalLinkContainer>
        <InternalLinkCard
          href="/experimental/unified-markdown"
          title="unified, remark, rehype を利用したマークダウンの表示"
          tags={["jsx"]}
          post="2023-10-28"
          update="2023-11-09"
        />
        <InternalLinkCard
          href="/experimental/article-header"
          title="記事のヘッダー"
          post="2023-10-27"
        />
        <InternalLinkCard
          href="/experimental/externalLink"
          title="外部リンク"
        />
        <InternalLinkCard
          href="/experimental/zenn-markdown"
          title="zenn-markdown"
        />
        <InternalLinkCard
          href="/experimental/syntaxHighlight"
          title="シンタックスハイライト"
        />
      </InternalLinkContainer>
    </>
  );
}
