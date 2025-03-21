import React from "react";
import {
  UpholsteryIcon,
  BatteryIcon,
  WheelsIcon,
  SmartKeyIcon,
  FrontLightsIcon,
  MotorIcon,
  PerformanceIcon,
  ConsumptionIcon,
  WarrantyIcon,
} from "../Icons/FeatureIcons";

const renderIcon = (icon, className) => {
  const icons = {
    upholstery: <UpholsteryIcon className={className} />,
    battery: <BatteryIcon className={className} />,
    wheels: <WheelsIcon className={className} />,
    smartkey: <SmartKeyIcon className={className} />,
    frontlights: <FrontLightsIcon className={className} />,
    motor: <MotorIcon className={className} />,
    performance: <PerformanceIcon className={className} />,
    consumption: <ConsumptionIcon className={className} />,
    warranty: <WarrantyIcon className={className} />,
  };

  return icons[icon] || <span className={className}>🔧</span>;
};

const FeatureSummary = ({ features }) => {
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

  const isFourItems = features && features.length === 4;

  return (
    <section className="w-full bg-white px-2 md:px-0">
      {/* Mobile View - Stacked List */}
      <div className="lg:hidden">
        {features &&
          features.map((item) => (
            <div
              key={item.id}
              className="px-2 md:px-6 py-3 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0 grid place-items-center text-gray-500">
                  {renderIcon(item.id, "text-gray-500 w-full h-full")}
                </div>
                <div className="ml-2">
                  {isFourItems && (
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

      {/* Desktop View with conditional layout */}
      <div className="hidden lg:block w-full border-b border-gray-200">
        <div className="w-full mx-auto">
          {/* Container with conditional classes */}
          <div className={isFourItems ? "flex justify-center" : ""}>
            <div
              className={`grid ${
                isFourItems ? "w-4/5 grid-cols-4" : "grid-cols-5"
              }`}>
              {features &&
                features.map((item, key) => (
                  <div
                    key={item.id}
                    className={`${
                      key === 0 && "lg:border-l"
                    } bg-white py-12 text-center border-r border-gray-200 shadow-sm hover:shadow-md transition-shadow`}>
                    <div className="">
                      <div className="w-16 h-16 mx-auto grid place-items-center">
                        {renderIcon(item.id, "w-12 h-12")}
                      </div>
                    </div>
                    {isFourItems && (
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    )}
                    <p className="text-gray-600">
                      {renderWithLineBreaks(item.value)}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSummary;
