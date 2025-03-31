import React from "react";
import { Outlet } from "react-router-dom";
//import Loading from "../Components/Loading";

import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="mt-[-3.5rem] md:mt-[-4.75rem] w-full font-kia text-[#04141f]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
