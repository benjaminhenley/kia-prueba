const Button = ({ type = "primary", disabled = false, children }) => {
  const baseClasses = "h-14 px-10 flex justify-center items-center";

  const typeClasses = {
    primary: disabled
      ? "bg-[#9BA1A5] text-white"
      : "bg-[#05141F] text-white hover:bg-[#05141F] active:bg-[#05141F]",
    secondary: disabled
      ? "border border-[#05141F] text-[#05141F]"
      : "border border-[#05141F] text-gray-900 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type]} transition-colors ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}>
      <h6 className="font-bold">{children}</h6>
    </button>
  );
};

export default Button;
