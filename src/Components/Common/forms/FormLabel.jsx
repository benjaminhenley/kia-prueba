const FormLabel = ({ text, required = true }) => (
  <div className="w-52 justify-start">
    <span className="text-gray-500 font-semibold font-kia">{text}</span>
    {required && <span className="text-red-600 font-semibold font-kia">*</span>}
  </div>
);

export default FormLabel;
