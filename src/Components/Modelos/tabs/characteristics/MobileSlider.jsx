import { useEffect, useState, useCallback } from "react";
import { formatTextWithBold } from "../../../../utils/textFormatter";

export default function MobileSlider({ content, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const goToNextSlide = useCallback(() => {
    if (content.images.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [content.images]);

  // Reset index when content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [content]);

  // Auto-slide effect
  useEffect(() => {
    // Set up interval for automatic sliding
    const slideInterval = setInterval(goToNextSlide, 5000);

    // Clean up interval on component unmount or content change
    return () => {
      clearInterval(slideInterval);
    };
  }, [goToNextSlide]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-6">
      <div className="w-full overflow-hidden">
        <div
          className="relative w-full"
          style={{
            height: "min(calc(100vw * 0.75), 70vh)", // Original height calculation
          }}>
          {content.images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transform transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full pointer-events-none"
                  : "opacity-0 translate-x-full pointer-events-none"
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

      {/* Text content with smooth fade transition */}
      <div className="transition-opacity duration-500 ease-in-out ">
        {/* Decorative line above title */}
        <div className="w-10 h-[2px] bg-current mt-8 mb-4"></div>

        {/* Feature title below mobile image */}
        <h3 className=" font-medium mb-2 h-[46px]">
          {content.images[currentIndex]?.title || ""}
        </h3>

        {/* Description for mobile view */}
        <h6 className="h-[56px] mb-4">
          {formatTextWithBold(content.images[currentIndex]?.description || "")}
        </h6>
      </div>

      {/* Equal-sized Navigation Dots */}
      <div className="flex justify-center items-center space-x-3 mt-6 py-4">
        {content.images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-8 h-1 transition-all duration-500 ease-in-out touch-manipulation ${
              content.category === "Exterior" ? "bg-[#FFFFFF]" : "bg-[#05141F]"
            } ${index === currentIndex ? "" : "bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
