import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../Components/Loading';
import { AppContext } from '../Application/Provider';

import useAssetsLoader from '../Hooks/useAssetsLoader';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Navbar';





const Layout = () => {

  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(AppContext);


  return (
       
        <div className='layout'>
          <Navbar />
          <div className="mt-[-3.5rem]">
            <Outlet />
          </div>
          <Footer />
        </div>
  )
}

export default Layout