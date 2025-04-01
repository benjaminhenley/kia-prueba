import React from "react";
import { FiX } from "react-icons/fi";
import { formatTextWithBold } from "../../../../utils/textFormatter";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 overflow-hidden flex justify-center items-center p-2 sm:p-4 "
      onClick={onClose}>
      <div
        className="relative mx-auto flex flex-col bg-white overflow-hidden  w-[700px] mt-10 "
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-0 right-0 p-2 z-10 text-white hover:bg-gray-800 bg-[#05141F]"
          onClick={onClose}
          aria-label="Close modal">
          <FiX size={24} />
        </button>

        <div className="relative overflow-hidden h-[556px] w-auto">
          <img
            src={image.src.mobile}
            alt={image.alt}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-white px-4 sm:px-8 py-4 sm:py-6 flex-shrink-0 ">
          <div className="max-w-5xl mx-auto">
            <div className="w-10 h-[2px] bg-gray-800 mb-3"></div>
            <h3 className="font-medium text-gray-900 mb-5">{image.title}</h3>
            <h6 className="text-gray-700">
              {formatTextWithBold(image.description)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
