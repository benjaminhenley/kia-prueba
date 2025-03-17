import React, { useEffect, useState } from 'react'

import banner from '../assets/img/Header (desktop).png'


const Inicio = () => {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Update the window width when the screen is resized
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    

  return (
    <div className="inicio">
       <img src={banner}/>
    </div>

  )
}

export default Inicio