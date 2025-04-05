"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Video, Mail, MapPin } from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

const SocialSidebar = ({ position }: SocialSidebarProps) => {
  return (
    <div className={`fixed ${position === "left" ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 z-40 hidden md:block`}>
      <div className="flex bg-white rounded-full flex-col gap-4 p-2">
        {position === "left" ? (
          <>
            <SocialIcon 
              href="https://www.facebook.com/nsthrsolutions" 
              icon={<Facebook className="w-5 h-5" />} 
              text="Facebook"
              position={position}
            />
            <SocialIcon 
              href="https://x.com/hr_nst" 
              icon={<Image src="/x.svg" alt="X" width={16} height={16} className="w-4 h-4" />} 
              text="X (Twitter)"
              position={position}
            />
            <SocialIcon 
              href="https://www.instagram.com/nsthrsolutions/" 
              icon={<Instagram className="w-5 h-5" />} 
              text="Instagram"
              position={position}
            />
            <SocialIcon 
              href="https://www.linkedin.com/company/nsthrsolutions" 
              icon={<Linkedin className="w-5 h-5" />} 
              text="LinkedIn"
              position={position}
            />
            <SocialIcon 
              href="https://www.youtube.com/@nsthr208" 
              icon={<Youtube className="w-5 h-5" />} 
              text="YouTube"
              position={position}
            />
          </>
        ) : (
          <>
            <SocialIcon 
              href="tel:+916292197307" 
              icon={<Phone className="w-5 h-5" />} 
              text="Call Us"
              position={position}
            />
            <SocialIcon 
              href="https://wa.me/916292197307" 
              icon={<Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />} 
              text="WhatsApp"
              position={position}
            />
            <SocialIcon 
              href="https://calendly.com/amarik-nsthr/30min" 
              icon={<Video className="w-5 h-5" />} 
              text="Book a Meeting"
              position={position}
            />
            <SocialIcon 
              href="mailto:info@nsthr.com" 
              icon={<Mail className="w-5 h-5" />} 
              text="Email Us"
              position={position}
            />
            <SocialIcon 
              href="/contact/#map" 
              icon={<MapPin className="w-5 h-5" />} 
              text="Get Directions"
              position={position}
            />
          </>
        )}
      </div>
    </div>
  )
}

const SocialIcon = ({ href, icon, text, position }: { 
  href: string, 
  icon: React.ReactNode, 
  text: string, 
  position: "left" | "right" 
}) => {
  const tooltipSide = position === 'left' ? 'right' : 'left'
  
  return (
    <div className="relative group">
      <Link 
        href={href} 
        className="sidebar-icon" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {icon}
      </Link>
      
      <div className={`
        absolute z-50 hidden group-hover:flex px-3 py-1 text-xs text-white bg-[--primary] rounded shadow-md whitespace-nowrap
        ${tooltipSide === 'right' ? 'left-full ml-2' : 'right-full mr-2'}
        top-1/2 transform -translate-y-1/2
      `}>
        {text}
        <div className={`
          absolute w-2 h-2 rotate-45 bg-[--primary]
          ${tooltipSide === 'right' ? 'right-full' : 'left-full'}
          top-1/2 -translate-y-1/2
        `} />
      </div>
    </div>
  )
}

export default SocialSidebar