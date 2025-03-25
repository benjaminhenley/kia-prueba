import React from 'react'
import { Link } from 'react-router-dom'
import Kia from '../../assets/img/common/Kia.svg'
import { transparentbarLeft } from '../../Data/navbar/navbar'
import { transparentbarRight } from '../../Data/common'

const Transparentbar = () => {
  return (
    <div className='transparency px-5 py-3 flex justify-between items-center gap-2 text-kia-polar-white text-[0.65rem] font-semibold text-base md:px-10 lg:px-20
        transition-all duration-300 ease-in-out hover:bg-white hover:text-midnight-black'>
        {/* Menú izquierdo */}
        <div className='flex gap-10'>
          {transparentbarLeft.map((item) => (
                item.esExterna ? (
                    <a key={item.nombre} href={item.href} target={item.target} rel="noreferrer">
                        {item.nombre}
                    </a>
                ) : (
                    <Link key={item.nombre} to={item.href}>
                        {item.nombre}
                    </Link>
                )
            ))}
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
        {transparentbarRight.map((item) => (
                item.esExterna ? (
                    <a key={item.nombre} href={item.href} target={item.target} rel="noreferrer">
                        {item.nombre}
                    </a>
                ) : (
                    <Link key={item.nombre} to={item.href}>
                        {item.nombre}
                    </Link>
                )
          ))}
        </div>
      </div>
  )
}

export default Transparentbar