"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

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
        "Stay ahead of your most complex talent needs with nstHr—a leading provider of global solutions for managed services, workforce outsourcing, and consulting.",
      cta: "Explore Global Solutions",
      image: "/hero1.jpg",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          
          {/* Original Black Overlay with reduced opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
          
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          
          <div className="relative z-20 flex h-full">
            <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white mb-8">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services">
                    <Button className="bg-[#29A0D8] hover:bg-[#1E90D8] text-white">
                      {slide.cta} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-[#29A0D8]"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-white" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}