"use client";

import { getGit } from "@/utils/fetch";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./syntaxHighlight.module.scss";

export default async function SyntaxHighlight(
  {
    children = "",
    lang = "",
    owner = "",
    repo = "",
    path = "",
  }
) {
  if (owner.length > 0 && repo.length > 0 && path.length > 0) {
    children = await getGit(owner, repo, path);
  }

  return (
    <div className={styles.container}>
      {path.length > 0 &&
        <div className={styles.filenameSpace}>
          <div className={styles.filenameTag}>{path}</div>
        </div>
      }
      <div className={styles.codeFrame}>
        <SyntaxHighlighter
          language={lang}
          style={vs2015}
          codeTagProps={{ style: { fontFamily: "Consolas", fontSize: "0.9rem"} }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
