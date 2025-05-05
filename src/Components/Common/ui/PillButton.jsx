const PillButton = ({
  title,
  onClick,
  type = "primary",
  size = "medium",
  disabled = false,
}) => {
  const isPrimary = type === "primary";

  const sizeStyles = {
    small: {
      text: "text-[14px] leading-[16px] py-[2px] pr-[2px] pl-2.5 gap-3 group-hover:underline underline-offset-4",
      icon: "w-[18px] h-[18px]",
    },
    medium: {
      text: "text-[14px] leading-[16px] py-[2px] pr-[2px] pl-5 gap-[12px] underline-offset-[5px]",
      icon: "w-6 h-6 md:w-8 md:h-8",
    },
    large: {
      text: "text-[18px] leading-[20px] py-[2px] pr-[2px] pl-5 gap-[15px] group-hover:underline underline-offset-[6px]",
      icon: "w-[32px] h-[32px]",
    },
  };

  const colorScheme = {
    primary: {
      text: "text-[#05141F] group-hover:text-[#37434C] border border-[#05141F] group-hover:border-[#37434C] decoration-[#05141F] group-hover:decoration-[#37434C] disabled:text-[#9BA1A5] disabled:border-[#9BA1A5] disabled:no-underline disabled:cursor-not-allowed disabled:group-hover:text-[#9BA1A5] disabled:group-hover:border-[#9BA1A5] disabled:group-hover:no-underline",
      svg: "fill-[white] group-hover:fill-[#37434C] disabled:fill-[#9BA1A5] disabled:group-hover:fill-[#9BA1A5]",
    },

    secondary: {
      text: "bg-[#05141F] text-white group-hover:bg-[#37434C] disabled:bg-[#9BA1A5] disabled:text-white group-hover:underline group-hover:decoration-[white] disabled:group-hover:bg-[#9BA1A5] disabled:group-hover:no-underline disabled:cursor-not-allowed",
      rect: "fill-[white]",
      svg: "fill-[#05141F] group-hover:fill-[#37434C] disabled:fill-[#9BA1A5] disabled:group-hover:fill-[#9BA1A5]",
    },
  };

  const getRectFillClass = () => {
    if (disabled) {
      return isPrimary ? "fill-[#9BA1A5]" : "fill-[white]";
    }
    return isPrimary
      ? "fill-[#05141F] group-hover:fill-[#37434C]"
      : "fill-[white]";
  };

  const getPathFillClass = () => {
    if (disabled) {
      return isPrimary ? "fill-[white]" : "fill-[#9BA1A5]";
    }
    return isPrimary
      ? "fill-[white]"
      : "fill-[#05141F] group-hover:fill-[#37434C]";
  };

  return (
    <div className="flex justify-center sm:justify-start group">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${sizeStyles[size].text} ${colorScheme[type].text} rounded-full flex items-center justify-between`}
        aria-label={title}>
        <span className="font-bold">{title}</span>
        <svg
          className={sizeStyles[size].icon}
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <rect
            y="0.47583"
            width="32"
            height="32.0484"
            rx="16"
            className={getRectFillClass()}
          />
          <path
            d="M19.9071 16.217C19.9652 16.2904 20 16.389 20 16.5001C20 16.6113 19.9652 16.7099 19.9071 16.7833L13.7934 24.5122H12.0017L18.3393 16.5001L12 8.48804H13.7918L19.9071 16.217Z"
            className={getPathFillClass()}
          />
        </svg>
      </button>
    </div>
  );
};

export default PillButton;
