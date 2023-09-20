"use client";

import { getGit } from "@/utils/fetch";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
    <SyntaxHighlighter
      language={lang}
      style={vs2015}
      codeTagProps={{ style: { fontFamily: "consolas", fontSize: "0.8rem" } }}
    // showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};
