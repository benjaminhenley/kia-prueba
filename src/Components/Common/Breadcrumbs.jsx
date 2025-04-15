import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { autos, camionetasSuv, utilitarios } from "../../Data/common.js"; // ajustá la ruta según corresponda


// Lista de vehículos con categoría agregada
const allVehicles = [
  ...autos.map((item) => ({ ...item, categoria: "Autos" })),
  ...camionetasSuv.map((item) => ({ ...item, categoria: "SUV" })),
  ...utilitarios.map((item) => ({ ...item, categoria: "Utilitarios" })),
];

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p !== "");

  const currentPath = paths[0] || "";
  const vehicle = allVehicles.find((v) => v.href === currentPath);

  return (
    <nav className="flex gap-2 items-center text-sm text-white font-medium flex-wrap">
      {/* Home */}
      <Link
        to="/"
        className="group relative flex items-center gap-1 hover:text-[#37434C] transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:fill-[#37434C] transition-colors"
        >
          <path
            d="M15.2988 10.8732V16.8002H8.69965V10.8732L11.9992 7.49823L15.2988 10.8732ZM18 13.5728V11.8767L12.2112 6.08795C12.1563 6.03298 12.0824 6 11.9992 6C11.916 6 11.8422 6.03298 11.7872 6.08795L6 11.8751V13.5713L7.4998 11.9961V17.6985C7.4998 17.8649 7.63486 17.9984 7.79976 17.9984H16.1987C16.3636 17.9984 16.4986 17.8649 16.4986 17.6985V11.9961L17.9984 13.5713L18 13.5728Z"
            fill="white"
          />
        </svg>
        <p className="pt-1 cursor-pointer relative group font-semibold text-kia-polar-white">
          Home
          <span className="absolute left-0 bottom-[1px] h-[1px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
        </p>
      </Link>

      {/* Breadcrumbs para vehículos */}
      {vehicle ? (
        <>
         <SeparatorIcon />
         <p className="pt-1 font-semibold">Modelos</p>

          <SeparatorIcon />
          <p className="pt-1 font-semibold">{vehicle.categoria}</p>

          <SeparatorIcon />
          <p className="pt-1 font-semibold">{vehicle.nombre}</p>
        </>
      ) : (
        // Breadcrumbs generales
        paths.map((segment, index) => {
          const routeTo = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <Fragment key={routeTo}>
              <SeparatorIcon />
              {isLast ? (
                <span className="pt-1 font-semibold capitalize">{segment.replace(/-/g, ' ')}</span>
              ) : (
                <Link
                  to={routeTo}
                >
                    <p className="pt-1 capitalize cursor-pointer relative group font-semibold text-kia-polar-white">
                        {segment.replace(/-/g, ' ')}
                        <span className="absolute left-0 bottom-[1px] h-[1px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                    </p>
                </Link>
              )}
            </Fragment>
          );
        })
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
