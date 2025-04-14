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
          <a href="mailto:help@nsthr.in" className="font-bold underline mx-1">helpdesk@nsthr.com</a> ⚠️
        </div>
      </div>

      {/* Contact info bar */}
      <div className="bg-[#29A0D8] py-2 px-4">
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
                Post Job
              </Link>
              <Link href="/jobs" className="text-sm text-white underline hover:no-underline">
                Are you Job Seeker?
              </Link>
              <Link href="/employer-form" className="text-sm text-white hover:underline">
                Are you Employer?
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
              <button className="font-medium hover:text-[#29A0D8] flex items-center cursor-default">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:flex flex-col">
                <Link href="/services/recruitment-services" className="dropdown-item">Recruitment Services</Link>
                <Link href="/services/it-staffing" className="dropdown-item">IT Staffing</Link>
                <Link href="/services/project-hiring" className="dropdown-item">Project Hiring</Link>
                <Link href="/services/temporary-Staffing" className="dropdown-item">Temporary Staffing</Link>
                <Link href="/services/rpo" className="dropdown-item">RPO</Link>
              </div>
            </div>





            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="font-medium hover:text-[#29A0D8] flex items-center cursor-default">
                Industries
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:flex flex-col">
                <Link href="/industries/information-technology" className="dropdown-item">Information Technology</Link>
                <Link href="/industries/it-enabled" className="dropdown-item">IT Enabled Services</Link>
                <Link href="/industries/telecom" className="dropdown-item">Telecom</Link>
                <Link href="/industries/staffing" className="dropdown-item">Temporary Staffing</Link>
                <Link href="/industries/outsourcing" className="dropdown-item">Outsourcing</Link>
                <Link href="/industries/manufacturing" className="dropdown-item">Manufacturing</Link>
                <Link href="/industries/retail" className="dropdown-item">Retail</Link>
                <Link href="/industries/fmcg" className="dropdown-item">FMCG</Link>
                <Link href="/industries/research-analytics" className="dropdown-item">Research and Analytics</Link>
                <Link href="/industries/media-field" className="dropdown-item">Media</Link>
                <Link href="/industries/infrastructure" className="dropdown-item">Infrastructure</Link>
                <Link href="/industries/travel" className="dropdown-item">Travel and Hospitality</Link>
                <Link href="/industries/iron-steel" className="dropdown-item">Iron & Steel</Link>
                <Link href="/industries/pharma" className="dropdown-item">Pharma</Link>
                <Link href="/industries/hospital" className="dropdown-item">Hospital</Link>
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

              <button className="font-medium hover:text-[#29A0D8] flex items-center cursor-pointer relative">
                Job Seeker
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>

                {/* Floating Login Badge */}
                <span className="absolute -top-4 right-2 bg-[#29A0D8] text-white text-xs px-2 py-0.5 rounded-full shadow-lg group-hover:hidden">
                  Login
                </span>
              </button>

              <div className={`absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-10 ${openDropdown === 'jobseeker' ? 'block' : 'hidden'} group-hover:block`}>
                <Link href="/auth/register" className="dropdown-item">
                  Register
                </Link>
                <Link href="/auth/register?login=true" className="dropdown-item">
                  Login
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


                  <Link href="/industries/information-technology" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Information Technology</Link>

                  <Link href="/industries/it-enabled" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>IT Enabled Services</Link>

                  <Link href="/industries/information-technology" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Information Technology</Link>
                  <Link href="/industries/telecom" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Telecom</Link>
                  <Link href="/industries/staffing" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Temporary Staffing</Link>
                  <Link href="/industries/outsourcing" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Outsourcing</Link>

                  <Link href="/industries/manufacturing" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Manufacturing</Link>
                  <Link href="/industries/retail" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Retail</Link> 
                  <Link href="/industries/fmcg" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>FMCG</Link>
                  <Link href="/industries/research-analytics" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Research and Analytics</Link>
                  <Link href="/industries/media-field" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Media</Link>
                  <Link href="/industries/infrastructure" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Infrastructure</Link>
                  <Link href="/industries/travel" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Travel and Hospitality</Link>
                  <Link href="/industries/iron-steel" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Iron & Steel</Link>
                  <Link href="/industries/pharma" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>pharma</Link>
                  <Link href="/industries/hospital" className="block py-2 hover:text-[#29A0D8]" onClick={() => setIsMenuOpen(false)}>Hospital</Link>

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