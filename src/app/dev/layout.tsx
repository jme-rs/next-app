import BackLink from "@/components/back-link";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackLink />
      {children}
    </>
  )
}
