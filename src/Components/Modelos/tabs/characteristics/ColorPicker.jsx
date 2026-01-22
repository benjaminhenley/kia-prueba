import React, { useState, useEffect } from "react";

const ColorPicker = ({ colorPickerData = [], glossy }) => {
  // Check if colorPickerData is valid and not empty
  const hasValidColors =
    Array.isArray(colorPickerData) && colorPickerData.length > 0;

  // Initialize with first color or empty values if no colors exist
  const [activeColor, setActiveColor] = useState(
    hasValidColors && colorPickerData[0].id ? colorPickerData[0].id : ""
  );

  // Update active color when colorPickerData changes
  useEffect(() => {
    if (hasValidColors && colorPickerData[0]?.id) {
      setActiveColor(colorPickerData[0].id);
    }
  }, [colorPickerData]);

  // Safely find the active color data
  const activeColorData = hasValidColors
    ? colorPickerData.find((color) => color?.id === activeColor) ||
      colorPickerData[0]
    : null;

  const activeColorName = activeColorData?.name || "";
  const activeColorThumbnail = activeColorData?.thumbnail || "";

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-[#05141F] text-white w-12 h-[2px] mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-center ">
          Colores disponibles
        </h2>

        {/* 360 Image container */}
        <div className="relative mx-auto h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
          {/* Only render image if thumbnail exists */}
          {activeColorThumbnail && (
            <div className="relative w-full max-w-4xl">
              <img
                src={activeColorThumbnail}
                alt={`360° ${activeColorName}`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Color Name Display */}
        <h4 className="font-normal text-center mb-8">{activeColorName}</h4>

        {/* Color Options */}
        <div
          className={`flex gap-4 md:gap-5 justify-center items-center justify-items-center w-fit mx-auto px-4`}>
          {colorPickerData.map((color) => {
            // Skip rendering invalid color entries
            if (!color || !color.id) return null;

            const isActive = activeColor === color.id;
            const colorValue = color.color || "#cccccc"; // Default gray if missing
            const outlineValue = color.outline || colorValue; // Use color as fallback
            const borderValue = color.border || "#000000"; // Default black if missing

            return (
              <button
                key={color.id}
                onClick={() => setActiveColor(color.id)}
                className={`relative w-fit group transition-transform duration-200 ${
                  isActive ? "scale-[1.3] z-10" : ""
                } `}
                aria-label={color.name || ""}>
                {/* Main color circle */}
                <div
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${colorValue} 50%, ${outlineValue} 50%)`,
                    border: isActive ? `2px solid ${borderValue}` : "none",
                  }}
                />

                {/* Inactive state border */}
                {!isActive && (
                  <div
                    className="absolute -inset-[3px] rounded-full border"
                    style={{ borderColor: borderValue }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColorPicker;
