import React from "react";
import SquareButton from "./SquareButton";

const SuccessMessage = ({
  firstName,
  onReset,
  onHome,
  message = "Muchas gracias por estar interesado en nuestra ayuda. Le enviaremos un correo electrónico con la respuesta a tu consulta.",
}) => {
  return (
    <div className="px-6 flex flex-col items-center justify-center text-center gap-6 md:gap-[31px] py-8 md:py-12 bg-[#F8F8F8] border border-[#CDD0D2]">
      <h2 className="font-bold text-[#05141F]">¡Hola, {firstName}!</h2>
      <h5 className="text-[#05141F]">{message}</h5>
      <div className="flex flex-col xs:flex-row gap-4 w-full md:w-auto">
        <SquareButton type="secondary" onClick={onReset}>
          Deseo agregar otro contacto
        </SquareButton>
        <SquareButton type="primary" onClick={onHome}>
          Volver al Inicio
        </SquareButton>
      </div>
    </div>
  );
};

export default SuccessMessage;
