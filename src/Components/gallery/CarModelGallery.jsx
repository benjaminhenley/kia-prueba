import React, { useState, useRef, useEffect } from "react";
import sedanImg from "../../assets/img/common/modelos/AllNewK3Sedan.webp";
import ceratoImg from "../../assets/img/common/modelos/Cerato.webp";
import crossImg from "../../assets/img/common/modelos/AllNewK3Cross.webp";
import SeltosImg from "../../assets/img/common/modelos/Seltos.webp";
import SportageImg from "../../assets/img/common/modelos/Sportage.webp";
import carnivalImg from "../../assets/img/common/modelos/Carnival.webp";
import k2500Img from "../../assets/img/common/modelos/K2500.webp";
import Arrow from "../Icons/Arrow";

const CAR_MODELS = [
  {
    id: 24,
    name: "All-new K3 Sedán",
    image: sedanImg,
  },
  {
    id: 3,
    name: "Cerato",
    image: ceratoImg,
  },
  {
    id: 24,
    name: "All-new K3 Cross",
    image: crossImg,
  },
  {
    id: 23,
    name: "Seltos",
    image: SeltosImg,
  },
  {
    id: 1,
    name: "Sportage",
    image: SportageImg,
  },
  {
    id: 7,
    name: "Carnival",
    image: carnivalImg,
  },
  {
    id: 8,
    name: "K2500",
    image: k2500Img,
  },
];

const CarModelGallery = ({ onModelSelect }) => {
  // Keep two separate states - one for selection and one for slider position
  const [selectedIndex, setSelectedIndex] = useState(0); // The actual selection state (only changes on click)
  const [viewIndex, setViewIndex] = useState(0); // The visual position (changes with slider)
  const [sliderValue, setSliderValue] = useState(0); // Raw slider value (0-100)

  const scrollContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);

  const handleCarClick = (index) => {
    setSelectedIndex(index);
    setViewIndex(index);

    // Notify parent of selection
    if (onModelSelect && index >= 0 && index < CAR_MODELS.length) {
      onModelSelect(CAR_MODELS[index]);
    }
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    const newViewIndex = (value / 100) * (CAR_MODELS.length - 1);
    setViewIndex(newViewIndex);
  };

  useEffect(() => {
    if (thumbRef.current && sliderRef.current) {
      // Position thumb based on slider value
      const trackWidth = sliderRef.current.offsetWidth;
      const leftPos = (sliderValue / 100) * (trackWidth - 48);
      thumbRef.current.style.left = `${leftPos}px`;
    }
  }, [sliderValue]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        viewIndex * scrollContainerRef.current.children[0].offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [viewIndex]);

  // Update slider value when selected index changes (for initialization and direct clicks)
  useEffect(() => {
    // When selection changes, update the view position to match
    const value = (selectedIndex / (CAR_MODELS.length - 1)) * 100;
    setSliderValue(value);
    setViewIndex(selectedIndex);
  }, [selectedIndex]);

  // Handle navigation with arrow buttons - these DO select cars
  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      // onSelect is called via the selectedIndex useEffect
    }
  };

  const handleNext = () => {
    if (selectedIndex < CAR_MODELS.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      // onSelect is called via the selectedIndex useEffect
    }
  };

  return (
    <div className="w-full">
      {/* Car Model Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-4">
          {CAR_MODELS.map((model, index) => (
            <div
              key={model.id || `model-${index}`}
              className={`w-fit bg-[#F8F8F8] flex-shrink-0 flex flex-col items-center p-4 border ${
                selectedIndex === index
                  ? "border-[#05141F] bg-[#F8F8F8]"
                  : "border-[#CDD0D2]"
              } cursor-pointer`}
              onClick={() => handleCarClick(index)}>
              <img
                src={model.image}
                alt={model.name}
                className="w-[172px] md:w-[256px] h-[88px] object-contain mb-3"
              />
              <h5 className="text-center font-bold">{model.name}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls with Range Slider */}
      <div className="flex items-center justify-center mt-5 overflow-hidden">
        <div className="relative flex-1 h-[1px] bg-gray-300 my-3">
          {/* Hidden range input that's still interactive */}
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max="100"
            step="any"
            value={sliderValue}
            onChange={handleSliderChange}
            className="absolute top-[-12px] w-full h-6 opacity-0 cursor-grab z-10"
          />

          {/* Custom thumb element */}
          <div
            ref={thumbRef}
            className="absolute top-[-12px] flex flex-row border-none"
            style={{ left: "0px" }} // Initial position, will be updated by useEffect
          >
            <div
              onClick={handlePrev}
              className="border-none w-6 h-6 flex items-center justify-center rounded-l-full bg-[#05141F] disabled:opacity-50 cursor-pointer">
              <Arrow fill="#fff" className="rotate-180" />
            </div>
            <div
              onClick={handleNext}
              className="border-none w-6 h-6 flex items-center justify-center rounded-r-full bg-[#05141F] disabled:opacity-50 cursor-pointer">
              <Arrow fill="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModelGallery;
