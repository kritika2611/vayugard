import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomeImageSlider = ({ slides, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
  
      return () => clearInterval(timer);
    }, [slides.length, interval]);

    return (
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                >
                <img
                    src={slide.image}
                    alt="Slide Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                <div className="absolute top-1/4 left-8 md:left-16 z-20 text-left text-white w-full max-w-[600px] px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                    {slide.title}
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg drop-shadow-md">
                    {slide.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
    );
};

export default HomeImageSlider;