import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jme - Next.js dev',
  description: 'y homepage in the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='wrapper'>
          {children}
        </div>
      </body>
    </html>
  )
}
