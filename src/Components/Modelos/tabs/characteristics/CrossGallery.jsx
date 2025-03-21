import React, { useState, useEffect } from "react";

const CrossGallery = ({ content, onImageClick, bgColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [content]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={` ${bgColor ? bgColor + " text-white" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <h4 className="mb-1 sm:mb-4">{content.category}</h4>
        <h2 className="font-bold mb-3 sm:mb-6">{content.title}</h2>
        <p className="mb-6 sm:mb-10 text-sm sm:text-base">
          {content.description}
        </p>

        {/* Mobile Slider View */}
        <div className="block lg:hidden">
          <div className="relative mb-6">
            {/* Taller image container that scales with viewport height */}
            <div className="w-full overflow-hidden">
              <div
                className="relative w-full"
                style={{
                  height: "min(calc(100vw * 0.75), 70vh)", // Responsive height: either 75% of width or 70% of viewport height, whichever is smaller
                }}>
                {content.images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                      index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onClick={() => onImageClick(image)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Feature title below mobile image */}
            <h3 className="text-xl font-medium mt-4 mb-2">
              {content.images[currentIndex]?.title || ""}
            </h3>

            {/* Description for mobile view */}
            <p className="text-sm mb-4">
              {content.images[currentIndex]?.description || ""}
            </p>

            {/* Equal-sized Navigation Dots */}
            <div className="flex justify-center items-center space-x-3 mt-6 py-4">
              {content.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-8 h-2 rounded-sm transition-colors touch-manipulation bg-[#FFFFFF] ${
                    index === currentIndex ? "" : "bg-opacity-50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View - Better overflow handling */}
        <div
          className="hidden lg:block"
          style={{ height: "640px", maxHeight: "640px", overflow: "hidden" }}>
          <div className="grid grid-cols-2 h-full">
            {/* Left Column */}
            <div className=" h-full w-full col-span-1 overflow-hidden">
              {/* First image takes up 2/3 of height */}
              <div className="row-span-2 overflow-hidden">
                <img
                  src={content.images[0].src}
                  alt={content.images[0].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => onImageClick(content.images[0])}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-rows-2 h-full overflow-hidden">
              {/* Bottom row divided into two images */}
              <div className="grid grid-cols-2 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={content.images[1].src}
                    alt={content.images[1].alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => onImageClick(content.images[1])}
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={content.images[2].src}
                    alt={content.images[2].alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => onImageClick(content.images[2])}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={content.images[3].src}
                    alt={content.images[3].alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => onImageClick(content.images[3])}
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={content.images[4].src}
                    alt={content.images[4].alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => onImageClick(content.images[4])}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossGallery;
