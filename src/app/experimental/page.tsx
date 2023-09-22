import path from "path";
import fsPromises from "fs/promises"
import SyntaxHighlight from "../../components/syntaxHighlight";
import { getCodeFromGithub, getCodeFromLocal } from "@/utils/fetch";

export default async function Experimental() {
  return (
    <div>
      <h1>Experimental</h1>
      <p>コンポーネント実験ページ</p>
      <SyntaxHighlight
        lang="rust"
        fileName="main.rs"
      >
        {await getCodeFromGithub("jme-rs", "sudoku-rs", "src/main.rs")}
      </SyntaxHighlight>
      {/* <SyntaxHighlight
        lang="c"
        fileName="example.c"
      >
        {await getCodeFromLocal("./example.c")}
      </SyntaxHighlight> */}
      <SyntaxHighlight
        lang="typescript"
      >
        {`console.log("typescript")`}
      </SyntaxHighlight>
    </div>
  );
}
