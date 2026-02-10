"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Capture Your",
    highlight: "Perfect Moments",
    description:
      "Professional wedding photography that tells your unique love story through stunning visuals",
    icon: <Camera className="h-8 w-8" />,
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-900/70 via-pink-900/60 to-purple-900/70",
    image: "/Images/CaptureMoments.jpg",
    focalPoint: "50% 35%", // bride & groom center
  },
  {
    id: 2,
    title: "Celebrate Love",
    highlight: "Forever",
    description:
      "Cinematic wedding films that preserve every emotion and magical moment of your special day",
    icon: <Heart className="h-8 w-8" />,
    gradient: "from-pink-600 to-red-600",
    bgGradient: "from-pink-900/70 via-red-900/60 to-pink-900/70",
    image: "/Images/Love.png",
    focalPoint: "50% 20%", 
  },
  {
    id: 3,
    title: "Create Timeless",
    highlight: "Memories",
    description:
      "Award-winning photography and videography services for weddings that last a lifetime",
    icon: <Sparkles className="h-8 w-8" />,
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-900/70 via-indigo-900/60 to-purple-900/70",
    image: "/Images/Memories.jpg",
    focalPoint: "50% 50%", 
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % slides.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <section className="relative h-[80vh]  overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Image + Ken Burns */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].highlight}
              fill
              priority
              className="object-cover"
              style={{
                objectPosition: slides[current].focalPoint,
              }}
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slides[current].bgGradient}`}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl"
              >
               

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {slides[current].title}
                  <br />
                  <span
                    className={`bg-gradient-to-r ${slides[current].gradient} bg-clip-text text-transparent`}
                  >
                    {slides[current].highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                  {slides[current].description}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows (safe positioning) */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-8 top-[15%] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 md:right-8 top-[15%] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${
              i === current
                ? "w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
