import React from "react";
import { Link } from "react-router-dom";
import SquareButton from "../Common/ui/SquareButton";

const CookieModal = ({ isOpen, onClose, onAcceptAll, onRejectAll }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      {/* Mobile Modal */}
      <div className=" max-w-[370px] md:max-w-[1440px] w-[90%] mx-auto relative pt-[13px] bg-[#E6E7E9]">
        <div className="px-5 md:px-[240px]">
          <button
            onClick={onClose}
            className="flex justify-end w-full pb-[13px]"
            aria-label="Cerrar">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1712_48374)">
                <path
                  d="M1.56904 -0.000191396L0.133301 1.43555L12.696 13.9983L14.1317 12.5625L1.56904 -0.000191396Z"
                  fill="#9BA1A5"
                />
                <path
                  d="M12.696 0.00174317L0.133301 12.5645L1.56904 14.0002L14.1317 1.43748L12.696 0.00174317Z"
                  fill="#9BA1A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1712_48374">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <h3 className="font-light mb-[13px]">Uso de cookies</h3>

          <h6 className="font-light mb-10">
            Kia Argentina utiliza cookies propias y de terceros, con las
            finalidades de ofrecerle servicios personalizados en base a un
            perfil elaborado a partir de sus hábitos de navegación, así como
            para recabar información con fines analíticos. Puede configurar y/o
            aceptar el uso de cookies mediante las casillas que se muestran a
            continuación. Para más información,{" "}
            <Link to="/cookies" className="underline">
              puede visitar nuestra Política de cookies
            </Link>
            .
          </h6>
        </div>

        <div className="flex flex-col gap-[15px] px-[72px] pb-10 bg-[#D9DCDD] w-full pt-5 md:px-[240px] md:flex-row">
          <button className=" border-gray-300 text-[#05141F] hover:underline underline-offset-4 font-medium rounded-none md:order-3 w-fit py-[22px]">
            <h6 className="font-bold"> Configurar cookies</h6>
          </button>

          <SquareButton type="primary">Aceptar todas</SquareButton>
          <SquareButton type="secondary" onClick={onRejectAll}>Rechazar todas</SquareButton>


         
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
