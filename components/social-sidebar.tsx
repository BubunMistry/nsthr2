"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Video,
  Mail,
  MapPin,
} from "lucide-react"

interface SocialSidebarProps {
  position: "left" | "right"
}

const SocialSidebar = ({ position }: SocialSidebarProps) => {
  return (
    <div
      className={`fixed ${position === "left" ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 z-40 hidden md:block`}
    >
      <div className="flex bg-white rounded-full flex-col gap-4 p-2 shadow-md shadow-black/20">
        {position === "left" ? (
          <>
            <SocialIcon
              href="https://www.facebook.com/nsthrsolutions"
              icon={<Facebook className="w-5 h-5" />}
              text="Facebook"
              brand="facebook"
              position={position}
            />
            <SocialIcon
              href="https://x.com/hr_nst"
              icon={
                <Image
                  src="/x.svg"
                  alt="X"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              }
              text="X (Twitter)"
              brand="x"
              position={position}
            />
            <SocialIcon
              href="https://www.instagram.com/nsthrsolutions/"
              icon={<Instagram className="w-5 h-5" />}
              text="Instagram"
              brand="instagram"
              position={position}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/nsthrsolutions"
              icon={<Linkedin className="w-5 h-5" />}
              text="LinkedIn"
              brand="linkedin"
              position={position}
            />
            <SocialIcon
              href="https://www.youtube.com/@nsthr208"
              icon={<Youtube className="w-5 h-5" />}
              text="YouTube"
              brand="youtube"
              position={position}
            />
          </>
        ) : (
          <>
            <SocialIcon
              href="tel:+916292197307"
              icon={<Phone className="w-5 h-5" />}
              text="Call Us"
              brand="phone"
              position={position}
            />
            <SocialIcon
              href="https://wa.me/916292197307"
              icon={
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              }
              text="WhatsApp"
              brand="whatsapp"
              position={position}
            />
            <SocialIcon
              href="https://calendly.com/amarik-nsthr/30min"
              icon={<Video className="w-5 h-5" />}
              text="Book a Meeting"
              brand="video"
              position={position}
            />
            <SocialIcon
              href="mailto:info@nsthr.com"
              icon={<Mail className="w-5 h-5" />}
              text="Email Us"
              brand="mail"
              position={position}
            />
            <SocialIcon
              href="/contact/#map"
              icon={<MapPin className="w-5 h-5" />}
              text="Get Directions"
              brand="map"
              position={position}
            />
          </>
        )}
      </div>
    </div>
  )
}

const SocialIcon = ({
  href,
  icon,
  text,
  position,
  brand,
}: {
  href: string
  icon: React.ReactNode
  text: string
  position: "left" | "right"
  brand: string
}) => {
  const tooltipSide = position === "left" ? "right" : "left"

  const brandStyles: Record<string, { bg: string }> = {
    facebook: { bg: "hover:bg-[#1877F2]" },
    instagram: { bg: "hover:bg-[#E1306C]" },
    linkedin: { bg: "hover:bg-[#0A66C2]" },
    youtube: { bg: "hover:bg-[#FF0000]" },
    x: { bg: "hover:bg-black" },
    whatsapp: { bg: "hover:bg-[#25D366]" },
    phone: { bg: "hover:bg-green-600" },
    video: { bg: "hover:bg-blue-600" },
    mail: { bg: "hover:bg-rose-500" },
    map: { bg: "hover:bg-orange-600" },
  }

  const current = brandStyles[brand] || { bg: "hover:bg-gray-400" }

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`
          sidebar-icon flex items-center justify-center w-10 h-10 rounded-full 
          transition-all duration-300 bg-white text-black
          group-hover:text-white
          ${current.bg}
        `}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </Link>

      <div
        className={`absolute z-50 hidden group-hover:flex px-3 py-1 text-xs text-white bg-[--primary] rounded shadow-md whitespace-nowrap
        ${tooltipSide === "right" ? "left-full ml-2" : "right-full mr-2"}
        top-1/2 transform -translate-y-1/2`}
      >
        {text}
        <div
          className={`absolute w-2 h-2 rotate-45 bg-[--primary]
          ${tooltipSide === "right" ? "right-full" : "left-full"}
          top-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  )
}

export default SocialSidebar
