import Link from "next/link";
import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";

export default async function Page() {
  return (
    <>
      <h1>Dev</h1>

      <InternalLinkContainer>
        <InternalLinkCard
          href="/dev/externalLink"
          title="externalLink"
          date="2000-01-01"
        />
        <InternalLinkCard
          href="/dev/syntaxHighlight"
          title="syntaxHighlight overflow overflow overflow overflow overflow overflow overflow overflow overflow"
          date="2000-01-01"
        />
        <InternalLinkCard
          href="/dev/zenn-markdown"
          title="zenn-markdown"
          date="2000/01/01"
        />
        <InternalLinkCard
          href="/dev/react-markdown"
          title="react-markdown"
          date="2000/01/01"
        />
        <InternalLinkCard
          href="/dev/react-markdown"
          title="dummy"
          date="2000/01/01"
        />
      </InternalLinkContainer>
    </>
  );
}
