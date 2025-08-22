import React from "react";
import ModelCarousel from "./ModelCarousel";
import ModelDimensions from "./ModelDimensions";
import FeatureSummary from "../../FeatureSummary";

const Specifications = ({ content }) => {
  return (
    <>
      {/* Specification Cards Section */}
      <FeatureSummary features={content.features} mode="specifications" />

      {/* Car Carousel Section */}
      <section className="relative">
        {/* Diagonal color split background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              background: "linear-gradient(125deg, #f8f8f8 50%, #ececec 50%)",
            }}></div>
        </div>

        {content.carouselImages && (
          <div className="relative z-10 mx-auto">
            <ModelCarousel images={content.carouselImages} />
          </div>
        )}
      </section>

      {/* Dimensions Section */}
      <section className="py-12">
        <div className=" w-full mx-auto px-4">
          {content.dimensions && (
            <ModelDimensions dimensions={content.dimensions} />
          )}
        </div>
      </section>
    </>
  );
};

export default Specifications;
