"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jme - Next.js',
  description: 'Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentURL = usePathname();
  const segments = currentURL.split('/');
  const parentPath = segments.slice(0, segments.length - 1).join('/');

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='wrapper'>
          <main>
            <Link href={parentPath}>back</Link>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
