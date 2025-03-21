import React from 'react';

import promociones from '../../assets/img/inicio/promociones/desktop/Promociones.webp'
import promocionesMobile from '../../assets/img/inicio/promociones/mobile/PromocionesMobile.webp'
import concesionarios from '../../assets/img/inicio/promociones/Concesionarios.svg'
import turno from '../../assets/img/inicio/promociones/Turno.svg'
import postVenta from '../../assets/img/inicio/promociones/PostVenta.svg'
import garantia from '../../assets/img/inicio/promociones/Garantia.svg'


const Promociones = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:h-screen">
      {/* Sección de promociones con imagen de fondo */}
      <div className="relative w-full h-auto md:h-full min-h-[320px] flex items-end">
        {/* Imagen para escritorio (oculta en móvil) */}
        <img 
            src={promociones}
            alt="SUV KIA en camino rural" 
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            loading="lazy"
          />
          
        {/* Contenedor para mobile con posicionamiento relativo */}
        <div className="relative w-full block md:hidden">
          {/* Imagen para móvil (oculta en escritorio) */}
          <img 
            src={promocionesMobile}
            alt="SUV KIA en camino rural" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        
          
          {/* Contenido específico para móvil, posicionado absolutamente */}
          <div className="absolute bottom-0 left-0 p-6 text-white z-10">
            <h2 className="text-3xl font-bold mb-4">Promociones</h2>
            <button className="flex items-center text-sm font-medium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6866 6H11.3152V18H12.6866V6ZM18 11.3152H6V12.6866H18V11.3152Z" fill="#05141F"/>
              </svg>
              Saber más
            </button>
          </div>
        </div>
        
        {/* Sección para desktop */}
        <div className="relative p-6 md:py-14 md:px-20 text-white z-10 hidden md:block">
          <h2 className="text-[1.875rem] font-bold mb-4">Promociones</h2>
          <button className="flex items-center text-sm font-bold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6866 6H11.3152V18H12.6866V6ZM18 11.3152H6V12.6866H18V11.3152Z" fill="#05141F"/>
              </svg>
            Saber más
          </button>
        </div>
      </div>

      {/* Grid de servicios */}
      <div className="w-full grid grid-cols-2 auto-rows-fr">
        {/* Concesionarios */}
        <div className="bg-[#37434C] flex flex-col items-center justify-center p-4 md:p-8 text-white min-h-[140px]">
          <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
            <img src={concesionarios} alt='concesionarios' className="max-h-full" />
          </div>
          <h3 className="text-center text-lg font-medium">Concesionarios</h3>
        </div>

        {/* Turno Online */}
        <div className="bg-[#37434CCC] flex flex-col items-center justify-center p-4 md:p-8 text-white min-h-[140px]">
          <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
            <img src={turno} alt='turno online' className="max-h-full" />
          </div>
          <h3 className="text-center text-lg font-medium">Turno Online</h3>
        </div>

        {/* Post Venta */}
        <div className="bg-[#37434C66] flex flex-col items-center justify-center p-4 md:p-8 text-white min-h-[140px]">
          <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
            <img src={postVenta} alt='post venta' className="max-h-full" />
          </div>
          <h3 className="text-center text-lg font-medium">Post Venta</h3>
        </div>

        {/* Garantía */}
        <div className="bg-[#37434C99] flex flex-col items-center justify-center p-4 md:p-8 text-white min-h-[140px]">
          <div className="mb-2 md:mb-4 flex items-center justify-center h-12">
            <img src={garantia} alt='garantia' className="max-h-full" />
          </div>
          <h3 className="text-center text-lg font-medium">Garantía</h3>
        </div>
      </div>
    </div>
  );
};

export default Promociones;