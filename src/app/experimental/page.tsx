import { PostCard, PostCardContainer }
  from "@/components/post-card";
import PageHeader from "@/components/page-header";

export default async function Page() {
  return (
    <>
      <PageHeader
        title="⚠️Experimental"
        description="実験的なコンポーネント置き場"
      />

      <PostCardContainer>
        <PostCard
          href="/experimental/unified-markdown"
          title="unified, remark, rehype を利用したマークダウンの表示"
          tags={["jsx", "unified", "remark", "rehype", "Tech"]}
          post="2023-10-28"
          update="2023-11-09"
        />
        <PostCard
          href="/experimental/article-header"
          title="記事のヘッダー"
          post="2023-10-27"
        /> 
        <PostCard
          href="/experimental/externalLink"
          title="外部リンク"
        />
        <PostCard
          href="/experimental/zenn-markdown"
          title="zenn-markdown"
        />
        <PostCard
          href="/experimental/syntaxHighlight"
          title="シンタックスハイライト"
        />
      </PostCardContainer>
    </>
  );
}
