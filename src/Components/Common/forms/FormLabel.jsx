const FormLabel = ({ text, required = true }) => (
  <div className="w-52 justify-start flex flex-row items-center">
    <h5 className="text-[#697279] font-bold text-[16px]">{text}</h5>
    {required && <span className="text-[#EA0029] font-bold ">*</span>}
  </div>
);

export default FormLabel;
