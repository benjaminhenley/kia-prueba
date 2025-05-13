import CheckIcon from "./checkIcon";
import useWindowWidth from "../../../Hooks/useWindowWidth";
const CustomStepper = ({
  step,
  title,
  description,
  selected,
  onClick,
  items = null,
  checked = false,
}) => {
  const types = {
    primary: "bg-midnight-black text-white",
    secondary: "bg-[#F0F1F2] text-[#9BA1A5]",
    completed: "bg-[#F0F1F2] text-[#37434C]",
  };

  const isMobile = useWindowWidth() < 768;

  return (
    <div
      onClick={onClick}
      className={`${
        types[selected ? "primary" : checked ? "completed" : "secondary"]
      } px-4 py-5 md:p-8 flex flex-col md:flex-row justify-start items-center w-full`}>
      <div className="flex flex-col items-start md:flex-row md:items-center w-full md:w-fit">
        <div className="flex flex-row items-center w-full justify-between gap-4">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-none h-fit md:w-fit ">
            {step}
          </h1>
          {items && isMobile && items}
          {checked && isMobile && <CheckIcon />}
        </div>
        <div
          className="w-full h-[1px] md:w-[1px] md:h-[56px] my-2.5 md:mx-5"
          style={{
            backgroundColor: selected ? "white" : "#9BA1A5",
          }}></div>
      </div>
      <div className="flex flex-row justify-between w-full items-center gap-4">
        <div className="">
          <h3 className="font-bold md:mb-2.5 mb-[5px]">{title}</h3>
          <h4 className="">{description}</h4>
        </div>
        {items && !isMobile && items}
        {checked && !isMobile && <CheckIcon />}
      </div>
    </div>
  );
};

export default CustomStepper;
