import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import DealersTable from "../Components/Concesionarios/DealersTable";
import ViewModeToggle from "../Components/Common/ViewModeToggle";
import MapView from "../Components/Concesionarios/MapView";
import PillButton from "../Components/Common/ui/PillButton";

// Asegúrate de que este token sea válido
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9ldGFtYm9yIiwiYSI6ImNtOWczNHk3MTFzMHkybG9xZzdxYzYzejUifQ.rOyZbMUPMFct3ht7ULUYrQ";

// Datos de concesionarios
const DEALERS = [
  {
    id: 1,
    nombre: "Armando Automotores",
    provincia: "misiones",
    direccion: "Av. Tierra del Fuego 2082, Posadas, Misiones",
    telefono: "(0376) 445 5110/0900/2022",
    horario: "Lunes a Viernes de 8:00 a 12:30hs / 15:00 a 19:00hs. Sábados de 9:00 a 13:00hs",
    email: "info@armandoautomotores.com.ar",
    coordinadas: [-55.9044022, -27.4044218],
  },
  {
    id: 2,
    nombre: "Autodrive",
    provincia: "caba",
    direccion: "Av. Córdoba 3886, CABA, Buenos Aires",
    telefono: "(011) 3220 3333",
    horario: "Lunes a Viernes de 8:00 a 13:00hs / 14:00 a 17:30hs",
    email: "serviciokia@autodrive.com.ar",
    coordinadas: [-58.421074, -34.597583],
  },
  {
    id: 3,
    nombre: "Autopremium (Olivos)",
    provincia: "buenosaires",
    direccion: "Villate 555, Olivos, Buenos Aires",
    telefono: "(011) 3959 1667",
    horario: "Lunes a Viernes de 8:00hs a 13:00hs / 14:00hs a 17:30hs",
    email: "repuestos@kiaolivos.com.ar",
    coordinadas: [-58.4803066, -34.5109477],
  },
  {
    id: 4,
    nombre: "Autopremium (Pilar)",
    provincia: "buenosaires",
    direccion: "Panamericana Km 52.300 ramal Pilar, Pilar, Buenos Aires",
    telefono: "(0230) 437 3577 / 78",
    horario: "Lunes a Viernes 9:00 a 13:00hs / 14:00 a 17:30hs.",
    email: "repuestos@kia-pilar.com.ar",
    coordinadas: [-58.892075, -34.446289],
  },
  {
    id: 5,
    nombre: "Autovisiones",
    provincia: "caba",
    direccion: "Juramento 1373, CABA, Buenos Aires",
    telefono: "(011) 5199 3841",
    horario: "Lunes a Viernes 8:00 a 13:00hs / 14:00 a 18:00hs.",
    email: "servicios@autovisioneskia.com.ar",
    coordinadas: [-58.44638753068296, -34.555669589024724],
  },
  {
    id: 6,
    nombre: "Car Bureau",
    provincia: "caba",
    direccion: "Av. San Martín 4641, CABA, Buenos Aires",
    telefono: "(011) 4504 0743",
    horario: "Lunes a Viernes de 8:30 a 12:30hs / 13:30 a 17:00hs",
    email: "taller@carbureau.com.ar",
    coordinadas: [-58.484328, -34.597263],
  },
  {
    id: 7,
    nombre: "Chahín Automotores",
    provincia: "cordoba",
    direccion: "Sol de Mayo 1700, Córdoba",
    telefono: "(0351) 465 7536",
    horario: "Lunes a Viernes de 9:00 a 13:00hs / 14:00 a 18:00hs.",
    email: "secretariachahin@automotoreschahin.com.ar",
    coordinadas: [-64.214019, -31.430295],
  },
  {
    id: 8,
    nombre: "CP Motors",
    provincia: "tucuman",
    direccion: "Ruta 9 Km 1301, Tafí Viejo, Tucumán",
    telefono: "(0381) 453 3819 / 15 6664008",
    horario:"Lunes a Viernes 8:00 a 17:30hs.",
    email: "amanzano@cpmotors.com.arr",
    coordinadas: [-65.276982, -26.81578],
  },
  {
    id: 9,
    nombre: "Del Norte",
    provincia: "chaco",
    direccion: "Ruta 11 Km 1002.5, Resistencia, Chaco",
    telefono: "(0362) 413-3527",
    horario: "Lunes a Viernes de 8:00 a 17:00hs. Sábados de 8:00 a 12:00hs",
    email: "repuestos1@meucci.com.ar",
    coordinadas: [-58.982534, -27.447252],
  },
  {
    id: 10,
    nombre: "Exclusivos",
    provincia: "buenosaires",
    direccion: "Dr. Carlos Cisneros 4660, Bahía Blanca, Buenos Aires",
    telefono: "(0291 ) 522 5484",
    horario: "Lunes a Viernes de 8:00 a 18:00hs",
    email: "servicios@exclusivosonline.com.ar",
    coordinadas: [-62.22082327467635, -38.68138984591091],
  },
  {
    id: 11,
    nombre: "Giuvi",
    provincia: "buenosaires",
    direccion: "Calle 132 N° 520 (entre 43 y 44), La Plata, Buenos Aires",
    telefono: "(0221) 470 0707",
    horario: "Lunes a Viernes de 8:00 a 13:00hs / 14:00 a 17:00hs",
    email: "servicio@giuvisa.com.ar",
    coordinadas: [-57.981928, -34.934274],
  },
  {
    id: 12,
    nombre: "Hiperplatinum",
    provincia: "cordoba",
    direccion: "Av. Fuerza Aérea 3742, Córdoba",
    telefono: "(0351) 485 8830 (351)",
    horario: "Lunes a Viernes de 8:00 a 13:30hs / 14:30 a 18:00hs",
    email: "maxicirelli@gmail.com",
    coordinadas: [-64.2374038, -31.432092],
  },
  {
    id: 13,
    nombre: "Javimar Neuquén",
    provincia: "neuquen",
    direccion: "Av. Arturo Illia 510, Neuquén",
    telefono: "(0299) 443 1331",
    horario: "Lunes a Jueves de 8:00 a 17:30hs // Viernes de 8:30 a 16:30hs.",
    email: "servicios@javimar.com.ar",
    coordinadas: [-68.045393, -38.949548],
  },
  {
    id: 14,
    nombre: "Kijack",
    provincia: "buenosaires",
    direccion: "Av. Hipólito Yrigoyen 18, Quilmes, Buenos Aires",
    telefono: "(011) 5236 4708 / 4709",
    horario: "Lunes a Viernes de 8:00 a 13:00hs / 14:00 a 18:00hs",
    email: "federico.albarracin@kijack.com.ar",
    coordinadas: [-58.267473, -34.713797],
  },
  {
    id: 15,
    nombre: "Kinor Motors",
    provincia: "buenosaires",
    direccion: "Av. Santa Fe 1581, Martínez, Buenos Aires",
    telefono: "(011) 4793 5400 / (011) 15 3116 1021",
    horario: "Lunes a Viernes 8:00 a 13:00hs / 14:00 a 18:00hs",
    email: "servicios@kinormotors.com.ar",
    coordinadas: [-58.503151, -34.485193],
  },
    {
    id: 16,
    nombre: "Neostar Rosario",
    provincia: "santafe",
    direccion: "Pasaje Colidge 1211, Rosario, Santa Fe",
    telefono: "(0341) 421 8999",
    horario: "Lunes a Viernes de 8:00 a 17:30hs.",
    email: "lcaceres@neostar.com.ar",
    coordinadas: [-60.68794627492625, -32.94297095098805],
  },
  {
    id: 17,
    nombre: "Neostar",
    provincia: "santafe",
    direccion: "San Lorenzo 3440, Santa Fe",
    telefono: "(0342) 456 3993",
    horario: "Lunes a Viernes de 9:00 a 18:00hs",
    email: "emorzan@neostar.com.ar",
    coordinadas: [-60.713864, -31.634085],
  },
  {
    id: 18,
    nombre: "Novo Automotores (Ushuaia)",
    provincia: "tierradelfuego",
    direccion: "Perito Moreno 2597, Ushuaia, Tierra del Fuego",
    telefono: "(02901) 477489",
    horario: "Lunes a Viernes de 9:30 a 13:00hs / 14:00 a 10:00hs. Sabados de 10:00hs a 13:00hs",
    email: "postventa@ushuaiaautomotores.com.ar",
    coordinadas: [-68.304872, -54.802612],
  },
  {
    id: 19,
    nombre: "Novo Automotores",
    provincia: "tierradelfuego",
    direccion: "Av San Martin 2427, Río Grande, Tierra del Fuego",
    telefono: "(0296) 4418959 ",
    horario: "Lunes a Viernes de 9:00 a 13:00hs / 14:00hs a 19:00hs.",
    email: "daniel.szarapo@ushuaiaautomotores.com.ar",
    coordinadas: [-67.72622, -53.77318],
  },
  {
    id: 20,
    nombre: "One Saw",
    provincia: "caba",
    direccion: "Av. Rivadavia 9130, CABA, Buenos Aires.",
    telefono: "(011) 4641 6272",
    horario: "Lunes a Viernes de 8:00 a 12:00hs / 13:00 a 17:00hs",
    email: "servicio@kiaonesaw.com.ar",
    coordinadas: [-58.4921132, -34.6363241],
  },
  {
    id: 21,
    nombre: "Sebastían Bronstein S.R.L.",
    provincia: "cordoba",
    direccion: "Fray L. Beltrán 2550, Córdoba",
    telefono: "(0351) 508 1208",
    horario: "Lunes a Viernes de 8:30 a 13:00hs / 14:00 a 17:30hs",
    email: "repuestos@serviciobronstein.com.ar",
    coordinadas: [-64.206224, -31.367069],
  },
  {
    id: 22,
    nombre: "Sevek Automotores",
    provincia: "entrerios",
    direccion: "Tala 1943, Concordia, Entre Ríos",
    telefono: "(0345) 429 6059",
    horario: "Lunes a Viernes de 7:00 a 16:00hs",
    email: "kiaserviciokuper@gmail.com",
    coordinadas: [-58.031943, -31.371032],
  },
  {
    id: 23,
    nombre: "Surkai",
    provincia: "mendoza",
    direccion: "Derqui 58, Godoy Cruz, Mendoza",
    telefono: "(0261) 476 9060",
    horario: "Lunes a Viernes 8:00 a 17:00hs",
    email: "kia@surkai.com.ar",
    coordinadas: [-68.84747317492727, 2.91796252941365],
  },
];

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

const ConcesionariosPostVenta = () => {
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
      <div className="w-full mx-auto py-10 py-[7rem]">
        {/* Header Section */}
        <div className="mb-7 md:mb-8">
          <h2 className="text-lg md:text-2xl text-midnight-black mb-0 md:mb-5">
            Concesionarios
          </h2>
          <div className="relative">
            <h1 className="text-2xl md:text-4xl font-bold text-midnight-black">
              PostVenta
            </h1>
            <div className="relative top-7px] md:top-2 left-0 w-6 md:w-12 h-[2px] bg-midnight-black"></div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-col gap-6 items-start md:gap-0 md:flex-row md:flex-row-reverse justify-between md:items-center mb-8">
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
          <div className="flex gap-4 w-full md:w-auto items-center">
            <div className="w-full md:w-[450px]">
              <FormDropdown
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
              Concesionarios de post venta
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
          <div className="bg-gray-100 p-6 text-center mt-4 md:mt-[4rem]">
            <p className="text-midnight-black">
              No hay concesionarios para mostrar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcesionariosPostVenta;
