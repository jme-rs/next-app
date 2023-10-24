import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import BackLink from "@/components/back-link";

const inter = Inter({ subsets: ['latin'] })
const BASE_PATH = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

export const metadata: Metadata = {
  title: 'jme Blog',
  description: 'Tech Blog by jme',
  icons: [
    {
      url: BASE_PATH + "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      url: BASE_PATH + "/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      url: BASE_PATH + "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      url: BASE_PATH + "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="256x256" href={BASE_PATH + "/icon-256x256.png"} />
      </head>
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
