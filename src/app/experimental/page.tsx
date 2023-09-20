import SyntaxHighlight from "../../components/syntaxHighlight";

export default async function Experimental() {
  return (
    <div>
      <h1>Experimental</h1>
      <p>コンポーネント実験ページ</p>
      <SyntaxHighlight
        lang="rust"
        owner="jme-rs"
        repo="sudoku-rs"
        path="src/sudoku.rs"
      />
      <SyntaxHighlight
        lang="javascript"
        path="sample.js"
      >
        console.log("typescript");
      </SyntaxHighlight>
      <SyntaxHighlight
        lang="c"
        path="sample.c"
      >
        {
`#include <stdio.h>

int main() {
    printf("c-lang");
    return 0;
}`
        }
      </SyntaxHighlight>
    </div>
  );
}
