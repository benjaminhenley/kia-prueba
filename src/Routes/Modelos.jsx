import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Hero from "../Components/Modelos/Hero.jsx";
import TabSelector from "../Components/Modelos/TabsSection.jsx";
import Specifications from "../Components/Modelos/tabs/specifications";
import Characteristics from "../Components/Modelos/tabs/characteristics/index.jsx";
import { getSafeModelData } from "../Data/models/modelMapper.js";
import PillButton from "../Components/Common/ui/PillButton.jsx";

const Modelos = () => {
  const { modelID } = useParams();
  const [activeTab, setActiveTab] = useState("characteristics");
  const model = getSafeModelData(modelID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Update document title when model changes
  useEffect(() => {
    if (!model) return;

    document.title = `KIA | ${model.name}`;
    return () => {
      document.title = "KIA Argentina";
    };
  }, [model]);

  // Redirect if no model found
  if (!model) {
    return <Navigate to="/" replace />;
  }

  const isK3 = model.id.startsWith("k3");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="w-full relative ">
      {/* Hero Section with Video/Image */}
      <Hero
        allNew={isK3}
        title={model.name}
        tagline={model.tagline}
        videoSrc={model.heroVideo}
        heroInfo={model.heroInfo}
      />

      {/* Tabs Navigation */}
      <TabSelector
        activeTab={activeTab}
        menu={model.menu}
        onTabChange={handleTabChange}
      />

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

      {/* Sticky Button */}
      {model.sections.specifications.cta && (
        <div className="fixed z-100 bottom-5  right-4 z-50 flex justify-end lg:mr-20 md:mb-3 ">
          <PillButton
            type="secondary"
            title={model.sections.specifications.cta.name}
            onClick={() => {
              window.open(model.sections.specifications.cta.to, "_blank");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Modelos;
