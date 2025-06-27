import React from "react";
import { Link } from "react-router-dom";
import { nuevaKia } from "../../../Data/common";

const NuevaKiaDropdown = ({ activeOption, onOptionClick, onLinkClick }) => {
  return (
    <div className="absolute top-0 right-0 bg-white text-base text-midnight-black shadow-md z-40 min-w-[250px]">
      <div className="flex flex-col">
        {nuevaKia.map((opcion) => (
          <div key={opcion.nombre} className="border-t border-[#CDD0D2] static">
            {opcion.esExterna ? (
              <a
                href={opcion.href}
                target={opcion.target}
                rel="noreferrer"
                onClick={(e) => {
                  onLinkClick(e);
                  onOptionClick(opcion.id);
                }}
                className="relative group inline-block w-full">
                <div
                  className={`
                    p-4 cursor-pointer
                    transition-all duration-200
                    ${
                      activeOption === opcion.id
                        ? "text-[#37434C]"
                        : "text-midnight-black hover:text-[#37434C]"
                    }
                  `}>
                  <p
                    className={`
                      relative inline-block
                      ${activeOption === opcion.id ? "font-bold" : ""}
                    `}>
                    {opcion.nombre}
                    <div
                      className={`
                        absolute bottom-[2px] left-0 w-full h-[1px] 
                        transition-all duration-200 
                        ${
                          activeOption === opcion.id
                            ? "bg-midnight-black"
                            : "bg-transparent group-hover:bg-midnight-black"
                        }
                      `}></div>
                  </p>
                </div>
              </a>
            ) : (
              <Link
                to={opcion.href}
                onClick={(e) => {
                  onLinkClick(e);
                  onOptionClick(opcion.id);
                }}
                className="relative group inline-block w-full">
                <div
                  className={`
                    p-4 cursor-pointer
                    transition-all duration-200
                    ${
                      activeOption === opcion.id
                        ? "text-[#37434C]"
                        : "text-midnight-black hover:text-[#37434C]"
                    }
                  `}>
                  <p
                    className={`
                      relative inline-block 
                      ${activeOption === opcion.id ? "font-bold" : ""}
                    `}>
                    {opcion.nombre}
                    <div
                      className={`
                        absolute bottom-[2px] left-0 w-full h-[1px] 
                        transition-all duration-200 
                        ${
                          activeOption === opcion.id
                            ? "bg-midnight-black"
                            : "bg-transparent group-hover:bg-midnight-black"
                        }
                      `}></div>
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuevaKiaDropdown;
