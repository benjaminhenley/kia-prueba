import React from 'react';
import { Link } from 'react-router-dom';

const ConcesionariosDropdown = ({ activeOption, onOptionClick }) => {
  // Opciones del dropdown de concesionarios
  const opciones = [
    { id: 'venta', nombre: 'Venta', href: '/concesionarios/venta', esExterna: false },
    { id: 'postVenta', nombre: 'Post Venta', href: '/concesionarios/post-venta', esExterna: false }
  ];

  return (
    <div className='relative bg-white text-midnight-black shadow-md p-6 z-40 min-w-[250px] rounded-md'>
      <div className='flex flex-col'>
        {opciones.map((opcion) => (
          <div key={opcion.id} className='py-3 border-b border-gray-200 last:border-b-0'>
            {opcion.esExterna ? (
              <a 
                href={opcion.href} 
                target='_blank' 
                rel='noreferrer'
                className={`block hover:font-bold transition-all ${activeOption === opcion.id ? 'font-bold' : ''}`}
                onClick={() => onOptionClick(opcion.id)}
              >
                {opcion.nombre}
              </a>
            ) : (
              <Link 
                to={opcion.href}
                className={`block hover:font-bold transition-all ${activeOption === opcion.id ? 'font-bold' : ''}`}
                onClick={() => onOptionClick(opcion.id)}
              >
                {opcion.nombre}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcesionariosDropdown; 