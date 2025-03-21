import React, { useState, useEffect } from "react";

const ModelCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Make sure images exist before trying to access them
  if (!images || images.length === 0) {
    return <div className="text-center py-8">No images available</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative flex flex-col h-fit">
      <div className="w-full overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 right-0 w-full flex justify-center">
          <h2 className=" font-bold text-center pt-16">
            <div className="w-14 h-0.5 bg-gray-800 mx-auto mb-4"></div>
            Dimensiones
          </h2>
        </div>

        <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-transparent relative mb-14  mt-16">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={image.src.desktop}
                  alt={image.alt}
                  className="w-full h-full object-contain scale-125 hidden md:flex"
                />
                <img
                  src={image.src.mobile}
                  alt={image.alt}
                  className="w-full h-full object-contain  md:hidden"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition "
          aria-label="Previous">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_410_9354)">
              <path
                d="M47.5 55.5355L32.8793 40.9148C32.3736 40.4091 32.3736 39.5893 32.8793 39.0836L47.5 24.4629"
                stroke="#05141F"
                stroke-width="4"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_410_9354">
                <rect
                  width="80"
                  height="80"
                  fill="white"
                  transform="matrix(-1 0 0 1 80 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition "
          aria-label="Next">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.5 55.5355L47.1207 40.9148C47.6264 40.4091 47.6264 39.5893 47.1207 39.0836L32.5 24.4629"
              stroke="#05141F"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mb-4 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelCarousel;
