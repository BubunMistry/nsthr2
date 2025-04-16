"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Expert IT Recruitment, On-Demand",
    subtitle:
      "Hire top-tier developers, engineers, and IT professionals who match your exact tech stack and project needs.",
    cta: "Hire IT Talent",
    image: "/hero3.webp",
    link: "/industries/information-technology",
  },
  {
    title: "RPO Services Tailored for You",
    subtitle:
      "Streamline your entire hiring process with our end-to-end RPO solutions designed for speed, scale, and success.",
    cta: "Explore RPO Services",
    image: "/hero2.webp",
    link: "/services/rpo",
  },
  {
    title: "Industries We Serve Across India",
    subtitle:
      "From IT and healthcare to manufacturing and finance, NSTHR delivers recruitment solutions across all sectors.",
    cta: "View Industries",
    image: "/hero1.webp",
    link: "/services/recruitment-services",
  },
  {
    title: "Empowering Media Talent Acquisition",
    subtitle:
      "Connect with top-tier creative minds, storytellers, and digital experts to elevate your media presence.",
    cta: "Explore Media Hiring",
    image: "/hero4.webp", 
    link: "/industries/media-field",
    
  }
  
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[510px] w-full overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full flex transition-opacity duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              className="object-cover w-full h-full"
              priority={index === 0}
            />
            {/* Darker Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-8 md:px-16">
              <div className="max-w-2xl sm:px-10 lg:px-16 text-left">
                <h1 className="text-4xl lg:text-5xl uppercase font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white mb-8">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={slide.link}>
                    <Button className="bg-[#29A0D8] hover:bg-[#1E90D8] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-all">
                      {slide.cta} <ChevronRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:border-[#29A0D8] hover:text-[#29A0D8] hover:bg-transparent flex items-center gap-2 transition-all group"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Rounded Navigation Arrows */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 w-12 h-12 flex items-center justify-center rounded-full"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 w-12 h-12 flex items-center justify-center rounded-full"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
