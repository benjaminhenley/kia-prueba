import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Hero from "../Components/Modelos/Hero.jsx";
import TabSelector from "../Components/Modelos/TabsSection.jsx";
import Specifications from "../Components/Modelos/tabs/specifications";
import Characteristics from "../Components/Modelos/tabs/characteristics/index.jsx";
import { getSafeModelData } from "../Data/models/modelMapper.js";

const Modelos = () => {
  const { modelID } = useParams();
  const [activeTab, setActiveTab] = useState("characteristics");
  const model = getSafeModelData(modelID);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full relative ">
      {/* Hero Section with Video/Image */}
      <Hero
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
      {model.id === "k3-sedan" || model.id === "k3-cross" ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-end lg:mr-20 md:mb-5 p-4">
          <a
            target="_blank"
            href="https://reservak3.kia.com.ar/es"
            className="flex items-center xs:justify-between justify-between  bg-[#05141F] text-white px-1 pl-5 py-1 rounded-full shadow-md  transition duration-300 gap-[15px] w-full xs:w-fit">
            <h4 className="font-bold">Quiero mi All-new K3</h4>
            <div className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-[#05141F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modelos;
