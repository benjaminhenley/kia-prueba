import {
  redes,
  autos,
  camionetasSuv,
  utilitarios,
  concesionarios,
  postVentaFooter,
} from "../../Data/common";
import Kia from "../../assets/img/common/Kia.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Estado para manejar los acordeones
  const [openModelos, setOpenModelos] = useState(false);
  const [openConcesionarios, setOpenConcesionarios] = useState(false);
  const [openPostVenta, setOpenPostVenta] = useState(false);
  const [openNuevaKia, setOpenNuevaKia] = useState(false);

  // Función para alternar estado de acordeón
  const toggleAccordion = (section) => {
    if (section === "modelos") {
      setOpenModelos(!openModelos);
    } else if (section === "concesionarios") {
      setOpenConcesionarios(!openConcesionarios);
    } else if (section === "postVenta") {
      setOpenPostVenta(!openPostVenta);
    } else if (section === "nuevaKia") {
      setOpenNuevaKia(!openNuevaKia);
    }
  };

  return (
    <div className="bg-midnight-black p-5 md:p-10 lg:p-20 lg:pb-10">
      <div className="flex flex-col md:flex-row md:gap-3 justify-between">
        <div className="w-full md:w-1/3">
          <div className="pb-7 flex justify-start">
            <Link to='/' className="hover:opacity-70 transition-opacity">
              <img src={Kia} alt="Kia" />
            </Link>
          </div>
          <div className="flex pb-3 gap-3">
            {redes.map((item) =>
              item.esExterna ? (
                <a
                  key={item.nombre}
                  href={item.href}
                  target={item.target}
                  rel="noreferrer"
                >
                  <img src={item.logo} alt={item.nombre} />
                </a>
              ) : (
                <Link 
                  key={item.nombre} 
                  to={item.href}
                >
                  <img src={item.logo} alt={item.nombre} />
                </Link>
              )
            )}
          </div>
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
        </div>
        <div className="w-full flex flex-col md:w-2/3 md:flex-row md:gap-3 justify-between text-sm">
          {/* Modelos */}
          <div className="w-full">
            <h5
              className="font-semibold text-kia-polar-white cursor-pointer md:cursor-default md:pb-7 md:block transition-colors"
              onClick={() => toggleAccordion("modelos")}>
              Modelos
            </h5>
            <div className={`${openModelos ? "block" : "hidden"} md:block`}>
              <div className="pt-3 pb-7">
                <h6 className="font-semibold text-kia-gray py-1 md:py-3">
                  Autos
                </h6>
                {autos.map((item) => (
                  <p className="text-kia-gray py-1 md:py-3" key={item.nombre}>
                    {item.esExterna ? (
                      <a 
                        href={item.href} 
                        target={item.target} 
                        rel="noreferrer"
                        className="hover:text-[#CDD0D2] transition-colors relative group"
                      >
                        {item.nombre}
                        <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <Link 
                        to={item.href}
                        className="hover:text-[#CDD0D2] transition-colors relative group"
                      >
                        {item.nombre}
                        <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </p>
                ))}
              </div>
              <div className="pb-7">
                <h6 className="font-semibold text-kia-gray py-1 md:py-3">
                  SUV
                </h6>
                {camionetasSuv.map((item) => (
                  <p className="text-kia-gray py-1 md:py-3" key={item.nombre}>
                    <a 
                      href={item.href} 
                      target={item.target} 
                      rel="noreferrer"
                      className="hover:text-[#CDD0D2] transition-colors relative group"
                    >
                      {item.nombre}
                      <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                      </a>
                  </p>
                ))}
              </div>
              <div className="pb-7">
                <h6 className="font-semibold text-kia-gray py-1 md:py-3">
                  Utilitarios
                </h6>
                {utilitarios.map((item) => (
                  <p className="text-kia-gray py-1 md:py-3" key={item.nombre}>
                    <a 
                      href={item.href} 
                      target={item.target} 
                      rel="noreferrer"
                      className="hover:text-[#CDD0D2] transition-colors relative group"
                    >
                      {item.nombre}
                      <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Concesionarios */}
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
          <div className="w-full">
            <h5
              className="font-semibold text-kia-polar-white md:pb-7 cursor-pointer md:cursor-default md:block transition-colors"
              onClick={() => toggleAccordion("concesionarios")}>
              Concesionarios
            </h5>
            <div
              className={`pt-3 ${
                openConcesionarios ? "block" : "hidden"
              } md:block`}>
              {concesionarios.map((item) => (
                <h6
                  className="font-semibold text-kia-gray py-1 md:py-3"
                  key={item.nombre}>
                  <a 
                    href={item.href} 
                    target={item.target} 
                    rel="noreferrer"
                    className="hover:text-[#CDD0D2] transition-colors relative group"
                  >
                    {item.nombre}
                    <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </h6>
              ))}
            </div>
          </div>

          {/* Post Venta */}
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
          <div className="w-full">
            <h5
              className="font-semibold text-kia-polar-white md:pb-7 cursor-pointer md:cursor-default md:block transition-colors"
              onClick={() => toggleAccordion("postVenta")}>
              Post Venta
            </h5>
            <div
              className={`pt-3 ${openPostVenta ? "block" : "hidden"} md:block`}>
              {postVentaFooter.map((item) => (
                <h6
                  className="font-semibold text-kia-gray py-1 md:py-3"
                  key={item.nombre}>
                  <a 
                    href={item.href} 
                    target={item.target} 
                    rel="noreferrer"
                    className="hover:text-[#CDD0D2] transition-colors relative group"
                  >
                    {item.nombre}
                    <span className="absolute left-0 bottom-0 h-[0.5px] bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </h6>
              ))}
            </div>
          </div>

          {/* Nueva Kia */}
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
          <div className="w-full">
            <h5
              className="font-semibold text-kia-polar-white md:pb-7 md:hover:pb-[1px] cursor-pointer md:block transition-colors relative group"
              onClick={() => toggleAccordion("nuevaKia")}>
              <span className="relative inline-block">
                Nueva Kia
                <span className="absolute left-0 bottom-0 h-[0.5px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h5>
            <div
              className={`${openNuevaKia ? "block" : "hidden"} md:block`}></div>
          </div>
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row justify-between pt-7 text-[0.75rem]"> 
        <Link 
          to="/" 
          className="md:w-1/2 flex items-center hover:text-[#37434C] transition-colors group relative"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-[#37434C] transition-colors">
            <path id="Vector" d="M15.2988 10.8732V16.8002H8.69965V10.8732L11.9992 7.49823L15.2988 10.8732ZM18 13.5728V11.8767L12.2112 6.08795C12.1563 6.03298 12.0824 6 11.9992 6C11.916 6 11.8422 6.03298 11.7872 6.08795L6 11.8751V13.5713L7.4998 11.9961V17.6985C7.4998 17.8649 7.63486 17.9984 7.79976 17.9984H16.1987C16.3636 17.9984 16.4986 17.8649 16.4986 17.6985V11.9961L17.9984 13.5713L18 13.5728Z" fill="white"/>
          </svg>
          <p className="font-semibold text-kia-polar-white cursor-pointer pt-1 relative group">
            Home
            <span className="absolute left-0 bottom-[1px] h-[1px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
          </p>
        </Link>
        <div className="md:w-1/2">
          <p className="font-semibold text-kia-polar-white md:text-end">
            Kia Argentina. Todos los derechos reservados 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;