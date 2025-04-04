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
import Breadcrumbs from "./Breadcrumbs";

const Footer = () => {
  // Estado para manejar los acordeones
  const [openModelos, setOpenModelos] = useState(false);
  const [openConcesionarios, setOpenConcesionarios] = useState(false);
  const [openPostVenta, setOpenPostVenta] = useState(false);


  // Función para alternar estado de acordeón
  const toggleAccordion = (section) => {
    if (section === "modelos") {
      setOpenModelos(!openModelos);
    } else if (section === "concesionarios") {
      setOpenConcesionarios(!openConcesionarios);
    } else if (section === "postVenta") {
      setOpenPostVenta(!openPostVenta);
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
            <a href='https://www.kia.com.ar/ourmovement/' target='_blank' rel='noreferrer'>
              <h5
                className="font-semibold text-kia-polar-white md:pb-7 md:hover:pb-[1px] cursor-pointer md:block transition-colors relative group"
              >
                <span className="relative inline-block">
                  Nueva Kia
                  <span className="absolute left-0 bottom-0 h-[0.5px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h5>
            </a>
            <div
              className={``}></div>
          </div>
          <hr className="border-t border-[0.5px] border-kia-gray w-full my-5 md:border-none md:hidden" />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between pt-7 text-[0.75rem]"> 
        <Breadcrumbs/>
        <div className="md:w-1/2">
          <p className="pt-1 font-semibold text-kia-polar-white md:text-end">
            Kia Argentina. Todos los derechos reservados 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;