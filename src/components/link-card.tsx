"use client";
import dynamic from 'next/dynamic';
const Embed = dynamic(() => import('react-embed'), { ssr: false })

export function LinkCard({ href }: { href: string }) {

  return (
    <Embed isDark url={href} />
  )
}
