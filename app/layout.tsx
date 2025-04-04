import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "nstHr - Recruitment Agency",
  description: "Find your dream job or best employees with nstHr",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
  }
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
        <main className="relative">
          <SocialSidebar position="left" />
          {children}
          <SocialSidebar position="right" />
        </main>
        <Footer />
      </body>
    </html>
  )
}