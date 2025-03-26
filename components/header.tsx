"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
     

     <div className="relative w-full overflow-hidden bg-white text-[#29A0D8] py-1 text-xs">
  <div className="whitespace-nowrap animate-marquee">
    ⚠️ Note: nstHr never charges candidates. If you have any complaints, kindly mail us at 
    <a href="mailto:help@nsthr.in" className="font-bold underline mx-1">help@nsthr.in</a> ⚠️
  </div>
</div>
  

      {/* Contact info bar */}
      <div className="bg-[#29A0D8] py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-4">
            <div className="contact-info">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@nsthr.in</span>
            </div>
            <div className="contact-info">
              <Mail className="w-4 h-4 mr-1" />
              <span>helpdesk@nsthr.in</span>
            </div>
            <div className="contact-info">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91 9502089155</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Link href="/post-job" className="text-sm text-white hover:underline">
              Post Job
            </Link>
            <Link href="/job-seeker" className="text-sm text-white hover:underline">
              Are you Job Seeker?
            </Link>
            <Link href="/employer-form" className="text-sm text-white hover:underline">
              Are you Employer?
            </Link>

            <div className="flex gap-1 ml-2">
              <Link href="https://facebook.com" className="social-icon">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://twitter.com" className="social-icon">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://instagram.com" className="social-icon">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" className="social-icon">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://youtube.com" className="social-icon">
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
              width={80} // Set width directly
              height={100} // Set height directly
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
            <div className="dropdown">
              <span className="font-medium hover:text-[#29A0D8] flex items-center cursor-pointer">
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="dropdown-menu">
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
            <div className="dropdown">
              <span className="font-medium hover:text-[#29A0D8] flex items-center cursor-pointer">
                Industries
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="dropdown-menu">
                <Link href="/industries/insurance" className="dropdown-item">
                  Insurance
                </Link>
                <Link href="/industries/construction" className="dropdown-item">
                  Construction
                </Link>
                <Link href="/industries/tour-travel" className="dropdown-item">
                  Tour & Travel
                </Link>
                <Link href="/industries/automobile" className="dropdown-item">
                  Automobile
                </Link>
                <Link href="/industries/banking" className="dropdown-item">
                  Banking
                </Link>
                <Link href="/industries/technical" className="dropdown-item">
                  Technical
                </Link>
                <Link href="/industries/oil-gas" className="dropdown-item">
                  Oil & Gas
                </Link>
                <Link href="/industries/advertising" className="dropdown-item">
                  Advertising
                </Link>
                <Link href="/industries/it-software" className="dropdown-item">
                  IT Software
                </Link>
                <Link href="/industries/power-energy" className="dropdown-item">
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
            <div className="dropdown">
              <span className="font-medium hover:text-[#29A0D8] flex items-center cursor-pointer">
                Job Seeker
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="dropdown-menu">
                <Link href="/job-seeker/register" className="dropdown-item">
                  Register
                </Link>
                <Link href="/job-seeker/login" className="dropdown-item">
                  Login
                </Link>
                <Link href="/job-seeker/profile" className="dropdown-item">
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
          <nav className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 hover:text-[#29A0D8]">
              Home
            </Link>
            <Link href="/about-us" className="block py-2 hover:text-[#29A0D8]">
              About Us
            </Link>
            <div className="py-2">
              <button className="flex items-center justify-between w-full hover:text-[#29A0D8]">
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-1">
                <Link href="/services/recruitment" className="block py-2 hover:text-[#29A0D8]">
                  Recruitment Services
                </Link>
                <Link href="/services/it-staffing" className="block py-2 hover:text-[#29A0D8]">
                  IT Staffing
                </Link>
                <Link href="/services/project-hiring" className="block py-2 hover:text-[#29A0D8]">
                  Project Hiring
                </Link>
                <Link href="/services/temporary-staffing" className="block py-2 hover:text-[#29A0D8]">
                  Temporary Staffing
                </Link>
                <Link href="/services/rpo" className="block py-2 hover:text-[#29A0D8]">
                  RPO
                </Link>
              </div>
            </div>
            <div className="py-2">
              <button className="flex items-center justify-between w-full hover:text-[#29A0D8]">
                Industries
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-1">
                <Link href="/industries/insurance" className="block py-2 hover:text-[#29A0D8]">
                  Insurance
                </Link>
                <Link href="/industries/construction" className="block py-2 hover:text-[#29A0D8]">
                  Construction
                </Link>
                <Link href="/industries/tour-travel" className="block py-2 hover:text-[#29A0D8]">
                  Tour & Travel
                </Link>
                <Link href="/industries/automobile" className="block py-2 hover:text-[#29A0D8]">
                  Automobile
                </Link>
                <Link href="/industries/banking" className="block py-2 hover:text-[#29A0D8]">
                  Banking
                </Link>
                <Link href="/industries/technical" className="block py-2 hover:text-[#29A0D8]">
                  Technical
                </Link>
                <Link href="/industries/oil-gas" className="block py-2 hover:text-[#29A0D8]">
                  Oil & Gas
                </Link>
                <Link href="/industries/advertising" className="block py-2 hover:text-[#29A0D8]">
                  Advertising
                </Link>
                <Link href="/industries/it-software" className="block py-2 hover:text-[#29A0D8]">
                  IT Software
                </Link>
                <Link href="/industries/power-energy" className="block py-2 hover:text-[#29A0D8]">
                  Power and Energy
                </Link>
              </div>
            </div>
            <Link href="/jobs" className="block py-2 hover:text-[#29A0D8]">
              Jobs
            </Link>
            <Link href="/blog" className="block py-2 hover:text-[#29A0D8]">
              News/Blog
            </Link>
            <div className="py-2">
              <button className="flex items-center justify-between w-full hover:text-[#29A0D8]">
                Job Seeker
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pl-4 mt-1">
                <Link href="/job-seeker/register" className="block py-2 hover:text-[#29A0D8]">
                  Register
                </Link>
                <Link href="/job-seeker/login" className="block py-2 hover:text-[#29A0D8]">
                  Login
                </Link>
                <Link href="/job-seeker/profile" className="block py-2 hover:text-[#29A0D8]">
                  Profile
                </Link>
              </div>
            </div>
            <Link href="/contact" className="block py-2 hover:text-[#29A0D8]">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}