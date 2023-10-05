import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"
import CodeBlock from "./code-block";

export default function M2H({ markdown = "" }) {

  return (
    <Markdown
      children={markdown}
      remarkPlugins={[remarkGfm]}

      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          const filename = match?.input.split(":")[1]

          return match ? (
            <CodeBlock
              lang={match[1]}
              fileName={filename}
            >
              {String(children)}
            </CodeBlock>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}

    />
  )
}