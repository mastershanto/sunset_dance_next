"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const SLIDES = [
  {
    image: "https://probashihnr.com/image/slider/69e8d6c1d05e5.webp",
    title: "Dhaleshwari Royal Resort",
    subtitle: "Luxury residential projects with modern amenities on the riverside",
  },
  {
    image: "https://probashihnr.com/image/slider/69e8d6f323ec4.webp",
    title: "Sustainable Long-Term Investment",
    subtitle: "Contributing to the growth of Bangladesh's hotel & tourism sector",
  },
  {
    image: "https://probashihnr.com/image/slider/69e8d71825a0a.webp",
    title: "For A Bright & Prosperous Future",
    subtitle: "Secure your ownership share in our premier hospitality property",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[340px] sm:h-[480px] w-full overflow-hidden bg-zinc-950">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-6 sm:left-12 max-w-2xl text-white space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-zinc-950 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Property
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-200">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? "w-8 bg-amber-500" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
