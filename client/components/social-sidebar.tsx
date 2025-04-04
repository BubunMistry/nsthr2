import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Phone, Video, Mail, Send } from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

export default function SocialSidebar({ position }: SocialSidebarProps) {
  return (
    <div className={`sidebar ${position === "left" ? "sidebar-left" : "sidebar-right"} hidden md:block`}>
      {position === "left" ? (
        // Left sidebar - social media icons
        <>
          <Link href="https://www.facebook.com/nsthrsolutions" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/hr_nst"
            className="sidebar-icon" target="_blank" rel="noopener noreferrer"
          >
            <Image src="/x.svg" alt="WhatsApp" width={16} height={16} />
          </Link>
          <Link href="https://www.instagram.com/nsthrsolutions/" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/nsthrsolutions" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://www.youtube.com/@nsthr208" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5" />
          </Link>
        </>
      ) : (
        // Right sidebar - contact icons
        <>
          <Link href="tel:+916292197307" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Phone className="w-5 h-5" />
          </Link>
          <Link
            href="https://wa.me/916292197307"
            className="sidebar-icon" target="_blank" rel="noopener noreferrer"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
          </Link>
          <Link href="https://calendly.com/amarik-nsthr/30min" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Video className="w-5 h-5" />
          </Link>
          <Link href="mailto:info@nsthr.com" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://t.me/nsthr" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
            <Send className="w-5 h-5" />
          </Link>

        </>
      )}
    </div>
  )
}

