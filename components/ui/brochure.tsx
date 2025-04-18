"use client";

import { useState } from "react";
import { FileText, X, Download } from "lucide-react";
import Tooltip from "@/components/ui/Tooltip";

export default function Brochure() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/nstHr Official Brochure.pdf";
    link.download = "NSTHR_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-float">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Main brochure button */}
       
          <button
            onClick={downloadBrochure}
            className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#29A0D8] to-[#1E90D8] shadow-lg shadow-blue-300/30 flex items-center justify-center hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-105"
          >
            <FileText className="text-white w-6 h-6" />
            
            {/* Download indicator that appears on hover */}
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="text-[#29A0D8] w-3 h-3" />
            </div>
          </button>
    

        {/* Close button with fancy animation */}
        {isHovered && (
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center p-1 shadow-md hover:bg-gray-100 transition-all duration-200 animate-ping-once"
          >
            <X className="text-red-500 w-3 h-3" />
          </button>
        )}
      </div>

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ping-once {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-ping-once {
          animation: ping-once 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}