import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import DealersTable from "../Components/Concesionarios/DealersTable";
import ViewModeToggle from "../Components/Common/ViewModeToggle";
import MapView from "../Components/Concesionarios/MapView";
import PillButton from "../Components/Common/ui/PillButton";

// Token de Mapbox
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9ldGFtYm9yIiwiYSI6ImNtOWczNHk3MTFzMHkybG9xZzdxYzYzejUifQ.rOyZbMUPMFct3ht7ULUYrQ";

// Mapa de normalización de provincias (value -> label original)
const PROVINCE_MAPPING = {
  todos: "VER TODOS",
  buenosaires: "Buenos Aires",
  caba: "Ciudad Autónoma de Buenos Aires",
  catamarca: "Catamarca",
  chaco: "Chaco",
  chubut: "Chubut",
  cordoba: "Córdoba",
  corrientes: "Corrientes",
  entrerios: "Entre Ríos",
  formosa: "Formosa",
  jujuy: "Jujuy",
  lapampa: "La Pampa",
  larioja: "La Rioja",
  mendoza: "Mendoza",
  misiones: "Misiones",
  neuquen: "Neuquén",
  rionegro: "Río Negro",
  salta: "Salta",
  sanjuan: "San Juan",
  sanluis: "San Luis",
  santacruz: "Santa Cruz",
  santafe: "Santa Fe",
  santiagodelestero: "Santiago del Estero",
  tierradelfuego: "Tierra del Fuego",
  tucuman: "Tucumán",
};

const ConcesionariosVenta = () => {
  const [viewMode, setViewMode] = useState("list");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [allDealers, setAllDealers] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para normalizar nombre de provincia a value
  const normalizeProvinceName = (provinceName) => {
    if (!provinceName) return "";
    return provinceName
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[áàäâ]/g, "a")
      .replace(/[éèëê]/g, "e")
      .replace(/[íìïî]/g, "i")
      .replace(/[óòöô]/g, "o")
      .replace(/[úùüû]/g, "u")
      .replace(/ñ/g, "n");
  };

  // Función para obtener el nombre original de la provincia
  const getOriginalProvinceName = (normalizedValue) => {
    return PROVINCE_MAPPING[normalizedValue] || normalizedValue;
  };

  // Función para obtener los datos del endpoint
  const fetchDealersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://fusio.encender-dev.online/public/kia/concesionarios-list"
      );

      if (!response.ok) {
        throw new Error("Error al cargar los datos");
      }

      const data = await response.json();

      // Obtener los concesionarios de venta
      const ventaDealers = data.postVenta || [];
      setAllDealers(ventaDealers);
      setFilteredDealers(ventaDealers);

      // Extraer provincias únicas de los datos y crear el array de opciones
      const uniqueProvinces = [
        ...new Set(ventaDealers.map((dealer) => dealer.provincia)),
      ];
      const provinceOptions = [
        { value: "todos", label: "VER TODOS" },
        ...uniqueProvinces
          .filter((provincia) => provincia) // Filtrar valores null/undefined
          .map((provincia) => {
            const normalizedValue = normalizeProvinceName(provincia);
            return {
              value: normalizedValue,
              label: getOriginalProvinceName(normalizedValue),
            };
          })
          .sort((a, b) => a.label.localeCompare(b.label)), // Ordenar por label
      ];

      setProvinces(provinceOptions);
      setError(null);
    } catch (err) {
      console.error("Error fetching dealers:", err);
      setError(err.message);
      setAllDealers([]);
      setFilteredDealers([]);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar la búsqueda
  const handleSearch = (province) => {
    if (!province || province === "todos") {
      setFilteredDealers(allDealers);
    } else {
      // Obtener el nombre original de la provincia para hacer la búsqueda
      const originalProvinceName = getOriginalProvinceName(province);
      const filtered = allDealers.filter((dealer) => {
        const normalizedDealerProvince = normalizeProvinceName(
          dealer.provincia
        );
        return normalizedDealerProvince === province;
      });
      setFilteredDealers(filtered);
    }
  };

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    fetchDealersData();
    window.scrollTo(0, 0);
  }, []);

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="px-5 md:px-10 lg:px-20">
        <div className="mx-auto py-[7rem]">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-midnight-black mx-auto mb-4"></div>
              <p className="text-midnight-black">Cargando concesionarios...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mostrar error si ocurre
  if (error) {
    return (
      <div className="px-5 md:px-10 lg:px-20">
        <div className="mx-auto py-[7rem]">
          <div className="bg-red-50 p-6 text-center mt-4 md:mt-[4rem] rounded-lg">
            <p className="text-red-600">Error al cargar los datos: {error}</p>
            <button
              onClick={fetchDealersData}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                options={provinces}
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
            <div className="relative top-[0px] md:top-2 left-0 w-10 md:w-14 h-[1px] bg-midnight-black"></div>
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
