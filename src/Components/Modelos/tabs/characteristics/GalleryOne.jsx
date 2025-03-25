import React from "react";
import MobileSlider from "./MobileSlider";

const GalleryLayoutOne = ({ content, onImageClick, bgColor }) => {
  return (
    <section className={` ${bgColor ? bgColor + " text-white" : ""}`}>
      <div className="container mx-auto sm:px-6">
        <h4 className="mb-3 sm:mb-4">{content.category}</h4>
        <h2 className="font-bold mb-3 sm:mb-6">{content.title}</h2>
        <p className="mb-6 sm:mb-10 text-sm sm:text-base">
          {content.description}
        </p>

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
            <div className="h-full w-full col-span-1 overflow-hidden flex">
              {/* First image takes up full height */}
              <div className="h-full w-full overflow-hidden">
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

export default GalleryLayoutOne;
