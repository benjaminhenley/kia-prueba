const SquareButton = ({
  type = "primary",
  disabled = false,
  children,
  onClick,
}) => {
  const baseClasses = "h-14 px-10 flex justify-center items-center";

  const typeClasses = {
    primary: disabled
      ? "bg-[#9BA1A5] text-white"
      : "bg-[#05141F] text-white hover:bg-[#37434C] hover:underline underline-offset-4 active:bg-[#05141F]",
    secondary: disabled
      ? "border border-[#9BA1A5] text-[#9BA1A5]"
      : "border border-[#05141F] text-[#05141F] underline-offset-4 hover:underline ",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]} transition-colors ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}>
      <h6 className="font-bold">{children}</h6>
    </button>
  );
};

export default SquareButton;
