import SyntaxHighlight from "@/components/syntaxHighlight";
import { getCodeFromGithub, getLocalFile } from "@/utils/fetch";

export default async function Page() {
  return (
    <>
      <h1>Syntax Highlight</h1>

      <h2>Component</h2>

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
        { getLocalFile("src/assets/codes/example.c")}
      </SyntaxHighlight>

      <h4>ファイル名のタグ無し</h4>
      <SyntaxHighlight
        lang="typescript"
        >
        {`console.log("typescript")`}
      </SyntaxHighlight>

        <h2>説明</h2>

        <p>
          react-syntax-highlighter で埋め込んだソースコードのシンタックスハイライトを行う。
          テーマは Visual Studio 2015 を使った。
          ファイル名を指定するとタグ内にファイル名が表示されるようにした。
        </p>
        <p>
          Next.js の機能を使ってビルド時に静的にファイルを取得している。
          ソースコードの内容を最新に保つためにはクライアントサイドで取得する必要があるが、
          Next.js の仕様がよくわかっていないので、とりあえずビルド時に取得すようにしている。
          github にはリクエスト回数に制限があるので、その方がいいかもしれない。
        </p>
        <p>
          今後はこのサイトと同じディレクトリにあるファイルもビルド時に静的に取得するようにしたい。
        </p>
    </>
  );
}
