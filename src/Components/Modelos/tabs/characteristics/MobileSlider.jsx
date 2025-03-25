import { useEffect, useState } from "react";
import { formatTextWithBold } from "../../../../utils/textFormatter";

export default function MobileSlider({ content, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [content]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-6">
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

      {/* Decorative line above title */}
      <div className="w-10 h-[2px] bg-current mt-8 mb-4"></div>

      {/* Feature title below mobile image */}
      <h3 className="text-xl font-medium mb-2">
        {content.images[currentIndex]?.title || ""}
      </h3>

      {/* Description for mobile view */}
      <p className="text-sm mb-4">
        {formatTextWithBold(content.images[currentIndex]?.description || "")}
      </p>

      {/* Equal-sized Navigation Dots */}
      <div className="flex justify-center items-center space-x-3 mt-6 py-4">
        {content.images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-8 h-2 rounded-sm transition-colors touch-manipulation ${
              content.category === "Exterior" ? "bg-[#FFFFFF]" : "bg-[#05141F]"
            } ${index === currentIndex ? "" : "bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
