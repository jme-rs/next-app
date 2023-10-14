import Link from "next/link";
import { InternalLinkCard, InternalLinkContainer }
  from "@/components/internal-link";

export default async function Page() {
  return (
    <>
      <h1>Dev</h1>
      <InternalLinkCard
        href="/dev/externalLink"
        title="externalLinkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        date="2000/01/01"
      />
      <Link href="/dev/externalLink" prefetch={false}>externalLink</Link>
      <br />
      <Link href="/dev/syntaxHighlight" prefetch={false}>syntaxHighlight</Link>
      <br />
      <Link href="/dev/zenn-markdown" prefetch={false}>zenn-markdown</Link>
      <br />
      <Link href="/dev/react-markdown" prefetch={false}>react-markdown</Link>
    </>
  );
}
