import React, { useState } from "react";

const ColorPicker = ({ colorPickerData }) => {
  const [activeFinish, setActiveFinish] = useState("glossy");
  const [activeColor, setActiveColor] = useState("blue");

  const finishOptions = [
    { id: "glossy", label: "Glossy" },
    { id: "matt", label: "Matt", disabled: true },
  ];

  const activeColorName =
    colorPickerData.find((color) => color.id === activeColor)?.name || "";

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-[#05141F] text-white w-12 h-[2px] mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
          Colores disponibles
        </h2>

        {/* <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {Object.values(viewData).map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium ${
                  activeView === view.id
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-500"
                }`}>
                {view.label}
              </button>
            ))}
          </div>
        </div> */}

        {/* 360 Image container */}
        <div className="relative mx-auto h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
          {/* This will be replaced with actual 360 component */}
          <div className="relative w-full max-w-4xl">
            <img
              src={
                colorPickerData.find((color) => color.id === activeColor)
                  .thumbnail
              }
              alt={`360° ${activeColorName}`}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Finish Toggle Buttons */}
        {/* <div className="flex justify-center mb-12">
          <div className="flex gap-2">
            {finishOptions.map((finish) => (
              <button
                key={finish.id}
                onClick={() => setActiveFinish(finish.id)}
                disabled={finish.disabled}
                className={`
                  w-40 py-2 rounded-full font-medium text-center transition-all duration-200
                  ${
                    activeFinish === finish.id
                      ? "bg-[#0F1620] text-white shadow-sm"
                      : "bg-transparent text-gray-500 hover:bg-gray-50 border-gray-500  border-2 "
                  }
                  ${
                    finish.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                `}>
                <h4 className="font-bold">{finish.label}</h4>
              </button>
            ))}
          </div>
        </div> */}

        {/* Color Name Display */}
        <h4 className=" font-normal text-center mb-8">{activeColorName}</h4>

        {/* Color Options */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-6">
          {colorPickerData.map((color) => {
            const isActive = activeColor === color.id;

            return (
              <button
                key={color.id}
                onClick={() => setActiveColor(color.id)}
                className={`relative group transition-transform duration-200 ${
                  isActive ? "scale-150 z-10" : ""
                }`}
                aria-label={color.name}>
                {/* Main Circle with Shadow Effect */}
                <div
                  className={`
                    w-8 h-8 rounded-full overflow-hidden relative
                    ${isActive ? "border-2" : ""} 
                    
                  `}
                  style={{
                    borderColor:
                      color.color === "#f6f6f6" ? "#d6d6d6" : color.color,
                    borderOpacity: 40,
                  }}>
                  {/* Background Color */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: color.color }}
                  />

                  {/* Shadow/Gradient Effect - Rotated to the left */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[black]/40 to-transparent"
                    style={{
                      clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)",
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>

                {/* Selection Ring for Active Color */}
                <div
                  className={`absolute ${
                    isActive ? "hidden" : "-inset-1"
                  } rounded-full border border-black `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColorPicker;
