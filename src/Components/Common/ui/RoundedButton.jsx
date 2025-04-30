const RoundedButton = ({
  title,
  onClick,
  type = "primary",
  size = "medium",
}) => {
  const isPrimary = type === "primary";

  const sizeStyles = {
    small: {
      text: "text-[14px] py-[2px] px-[2px] md:pl-2.5 gap-3",
      icon: "w-6 h-6",
    },
    medium: {
      text: "text-[18px] py-[2px] px-[2px] pl-2 md:pl-2.5 gap-[15px]",
      icon: "w-6 h-6 md:w-8 md:h-8",
    },
  };

  return (
    <div className="flex justify-center sm:justify-start group">
      <button
        onClick={onClick}
        className={`${
          sizeStyles[size].text
        } rounded-full flex items-center justify-between ${
          isPrimary
            ? "border border-[#05141F] text-[#05141F]"
            : "bg-[#05141F] text-white hover:bg-[#1a2a36]"
        }`}>
        <span
          className={`font-bold md:hidden group-hover:underline underline-offset-4`}>
          {title}
        </span>
        <span
          className={`font-bold hidden md:block group-hover:underline underline-offset-[5px]`}>
          {title}
        </span>

        <svg
          className={`${sizeStyles[size].icon}`}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="0.47583"
            width="32"
            height="32.0484"
            rx="16"
            fill={isPrimary ? "#05141F" : "white"}
            className={isPrimary && "group-hover:fill-[#1a2a36]"}
          />
          <path
            d="M19.9071 16.217C19.9652 16.2904 20 16.389 20 16.5001C20 16.6113 19.9652 16.7099 19.9071 16.7833L13.7934 24.5122H12.0017L18.3393 16.5001L12 8.48804H13.7918L19.9071 16.217Z"
            fill={isPrimary ? "white" : "#05141F"}
          />
        </svg>
      </button>
    </div>
  );
};

export default RoundedButton;
