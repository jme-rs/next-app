// "use client"
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./code-block.module.scss";
import shiki from "shiki";

export default async function CodeBlock({
  children,
  lang,
  fileName,
}: {
  children: string,
  lang?: string,
  fileName?: string,
}) {

  // const highlighter = await shiki.getHighlighter({
  //   theme: "dark-plus",
  // });
  // var htmlString = highlighter.codeToHtml(code, { lang: "js" });

  const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });
  const tokens = highlighter.codeToThemedTokens(children, lang);
  const htmlString = shiki.renderToHtml(tokens, {
    bg: highlighter.getBackgroundColor("dark-plus"),
    fg: highlighter.getForegroundColor("dark-plus"),
    elements: {
      pre({ className, style, children }) {
        return `<pre class="${className} ${styles.pre}" style="${style}" tabindex="0">${children}</pre>`;
      },
      code({ children }) {
        return `<code class="${styles.code}">${children}</code>`
      }
    }
  })

  return (
    <div className={styles.container}>
      {fileName &&
        <div className={styles.filenameSpace}>{fileName}</div>
      }
      <div
        className={`${styles.codeFrame} ${fileName ? styles.withFilename : ""}`}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      >
        {/* <SyntaxHighlighter
          language={lang}
          style={vs2015}
          codeTagProps={{ style: { fontFamily: "Consolas", fontSize: "0.9rem" } }}
          customStyle={{ padding: "1.2rem 0.9rem" }}
        >
          {children}
        </SyntaxHighlighter> */}
      </div>
    </div>
  );
};
