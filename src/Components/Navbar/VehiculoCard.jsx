import React from 'react';
import { Link } from 'react-router-dom';

const VehiculoCard = ({ vehiculo }) => {
  const { nombre, href, target, esExterna, esNuevo, foto, precio } = vehiculo;
  
  const cardContent = (
    <>
      <div className='rounded mb-2 flex items-center justify-center'>
        <img className='text-sm' src={foto} alt={nombre}/>
      </div>
      <p className='text-sm font-semibold mb-2'>{nombre}</p>
      <div className='text-sm'>{precio}</div>
      <button className="mt-3 border border-midnight-black text-xs p-1 pl-3 rounded-full flex items-center justify-center gap-2 mx-auto">
        Consultar precios
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="18" height="18" rx="9" fill="#05141F"/>
          <path id="Vector" d="M11.1977 9.34097C11.2304 9.3822 11.25 9.43757 11.25 9.5C11.25 9.56243 11.2304 9.6178 11.1977 9.65903L7.75881 14H6.75093L10.3158 9.5L6.75 5H7.75788L11.1977 9.34097Z" fill="white"/>
        </svg>
      </button>
    </>
  );
  
  return (
    <div className='text-center hover:bg-gray-100 transition-bg p-3 relative'>
      <div className='h-6 flex justify-start'>
        {esNuevo && <img src={esNuevo} alt="Nuevo" className="h-5" />}
      </div>
      
      {esExterna ? (
        <a href={href} target='_blank' rel='noreferrer'>
          {cardContent}
        </a>
      ) : (
        <Link to={href}>
          {cardContent}
        </Link>
      )}
    </div>
  );
};

export default VehiculoCard; 