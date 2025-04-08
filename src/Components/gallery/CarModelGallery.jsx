import React, { useState, useRef, useEffect } from "react";
import sedanImg from "../../assets/img/common/modelos/AllNewK3Sedan.webp";
import ceratoImg from "../../assets/img/common/modelos/Cerato.webp";
import crossImg from "../../assets/img/common/modelos/AllNewK3Cross.webp";
import SeltosImg from "../../assets/img/common/modelos/Seltos.webp";
import SportageImg from "../../assets/img/common/modelos/Sportage.webp";
import carnivalImg from "../../assets/img/common/modelos/Carnival.webp";
import k2500Img from "../../assets/img/common/modelos/K2500.webp";

const CAR_MODELS = [
  {
    id: "k3-sedan",
    name: "All-new K3 Sedán",
    image: sedanImg,
  },
  {
    id: "cerato",
    name: "Cerato",
    image: ceratoImg,
  },
  {
    id: "k3-cross",
    name: "All-new K3 Cross",
    image: crossImg,
  },
  {
    id: "seltos",
    name: "Seltos",
    image: SeltosImg,
  },
  {
    id: "sportage",
    name: "Sportage",
    image: SportageImg,
  },
  {
    id: "carnival",
    name: "Carnival",
    image: carnivalImg,
  },
  {
    id: "k2500",
    name: "K2500",
    image: k2500Img,
  },
];

const CarModelGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < CAR_MODELS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Click handler for car selection
  const handleCarClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate slider position differently for mobile vs desktop
  const calculateSliderPosition = () => {
    if (isMobile) {
      // For mobile (full width slides), prevent going past the end
      return Math.min(currentIndex * (100 / (CAR_MODELS.length - 1)), 87.5);
    } else {
      // For desktop, use 96.1% as requested
      return (currentIndex / (CAR_MODELS.length - 1)) * 96.1;
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        currentIndex * scrollContainerRef.current.children[0].offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full">
      {/* Car Model Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scroll-smooth no-scrollbar">
          {CAR_MODELS.map((model, index) => (
            <div
              key={model.id || `model-${index}`}
              className={`w-fit  flex-shrink-0 flex flex-col items-center p-4 ${
                currentIndex === index ? "border-2 border-[#05141F]" : ""
              } cursor-pointer`}
              onClick={() => handleCarClick(index)}>
              <img
                src={model.image}
                alt={model.name}
                className="w-[172px] md:w-[256px] h-[88px] object-contain mb-3"
              />
              <h5 className="text-center font-normal">{model.name}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots & Arrows */}
      <div className="flex items-center justify-center mt-5 overflow-hidden">
        <div className="flex-1 h-[1px] bg-gray-300 relative my-3">
          <div
            className="absolute top-[-12px] w-20 h-1 flex"
            style={{
              left: `${calculateSliderPosition()}%`,
              transform: "translateX(-0%)",
            }}>
            <button
              onClick={handlePrev}
              className="w-6 h-6 flex items-center justify-center rounded-l-full bg-[#05141F] disabled:opacity-50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9303 12.212C15.9739 12.1571 16 12.0832 16 12C16 11.9168 15.9739 11.8429 15.9303 11.788L11.3451 6H10.0012L14.7545 12L10 18H11.3438L15.9303 12.212Z"
                  fill="white"
                  transform="rotate(180 13 12)"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-6 h-6 flex items-center justify-center rounded-r-full bg-[#05141F] disabled:opacity-50">
              <svg
                className="rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9303 12.212C15.9739 12.1571 16 12.0832 16 12C16 11.9168 15.9739 11.8429 15.9303 11.788L11.3451 6H10.0012L14.7545 12L10 18H11.3438L15.9303 12.212Z"
                  fill="white"
                  transform="rotate(180 13 12)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModelGallery;
