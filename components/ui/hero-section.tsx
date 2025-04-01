"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Connecting people to limitless opportunities",
    subtitle:
      "Work with the industry leader who's breaking down barriers and helping workers worldwide connect with meaningful, transformative work.",
    cta: "See Expert Talent",
    image: "/hero3.jpg",
  },
  {
    title: "Get the world's best workforce solutions",
    subtitle: "Fit to your local business needs with our global expertise and local understanding.",
    cta: "Explore Solutions",
    image: "/hero2.jpg",
  },
  {
    title: "Transform your global talent strategy",
    subtitle:
      "Stay ahead of your most complex talent needs with nstHr a leading provider of global solutions for managed services, workforce outsourcing, and consulting.",
    cta: "Explore Global Solutions",
    image: "/hero1.jpg",
  },
  {
    title: "Innovate and Lead the Future",
    subtitle:
      "Empower your business with cutting-edge technology solutions and strategic insights for a competitive edge.",
    cta: "Discover Innovation",
    image: "/hero4.jpg",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
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
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-8 md:px-16">
              <div className="max-w-2xl sm:px-10 lg:px-16 text-left">
                <h1 className="text-5xl uppercase font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white mb-8">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#service">
                    <Button className="bg-[#29A0D8] hover:bg-[#1E90D8] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-all">
                      {slide.cta}
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
