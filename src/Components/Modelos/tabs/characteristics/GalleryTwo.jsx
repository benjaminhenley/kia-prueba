import React, { useState, useEffect } from "react";
import MobileSlider from "./MobileSlider";

const GalleryLayoutTwo = ({ content, onImageClick, bgColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [content]);

  return (
    <section className={` ${bgColor ? bgColor + " text-white" : ""}`}>
      <div className="container mx-auto sm:px-6">
        <h4 className="mb-3 sm:mb-4">{content.category}</h4>
        <h2 className="font-bold mb-3 sm:mb-6">{content.title}</h2>
        <h5 className="mb-6">{content.description}</h5>

        {/* Mobile Slider View */}
        <div className="block lg:hidden">
          <MobileSlider content={content} onImageClick={onImageClick} />
        </div>

        {/* Desktop Grid View - Better overflow handling */}
        <div
          className="hidden lg:block"
          style={{ height: "640px", maxHeight: "640px", overflow: "hidden" }}>
          <div className="grid grid-cols-2 h-full">
            {/* Left Column */}
            <div className="grid grid-rows-3 h-full overflow-hidden">
              {/* First image takes up 2/3 of height */}
              <div className="row-span-2 overflow-hidden">
                <img
                  src={content.images[0].src}
                  alt={content.images[0].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => onImageClick(content.images[0])}
                />
              </div>

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
            </div>

            {/* Right Column */}
            <div className="grid grid-rows-2 h-full overflow-hidden">
              {/* Top row with two images */}
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

              {/* Bottom row with one wide image */}
              <div className="overflow-hidden">
                <img
                  src={content.images[5].src}
                  alt={content.images[5].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => onImageClick(content.images[5])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryLayoutTwo;
