import React from 'react'

import { blackbarLeft, blackbarRight } from '../../Data/common'
import { Link } from 'react-router-dom'

const Blackbar = () => {
  return (
    <div className='bg-midnight-black hidden md:flex justify-between px-5 py-1 md:px-10 lg:px-20'>
        <div className='flex gap-2 text-kia-polar-white text-[0.65rem] font-semibold'>
            {blackbarLeft.map((item) => (
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
        <div className='flex gap-2 text-kia-polar-white text-[0.65rem] font-semibold'>
            {blackbarRight.map((item) => (
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

export default Blackbar