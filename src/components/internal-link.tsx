import Link from "next/link";
import "./internal-link.module.scss";

export default function InternalLink(
  { href, children }: { href: string, children: React.ReactNode }
) {
  return (
    <div className="container">
      <Link href={href}>{children}</Link>
    </div>
  )
}