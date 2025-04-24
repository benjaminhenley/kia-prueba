import React from "react";
import { formatTextWithBold } from "../../../../utils/textFormatter";
import CloseIcon from "../../../Icons/Cross";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-hidden flex justify-center items-center">
      <div
        className="relative mx-auto flex flex-col bg-white overflow-hidden max-w-[min(60vh,700px)] max-h-[98vh]"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="w-[50px] h-[50px] absolute top-0 right-0 p-2 z-10 text-white hover:bg-gray-800 bg-[#05141F]"
          onClick={onClose}
          aria-label="Close modal">
          <CloseIcon />
        </button>

        <div className="relative flex flex-col overflow-hidden">
          <img
            src={image.src.desktop}
            alt={image.alt}
            className="object-contain h-full w-full"
          />
          <div className="bg-white px-4 sm:px-8 py-4 sm:py-6 h-auto w-auto flex-shrink-0">
            <div className="w-10 h-[2px] bg-[#05141F] mb-3"></div>
            <h3 className="font-medium text-[#05141F] mb-2.5 md:mb-5">{image.title}</h3>
            <h6 className="text-[#05141F]">
              {formatTextWithBold(image.description)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
