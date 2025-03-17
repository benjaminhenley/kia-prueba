import React from 'react';
import Kia from '../assets/img/common/KiaWhite.svg';

const Navbar = () => {
  return (
    <div className='z-50'>
      {/* Navbar superior */}
      <div className='bg-midnight-black flex justify-between px-5 py-1 md:px-10 lg:px-20'>
        <div className='flex gap-2 text-kia-polar-white text-[0.65rem] font-semibold'>
          <a href='' target='_blank' rel='noreferrer'>
            <p>POMOCIONES</p>
          </a>
          <span>|</span>
          <a href='' target='_blank' rel='noreferrer'>
            <p>CONTÁCTENOS</p>
          </a>
        </div>
        <div className='flex gap-2 text-kia-polar-white text-[0.65rem] font-semibold'>
          <a href='' target='_blank' rel='noreferrer'>
            <p>WORLDWIDE</p>
          </a>
          <span>|</span>
          <a href='' target='_blank' rel='noreferrer'>
            <p>POLÍTICA DE PRIVACIDAD</p>
          </a>
        </div>
      </div>

      {/* Navbar con transparencia y hover */}
      <div className='transparency px-5 py-3 flex justify-between items-center gap-2 text-kia-polar-white text-[0.65rem] font-semibold text-base md:px-10 lg:px-20
        transition-all duration-300 ease-in-out hover:bg-white hover:text-midnight-black'>
        
        {/* Menú izquierdo */}
        <div className='flex gap-10'>
          <a href='' target='_blank' rel='noreferrer'>
            <p className='hover:underline'>Modelos</p>
          </a>
          <a href='' target='_blank' rel='noreferrer'>
            <p className='hover:underline'>Concesionarios</p>
          </a>
        </div>

        {/* Logo con cambio de color */}
        <div className='flex justify-center items-center'>
          <img 
            src={Kia} 
            alt='Kia' 
            className='transition-all duration-300 ease-in-out hover:invert' 
          />
        </div>   

        {/* Menú derecho */}
        <div className='flex gap-10'>
          <a href='' target='_blank' rel='noreferrer'>
            <p className='hover:underline'>Post Venta</p>
          </a>
          <a href='' target='_blank' rel='noreferrer'>
            <p className='hover:underline'>Nueva Kia</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
