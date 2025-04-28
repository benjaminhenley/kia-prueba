import React from "react";
import { Link } from "react-router-dom";
import { blackbarLeft, blackbarRight } from "../../../../Data/common";

const MobileLinksAdicionales = ({ onLinkClick }) => {
  const links = [...blackbarLeft, ...blackbarRight]
    .filter((item) => item.href)
    .map((item) => ({
      text: React.isValidElement(item.nombre)
        ? item.nombre.props.children
        : item.nombre,
      url: item.href,
      esExterna: item.esExterna,
    }));

  return (
    <div className="bg-[#F8F8F8] border-[0.5px] border-[#CDD0D2]">
      <div className="grid grid-cols-2">
        {links.map((link, index) => (
          <div
            key={index}
            className={`
              p-1 flex items-center 
              ${index < 2 ? "border-b-[0.5px]" : ""} 
              ${index % 2 === 0 ? "border-r-[0.5px]" : ""} 
              border-[#CDD0D2]
            `}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.9071 15.7173C19.9652 15.7906 20 15.889 20 16C20 16.111 19.9652 16.2094 19.9071 16.2827L13.7934 24H12.0017L18.3393 16L12 8H13.7918L19.9071 15.7173Z"
                fill="#05141F"
              />
            </svg>
            {link.esExterna ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-[0.5px] text-[10px] font-semibold text-[#697279] ml-2">
                {link.text}
              </a>
            ) : (
              <Link
                to={link.url}
                onClick={(e) => onLinkClick(e)}
                className="tracking-[0.5px] text-[10px] font-semibold text-[#697279] ml-2">
                {link.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileLinksAdicionales;
