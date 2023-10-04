import markdownHtml from 'zenn-markdown-html';
import "zenn-content-css";

export default function M2H({ markdown = "" }) {
  const html = markdownHtml(
    markdown,
    { embedOrigin: "https://embed.zenn.studio" });

  return (
    <>
      <div
        className="znc"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
    </>
  )
}