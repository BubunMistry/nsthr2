import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#29A0D8] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="mb-2">
              <Image
                src="/white logo.svg?height=60&width=150"
                alt="nstHr Logo"
                width={150}
                height={60}
              />
            </div>
            <p className="text-white/90 italic">
              "Building bridges between talent and opportunity to create thriving workplaces."
            </p>
            <div className="pt-4">
              <p className="text-sm text-white/80">
                ISO 9001:2015 Certified Recruitment Agency
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-white/90 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-white/90 hover:text-white transition-colors">
                  Job Listings
                </Link>
              </li>
              <li>
                <Link href="/employers" className="text-white/90 hover:text-white transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="text-white/90 hover:text-white transition-colors">
                  For Candidates
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
                  HR Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career-advice" className="text-white/90 hover:text-white transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="/interview-tips" className="text-white/90 hover:text-white transition-colors">
                  Interview Tips
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="text-white/90 hover:text-white transition-colors">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="/about-us/#faq" className="text-white/90 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <p className="text-white/90">
                  Unit No. 1112, 11th Floor, PS Qube,<br />
                  Action Area I, Newtown,<br />
                  Kolkata, West Bengal 700136
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="text-white/90">+91 6292197307</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="text-white/90">info@nsthr.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-bold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/nsthrsolutions" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/hr_nst" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                >
                  <Image src="/x.svg" alt="WhatsApp" width={20} height={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/nsthrsolutions/" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/nsthrsolutions" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@nsthr208" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1E90D8] py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/90">
              © {new Date().getFullYear()} nstHr Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-sm text-white/90 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/90 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact/#map" className="text-sm text-white/90 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}