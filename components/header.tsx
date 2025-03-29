"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react"

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
      {/* Announcement bar */}
      <div className="relative w-full overflow-hidden bg-white text-[#29A0D8] py-1 text-xs">
        <div className="whitespace-nowrap animate-marquee">
          ⚠️ Note: nstHr never charges candidates. If you have any complaints, kindly mail us at
          <a href="mailto:help@nsthr.in" className="font-bold underline mx-1">help@nsthr.in</a> ⚠️
        </div>
      </div>

      {/* Contact info bar */}
      <div className="bg-[#29A0D8] py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Desktop contact info */}
          <div className="hidden md:flex flex-wrap items-center gap-4 text-white text-sm">
            <div className="contact-info">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@nsthr.com</span>
            </div>
            <div className="contact-info">
              <Mail className="w-4 h-4 mr-1" />
              <span>helpdesk@nsthr.in</span>
            </div>
            <div className="contact-info">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91 6292197307</span>
            </div>
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center justify-between w-full max-w-xl">
            <div className="flex gap-4">
              <Link href="/post-job" className="text-sm text-white hover:underline">
                Post Job
              </Link>
              <Link href="/job-seeker" className="text-sm text-white underline hover:no-underline">
                Are you Job Seeker?
              </Link>
              <Link href="/employer-form" className="text-sm text-white hover:underline">
                Are you Employer?
              </Link>
            </div>

            <div className="flex gap-2">
            <Link href="https://www.facebook.com/nsthrsolutions" className="text-white hover:text-white/80">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-white/80">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://www.instagram.com/nsthrsolutions/" className="text-white hover:text-white/80">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/nsthrsolutions" className="text-white hover:text-white/80">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.youtube.com/@nsthr208" className="text-white hover:text-white/80">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile contact info - email and social icons with justify-between */}
          <div className="md:hidden flex justify-between items-center w-full">
            <div className="flex items-center text-white text-sm">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@nsthr.in</span>
            </div>
            <div className="flex gap-2">
            <Link href="https://www.facebook.com/nsthrsolutions" className="text-white hover:text-white/80">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" className="text-white hover:text-white/80">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="https://www.instagram.com/nsthrsolutions/" className="text-white hover:text-white/80">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/company/nsthrsolutions" className="text-white hover:text-white/80">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="https://www.youtube.com/@nsthr208" className="text-white hover:text-white/80">
              <Youtube className="w-4 h-4" />
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container px-3 mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=100&width=80"
              alt="nstHr Logo"
              width={80}
              height={100}
              className=""
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-[#29A0D8]">
              Home
            </Link>
            <Link href="/about-us" className="font-medium hover:text-[#29A0D8]">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="font-medium hover:text-[#29A0D8] flex items-center"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 ${openDropdown === 'services' ? 'block' : 'hidden'} group-hover:block`}>
                <Link href="/services/recruitment" className="dropdown-item">
                  Recruitment Services
                </Link>
                <Link href="/services/it-staffing" className="dropdown-item">
                  IT Staffing
                </Link>
                <Link href="/services/project-hiring" className="dropdown-item">
                  Project Hiring
                </Link>
                <Link href="/services/temporary-staffing" className="dropdown-item">
                  Temporary Staffing
                </Link>
                <Link href="/services/rpo" className="dropdown-item">
                  RPO
                </Link>
              </div>
            </div>
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <button 
                className="font-medium hover:text-[#29A0D8] flex items-center"
                onClick={() => toggleDropdown('industries')}
              >
                Industries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-10 ${openDropdown === 'industries' ? 'block' : 'hidden'} group-hover:block grid grid-cols-2`}>
                <Link href="/industries" className="dropdown-item">
                  Insurance
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Construction
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Tour & Travel
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Automobile
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Banking
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Technical
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Oil & Gas
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Advertising
                </Link>
                <Link href="/industries" className="dropdown-item">
                  IT Software
                </Link>
                <Link href="/industries" className="dropdown-item">
                  Power and Energy
                </Link>
              </div>
            </div>
            
            <Link href="/jobs" className="font-medium hover:text-[#29A0D8]">
              Jobs
            </Link>
            <Link href="/blog" className="font-medium hover:text-[#29A0D8]">
              News/Blog
            </Link>
            
            {/* Job Seeker Dropdown */}
            <div className="relative group">
              <button 
                className="font-medium hover:text-[#29A0D8] flex items-center"
                onClick={() => toggleDropdown('jobseeker')}
              >
                Job Seeker
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-10 ${openDropdown === 'jobseeker' ? 'block' : 'hidden'} group-hover:block`}>
                <Link href="/auth/register" className="dropdown-item">
                  Register
                </Link>
                <Link href="/auth/register?login=true" className="dropdown-item">
                  Login
                </Link>
                <Link href="/auth/profile" className="dropdown-item">
                  Profile
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="font-medium hover:text-[#29A0D8]">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full hover:text-[#29A0D8]"
                onClick={() => toggleDropdown('mobile-services')}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-services' && (
                <div className="pl-4 mt-1">
                  <Link href="/services/recruitment" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Recruitment Services
                  </Link>
                  <Link href="/services/it-staffing" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    IT Staffing
                  </Link>
                  <Link href="/services/project-hiring" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Project Hiring
                  </Link>
                  <Link href="/services/temporary-staffing" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Temporary Staffing
                  </Link>
                  <Link href="/services/rpo" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    RPO
                  </Link>
                </div>
              )}
            </div>
            
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full hover:text-[#29A0D8]"
                onClick={() => toggleDropdown('mobile-industries')}
              >
                Industries
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-industries' && (
                <div className="pl-4 mt-1">
                  <Link href="/industries/insurance" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Insurance
                  </Link>
                  <Link href="/industries/construction" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Construction
                  </Link>
                  <Link href="/industries/tour-travel" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Tour & Travel
                  </Link>
                  <Link href="/industries/automobile" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Automobile
                  </Link>
                  <Link href="/industries/banking" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Banking
                  </Link>
                  <Link href="/industries/technical" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Technical
                  </Link>
                  <Link href="/industries/oil-gas" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Oil & Gas
                  </Link>
                  <Link href="/industries/advertising" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Advertising
                  </Link>
                  <Link href="/industries/it-software" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    IT Software
                  </Link>
                  <Link href="/industries/power-energy" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Power and Energy
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/jobs" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
              Jobs
            </Link>
            <Link href="/blog" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
              News/Blog
            </Link>
            
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full hover:text-[#29A0D8]"
                onClick={() => toggleDropdown('mobile-jobseeker')}
              >
                Job Seeker
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-jobseeker' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-jobseeker' && (
                <div className="pl-4 mt-1">
                  <Link href="/auth/register" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Register
                  </Link>
                  <Link href="/auth/register?login=true" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/auth/profile" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}