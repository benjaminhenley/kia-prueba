import React from "react";
import SquareButton from "./SquareButton";

const SuccessMessage = ({
  firstName,
  buttonText,
  onReset,
  onHome,
  message,
}) => {
  return (
    <div className="px-6 flex flex-col items-center justify-center text-center gap-6 md:gap-[31px] py-8 md:py-12 bg-[#F8F8F8] border border-[#CDD0D2]">
      <h2 className="font-bold text-[#05141F]">¡Hola, {firstName}!</h2>
      <div>
        {message.split(".").map((sentence, index) => (
          <h5 className="text-[#05141F]" key={index}>
            {sentence}.
          </h5>
        ))}
      </div>
      <div className="flex flex-col xs:flex-row gap-4 w-full md:w-auto">
        <SquareButton type="secondary" onClick={onReset}>
          {buttonText}
        </SquareButton>
        <SquareButton type="primary" onClick={onHome}>
          Volver al Inicio
        </SquareButton>
      </div>
    </div>
  );
};

export default SuccessMessage;
