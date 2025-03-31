import React from 'react';

import promociones from '../../assets/img/inicio/promociones/desktop/Promociones.webp'
import concesionarios from '../../assets/img/inicio/promociones/Concesionarios.svg'
import turno from '../../assets/img/inicio/promociones/Turno.svg'
import postVenta from '../../assets/img/inicio/promociones/PostVenta.svg'
import garantia from '../../assets/img/inicio/promociones/Garantia.svg'

const Promociones = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:h-screen">
      {/* Sección de promociones con imagen de fondo */}
      <div className="relative w-full h-full lg:h-full min-h-[320px] flex items-end overflow-hidden">
        {/* Imagen para desktop (oculta en mobile y tablet) */}
        <img 
            src={promociones}
            alt="SUV KIA en camino rural" 
            className="absolute inset-0 w-full h-full object-cover hidden lg:block transition-transform duration-300 hover:scale-110 origin-center"
            loading="lazy"
          />
        
        {/* Contenedor para mobile y tablet */}
        <div className="relative w-full h-full block lg:hidden">
          {/* Imagen para móvil/tablet */}
          <img 
            src={promociones}
            alt="SUV KIA en camino rural" 
            className="w-full h-full inset-0 object-cover"
            loading="lazy"
          />
        
          {/* Contenido específico para mobile y tablet, posicionado absolutamente */}
          <div className="absolute bottom-0 left-0 p-6 text-white z-10 sm:py-14 sm:px-20">
            <h2 className="text-[1rem] font-bold mb-1 sm:text-[1.875rem] sm:mb-4">Promociones</h2>
            <a href='https://www.kia.com.ar/promociones' target='' rel='noreferrer'>
              <button className="flex items-center text-xs fon-bold md:text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6866 6H11.3152V18H12.6866V6ZM18 11.3152H6V12.6866H18V11.3152Z" fill="#fff"/>
                </svg>
                Saber más
              </button>
            </a>
          </div>
        </div>
        
        {/* Sección para desktop */}
        <div className="relative p-6 md:py-14 md:px-20 text-white z-10 hidden lg:block">
          <h2 className="text-[1.875rem] font-bold mb-4">Promociones</h2>
          <a href='https://www.kia.com.ar/promociones' target='' rel='noreferrer' className="relative group">
            <button className="flex items-center text-sm font-bold transition-all duration-300 group-hover:text-[#CDD0D2]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6866 6H11.3152V18H12.6866V6ZM18 11.3152H6V12.6866H18V11.3152Z" fill="#fff"/>
                </svg>
                <span className="relative ml-1">
                  Saber más
                  <span className="absolute left-0 bottom-[1px] h-[1px] bg-white group-hover:w-full group-hover:bg-[#CDD0D2] transition-all duration-300"></span>
                </span>
            </button>
          </a>  
        </div>
      </div>

      {/* Grid de servicios */}
      <div className="w-full grid grid-cols-2 auto-rows-fr">
        {/* Concesionarios */}
        <div className="bg-[#37434C] flex flex-col items-center justify-center p-4 md:p-8 text-[1rem] text-white min-h-[200px] relative group">
          <a href='https://www.kia.com.ar/red-venta' target='' rel='noreferrer' className="relative">
            <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
              <img src={concesionarios} alt='concesionarios' className="max-h-full" />
            </div>
            <h3 className="text-center text-lg font-medium relative">
              Concesionarios
              <span className="absolute left-0 bottom-[2px] h-[1px] group-hover:bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
          </a>
        </div>

        {/* Turno Online */}
        <div className="bg-[#37434CCC] flex flex-col items-center justify-center p-4 md:p-8 text-[1rem] text-white min-h-[200px] relative group">
          <a href='https://mkt.pilotsolution.net/kiaarg/postventa/' target='' rel='noreferrer' className="relative">
            <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
              <img src={turno} alt='turno online' className="max-h-full" />
            </div>
            <h3 className="text-center text-lg font-medium relative">
              Turno Online
              <span className="absolute left-0 bottom-[2px] h-[1px] group-hover:bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
          </a>  
        </div>

        {/* Post Venta */}
        <div className="bg-[#37434C66] flex flex-col items-center justify-center p-4 md:p-8 text-[1rem] text-white min-h-[200px] relative group">
          <a href='https://www.kia.com.ar/red-postventa' target='' rel='noreferrer' className="relative">
            <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
              <img src={postVenta} alt='post venta' className="max-h-full" />
            </div>
            <h3 className="text-center text-lg font-medium relative">
              Post Venta
              <span className="absolute left-0 bottom-[2px] h-[1px] group-hover:bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
          </a>  
        </div>

        {/* Garantía */}
        <div className="bg-[#37434C99] flex flex-col items-center justify-center p-4 md:p-8 text-[1rem] text-white min-h-[200px] relative group">
          <a href='https://www.kia.com.ar/red-postventa' target='' rel='noreferrer' className="relative">
            <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
              <img src={garantia} alt='garantia' className="max-h-full" />
            </div>
            <h3 className="text-center text-lg font-medium relative">
              Garantía
              <span className="absolute left-0 bottom-[2px] h-[1px] group-hover:bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
          </a>  
        </div>
      </div>
    </div>
  );
};

export default Promociones;