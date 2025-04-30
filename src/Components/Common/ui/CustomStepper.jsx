const CustomStepper = ({ step, title, description, selected, onClick }) => {
  const types = {
    primary: "bg-midnight-black text-white",
    secondary: "bg-[#F0F1F2] text-[#9BA1A5]",
  };

  return (
    <div
      onClick={onClick}
      className={`${
        types[selected ? "primary" : "secondary"]
      } p-4 md:p-8 flex flex-col md:flex-row items-center w-full`}>
      <h1 className="font-bold text-[48px] h-fit">{step}</h1>
      <div
        className="w-[1px] h-[56px] mx-5"
        style={{
          backgroundColor: selected ? "white" : "#9BA1A5",
        }}></div>
      <div>
        <h3 className="font-bold mb-2.5">{title}</h3>
        <h4 className="">{description}</h4>
      </div>
    </div>
  );
};

export default CustomStepper;
