import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";

export default async function Page() {
  return (
    <>
      <h1>Experimental</h1>

      <InternalLinkContainer>
        <InternalLinkCard
          href="/experimental/externalLink"
          title="外部リンク"
          date="2000-01-01"
        />
        <InternalLinkCard
          href="/experimental/syntaxHighlight"
          title="シンタックスハイライト"
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
