"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const fragments = pathname.split("/");
  const backPath = fragments.slice(0, fragments.length - 1).join("/");

  return (
    <>
      ?{}
      <Link href={backPath}>back</Link>
      {children}
    </>
  )
}
