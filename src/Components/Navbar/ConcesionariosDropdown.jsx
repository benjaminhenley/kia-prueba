import React from 'react';
import { Link } from 'react-router-dom';

const ConcesionariosDropdown = ({ activeOption, onOptionClick }) => {
  // Opciones del dropdown de concesionarios
  const opciones = [
    { id: 'venta', nombre: 'Venta', href: '/concesionarios/venta', esExterna: false },
    { id: 'postVenta', nombre: 'Post Venta', href: '/concesionarios/post-venta', esExterna: false }
  ];

  return (
    <div className='absolute top-[-7px] left-0 bg-white text-base font-bold text-midnight-black shadow-md z-40 min-w-[250px]'>
      <div className='flex flex-col'>
        {opciones.map((opcion) => (
          <div key={opcion.id} className='p-4 border-t border-[#CDD0D2] group relative inline-block cursor-pointer'>
            {opcion.esExterna ? (
              <a 
                href={opcion.href} 
                target='_blank' 
                rel='noreferrer'
                className={`block hover:font-bold transition-all ${activeOption === opcion.id ? 'font-bold' : ''}`}
                onClick={() => onOptionClick(opcion.id)}
              >
                <span>{opcion.nombre}</span>
                <span className="absolute bottom-1 h-[0.5px]  bg-[#37434C] transition-transform duration-300"></span>              
              </a>
            ) : (
              <Link 
                to={opcion.href}
                className={`block hover:font-bold transition-all ${activeOption === opcion.id ? 'font-bold' : ''}`}
                onClick={() => onOptionClick(opcion.id)}
              >
                <span>{opcion.nombre}</span>
                <span className="absolute bottom-1 left-0 h-[0.5px] bg-[#37434C] transition-transform duration-300"></span>              
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcesionariosDropdown; 