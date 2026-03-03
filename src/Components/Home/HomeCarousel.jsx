import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeCarousel = ({ carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}>
          {/* Placeholder for image */}
          <div className="w-full h-full bg-gray-800">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-lg">
                Placeholder for {slide.title} hero image
              </span>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-12 sm:p-16 md:p-24 text-white">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                {slide.tagline}
              </p>
              <Link
                to={slide.link}
                className="bg-white text-gray-900 px-8 py-3 inline-block hover:bg-gray-100 transition">
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition"
        aria-label="Previous slide">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition"
        aria-label="Next slide">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default HomeCarousel;
