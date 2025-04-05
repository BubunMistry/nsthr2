import Link from "next/link"
import Image from "next/image"
import Tooltip from "@/components/ui/Tooltip"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Video, Mail, MapPin } from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

export default function SocialSidebar({ position }: SocialSidebarProps) {
  return (
    <div className={`sidebar ${position === "left" ? "sidebar-left" : "sidebar-right"} hidden md:block`}>
      {position === "left" ? (
        <>
          <Tooltip text="Facebook" position={position}>
            <Link href="https://www.facebook.com/nsthrsolutions" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="X (Twitter)" position={position}>
            <Link href="https://x.com/hr_nst" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" alt="X" width={16} height={16} />
            </Link>
          </Tooltip>
          <Tooltip text="Instagram" position={position}>
            <Link href="https://www.instagram.com/nsthrsolutions/" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="LinkedIn" position={position}>
            <Link href="https://www.linkedin.com/company/nsthrsolutions" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="YouTube" position={position}>
            <Link href="https://www.youtube.com/@nsthr208" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5" />
            </Link>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip text="Call Us" position={position}>
            <Link href="tel:+916292197307" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="WhatsApp" position={position}>
            <Link href="https://wa.me/916292197307" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </Link>
          </Tooltip>
          <Tooltip text="Book a Meeting" position={position}>
            <Link href="https://calendly.com/amarik-nsthr/30min" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Video className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="Email Us" position={position}>
            <Link href="mailto:info@nsthr.com" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5" />
            </Link>
          </Tooltip>
          <Tooltip text="Get Directions" position={position}>
            <Link href="/contact/#map" className="sidebar-icon" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5" />
            </Link>
          </Tooltip>
        </>
      )}
    </div>
  )
}
