"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default async function SyntaxHighlight({ lang = "", codeString = "" }) {
  return (
    <SyntaxHighlighter
      language={lang}
      style={vs2015}
      codeTagProps={{ style: { fontFamily: "consolas", fontSize: "0.8rem" } }}
      showLineNumbers={true}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};