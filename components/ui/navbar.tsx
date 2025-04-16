"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  Newspaper,
  Contact,
  ChevronDown,
  LogIn,
  UserPlus,
  Factory,
  Laptop2,
  Phone,
  ShoppingCart,
  Film,
  Construction,
  Plane,
  Pill,
  Hospital,
  Scaling,
  Microscope,
  PencilLine,
    Warehouse,
    Rss, Laptop, Clock, Workflow, Banknote 
} from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([])

  // Magnetic button effect
  useEffect(() => {
    const buttons = buttonsRef.current.filter(Boolean)

    const handleMouseMove = (e: MouseEvent) => {
      buttons.forEach((button) => {
        if (!button) return

        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        button.style.setProperty("--x", `${x}px`)
        button.style.setProperty("--y", `${y}px`)
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const industries = [
    { href: "/industries/information-technology", label: "Information Technology", icon: <Laptop2 size={16} /> },
    { href: "/industries/it-enabled", label: "IT Enabled Services", icon: <Rss size={16} /> },
    { href: "/industries/telecom", label: "Telecom", icon: <Phone size={16} /> },
    { href: "/industries/staffing", label: "Temporary Staffing", icon: <Users size={16} /> },
    { href: "/industries/outsourcing", label: "Outsourcing", icon: <Scaling size={16} /> },
    { href: "/industries/manufacturing", label: "Manufacturing", icon: <Factory size={16} /> },
    { href: "/industries/retail", label: "Retail", icon: <ShoppingCart size={16} /> },
    { href: "/industries/fmcg", label: "FMCG", icon:<Warehouse size={16} />  },
    { href: "/industries/research-analytics", label: "Research & Analytics", icon: <Microscope size={16} /> },
    { href: "/industries/media-field", label: "Media", icon: <Film size={16} /> },
    { href: "/industries/infrastructure", label: "Infrastructure", icon: <Construction size={16} /> },
    { href: "/industries/travel", label: "Travel & Hospitality", icon: <Plane size={16} /> },
    { href: "/industries/iron-steel", label: "Iron & Steel", icon: <Factory size={16} /> },
    { href: "/industries/pharma", label: "Pharma", icon: <Pill size={16} /> },
    { href: "/industries/hospital", label: "Hospital", icon: <Hospital size={16} /> },
  ]

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about-us", label: "About Us", icon: <Users size={18} /> },
    {
      label: "Services",
      icon: <Briefcase size={18} />,
      submenu : [
        { href: "/services/recruitment-services", label: "Recruitment Services", icon: <Users size={16} /> },
        { href: "/services/it-staffing", label: "IT Staffing", icon: <Laptop size={16} /> },
        { href: "/services/project-hiring", label: "Project Hiring", icon: <Briefcase size={16} /> },
        { href: "/services/temporary-Staffing", label: "Temporary Staffing", icon: <Clock size={16} /> },
        { href: "/services/rpo", label: "RPO", icon: <Workflow size={16} /> },
        { href: "/services/payroll", label: "Payroll Management", icon: <Banknote size={16} /> },
      ]
    },
    {
      label: "Industries",
      icon: <Factory size={18} />,
      submenu: industries,
    },
    { href: "/jobs", label: "Jobs", icon: <Briefcase size={18} /> },
    { href: "/blog", label: "News/Blog", icon: <Newspaper size={18} /> },
    {
      label: "Job Seeker",
      icon: <UserPlus size={18} />,
      submenu: [
        { href: "/auth/register", label: "Register", icon: <UserPlus size={16} /> },
        { href: "/auth/register?login=true", label: "Login", icon: <LogIn size={16} /> },
      ],
      badge: true,
    },
    { href: "/contact", label: "Contact", icon: <Contact size={18} /> },
  ]

  return (
    <div className="relative z-50 font-sans">
      {/* Animated background layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#29A0D8]/5 to-[#1E7CAD]/5 pointer-events-none -z-10"></div>

      <div className="flex justify-between items-center px-4 sm:px-6 py-2 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        {/* Logo with particle effect - always on left */}
        <Link href="/" className="flex items-center group relative">
          <div className="relative overflow-hidden">
            <Image
              src="/nstHr_logo.png"
              alt="nstHr Logo"
              width={130}
              height={50}
              className="h-auto w-[90px] sm:w-[100px] md:w-[100px] p-2 object-contain transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#29A0D8_0%,_transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
          </div>
          <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] w-0 group-hover:w-full transition-all duration-500"></span>
        </Link>

        {/* Mobile menu button with animation */}
        <button
          className="lg:hidden p-2 rounded-full bg-gradient-to-br from-[#29A0D8] to-[#1E7CAD] text-white shadow-lg hover:shadow-[#29A0D8]/40 transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop navigation - always on right */}
        <nav className="hidden lg:flex items-center gap-0.2">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              ref={(el) => {
                buttonsRef.current[index] = el;
              }}
            >
              {item.submenu ? (
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 rounded-full transition-all duration-300 hover:bg-[#29A0D8]/10 group-hover:text-[#29A0D8] text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#29A0D8]">{item.icon}</span>
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Animated dropdown */}
                  <div
                    className={`absolute left-0 mt-2 min-w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                      activeDropdown === item.label
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-1 pointer-events-none"
                    }`}
                    style={{
                      boxShadow: "0 10px 30px -10px rgba(41, 160, 216, 0.3)",
                    }}
                  >
                    <div className="bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] h-1 w-full"></div>
                    <div className="max-h-[60vh] overflow-y-auto">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-[#29A0D8]/10 hover:text-[#29A0D8] transition-colors duration-200 border-b border-gray-100 last:border-b-0 gap-2"
                        >
                          {"icon" in subItem && subItem.icon}
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Floating badge for Job Seeker with tooltip */}
                  {item.badge && (
                    <div className="group relative">
                      <span className="absolute -top-12 -right-2 bg-[#29A0D8] text-white text-xs px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 transform group-hover:scale-110 transition-transform duration-200">
                        <LogIn size={10} />
                        <span>Login</span>
                      </span>
                      
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-full transition-all duration-300 hover:bg-[#29A0D8]/10 hover:text-[#29A0D8] gap-1.5 text-sm"
                >
                  <span className="text-[#29A0D8]">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Magnetic CTA Button */}
          <div
            className="relative ml-2 overflow-hidden rounded-lg"
            ref={(el) => {
              buttonsRef.current[navItems.length] = el;
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_100px)_var(--y,_100px),_#29A0D8_0%,_#1E7CAD_100%)] opacity-100 transition-opacity duration-500 hover:opacity-90"></div>
            <Link
              href="/contact"
              className="relative flex items-center px-4 py-2 text-white text-sm font-medium gap-1.5"
            >
                <PencilLine size={16} />
             
              <span>Get in Touch</span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_10%)] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu with slide-in animation - overlay style */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto animate-fadeIn">
          <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/nstHr_logo.png"
                alt="nstHr Logo"
                width={130}
                height={50}
                className="h-auto w-[90px] sm:w-[120px] py-2 object-contain"
              />
            </Link>
            <button
              className="p-2 rounded-full bg-gradient-to-br from-[#29A0D8] to-[#1E7CAD] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-3">
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center w-full py-2 text-base font-medium"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#29A0D8]">{item.icon}</span>
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`ml-auto w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="pl-7 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center py-1.5 text-sm text-gray-600 hover:text-[#29A0D8] gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {"icon" in subItem && <span className="text-[#29A0D8]">{subItem.icon}</span>}
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center py-2 text-base font-medium gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[#29A0D8]">{item.icon}</span>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA - same as desktop */}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] text-white rounded-lg text-sm font-medium gap-2 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Contact size={16} />
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
