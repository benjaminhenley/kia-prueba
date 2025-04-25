import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { autos, camionetasSuv, utilitarios } from "../../Data/common.js";

// Excepciones de 'slug' para nombres que no coinciden con la URL
const slugExceptions = {
  "All-new K3 Sedan": "k3-sedan",
  "All-new K3 Cross": "k3-cross",
};

// Lista de vehículos con categoría y slug agregados
const allVehicles = [
  ...autos.map((item) => ({
    ...item,
    categoria: "Autos",
    slug:
      slugExceptions[item.nombre] ||
      (item.href.startsWith("/") 
        ? item.href.slice(1) 
        : item.nombre.toLowerCase().replace(/\s+/g, "-")),
  })),
  ...camionetasSuv.map((item) => ({
    ...item,
    categoria: "SUV",
    slug:
      slugExceptions[item.nombre] ||
      (item.href.startsWith("/") 
        ? item.href.slice(1) 
        : item.nombre.toLowerCase().replace(/\s+/g, "-")),
  })),
  ...utilitarios.map((item) => ({
    ...item,
    categoria: "Utilitarios",
    slug:
      slugExceptions[item.nombre] ||
      (item.href.startsWith("/") 
        ? item.href.slice(1) 
        : item.nombre.toLowerCase().replace(/\s+/g, "-")),
  })),
];

// Define rutas específicas que deberían tener un comportamiento personalizado
const specialRoutes = {
  // Rutas donde el primer segmento no es clickeable
  nonClickableFirstSegment: ["concesionarios"],
  
  // Rutas que son completamente no clickeables (si necesitas este comportamiento)
  nonClickableRoutes: [],
  
  // Rutas que tienen un título personalizado
  customTitles: {
    "concesionarios": "Concesionarios",
    "red-venta": "Venta",
    "red-postventa": "Post Venta",
    "politica-de-cookies": "Política de Cookies"
    // Agrega más según sea necesario
  },
  
  // Rutas que necesitan un breadcrumb adicional "Concesionarios" antes
  routesWithConcesionariosPrefix: ["red-venta", "red-postventa"]
};

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p !== "");
  const currentPath = paths[0] || "";
  
  // Verificar si es una página de vehículo
  const vehicle = allVehicles.find((v) => v.slug === currentPath);
  const isVehiclePage = Boolean(vehicle);

  // Verificar si la ruta actual necesita mostrar "Concesionarios" como breadcrumb
  const needsConcesionariosPrefix = specialRoutes.routesWithConcesionariosPrefix.includes(currentPath);

  // Función para verificar si un segmento debe ser clickeable
  const isSegmentClickable = (segment, index) => {
    // Si es el primer segmento y está en la lista de no clickeables
    if (index === 0 && specialRoutes.nonClickableFirstSegment.includes(segment)) {
      return false;
    }
    
    // Si la ruta completa hasta este segmento está en la lista de no clickeables
    const routeToCheck = paths.slice(0, index + 1).join("/");
    if (specialRoutes.nonClickableRoutes.includes(routeToCheck)) {
      return false;
    }
    
    // Por defecto, todos los segmentos intermedios son clickeables
    return index < paths.length - 1;
  };

  // Función para obtener el título personalizado de un segmento
  const getSegmentTitle = (segment) => {
    return specialRoutes.customTitles[segment] || segment.replace(/-/g, ' ');
  };

  return (
    <nav className="flex gap-2 items-center text-sm text-white font-medium flex-wrap">
      <Link
        to="/"
        className="flex items-center gap-1 transition-colors group"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2988 10.8732V16.8002H8.69965V10.8732L11.9992 7.49823L15.2988 10.8732ZM18 13.5728V11.8767L12.2112 6.08795C12.1563 6.03298 12.0824 6 11.9992 6C11.916 6 11.8422 6.03298 11.7872 6.08795L6 11.8751V13.5713L7.4998 11.9961V17.6985C7.4998 17.8649 7.63486 17.9984 7.79976 17.9984H16.1987C16.3636 17.9984 16.4986 17.8649 16.4986 17.6985V11.9961L17.9984 13.5713L18 13.5728Z"
            fill="white"
          />
        </svg>
        <div className="pt-1 cursor-pointer group capitalize relative font-semibold group-hover:text-[#CDD0D2] transition-all duration-300">
          Home
          <span className="absolute left-0 bottom-[1px] h-[1px] bg-transparent group-hover:bg-[#CDD0D2] w-full transition-all duration-300 group-hover:w-full"></span>
        </div>
      </Link>

      {/* Mostrar breadcrumb para vehículos */}
      {isVehiclePage ? (
        <div className="flex gap-2 items-center flex-wrap">
          <SeparatorIcon />
          <div className="pt-1 capitalize font-semibold">Modelos</div>
          <SeparatorIcon />
          <div className="pt-1 capitalize font-semibold">{vehicle.categoria}</div>
          <SeparatorIcon />
          <p className="pt-1 font-semibold">{vehicle.nombre}</p>
        </div>
      ) : (
        // Breadcrumbs estándar para otras páginas
        <>
          {/* Agregar el breadcrumb "Concesionarios" para rutas específicas */}
          {needsConcesionariosPrefix && (
            <>
              <SeparatorIcon />
              <span className="pt-1 font-semibold capitalize">Concesionarios</span>
            </>
          )}
          
          {paths.map((segment, index) => {
            const routeTo = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;
            const shouldBeClickable = isSegmentClickable(segment, index);
            const segmentTitle = getSegmentTitle(segment);

            return (
              <Fragment key={routeTo}>
                <SeparatorIcon />
                {isLast || !shouldBeClickable ? (
                  <span className="pt-1 font-semibold capitalize">{segmentTitle}</span>
                ) : (
                  <Link to={routeTo}>
                    <div className="pt-1 cursor-pointer capitalize relative group font-semibold text-kia-polar-white hover:text-[#CDD0D2] transition-all duration-300">
                      {segmentTitle}
                      <span className="absolute left-0 bottom-[1px] h-[1px] bg-transparent group-hover:bg-[#CDD0D2] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </Link>
                )}
              </Fragment>
            );
          })}
        </>
      )}
    </nav>
  );
};

const SeparatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14.9303 11.788C14.9739 11.8429 15 11.9168 15 12C15 12.0832 14.9739 12.1571 14.9303 12.212L10.3451 18H9.00124L13.7545 12L9 6H10.3438L14.9303 11.788Z"
      fill="white"
    />
  </svg>
);

export default Breadcrumbs;