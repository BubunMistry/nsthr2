import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Phone, Video, Mail } from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

export default function SocialSidebar({ position }: SocialSidebarProps) {
  return (
    <div className={`sidebar ${position === "left" ? "sidebar-left" : "sidebar-right"} hidden md:block`}>
      {position === "left" ? (
        // Left sidebar - social media icons
        <>
          <Link href="https://facebook.com" className="sidebar-icon">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com" className="sidebar-icon">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" className="sidebar-icon">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" className="sidebar-icon">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://youtube.com" className="sidebar-icon">
            <Youtube className="w-5 h-5" />
          </Link>
        </>
      ) : (
        // Right sidebar - contact icons
        <>
          <Link href="https://wa.me/919502089155" className="sidebar-icon">
            <Phone className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="sidebar-icon">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="skype:nsthr?call" className="sidebar-icon">
            <Video className="w-5 h-5" />
          </Link>
          <Link href="mailto:info@nsthr.in" className="sidebar-icon">
            <Mail className="w-5 h-5" />
          </Link>
        </>
      )}
    </div>
  )
}

