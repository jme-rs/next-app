import SyntaxHighlight from "@/components/code-block";
import { getCodeFromGithub, getLocalFile } from "@/utils/fetch";

export default async function Page() {
  return (
    <>
      <h1>Syntax Highlight</h1>

      <p>
        react-syntax-highlighter で埋め込んだソースコードのシンタックスハイライトを行う。
        テーマは Visual Studio 2015 を使った。
        ファイル名を指定するとタグ内にファイル名が表示される。
      </p>

      <p>
        将来的には shiki に以降するかも?
      </p>

      <h3>追記</h3>

      <p>
        shiki に移行した。
      </p>

      <h4>ファイル名のタグ付き</h4>

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

      <h4>ファイル名のタグ無し</h4>
      <SyntaxHighlight
        lang="typescript"
      >
        {`console.log("typescript")`}
      </SyntaxHighlight>
    </>
  );
}
