import SyntaxHighlight from "../components/syntaxHighlight";
import { getGit } from "../utils/fetch";

export default async function Example() {
  return (
    <div>Example
      <SyntaxHighlight
        lang="rust"
        codeString={await getGit("jme-rs", "sudoku-rs", "src/sudoku.rs")}
      />
    </div>
  );
}
