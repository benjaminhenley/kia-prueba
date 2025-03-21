import React, { use, useState } from "react";

// Import components
// import Visualizer360 from "./Visualizer360";
import Vr from "./Vr";
import Atributes from "./Atributes";
import ImageModal from "./ImageModal";
import Disclaimer from "./Disclaimer";
import FeatureSummary from "../../FeatureSummary";
import ColorPicker from "./ColorPicker";
import SedanGallery from "./SedanGallery";
import CrossGallery from "./CrossGallery";

const Characteristics = ({ content, modelID }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-white">
      <FeatureSummary features={content.features} />

      {/* <Visualizer360 /> */}
      {content.vr && <Vr href={content.vr} />}
      {content.colorPicker && (
        <ColorPicker colorPickerData={content.colorPicker} />
      )}

      {/* Model Atributes */}
      <Atributes content={content.atributes} />

      {/* Model Exterior section */}
      <section className={`py-20  bg-[#05141F] text-white`}>
        <div className=" mx-auto px-4 sm:px-6">
          {content.exterior.layout === "sedan" ? (
            <SedanGallery content={content.exterior} onImageClick={openModal} />
          ) : (
            <CrossGallery content={content.exterior} onImageClick={openModal} />
          )}
        </div>
      </section>

      {/* Model Interior section */}
      <section className={`py-20 `}>
        {content.interior.layout === "sedan" ? (
          <SedanGallery content={content.interior} onImageClick={openModal} />
        ) : (
          <CrossGallery content={content.interior} onImageClick={openModal} />
        )}
      </section>
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}

      <Disclaimer />
    </div>
  );
};

export default Characteristics;
