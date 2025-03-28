import React from "react";
import { formatTextWithBold } from "../../../../utils/textFormatter";

const Atributes = ({ content }) => {
  return (
    <section className="py-10 md:py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="flex flex-col justify-start">
            <h4 className="font-normal mb-4">{content.category}</h4>
            <h2 className="font-semibold mb-3">{content.subtitle}</h2>
            <hr className="w-full border-[#04141F]/50 mb-5 md:mb-10" />

            <ul className="flex flex-col gap-5">
              {content.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg mr-2">•</span>
                  <h5 className="font-normal">{formatTextWithBold(point)}</h5>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center flex-col w-full">
            <img
              src={content.image.desktop}
              alt={content.title}
              className="max-w-full hidden md:flex object-fill w-full"
            />
            <img
              src={content.image.mobile}
              alt={content.title}
              className="max-w-full md:hidden object-fill w-full"
            />
            <div className="mt-5 order-3">
              <h6 className="font-normal text-[#697279]">
                {content.description}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atributes;
