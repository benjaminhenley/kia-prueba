import { useState, useRef, useEffect } from "react";
import Arrow from "../../Icons/Arrow";

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
        <Arrow className="rotate-90" />
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 w-full z-50 bg-white border border-[#37434C] max-h-40 shadow-md">
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 14px;
            }
            div::-webkit-scrollbar-track {
              background: #f8f8f8;
              border: 1px solid #cdd0d2;
              border-bottom: none;
              border-top: none;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #cdd0d2;
              border-radius: 0;
              border: 3px solid #f8f8f8;
            }
            div::-webkit-scrollbar-button {
              display: block;
              height: 14px;
              background-color: #f8f8f8;
            }
            div::-webkit-scrollbar-button:vertical:start:decrement {
              background-color: #f8f8f8;
              background-image: url("data:image/svg+xml,%3Csvg width='9' height='4' viewBox='0 0 9 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.84961 4H0.849609L4.84961 0L8.84961 4Z' fill='%239BA1A5'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: center;
              border: 1px solid #cdd0d2;
              border-bottom: none;
            }
            div::-webkit-scrollbar-button:vertical:end:increment {
              background-color: #f8f8f8;
              background-image: url("data:image/svg+xml,%3Csvg width='9' height='4' viewBox='0 0 9 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.84961 0H0.849609L4.84961 4L8.84961 0Z' fill='%23697279'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: center;
              border: 1px solid #cdd0d2;
              border-top: none;
            }
            div::-webkit-scrollbar-button:horizontal,
            div::-webkit-scrollbar-button:vertical:start:increment,
            div::-webkit-scrollbar-button:vertical:end:decrement {
              display: none;
            }
          `}</style>
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
