import React from "react";
import { getFeatureIcon } from "../Common/Icons/FeatureIcons";
import PillButton from "../../Components/Common/ui/PillButton"
import { getSafeModelData } from "../../Data/models/modelMapper";
import { useParams } from "react-router-dom";

const renderIcon = (icon, className) => {
  return (
    getFeatureIcon(icon, className) || <span className={className}>🔧</span>
  );
};

const FeatureSummary = ({ features, mode }) => {
  // Function to render text with line breaks
  const renderWithLineBreaks = (text) => {
    if (!text) return null;
    const parts = text.split("<br/>");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));
  };

  // Function to remove line breaks for mobile view
  const removeLineBreaks = (text) => {
    if (!text) return "";
    return text.replace(/<br\/>/g, " ");
  };

  const { modelID } = useParams();
  const model = getSafeModelData(modelID);

  const totalFeatures = features?.length || 0;

  // Calculate how many empty spaces to add before features to center them
  const emptySpacesToAdd = Math.floor((5 - totalFeatures) / 2);

  // Create array of empty spaces for centering
  const emptySpaces = Array(emptySpacesToAdd).fill(null);

  return (
    <section className="w-full bg-white px-4 py-5 md:py-0 md:px-0">
      {/* Mobile View - Stacked List */}
      <div className="md:hidden">
        {features &&
          features.map((item, index) => (
            <div
              key={item.id}
              className={`px-0 py-4 md:px-6 border-b border-gray-200 ${
                index + 1 === features.length ? "border-b-0" : ""
              }`}>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 grid place-items-center text-gray-500">
                  {renderIcon(item.id, "text-gray-500 w-full h-full")}
                </div>
                <div className="ml-1 sm:ml-4">
                  {mode === "characteristics" && (
                    <h4 className="mb-1 font-semibold text-[#37434C]">
                      {item.title}
                    </h4>
                  )}
                  <h5 className="text-gray-600">
                    {removeLineBreaks(item.value)}
                  </h5>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Desktop View with exact 5-column grid */}
      <div className="hidden md:block w-full border-b border-gray-200">
        <div className="w-full mx-auto">
          <div className="flex items-stretch justify-center gap-0 w-full">
            {features &&
              features.map((item, key) => (
                <div
                  key={item.id}
                  className={`w-full lg:w-1/5 md:py-16 bg-white flex flex-col border-r ${
                    key === 0 && "border-l"
                  } `}>
                  <div className="flex flex-col h-full justify-start">
                    {/* Icon container */}
                    <div className="flex items-center justify-center">
                      <div className="h-10 w-10 md:w-12 md:h-12 grid place-items-center">
                        {renderIcon(item.id, "w-full h-full")}
                      </div>
                    </div>

                    {/* Spacing of exactly 8px */}
                    <div className="h-2"></div>

                    {/* Title */}
                    {mode === "characteristics" && (
                      <div className="flex items-center justify-center">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                      </div>
                    )}

                    {/* Value with centered text */}
                    <div className="flex items-start justify-center text-center px-4">
                      <h5 className="text-[#37434C]">
                        {renderWithLineBreaks(item.value)}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {model.sections.specifications.cta &&
        <div
          className={`px-5 md:px-10 lg:px-20 py-10 flex justify-end`}
        >
          <PillButton
            title={model.sections.specifications.cta.name}
            onClick={() => {
              window.open(model.sections.specifications.cta.to, "_blank");
            }}
            type="secondary"
            size= "small"
          />
        </div>
      }
    </section>
  );
};

export default FeatureSummary;
