"use client"
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./code-block.module.scss";

export default function CodeBlock(
  {
    children = "",
    lang = "",
    fileName = "",
  }
) {
  return (
    <div className={styles.container}>
      {fileName.length > 0 &&
        <div className={styles.filenameSpace}>
          <div className={styles.filenameTag}>{fileName}</div>
        </div>
      }
      <div className={`${styles.codeFrame} ${fileName !== "" ? styles.withFilename : ""}`}>
        <SyntaxHighlighter
          language={lang}
          style={vs2015}
          codeTagProps={{ style: { fontFamily: "Consolas", fontSize: "0.9rem" } }}
          customStyle={{ padding: "1.2rem 0.9rem" }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
