import React from "react";

import kiaLogo from "../../assets/img/KiaMovement.svg";

const ConcesionarioCard = ({
  nombre,
  direccion,
  telefono,
  horario,
  email,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`flex flex-col p-2 custom-scrollbar items:start md:flex-row md:justify-start gap-4 md:items-start hover:bg-[#F8F8F8] md:p-3 cursor-pointer ${
        isSelected ? "bg-[#F8F8F8]" : ""
      }`}
      onClick={onClick}>
      <img src={kiaLogo} alt="Kia Logo" className="w-[100px]" />
      <div>
        <h4 className="text-sm mb-2 md:text-base text-midnight-black font-medium md:mb-[0.75rem]">
          {nombre}
        </h4>
        <p className="text-sm md-2 md:text-base text-midnight-black font-regular mb-[0.75rem]">
          {direccion}
        </p>
        <div className="space-y-[0px]">
          <p className="text-xs md:text-sm text-midnight-black">
            Teléfono: {telefono}
          </p>
          <p className="text-xs md:text-sm text-midnight-black">
            Horario: {horario}
          </p>
          <p className="text-xs md:text-sm text-midnight-black">
            Mail: {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConcesionarioCard;
