import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenuSection from './MobileMenuSection';
import FiltroVehiculos from '../FiltroVehiculos';
import VehiculoCard from '../VehiculoCard';
import MobileLinksAdicionales from './MobileLinksAdicionales';

const MobileMenu = ({ 
  isOpen, 
  activeSubMenu, 
  toggleSubMenu, 
  activeFilter, 
  onFilterClick,
  autos,
  camionetasSuv,
  utilitarios
}) => {
  return (
    <div 
      className={`w-screen md:hidden fixed top-[3.5rem] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="text-midnight-black border-t border-[#CDD0D2]">
          {/* Modelos */}
          <MobileMenuSection
            title="Modelos" 
            isActive={activeSubMenu === 'modelos'} 
            onClick={() => toggleSubMenu('modelos')}
            className={activeSubMenu === 'modelos' ? 'bg-midnight-black' : ''} 
          >
            <FiltroVehiculos activeFilter={activeFilter} onFilterClick={onFilterClick} />
            <div className="mt-2 grid grid-cols-2 grid-col-1 gap-4 p-2">
              {(activeFilter === 'todos' || activeFilter === 'autos') && 
                autos.map((auto, index) => (
                  <VehiculoCard key={`auto-${index}`} vehiculo={auto} />
                ))
              }
              
              {(activeFilter === 'todos' || activeFilter === 'suv') && 
                camionetasSuv.map((suv, index) => (
                  <VehiculoCard key={`suv-${index}`} vehiculo={suv} />
                ))
              }
              
              {(activeFilter === 'todos' || activeFilter === 'utilitarios') && 
                utilitarios.map((util, index) => (
                  <VehiculoCard key={`util-${index}`} vehiculo={util} />
                ))
              }
            </div>
          </MobileMenuSection>
          
          {/* Concesionario */}
          <MobileMenuSection 
            title="Concesionario" 
            isActive={activeSubMenu === 'concesionarios'} 
            onClick={() => toggleSubMenu('concesionarios')}
          >
            <div className="bg-[#F8F8F8]">
                <Link to="/concesionarios/venta" className="block py-2 px2 pl-7 hover:font-bold border-b border-[#CDD0D2]">
                  Venta
                </Link>
                <Link to="/concesionarios/post-venta" className="block py-2 px2 pl-7  hover:font-bold border-b border-[#CDD0D2]">
                  Post Venta
                </Link>
            </div>
          </MobileMenuSection>
          
          {/* Post Venta (sin desplegable) */}
          <div>
            <div className="p-3 border-b border-[#CDD0D2]">
              <span className="font-semibold">Post Venta</span>
            </div>
          </div>
          
          {/* Nueva Kia (sin desplegable) */}
          <div>
            <div className="p-3 border-b border-[#CDD0D2]">
              <span className="font-semibold">Nueva Kia</span>
            </div>
          </div>
          
          {/* Enlaces adicionales */}
          <MobileLinksAdicionales />
      </div>
    </div>
  );
};

// Componente para los enlaces adicionales
/* const MobileAdditionalLinks = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <div className="py-2">
        <a href="#" className="text-sm font-semibold uppercase">Promociones</a>
      </div>
      <div className="py-2">
        <a href="#" className="text-sm font-semibold uppercase">Contáctenos</a>
      </div>
      <div className="py-2">
        <a href="#" className="text-sm font-semibold uppercase">Worldwide</a>
      </div>
      <div className="py-2">
        <a href="#" className="text-sm font-semibold uppercase">Política de cookies</a>
      </div>
    </div>
  );
}; */

export default MobileMenu; 