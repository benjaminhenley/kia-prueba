import React, { useState } from "react";

const ColorPicker = ({ colorPickerData, glossy }) => {
  // const [activeFinish, setActiveFinish] = useState("glossy");
  const [activeColor, setActiveColor] = useState(colorPickerData[0].id);

  // const finishOptions = [
  //   { id: "glossy", label: "Glossy" },
  //   { id: "matt", label: "Matt", disabled: true },
  // ];

  const activeColorName =
    colorPickerData.find((color) => color.id === activeColor)?.name || "";

  let colorCount = colorPickerData.length;
  const columns = colorCount > 5 ? colorCount / 2 : colorCount;

  console.log(columns);

  if (columns) {
    return (
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-[#05141F] text-white w-12 h-[2px] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-center ">
            Colores disponibles
          </h2>

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
          {/* {glossy && (
            <button className="flex justify-center w-fit py-2 mx-auto rounded-full mb-10 px-5 text-center bg-[#05141F] min-w-[144px]">
              <h4 className="font-bold  text-white rounded-full">Glossy</h4>
            </button>
          )} */}

          {/* Color Name Display */}
          <h4 className="font-normal text-center mb-8">{activeColorName}</h4>

          {/* Color Options */}
          <div
            className={`grid grid-cols-${columns} gap-4 md:gap-5 justify-center items-center justify-items-center w-fit mx-auto px-4`}>
            {colorPickerData.map((color) => {
              const isActive = activeColor === color.id;

              return (
                <button
                  key={color.id}
                  onClick={() => setActiveColor(color.id)}
                  className={`relative w-fit group transition-transform duration-200 ${
                    isActive ? "scale-[1.3] z-10" : ""
                  } `}
                  aria-label={color.name}>
                  {/* Main color circle */}
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${color.color} 50%, ${color.outline} 50%)`,
                      border: isActive ? `2px solid ${color.border}` : "none",
                    }}
                  />

                  {/* Inactive state border */}
                  {!isActive && (
                    <div
                      className="absolute -inset-[3px] rounded-full border"
                      style={{ borderColor: color.border }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default ColorPicker;
