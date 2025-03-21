import React from 'react';

const FiltroVehiculos = ({ activeFilter, onFilterClick }) => {
  const filtros = [
    { id: 'todos', label: 'Todos los vehículos' },
    { id: 'autos', label: 'Autos' },
    { id: 'suv', label: 'Camionetas SUV' },
    { id: 'utilitarios', label: 'Utilitarios' },
  ];

  // Componente para móvil (tabla 2x2)
  const MobileFilter = () => (
    <div className='md:hidden'>
      <div className='flex flex-col w-full'>
        <div className='grid grid-cols-2 w-full'>
          <div 
            className={`p-2 border-b border-r border[#CDD0D2] ${activeFilter === 'todos' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => onFilterClick('todos')}
          >
            Todos los vehículos
          </div>
          <div 
            className={`p-2 border-b border[#CDD0D2 ${activeFilter === 'autos' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => onFilterClick('autos')}
          >
            Autos
          </div>
          <div 
            className={`p-2 border-b border-r border[#CDD0D2 ${activeFilter === 'suv' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => onFilterClick('suv')}
          >
            Camionetas SUV
          </div>
          <div 
            className={`p-2 border-b border[#CDD0D2 ${activeFilter === 'utilitarios' ? 'text-black' : 'text-gray-500'}`}
            onClick={() => onFilterClick('utilitarios')}
          >
            Utilitarios
          </div>
        </div>
      </div>
    </div>
  );

  // Componente para escritorio (con radio buttons)
  const DesktopFilter = () => (
    <div className='hidden md:block'>
      <div className='px-10 lg:px-20'>
        <div className='flex flex-row space-x-6 py-4'>
          {filtros.map((filtro) => (
            <div
              key={filtro.id}
              className={`cursor-pointer ${activeFilter === filtro.id ? 'font-bold text-black' : 'text-gray-500'} transition duration-300`}
              onClick={() => onFilterClick(filtro.id)}
            >
              <div className='flex items-center gap-2'>
                <div className={`w-5 h-5 rounded-full border ${activeFilter === filtro.id ? 'border-black' : 'border-gray-300'} relative flex items-center justify-center`}>
                  {activeFilter === filtro.id && (
                    <div className='w-3 h-3 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                  )}
                </div>
                <span className='text-base'>
                  {filtro.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-full'>
      <MobileFilter />
      <DesktopFilter />
    </div>
  );
};

export default FiltroVehiculos;