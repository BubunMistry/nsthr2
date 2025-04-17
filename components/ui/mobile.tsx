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
    shadow-md hover:shadow-[0_0_10px_rgba(41,160,216,0.7)]
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
      icon: <Phone className="w-5 h-5 shadow-xl" />,
      text: 'Call Us',
    },
    {
      href: 'https://calendly.com/amarik-nsthr/30min',
      icon: <Video className="w-5 h-5 shadow-xl" />,
      text: 'Book Meeting',
    },
    {
      href: 'mailto:info@nsthr.com',
      icon: <Mail className="w-5 h-5 shadow-xl" />,
      text: 'Email Us',
    },
    {
      href: 'https://www.google.com/maps/dir//nstHr+(+Total+Hr+Solutions+),+Unit+No.+1112,+11th+Floor,+PS+Qube,+Action+Area+I,+2D,+Newtown,+New+Town,+West+Bengal+700136',
      icon: <MapPin className="w-5 h-5 shadow-xl" />,
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
          className="w-5 h-5 invert shadow-xl" // make it black
        />
      ),
      text: 'WhatsApp',
    },
  ];

  return (
    <div className="fixed bottom-2 right-2 z-[100] md:hidden">
      {isOpen &&
        icons.map((item, i) => {
          const angle = (angleStep * i * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute transition-all duration-300"
              style={{
                bottom: `${y}px`,
                right: `${x}px`,
              }}
            >
              <SocialIcon href={item.href} icon={item.icon} text={item.text} />
            </div>
          );
        })}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] rounded-full shadow-lg text-white focus:outline-none transition-transform duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white m-1" />
        ) : (
           <NotebookPen
         
          
            className="w-6 h-6 shadow-md shadow-[#29A0D8] m-1"
          />
        )}
      </button>
    </div>
  );
};

export default Mobile;
