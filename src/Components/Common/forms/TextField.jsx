const TextField = ({
  disabled = false,
  placeholder = "",
  value = "",
  onChange = () => {},
  name = "",
}) => (
  <div
    className={`flex-1 h-7 inline-flex flex-col justify-start items-start overflow-hidden ${
      disabled ? "opacity-50" : ""
    }`}>
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      name={name}
      onChange={onChange}
      className="self-stretch h-7 px-2.5 w-full outline outline-1 outline-offset-[-1px] outline-neutral-300 focus:outline-gray-700"
    />
  </div>
);

export default TextField;
