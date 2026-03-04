import React, { useState, useEffect, useRef } from "react";
import KiaMundialBlanco from "../../../assets/img/common/KiaMundialBlanco.svg";
import KiaMundialNegro from "../../../assets/img/common/KiaMundialNegro.svg";
import Blackbar from "./Blackbar";
import { autos, camionetasSuv, utilitarios } from "../../../Data/common";
import ModelosDropdown from "./ModelosDropdown";
import ConcesionariosDropdown from "./ConcesionariosDropdown";
import NuevaKiaDropdown from "./NuevaKiaDropdown";
import HamburgerButton from "./Mobile/HamburgerButton";
import MobileMenu from "./Mobile/MobileMenu";
import { Link, useLocation, useParams } from "react-router-dom";

const Navbar = () => {
  // Estados para los dropdowns
  const { pathname } = useLocation();
  const { modelID } = useParams();

  const [activeFilter, setActiveFilter] = useState("todos");
  const [activeConcesionariosOption, setActiveConcesionariosOption] =
    useState("");
  const [activeNuevaKiaOption, setActiveNuevaKiaOption] = useState("");

  // Estados para los botones activos
  const [activeButton, setActiveButton] = useState("");

  // Que dropdown esta activo?
  const [activeDropdown, setActiveDropdown] = useState("");

  // Estado para controlar el hover en la barra de navegación
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  // Estado para controlar si se ha hecho scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  // Estado para menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState("");

  const modelosDropdownRef = useRef(null);
  const concesionariosDropdownRef = useRef(null);
  const nuevaKiaDropdownRef = useRef(null);

  const modelosButtonRef = useRef(null);
  const concesionariosButtonRef = useRef(null);
  const nuevaKiaButtonRef = useRef(null);

  const isTransparent = pathname === "/" || pathname === "/" + modelID;
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

  // Efecto para cerrar el dropdown de modelos y concesionarios al hacer clic fuera de ellos
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modelosDropdownRef.current &&
        !modelosButtonRef.current.contains(event.target) &&
        !modelosDropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown("");
        setActiveButton(""); // Restablecer el botón activo al cerrar el dropdown de modelos
      }
      if (
        concesionariosDropdownRef.current &&
        !concesionariosButtonRef.current.contains(event.target) &&
        !concesionariosDropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown("");
        setActiveButton(""); // Restablecer el botón activo al cerrar el dropdown de concesionarios
      }
      if (
        nuevaKiaDropdownRef.current &&
        !nuevaKiaButtonRef.current.contains(event.target) &&
        !nuevaKiaDropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown("");
        setActiveButton(""); // Restablecer el botón activo al cerrar el dropdown de nueva kia
      }
    };

    const handleScroll = () => {
      setActiveDropdown("");
      setActiveButton(""); // Restablecer el botón activo al hacer scroll
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleActiveDropdown = (e, item) => {
    e.preventDefault();
    if (item === activeDropdown) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(item);
    }
  };

  // Funciones para manejar las opciones
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleConcesionariosOptionClick = (option) => {
    setActiveConcesionariosOption(option);
  };

  const handleNuevaKiaOptionClick = (option) => {
    setActiveNuevaKiaOption(option);
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

  // Función para manejar clics en los enlaces
  const handleLinkClick = (e) => {
    if (e.target.closest(".filtro-link")) {
      return; // No cerrar si es un enlace de filtro
    }

    setActiveDropdown("");
    setMobileMenuOpen(false); // Cerrar el menú móvil
  };

  useEffect(() => {
    if (pathname.startsWith("/concesionarios")) {
      setActiveButton("concesionarios");
    } else {
      setActiveButton("");
    }
  }, [pathname]);

  // Determinar si algún dropdown está activo para cambiar el estilo del navbar
  const isAnyDropdownActive =
    activeDropdown !== "" || activeButton === "postVenta";

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
            : isTransparent
              ? "transparency text-kia-polar-white hover:bg-white border-b hover:text-midnight-black"
              : "bg-white text-midnight-black"
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
              ref={modelosButtonRef}
              onClick={(e) => {
                toggleActiveDropdown(e, "modelos");
              }}
              className="relative group inline-block">
              <p
                className={`${
                  activeDropdown === "modelos" ? "font-bold" : ""
                } cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap`}>
                Modelos
              </p>
              <div
                className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                  activeDropdown === "modelos"
                    ? "bg-midnight-black"
                    : "bg-transparent group-hover:bg-midnight-black"
                }`}></div>
            </button>
          </div>

          <div className="relative">
            <button
              ref={concesionariosButtonRef}
              onClick={(e) => {
                toggleActiveDropdown(e, "concesionarios");
              }}
              className="relative group inline-block">
              <p
                className={`${
                  activeDropdown === "concesionarios" ? "font-bold" : ""
                } cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap`}>
                Concesionarios
              </p>
              <div
                className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                  activeDropdown === "concesionarios"
                    ? "bg-midnight-black"
                    : "bg-transparent group-hover:bg-midnight-black"
                }`}></div>
            </button>

            {/* Posicionar el dropdown de Concesionarios debajo de su botón */}
            {activeDropdown === "concesionarios" && (
              <div
                className="relative top-full left-0 w-full"
                ref={concesionariosDropdownRef}>
                <ConcesionariosDropdown
                  activeOption={activeConcesionariosOption}
                  onOptionClick={handleConcesionariosOptionClick}
                  onLinkClick={handleLinkClick}
                />
              </div>
            )}
          </div>
        </div>

        {/* Logo con cambio de color responde al hover de toda la barra */}
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src={
                shouldInvertLogo || mobileMenuOpen || !isTransparent
                  ? KiaMundialNegro
                  : KiaMundialBlanco
              }
              alt="Kia"
              className="max-h-[75px] w-[6rem] md:w-auto h-auto transition-all duration-300 ease-in-out"
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
              } cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap`}>
              Post Venta
            </p>
            <div
              className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                activeButton === "postVenta"
                  ? "bg-midnight-black"
                  : "bg-transparent group-hover:bg-midnight-black"
              }`}></div>
          </a>

          <div className="relative">
            <button
              ref={nuevaKiaButtonRef}
              onClick={(e) => {
                toggleActiveDropdown(e, "nuevaKia");
              }}
              className="relative group inline-block">
              <p
                className={`${
                  activeDropdown === "nuevaKia" ? "font-bold" : ""
                } cursor-pointer transition-all ease-in-out duration-100 whitespace-nowrap`}>
                Nueva Kia
              </p>
              <div
                className={`absolute bottom-[2px] left-0 w-full h-[1px] transition-all duration-200 ${
                  activeDropdown === "nuevaKia"
                    ? "bg-midnight-black"
                    : "bg-transparent group-hover:bg-midnight-black"
                }`}></div>
            </button>

            {/* Posicionar el dropdown de Nueva Kia debajo de su botón */}
            {activeDropdown === "nuevaKia" && (
              <div
                className="relative top-full left-0 w-full"
                ref={nuevaKiaDropdownRef}>
                <NuevaKiaDropdown
                  activeOption={activeNuevaKiaOption}
                  onOptionClick={handleNuevaKiaOptionClick}
                  onLinkClick={handleLinkClick}
                />
              </div>
            )}
          </div>
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
        onLinkClick={handleLinkClick}
      />

      {/* Usar el componente ModelosDropdown para desktop */}
      {activeDropdown === "modelos" && (
        <div className="hidden md:block" ref={modelosDropdownRef}>
          <ModelosDropdown
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
            autos={autos}
            camionetasSuv={camionetasSuv}
            utilitarios={utilitarios}
            onLinkClick={handleLinkClick}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
