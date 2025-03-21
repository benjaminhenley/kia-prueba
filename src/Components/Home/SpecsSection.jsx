import React from "react";
import { Link } from "react-router-dom";

const IconMapper = ({ icon }) => {
  switch (icon) {
    case "location":
      return <></>;
    case "calendar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8">
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "tools":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8">
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8">
          <path
            fillRule="evenodd"
            d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};

const PromoCard = ({ title, image, icon, link }) => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="relative h-full flex flex-col">
        {/* Create a placeholder for the image */}
        <div className="h-48 bg-gray-900 flex items-center justify-center">
          <div className="text-white/60">Placeholder Image</div>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center h-40">
          <div className="mb-4 text-white">
            <IconMapper icon={icon} />
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const SpecsSection = ({ sections }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => (
            <Link key={section.id} to={section.link}>
              <PromoCard
                title={section.title}
                image={section.image}
                icon={section.icon}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
