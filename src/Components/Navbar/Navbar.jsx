import React, { useState, useEffect } from "react";
import Kia from "../../assets/img/common/KiaWhite.svg";
import Blackbar from "./Blackbar";
import { autos, camionetasSuv, utilitarios } from "../../Data/common";
import ModelosDropdown from "./ModelosDropdown";
import ConcesionariosDropdown from "./ConcesionariosDropdown";
import HamburgerButton from "./Mobile/HamburgerButton";
import MobileMenu from "./Mobile/MobileMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Estados para los dropdowns
  const [showModelosDropdown, setShowModelosDropdown] = useState(false);
  const [showConcesionariosDropdown, setShowConcesionariosDropdown] =
    useState(false);

  // Estados para los filtros y opciones activas
  const [activeFilter, setActiveFilter] = useState("todos");
  const [activeConcesionariosOption, setActiveConcesionariosOption] =
    useState("");

  // Estados para los botones activos
  const [activeButton, setActiveButton] = useState("");

  // Estado para controlar el hover en la barra de navegación
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  // Estado para controlar si se ha hecho scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  // Estado para menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState("");

  // Efecto para detectar el scroll
  // En el componente Navbar

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Buscar el contenedor de scroll de Inicio si existe
      const inicioContainer = document.querySelector(".snap-y.snap-mandatory");

      // Si estamos en la página de Inicio (existe el contenedor)
      if (inicioContainer) {
        // Usar el scroll del contenedor
        if (inicioContainer.scrollTop > 10) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      } else {
        // Comportamiento normal para otras páginas
        if (window.scrollY > 10) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      }
    };

    // Añadir event listeners tanto al window como al contenedor de Inicio
    window.addEventListener("scroll", handleScroll);
    const inicioContainer = document.querySelector(".snap-y.snap-mandatory");
    if (inicioContainer) {
      inicioContainer.addEventListener("scroll", handleScroll);
    }

    // Limpiar event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      const inicioContainer = document.querySelector(".snap-y.snap-mandatory");
      if (inicioContainer) {
        inicioContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Funciones para manejar los dropdowns
  const toggleModelosDropdown = () => {
    // Si abrimos el dropdown de modelos, cerramos el de concesionarios
    if (!showModelosDropdown && showConcesionariosDropdown) {
      setShowConcesionariosDropdown(false);
    }
    setShowModelosDropdown(!showModelosDropdown);

    // Si estamos abriendo, activamos el botón, si estamos cerrando, desactivamos
    if (!showModelosDropdown) {
      setActiveButton("modelos");
    } else {
      setActiveButton("");
    }
  };

  const toggleConcesionariosDropdown = () => {
    // Si abrimos el dropdown de concesionarios, cerramos el de modelos
    if (!showConcesionariosDropdown && showModelosDropdown) {
      setShowModelosDropdown(false);
    }
    setShowConcesionariosDropdown(!showConcesionariosDropdown);

    // Si estamos abriendo, activamos el botón, si estamos cerrando, desactivamos
    if (!showConcesionariosDropdown) {
      setActiveButton("concesionarios");
    } else {
      setActiveButton("");
    }
  };

  /*   // Funciones para manejar los botones del menú derecho
  const handlePostVentaClick = (e) => {
    e.preventDefault();
    // Cerrar dropdowns si están abiertos
    if (showModelosDropdown) setShowModelosDropdown(false);
    if (showConcesionariosDropdown) setShowConcesionariosDropdown(false);

    // Cambiar el botón activo
    setActiveButton(activeButton === "postVenta" ? "" : "postVenta");
  };

  const handleNuevaKiaClick = (e) => {
    e.preventDefault();
    // Cerrar dropdowns si están abiertos
    if (showModelosDropdown) setShowModelosDropdown(false);
    if (showConcesionariosDropdown) setShowConcesionariosDropdown(false);

    // Cambiar el botón activo
    setActiveButton(activeButton === "nuevaKia" ? "" : "nuevaKia");
  }; */

  // Funciones para manejar las opciones
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleConcesionariosOptionClick = (option) => {
    setActiveConcesionariosOption(option);
  };

  // Funciones para menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Cerrar submenús si cerramos el menú principal
    if (mobileMenuOpen) {
      setMobileSubMenu("");
    }
  };

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? "" : menu);
  };

  // Determinar si algún dropdown está activo para cambiar el estilo del navbar
  const isAnyDropdownActive =
    showModelosDropdown ||
    showConcesionariosDropdown ||
    activeButton === "postVenta" ||
    activeButton === "nuevaKia";

  // Determinar si el logo debe invertirse (negro)
  const shouldInvertLogo =
    isAnyDropdownActive || isNavbarHovered || hasScrolled;

  return (
    <div className="z-50 sticky top-0 left-0">
      {/* Navbar superior */}
      <Blackbar />

      {/* Navbar con transparencia y hover */}
      <div
        className={`px-5 py-3 flex justify-between items-center gap-2 text-[0.65rem] font-semibold text-base md:py-5 md:px-10 lg:px-20
        transition-all duration-200 ease-in-out relative
        ${
          isAnyDropdownActive || hasScrolled || mobileMenuOpen
            ? "bg-white text-midnight-black"
            : "transparency text-kia-polar-white hover:bg-white hover:text-midnight-black"
        }`}
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}>
        {/* Botón de hamburguesa (solo móvil) */}
        <div className="md:hidden">
          <HamburgerButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
        </div>

        {/* Menú izquierdo (solo desktop) */}
        <div className="hidden md:flex gap-10">
          <div className="static">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleModelosDropdown();
              }}
              className="relative group inline-block">
              <p
                className={`${
                  activeButton === "modelos" ? "font-bold" : ""
                } cursor-pointer transition-all duration-200 whitespace-nowrap`}>
                Modelos
              </p>
              <div
                className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                  activeButton === "modelos"
                    ? "bg-midnight-black"
                    : "bg-transparent group-hover:bg-midnight-black"
                }`}></div>
            </button>
          </div>

          <div className="static relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleConcesionariosDropdown();
              }}
              className="relative group inline-block">
              <p
                className={`${
                  activeButton === "concesionarios" ? "font-bold" : ""
                } cursor-pointer transition-all duration-200 whitespace-nowrap`}>
                Concesionarios
              </p>
              <div
                className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                  activeButton === "concesionarios"
                    ? "bg-midnight-black"
                    : "bg-transparent group-hover:bg-midnight-black"
                }`}></div>
            </button>

            {/* Posicionar el dropdown de Concesionarios debajo de su botón */}
            {showConcesionariosDropdown && (
              <div className="relative top-full left-0 w-full">
                <ConcesionariosDropdown
                  activeOption={activeConcesionariosOption}
                  onOptionClick={handleConcesionariosOptionClick}
                />
              </div>
            )}
          </div>
        </div>

        {/* Logo con cambio de color responde al hover de toda la barra */}
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src={Kia}
              alt="Kia"
              className={`w-[6rem] md:w-auto h-auto transition-all duration-300 ease-in-out 
              ${
                shouldInvertLogo || mobileMenuOpen
                  ? "filter brightness-0"
                  : "filter brightness-100"
              }`}
            />
          </Link>
        </div>

        {/* Menú derecho (solo desktop) */}
        <div className="hidden md:flex gap-10">
          <a
            href="https://www.kia.com.ar/cotizar-service"
            target=""
            className="relative group inline-block">
            <p
              className={`${
                activeButton === "postVenta" ? "font-bold" : ""
              } cursor-pointer transition-all duration-200 whitespace-nowrap`}>
              Post Venta
            </p>
            <div
              className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                activeButton === "postVenta"
                  ? "bg-midnight-black"
                  : "bg-transparent group-hover:bg-midnight-black"
              }`}></div>
          </a>

          <a
            href="https://www.kia.com.ar/ourmovement/"
            target=""
            className="relative group inline-block">
            <p
              className={`${
                activeButton === "nuevaKia" ? "font-bold" : ""
              } cursor-pointer transition-all duration-200 whitespace-nowrap`}>
              Nueva Kia
            </p>
            <div
              className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                activeButton === "nuevaKia"
                  ? "bg-midnight-black"
                  : "bg-transparent group-hover:bg-midnight-black"
              }`}></div>
          </a>
        </div>

        {/* Placeholder para mantener la estructura en móvil */}
        <div className="md:hidden w-6"></div>
      </div>

      {/* Menú móvil componentizado */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSubMenu={mobileSubMenu}
        toggleSubMenu={toggleMobileSubMenu}
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
        autos={autos}
        camionetasSuv={camionetasSuv}
        utilitarios={utilitarios}
      />

      {/* Usar el componente ModelosDropdown para desktop */}
      {showModelosDropdown && (
        <div className="hidden md:block">
          <ModelosDropdown
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
            autos={autos}
            camionetasSuv={camionetasSuv}
            utilitarios={utilitarios}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
