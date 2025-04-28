import React from "react";

const Checkbox = ({ checked, onChange }) => {
  return (
    <div className="inline-block cursor-pointer" onClick={onChange}>
      {checked ? (
        // Checked state SVG
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Box">
            <rect x="0.5" y="1" width="16" height="16" stroke="#05141F" />
            <path
              id="Path"
              d="M5 8.63078L6.73737 10.8025C6.93331 11.0474 7.29856 11.0676 7.52029 10.8459L12.3662 6"
              stroke="#05141F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      ) : (
        // Unchecked state SVG
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Box">
            <rect x="0.5" y="1" width="16" height="16" stroke="#CDD0D2" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
