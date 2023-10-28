import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";
import PageHeader from "@/components/page-header";

export default async function Page() {
  return (
    <>
      <PageHeader
        title="Experimental Page"
        description="実験的なコンポーネント置き場"
      />

      <InternalLinkContainer>
        <InternalLinkCard
          href="/experimental/remark"
          title="remark を利用したマークダウンの表示"
          date="2023-10-28"
        />
        <InternalLinkCard
          href="/experimental/article-header"
          title="記事のヘッダー"
          date="2023-10-27"
        />
        <InternalLinkCard
          href="/experimental/externalLink"
          title="外部リンク"
          date="2000-01-01"
        />
        <InternalLinkCard
          href="/experimental/zenn-markdown"
          title="zenn-markdown"
          date="2000/01/01"
        />
        <InternalLinkCard
          href="/experimental/react-markdown"
          title="react-markdown"
          date="2000/01/01"
        />
        <InternalLinkCard
          href="/experimental/syntaxHighlight"
          title="シンタックスハイライト"
          date="2000-01-01"
        />
        <InternalLinkCard
          href="/experimental/react-markdown"
          title="dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy"
          date="2000/01/01"
        />
        <InternalLinkCard
          href="/experimental/react-markdown"
          title=" ダミー ダミー ダミー ダミー ダミー ダミー ダミー ダミー ダミー ダミー ダミー ダミー"
          date="2000/01/01"
        />
      </InternalLinkContainer>
    </>
  );
}
