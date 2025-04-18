'use client'

import { useRef, useEffect, useState } from "react"

export function TopMarquee() {
  const message = `⚠️ Note: NSTHR never charges candidates. If you have any complaints, kindly mail us at helpdesk@nsthr.com ⚠️`
  const [width, setWidth] = useState(0)
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageRef.current) {
      setWidth(messageRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white text-[#29A0D8] py-2 text-xs border-b z-50">
      <div
        className="absolute top-0 whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${width / 50}s`, // adjust speed by dividing pixel width
        }}
      >
        <div ref={messageRef} className="px-4 inline-block">
          {message}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  )
}
