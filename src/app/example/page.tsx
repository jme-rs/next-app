import SyntaxHighlight from "../../components/syntaxHighlight";

export default async function Example() {
  return (
    <div>
      <div>Example</div>
      <SyntaxHighlight
        lang="rust"
        owner="jme-rs"
        repo="sudoku-rs"
        path="src/main.rs"
      />
      <div>Example</div>
      <SyntaxHighlight lang="javascript">
        consol.log("Hello World");
      </SyntaxHighlight>
    </div>
  );
}
