import React from 'react';
import VehiculoCard from './VehiculoCard';
import FiltroVehiculos from './FiltroVehiculos';

const ModelosDropdown = ({ activeFilter, onFilterClick, autos, camionetasSuv, utilitarios, onLinkClick }) => {
/*   const handleLinkClick = (e) => {
    // Lógica para manejar clics en los enlaces
    if (e.target.closest('.filtro-link')) {
      return; // No cerrar si es un enlace de filtro
    }
    onFilterClick(activeFilter); // Llamar a la función de clic
  }; */

  return (
    <div className='absolute left-0 right-0 bg-white text-midnight-black shadow-lg z-40 w-full'>
      {/* Sección de filtros con fondo que abarca toda la pantalla */}
      <FiltroVehiculos activeFilter={activeFilter} onFilterClick={onFilterClick} />
      {/* Contenido de modelos */}
      <div className='px-5 md:px-10 lg:px-20 py-6'>
        {/* Modelos de vehículos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {/* Mostrar todos los vehículos o solo los filtrados */}
          {(activeFilter === 'todos' || activeFilter === 'autos') && 
            autos.map((auto, index) => (
              <VehiculoCard 
                key={`auto-${index}`} 
                vehiculo={auto} 
                onClick={(e) => {
                  onLinkClick(e); // Llamar a la función para cerrar el dropdown
                }} 
              />
            ))
          }
          
          {(activeFilter === 'todos' || activeFilter === 'suv') && 
            camionetasSuv.map((suv, index) => (
              <VehiculoCard 
                key={`suv-${index}`} 
                vehiculo={suv} 
                onClick={(e) => {
                  onLinkClick(e); // Llamar a la función para cerrar el dropdown
                }} 
              />
            ))
          }
          
          {(activeFilter === 'todos' || activeFilter === 'utilitarios') && 
            utilitarios.map((util, index) => (
              <VehiculoCard 
                key={`util-${index}`} 
                vehiculo={util} 
                onClick={(e) => {
                  onLinkClick(e); // Llamar a la función para cerrar el dropdown
                }} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ModelosDropdown; 