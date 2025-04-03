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
            <path
              d="M30.2323 39.2932C30.0871 39.4764 30 39.7225 30 40C30 40.2775 30.0871 40.5236 30.2323 40.7068L45.5164 60H49.9959L34.1518 40L50 20H45.5205L30.2323 39.2932Z"
              fill="#05141F"
            />
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
              d="M49.7677 39.2932C49.9129 39.4764 50 39.7225 50 40C50 40.2775 49.9129 40.5236 49.7677 40.7068L34.4836 60H30.0041L45.8482 40L30 20H34.4795L49.7677 39.2932Z"
              fill="#05141F"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModelCarousel;
