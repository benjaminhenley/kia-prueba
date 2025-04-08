import { useState, useRef, useEffect } from "react";

const FormDropdown = ({
  options = [],
  placeholder = "Seleccione una opción",
  disabled = false,
  name = "",
  value = "",
  onChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    onChange({ target: { name, value: option.value } });
    setIsOpen(false);
  };

  const getSelectedLabel = () => {
    if (!value) return "";
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : "";
  };

  return (
    <div
      className={`flex-1 relative ${disabled ? "opacity-50" : ""}`}
      ref={dropdownRef}>
      <div
        className={`h-7 px-2.5 py-0 flex justify-between items-center cursor-pointer outline outline-1 outline-offset-[-1px] ${
          isOpen ? "outline-gray-700" : "outline-neutral-300"
        } ${disabled ? "bg-[#F8F8F8] cursor-not-allowed" : "bg-white"}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}>
        <span className={`font-normal font-kia text-[#05141F] truncate`}>
          {getSelectedLabel() || placeholder}
        </span>
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          } flex-shrink-0 ml-1`}>
          <path
            d="M1.66675 1L5.43101 4.89886C5.56121 5.03371 5.77228 5.03371 5.90248 4.89886L9.66675 1"
            stroke="#05141F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 w-full z-50 bg-white border border-neutral-300 mt-0.5 max-h-40 shadow-md">
          <div className="max-h-40 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-2.5 py-1 hover:bg-stone-50 cursor-pointer text-gray-900 font-normal font-kia truncate ${
                  option.value === value ? "bg-stone-100" : ""
                }`}
                onClick={() => handleOptionClick(option)}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDropdown;
