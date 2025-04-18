"use client"

import { useEffect, useState } from "react"
import { X, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

export function WarningPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 300) // Show after slight delay

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div
        className={cn(
          "relative w-[90%] max-w-lg p-6 rounded-lg bg-white shadow-xl animate-popup",
          "border border-[#29A0D8]/20"
        )}
        style={{
          boxShadow: "0 0 30px rgba(41, 160, 216, 0.3)"
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-[#29A0D8] hover:text-black"
          onClick={() => setShow(false)}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex items-center gap-2 mb-4 text-[#29A0D8]  font-semibold text-base">
          <AlertTriangle className="w-5 h-5" />
          <span>Important Notice</span>
        </div>

        {/* Message */}
        <p className="text-sm text-black leading-relaxed">
          ⚠️ NSTHR never charges any fees from job seekers at any stage of the hiring process.
          If you are asked for money, report it immediately. <br />
          <span className="font-medium text-[#29A0D8]">
            📧 Contact:{" "}
            <a
              href="mailto:helpdesk@nsthr.com"
              className="underline hover:text-black transition"
            >
              helpdesk@nsthr.com
            </a>
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-popup {
          animation: popup 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
