import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import RoundedButton from "../Common/ui/RoundedButton";

const Layout = () => {
  const location = useLocation();

  // Define the sections
  const sections = [
    { id: "cotiza", name: "Cotizá tu service" },
    { id: "promise", name: "Promise to care" },
    { id: "garantia", name: "Garantía" },
    { id: "originales", name: "Originales KIA" },
    { id: "assistance", name: "KIA Assistance" },
  ];

  // Check if a section is active
  const isActive = (id) => {
    if (location.pathname === "/cotizar-service" && id === "cotiza")
      return true;
    return location.pathname.includes(id);
  };

  return (
    <div className="w-full mt-10 pt-[56px] md:pt-[75px]">
      {/* Blue header bar with tabs and buttons */}
      <div className="w-full px-20">
        <div className="flex w-full justify-between items-center">
          {/* Left side with Post Venta label and tabs */}
          <div className="w-full flex flex-col">
            <div className="flex flex-row w-full justify-between items-center mb-10">
              <div className="py-1">
                <h1 className=" font-bold">Post Venta</h1>
                <div className="h-[1px] w-10 bg-[#05141F] mt-2.5"></div>
              </div>
              <div className="flex gap-5">
                <RoundedButton
                  title="Agendá tu cita"
                  type="secondary"
                  size="medium"
                />
                <RoundedButton
                  title="Contactá a tu asesor"
                  type="secondary"
                  size="medium"
                />
              </div>
            </div>

            <div className="flex justify-between">
              {sections.map((section, index) => (
                <div key={section.id} className="relative">
                  {section.name && (
                    <div className="absolute -top-2 right-0 text-white text-xs px-1 rounded-full">
                      {section.name}
                    </div>
                  )}
                  <Link
                    to={`/cotizar-service/${section.id}`}
                    className={`text-sm ${
                      isActive(section.id) ? "font-bold" : "font-normal"
                    }`}>
                    {section.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic content will be rendered here */}
      <Outlet />
    </div>
  );
};

export default Layout;
