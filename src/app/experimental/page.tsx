import Link from "next/link";

export default async function Page() {
  console.log(process.cwd());

  return (
    <>
      <h1>Experimental</h1>
      <Link href="/experimental/externalLink" prefetch={false}>externalLink</Link>
      <br />
      <Link href="/experimental/syntaxHighlight" prefetch={false}>syntaxHighlight</Link>
    </>
  );
}
