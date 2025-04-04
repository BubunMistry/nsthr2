"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: ReactNode[]
  autoSlide?: boolean
  autoSlideInterval?: number
  showControls?: boolean
  showIndicators?: boolean
}

export default function Carousel({
  children,
  autoSlide = true,
  autoSlideInterval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps) {
  const [curr, setCurr] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const prev = () => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1))
  }

  const next = () => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))
  }

  useEffect(() => {
    if (!autoSlide) return

    const slideNext = () => {
      setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(slideNext, autoSlideInterval)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [curr, autoSlide, autoSlideInterval, children.length])

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {children.map((child, index) => (
          <div key={index} className="carousel-item">
            {child}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button onClick={prev} className="carousel-control carousel-prev">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="carousel-control carousel-next">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showIndicators && (
        <div className="carousel-indicators">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurr(index)}
              className={`carousel-indicator ${curr === index ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

