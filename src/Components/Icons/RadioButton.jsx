import React from "react";

const RadioButton = ({ checked, onChange, id, label, name }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="relative flex items-center cursor-pointer"
        onClick={onChange}
        aria-hidden="true">
        {checked ? (
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Box">
              <rect
                x="0.5"
                y="1"
                width="16"
                height="16"
                rx="8"
                stroke="#05141F"
              />
              <circle id="Ellipse 1" cx="8.5" cy="9" r="4.5" fill="#05141F" />
            </g>
          </svg>
        ) : (
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Box">
              <rect
                x="0.5"
                y="1"
                width="16"
                height="16"
                rx="8"
                stroke="#CDD0D2"
              />
            </g>
          </svg>
        )}
        <input
          type="radio"
          id={id}
          name={name || id}
          className="absolute opacity-0 w-0 h-0"
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
        />
      </div>
      {label && (
        <label htmlFor={id} className="cursor-pointer" onClick={onChange}>
          <h6 className="font-bold text-[#05141F]">{label}</h6>
        </label>
      )}
    </div>
  );
};

export default RadioButton;
