"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react"
import Navbar from "./ui/navbar"
import { TopMarquee } from "./ui/TopMarquee"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all ${isScrolled ? 'shadow-lg' : ''}`}>
      

   <TopMarquee />

      {/* Contact info bar */}
      <div className="bg-gradient-to-r from-[#6DD3FF] to-[#29A0D8] py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Desktop contact info */}
          <div className="hidden md:flex flex-wrap items-center gap-4 text-white text-sm">
            <div className="contact-info flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <a href="mailto:info@nsthr.com" className="hover:underline">
                info@nsthr.com
              </a>
            </div>
            <div className="contact-info flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <a href="mailto:helpdesk@nsthr.com" className="hover:underline">
                helpdesk@nsthr.com
              </a>
            </div>
            <div className="contact-info flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <a href="tel:+916292197307" className="hover:underline">
                +91 6292197307
              </a>
            </div>
          </div>


          {/* Desktop right side */}
          <div className="hidden md:flex items-center justify-between w-full max-w-xl">
            <div className="flex gap-4">
              <Link href="/admin/login" className="text-sm text-white hover:underline">
                Admin Login
              </Link>
              <Link href="/jobs" className="text-sm text-white underline hover:no-underline">
                Are you Job Seeker?
              </Link>

            </div>

            <div className="flex gap-2">
              <Link href="https://www.facebook.com/nsthrsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/hr_nst" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-white/70 bg-[#29A0D8] rounded-full flex items-center justify-center"
              >
                <Image src="/x.svg" alt="x" width={15} height={15} />
              </Link>
              <Link href="https://www.instagram.com/nsthrsolutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/nsthrsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.youtube.com/@nsthr208" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile contact info - email and social icons with justify-between */}
          <div className="md:hidden flex justify-between items-center w-full">
            <div className="flex items-center text-white text-sm">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@nsthr.com</span>
            </div>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/nsthrsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/hr_nst" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-white/80 bg-[#29A0D8] rounded-full flex items-center justify-center"
              >
                <Image src="/x.svg" alt="WhatsApp" width={16} height={16} />
              </Link>
              <Link href="https://www.instagram.com/nsthrsolutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/nsthrsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.youtube.com/@nsthr208" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
    
        <Navbar />
    
    </header>
  )
}