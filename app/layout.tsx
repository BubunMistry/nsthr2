import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar"
import { Toaster } from "sonner" // Import from sonner

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'NSTHR | Best Recruitment Company in India | HR & Staffing Solutions',
  description:
    'NSTHR is India’s top recruitment and HR consulting company based in Kolkata. We help startups, SMEs, and enterprises hire the best talent in IT, FMCG, healthcare, media, infrastructure, and more. Trusted by hundreds of companies and job seekers alike.',
  keywords:
    'NSTHR, recruitment company India, top HR firm, best staffing agency, hire employees India, job consultancy Kolkata, IT recruitment, FMCG staffing, media hiring, outsource hiring solutions, temporary staffing agency, executive search, headhunting services, Indian recruitment firm, job openings India, hr outsourcing, career in India, NSTHR jobs, NSTHR careers, jobs at NSTHR, NSTHR consultancy, NSTHR solutions',

  authors: [{ name: 'NSTHR Pvt Ltd', url: 'https://nsthr.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: 'NSTHR | Top Recruitment Firm in India',
    description:
      'Hire faster with NSTHR. India’s best recruitment and staffing agency offering reliable HR solutions for IT, media, healthcare, FMCG, and more.',
    url: 'https://nsthr.com',
    siteName: 'NSTHR',
    type: 'website',
    images: [
      {
        url: 'https://nsthr.com/placeholder.svg?height=100&width=80',
        width: 1200,
        height: 630,
        alt: 'NSTHR Recruitment Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSTHR | Best Recruitment & HR Consultancy in India',
    description:
      'NSTHR helps companies scale by hiring top professionals. Trusted hiring partner for India’s leading companies.',
    site: 'https://x.com/hr_nst', 
    images: ['https://nsthr.com/placeholder.svg?height=100&width=80'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://nsthr.com'),
};


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
        <Toaster 
          position="top-center"
          richColors
          closeButton
          expand={false}
          duration={4000}
        />
      </body>
    </html>
  )
}