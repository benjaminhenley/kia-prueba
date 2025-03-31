const Button = ({ type = "primary", disabled = false, children }) => {
  const baseClasses = "h-14 px-10 flex justify-center items-center";

  const typeClasses = {
    primary: disabled
      ? "bg-zinc-400 text-white"
      : "bg-gray-900 text-white hover:bg-gray-800 active:bg-black",
    secondary: disabled
      ? "outline outline-1 outline-offset-[-1px] outline-zinc-400 text-zinc-400"
      : "outline outline-1 outline-offset-[-1px] outline-gray-900 text-gray-900 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type]} transition-colors ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
