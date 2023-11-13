import YouTubeEmbed from "./embed/youtube";

function matchCompotent(url: string): React.ReactNode {
  const hostName = new URL(url).hostname;
  switch (hostName) {
    case "twitter.com":
      return <></>
    case "www.youtube.com":
      return <></>
    default:
      return <></>
  }
}

export default function LinkCard({ href }: { href: string }) {

  return (
    <>
      <YouTubeEmbed url={href} />
    </>
  )
}
