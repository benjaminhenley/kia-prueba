import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Hero from "../Components/Modelos/Hero.jsx";
import TabSelector from "../Components/Modelos/TabsSection.jsx";
import Specifications from "../Components/Modelos/tabs/specifications";
import Characteristics from "../Components/Modelos/tabs/characteristics/index.jsx";
import { getSafeModelData, modelExists } from "../Data/modelMapper.js";

const Modelos = () => {
  const { modelID } = useParams();
  const [activeTab, setActiveTab] = useState("characteristics");

  const model = getSafeModelData(modelID);

  // Update document title when model changes
  useEffect(() => {
    document.title = `KIA | ${model.name} `;

    // Restore the original title when component unmounts
    return () => {
      document.title = "KIA Argentina";
    };
  }, [modelID, model.name]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Video/Image */}
      <Hero
        title={model.name}
        tagline={model.tagline}
        videoSrc={model.heroVideo}
        heroInfo={model.heroInfo}
      />

      {/* Tabs Navigation */}
      <TabSelector activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Content based on active tab */}
      <div className="mx-auto w-full">
        {activeTab === "specifications" && (
          <Specifications content={model.sections.specifications} />
        )}
        {activeTab === "characteristics" && (
          <Characteristics
            content={model.sections.characteristics}
            modelID={modelID}
          />
        )}
      </div>
    </div>
  );
};

export default Modelos;
