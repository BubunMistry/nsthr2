import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'NSTHR | Best Recruitment Company in India',
  description: 'NSTHR is a leading recruitment and HR consulting company helping businesses hire top talent across industries. Job seekers and companies can trust our innovative hiring solutions.',
  keywords: 'recruitment company, HR consultancy, hire employees, job search, staffing agency, IT recruitment, best hiring firm in India',
  openGraph: {
    title: 'NSTHR | Top Recruitment Firm in India',
    description: 'Helping companies hire the right talent. End-to-end HR solutions for businesses and job seekers.',
    url: 'https://nsthr.com',
    type: 'website',
    icon: "/favicon.ico",
  },
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