import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import BackLink from "@/components/back-link";

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
  return (
    <html lang="en">
      <body className={inter.className} data-theme="light">
        <Header />
        <div className='wrapper'>
          <main>
          <BackLink />
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
