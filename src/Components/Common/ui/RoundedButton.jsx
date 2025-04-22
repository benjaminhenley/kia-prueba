const RoundedButton = ({ title, onClick, type = "primary" }) => {
  const isPrimary = type === "primary";

  return (
    <div className="mt-8 md:mt-10 flex justify-center sm:justify-start group">
      <button
        onClick={onClick}
        className={`w-full max-w-[380px] rounded-full py-[3px] px-[3px] pl-2.5 md:pl-5 gap-[15px] flex items-center justify-between ${
          isPrimary
            ? "border border-[#05141F] text-[#05141F]"
            : "bg-[#05141F] text-white hover:bg-[#1a2a36]"
        }`}>
        <h6 className="font-bold md:hidden group-hover:underline underline-offset-4">{title}</h6>
        <h4 className="font-bold hidden md:block group-hover:underline underline-offset-4">{title}</h4>
        <svg
          className="md:w-8 md:h-8 w-6 h-6"
          // width="32"
          // height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="0.47583"
            width="32"
            height="32.0484"
            rx="16"
            fill={isPrimary ? "#05141F" : "white"}
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
