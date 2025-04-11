import React from "react";
import { k3Sedan } from "../Data/modelLoader";
import { getIconComponent } from "../Data/mappers/iconMapper";

/**
 * Example component that shows how to use the new JSON-based car model data
 */
const CarModelDisplay = () => {
  // Access model data
  const { name, tagline, heroInfo } = k3Sedan;

  // Render the component
  return (
    <div className="car-model-display p-4">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-lg mb-6">{tagline}</p>

      <h2 className="text-xl font-semibold mb-4">Key Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(heroInfo).map(([key, item]) => {
          // Get the component for this icon ID
          const IconComponent = getIconComponent(item.iconId);

          return (
            <div
              key={key}
              className="flex flex-col items-center p-3 border rounded-lg">
              {IconComponent && <IconComponent className="w-12 h-12 mb-2" />}
              <h3 className="font-medium text-center">{item.title}</h3>
              <div
                className="text-sm text-center whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarModelDisplay;
