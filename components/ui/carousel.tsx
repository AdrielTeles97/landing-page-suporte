"use client";

import React, { useState, useEffect } from 'react';
import { ArrowBigRight } from "lucide-react";
import Image from 'next/image';

interface SlideData {
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt="imagem loja"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30">
            <div className="absolute bottom-8 left-8 text-white">           
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={handlePrevious}
          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ArrowBigRight className="w-6 h-6 text-white rotate-180" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ArrowBigRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;