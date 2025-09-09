import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import DealersTable from "../Components/Concesionarios/DealersTable";
import ViewModeToggle from "../Components/Common/ViewModeToggle";
import MapView from "../Components/Concesionarios/MapView";
import PillButton from "../Components/Common/ui/PillButton";

// Importar data de dealers desde JSON
import DEALERS from "../Data/Concesionarios/dealers-venta.json";

// Token der Mapbox
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9ldGFtYm9yIiwiYSI6ImNtOWczNHk3MTFzMHkybG9xZzdxYzYzejUifQ.rOyZbMUPMFct3ht7ULUYrQ";

// PROVINCES 
const PROVINCES = [
  { value: "todos", label: "VER TODOS" },
  { value: "buenosaires", label: "Buenos Aires" },
  { value: "caba", label: "Ciudad Autónoma de Buenos Aires" },
  { value: "catamarca", label: "Catamarca" },
  { value: "chaco", label: "Chaco" },
  { value: "chubut", label: "Chubut" },
  { value: "cordoba", label: "Córdoba" },
  { value: "corrientes", label: "Corrientes" },
  { value: "entrerios", label: "Entre Ríos" },
  { value: "formosa", label: "Formosa" },
  { value: "jujuy", label: "Jujuy" },
  { value: "lapampa", label: "La Pampa" },
  { value: "larioja", label: "La Rioja" },
  { value: "mendoza", label: "Mendoza" },
  { value: "misiones", label: "Misiones" },
  { value: "neuquen", label: "Neuquén" },
  { value: "rionegro", label: "Río Negro" },
  { value: "salta", label: "Salta" },
  { value: "sanjuan", label: "San Juan" },
  { value: "sanluis", label: "San Luis" },
  { value: "santacruz", label: "Santa Cruz" },
  { value: "santafe", label: "Santa Fe" },
  { value: "santiagodelestero", label: "Santiago del Estero" },
  { value: "tierradelfuego", label: "Tierra del Fuego" },
  { value: "tucuman", label: "Tucumán" },
];

const ConcesionariosVenta = () => {
  const [viewMode, setViewMode] = useState("list");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [filteredDealers, setFilteredDealers] = useState(DEALERS);

  const handleSearch = (province) => {
    const dealers =
      !province || province === "todos"
        ? DEALERS
        : DEALERS.filter((dealer) => dealer.provincia === province);

    setFilteredDealers(dealers);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Padding General
    <div className="px-5 md:px-10 lg:px-20">
      <div className="mx-auto py-[7rem]">
        {/* Header Section */}
        <div className="mb-7 md:mb-8">
          <h2 className="text-lg md:text-2xl text-midnight-black mb-0 md:mb-5">
            Concesionarios
          </h2>
          <div className="relative">
            <h1 className="text-2xl md:text-4xl font-bold text-midnight-black">
              Venta
            </h1>
            <div className="relative top-7px] md:top-2 left-0 w-6 md:w-12 h-[2px] bg-midnight-black"></div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-col gap-6 items-start md:gap-0 md:flex-row-reverse justify-between md:items-center mb-8">
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
          <div className="flex gap-4 w-full md:w-auto items-center">
            <div className="w-full md:w-[450px]">
              <FormDropdown
                label="Ver Todos"
                placeholder="Seleccionar provincia"
                name="provincia"
                value={selectedProvince}
                onChange={(e) => {
                  const province = e.target.value;
                  setSelectedProvince(province);
                  // Solo en mobile, disparar búsqueda al seleccionar
                  if (window.innerWidth < 768) {
                    // 768px es el breakpoint para md
                    handleSearch(province);
                  }
                }}
                options={PROVINCES}
              />
            </div>
            {/* Botón de búsqueda solo visible en pantallas md y más grandes */}
            <div className="hidden md:block">
              <PillButton
                onClick={() => handleSearch(selectedProvince)} // Usar el estado actual al hacer clic
                title="Buscar"
                type="secondary"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col item-start gap-3 md:gap-0 md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Concesionarios de venta
            </h3>
            <div className="relative top-[0px] md:top-1 md:top-2 left-0 w-10 md:w-14 h-[1px] bg-midnight-black"></div>
          </div>
          {filteredDealers && (
            <p className="text-midnight-black text-xs md:text-sm">
              Resultados: <br />
              <span className="font-medium">
                {filteredDealers.length} Concesionarios encontrados
              </span>
            </p>
          )}
        </div>

        {/* Content Section */}
        {filteredDealers.length > 0 ? (
          <>
            {viewMode === "list" && (
              <DealersTable
                dealers={filteredDealers}
                showResultsCount={false}
              />
            )}
            {viewMode === "map" && (
              <MapView dealers={filteredDealers} showResultsCount={false} />
            )}
          </>
        ) : (
          <div className="bg-[#CDD0D233] p-6 text-center mt-4 md:mt-[4rem]">
            <p className="text-midnight-black">
              No hay concesionarios para mostrar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcesionariosVenta;
