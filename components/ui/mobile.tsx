'use client';

import { useState } from 'react';
import { Phone, Video, Mail, MapPin, X, NotebookPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SocialIcon = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="relative group">
    <Link
      href={href}
      className={`
        flex items-center justify-center w-11 h-11 rounded-full 
        transition-all duration-300 bg-white text-black
        group-hover:text-white hover:bg-[--primary]
        shadow-md hover:shadow-[0_0_15px_rgba(41,160,216,0.7)]
        hover:scale-110
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>

    <div className="absolute z-50 hidden group-hover:flex px-3 py-1 text-xs text-white bg-[--primary] rounded shadow-md whitespace-nowrap left-full ml-2 top-1/2 transform -translate-y-1/2">
      {text}
      <div className="absolute w-2 h-2 rotate-45 bg-[--primary] right-full top-1/2 -translate-y-1/2" />
    </div>
  </div>
);

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const radius = 120;
  const angleStep = 90 / 4; // for 5 icons over 90°

  const icons = [
    {
      href: 'tel:+916292197307',
      icon: <Phone className="w-5 h-5" />,
      text: 'Call Us',
    },
    {
      href: 'https://calendly.com/amarik-nsthr/30min',
      icon: <Video className="w-5 h-5" />,
      text: 'Book Meeting',
    },
    {
      href: 'mailto:info@nsthr.com',
      icon: <Mail className="w-5 h-5" />,
      text: 'Email Us',
    },
    {
      href: 'https://www.google.com/maps/dir//nstHr+(+Total+Hr+Solutions+),+Unit+No.+1112,+11th+Floor,+PS+Qube,+Action+Area+I,+2D,+Newtown,+New+Town,+West+Bengal+700136',
      icon: <MapPin className="w-5 h-5" />,
      text: 'Get Directions',
    },
    {
      href: 'https://wa.me/916292197307',
      icon: (
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={20}
          height={20}
          className="w-5 h-5 invert"
        />
      ),
      text: 'WhatsApp',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-[100] md:hidden">
      {/* Floating effect container */}
      <div className="relative animate-float">
        {/* Social icons */}
        {isOpen &&
          icons.map((item, i) => {
            const angle = (angleStep * i * Math.PI) / 180;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute transition-all duration-300 animate-pop-in"
                style={{
                  bottom: `${y}px`,
                  right: `${x}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <SocialIcon href={item.href} icon={item.icon} text={item.text} />
              </div>
            );
          })}

        {/* Main floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-3 bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] rounded-full 
            shadow-lg text-white focus:outline-none transition-all duration-300
            hover:shadow-[0_0_15px_rgba(41,160,216,0.7)] hover:scale-105
            flex items-center justify-center
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <NotebookPen className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pop-in {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pop-in {
          animation: pop-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Mobile;