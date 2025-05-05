import Arrow from "../Icons/Arrow";

const AccordeonItem = ({
  sectionID,
  toggleSection,
  activeSection,
  title,
  content,
  className = "",
}) => {
  return (
    <div key={sectionID} className={`border-b border-[#CDD0D2] ${className}`}>
      <button
        onClick={() => toggleSection(sectionID)}
        className="flex items-center justify-start w-full p-4 md:py-[22px] md:px-[25px]  text-left focus:outline-none gap-[15px]">
        <Arrow
          fill="#05141F"
          className={`text-[#05141F] ${
            activeSection === sectionID ? "rotate-90" : ""
          }`}
        />
        <h4 className="text-[18px] font-semibold flex flex-row">{title}</h4>
      </button>

      {activeSection === sectionID && (
        <div className={`px-9 py-4 md:px-[50px] md:py-[22px]`}>{content}</div>
      )}
    </div>
  );
};

export default AccordeonItem;
