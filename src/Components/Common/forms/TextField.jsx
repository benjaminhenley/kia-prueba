const TextField = ({
  className = "",
  disabled = false,
  placeholder = "",
  value = "",
  onChange = () => {},
  name = "",
  type = "text",
}) => {
  // Handle input changes
  const handleChange = (e) => {
    const newValue = e.target.value;

    // If type is tel, only allow numeric input
    if (type === "tel") {
      // Replace non-numeric characters with empty string
      const numericValue = newValue.replace(/[^0-9]/g, "");

      // Create a synthetic event with the filtered value
      const syntheticEvent = {
        target: {
          name: e.target.name,
          value: numericValue,
        },
      };

      onChange(syntheticEvent);
    } else {
      // For other input types, pass the event unchanged
      onChange(e);
    }
  };

  return (
    <div
      className={`flex-1 h-7 inline-flex flex-col justify-start items-start overflow-hidden ${
        disabled ? "opacity-50" : ""
      } ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        name={name}
        onChange={handleChange}
        className="placeholder:text-[#697279] self-stretch h-7 px-2.5 py-1.5 w-full outline outline-1 outline-offset-[-1px] outline-[#CDD0D2] focus:outline-[#CDD0D2] border"
      />
    </div>
  );
};

export default TextField;
