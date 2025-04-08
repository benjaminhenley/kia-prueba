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
      className="placeholder:text-[#697279] self-stretch h-7 px-2.5 py-1.5 w-full outline outline-1 outline-offset-[-1px] outline-[#CDD0D2] focus:outline-[#CDD0D2] border"
    />
  </div>
);

export default TextField;
