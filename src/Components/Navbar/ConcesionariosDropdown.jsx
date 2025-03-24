import React from 'react';
import { Link } from 'react-router-dom';
import { concesionariosDropdownOpciones } from '../../Data/common';

const ConcesionariosDropdown = ({ activeOption, onOptionClick }) => {

  return (
    <div className='absolute top-0 left-0 bg-white text-base font-bold text-midnight-black shadow-md z-40 min-w-[250px]'>
      <div className='flex flex-col'>
        {concesionariosDropdownOpciones.map((opcion) => (
          <div key={opcion.nombre} className='p-4 border-t border-[#CDD0D2] group relative inline-block cursor-pointer'>
            {opcion.esExterna ? (
              <a 
                href={opcion.href} 
                target={opcion.target} 
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