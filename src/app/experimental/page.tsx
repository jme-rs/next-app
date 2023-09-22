import SyntaxHighlight from "@/components/syntaxHighlight";
import { getCodeFromGithub, getCodeFromLocal } from "@/utils/fetch";

export default async function Experimental() {
  return (
    <div>
      <h1>Experimental</h1>

      <p>Next.js テストページ</p>

      <h2>Syntax Highlight</h2>

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

      <p><strong>ファイル名付き</strong> github の自分のリポジトリから引っ張ってきた</p>

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

      <p><strong>ファイル名無し</strong></p>
      <SyntaxHighlight
        lang="typescript"
      >
        {`console.log("typescript")`}
      </SyntaxHighlight>

      <h2>#####</h2>
      <p>h2</p>

      <h3>#####</h3>
      <p>h3</p>

      <h4>#####</h4>
      <p>h4</p>
    </div>
  );
}
