import React from "react";
import { FiX } from "react-icons/fi";
import { formatTextWithBold } from "../../../../utils/textFormatter";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-hidden flex justify-center items-center p-4"
      onClick={onClose}>
      <div
        className="relative w-full h-auto max-w-4xl mx-auto flex flex-col bg-white"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-0 right-0 p-2 z-10 text-white hover:bg-gray-800 bg-[#05141F]"
          onClick={onClose}
          aria-label="Close modal">
          <FiX size={28} />
        </button>

        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="bg-white px-8 py-6 flex-shrink-0 relative -mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="w-10 h-[2px] bg-gray-800 mb-4"></div>
            <h3 className="text-2xl font-medium text-gray-900 mb-3">
              {image.title}
            </h3>
            <p className="text-base text-gray-700">
              {formatTextWithBold(image.description)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
