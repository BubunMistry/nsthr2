import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Phone, Video, Mail,Send } from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

export default function SocialSidebar({ position }: SocialSidebarProps) {
  return (
    <div className={`sidebar ${position === "left" ? "sidebar-left" : "sidebar-right"} hidden md:block`}>
      {position === "left" ? (
        // Left sidebar - social media icons
        <>
          <Link href="https://www.facebook.com/nsthrsolutions" className="sidebar-icon">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com" className="sidebar-icon">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/nsthrsolutions/" className="sidebar-icon">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/nsthrsolutions" className="sidebar-icon">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://www.youtube.com/@nsthr208" className="sidebar-icon">
            <Youtube className="w-5 h-5" />
          </Link>
        </>
      ) : (
        // Right sidebar - contact icons
        <>
          <Link href="tel:+916292197307" className="sidebar-icon">
            <Phone className="w-5 h-5" />
          </Link>
          <Link href="https://wa.me/916292197307" className="sidebar-icon">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="skype:nsthr?call" className="sidebar-icon">
            <Video className="w-5 h-5" />
          </Link>
          <Link href="mailto:info@nsthr.com" className="sidebar-icon">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://t.me/nsthr" className="sidebar-icon">
  <Send className="w-5 h-5" />
</Link>

        </>
      )}
    </div>
  )
}

