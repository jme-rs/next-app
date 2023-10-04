import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h1>Experimental</h1>
      <Link href="/dev/externalLink" prefetch={false}>externalLink</Link>
      <br />
      <Link href="/dev/syntaxHighlight" prefetch={false}>syntaxHighlight</Link>
      <br />
      <Link href="/dev/markdown" prefetch={false}>markdown</Link>
    </>
  );
}
