import React from 'react';

const VehiculoCard = ({ vehiculo }) => {
  const { nombre, esNuevo, foto, precio } = vehiculo;
  
  const cardContent = (
    <>
      <div className='rounded mb-2 flex items-center justify-center'>
        <img className='text-sm' src={foto} alt={nombre}/>
      </div>
      <p className='text-[1.125rem] font-bold'>{nombre}</p>
      {/* Adjusted height to h-16 which should be enough for 2-3 price lines */}
      <div className='text-sm h-16 flex flex-col justify-start'>{precio}</div>
      <a href='https://www.kia.com.ar/precios' target='' rel='noreferrer' >
      <button className="border border-midnight-black text-xs font-bold p-1 pl-3 rounded-full flex flex-col items-center justify-center gap-2 mx-auto 
        hover:border-[#37434C] hover:text-[#37434C] 
        transition-all duration-300 group relative">
        <div className='flex items-center justify-center gap-2'>
          <span className='relative'>
            Consultar precios
            <div className='absolute left-0 bottom-[0px] h-[1px] bg-[#37434C] transition-all duration-300 group-hover:w-full'></div>
          </span>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="group">
            <rect y="0.5" width="18" height="18" rx="9" fill="#05141F" className="group-hover:fill-[#37434C]"/>
            <path id="Vector" d="M11.1977 9.34097C11.2304 9.3822 11.25 9.43757 11.25 9.5C11.25 9.56243 11.2304 9.6178 11.1977 9.65903L7.75881 14H6.75093L10.3158 9.5L6.75 5H7.75788L11.1977 9.34097Z" 
              fill="white"/>
          </svg>
        </div>
      </button>
      </a>
    </>
  );
  
  return (
    <div className='text-center hover:bg-gray-100 transition-bg p-3 relative'>
      <div className='h-6 flex justify-start'>
        {esNuevo && <img src={esNuevo} alt="Nuevo" className="h-5" />}
      </div>
      {cardContent}
    </div>
  );
};

export default VehiculoCard;