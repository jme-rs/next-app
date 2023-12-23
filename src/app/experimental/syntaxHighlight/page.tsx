import SyntaxHighlight from "@/components/code-block";
import { getLocalFile } from "@/utils/file";

export default async function Page() {
  return (
    <>
      <h4>with file name</h4>

      <SyntaxHighlight lang="rust" fileName="main.rs">
        {
`mod sudoku;

use sudoku::Sudoku;

fn main() {
    let mut s = Sudoku::new();
    s.static_init();
    s.solve();
}`
        }
      </SyntaxHighlight>

      <SyntaxHighlight
        lang="c"
        fileName="example.c"
      >
        {getLocalFile("src/assets/codes/example.c")}
      </SyntaxHighlight>

      <h4>without file name</h4>

      <SyntaxHighlight
        lang="typescript"
      >
        {`console.log("typescript")`}
      </SyntaxHighlight>
    </>
  );
}
