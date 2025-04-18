"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    title: "RPO Services Tailored for You",
    subtitle: "Streamline your entire hiring process with our end-to-end RPO solutions designed for speed, scale, and success.",
    cta: "Explore RPO Services",
    image: "/hero2.webp",
    link: "/services/rpo",
  },
  {
    title: "Expert IT Recruitment, On-Demand",
    subtitle: "Hire top-tier developers, engineers, and IT professionals who match your exact tech stack and project needs.",
    cta: "Hire IT Talent",
    image: "/hero3.webp",
    link: "/industries/information-technology",
  },
  {
    title: "Industries We Serve Across India",
    subtitle: "From IT and healthcare to manufacturing and finance, NSTHR delivers recruitment solutions across all sectors.",
    cta: "View Industries",
    image: "/hero1.webp",
    link: "/services/recruitment-services",
  },
  {
    title: "Empowering Media Talent Acquisition",
    subtitle: "Connect with top-tier creative minds, storytellers, and digital experts to elevate your media presence.",
    cta: "Explore Media Hiring",
    image: "/hero4.webp",
    link: "/industries/media-field",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeSlide) return;
    setIsTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section 
      className="relative w-full aspect-video max-h-[80vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              quality={90}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 max-w-[50%]">
              {/* Text Content */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-snug">
                  {slide.title}
                </h1>
                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4 opacity-90">
                  {slide.subtitle}
                </p>
              </div>

              {/* Buttons Container */}
              <div className="flex flex-row gap-2 w-full max-w-xs">
                <Link href={slide.link}>
                  <Button className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 h-auto bg-[#29A0D8] hover:bg-[#1E90D8] text-white">
                    {slide.cta} <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 h-auto border-white text-white hover:border-[#29A0D8] hover:text-[#29A0D8]"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls Container */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:gap-3 z-30 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          className="text-white p-1 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all hover:scale-110 rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        
        {/* Dots */}
        <div className="flex gap-1 sm:gap-1.5 mx-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                activeSlide === index
                  ? "bg-white w-3 h-1.5 sm:w-4 sm:h-2"
                  : "bg-white/50 hover:bg-white/70 w-1.5 h-1.5 sm:w-2 sm:h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="text-white p-1 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all hover:scale-110 rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </section>
  );
}