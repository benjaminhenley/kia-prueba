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
    nombre: "Alpina Motors",
    provincia: "caba",
    direccion: "Av. Libertador 2814, CABA, Buenos Aires",
    telefono: "(011) 4802 9000",
    horario: "Lunes a Viernes de 10:00 a 18:00hs. Sábados de 10:00 a 14:00hs.",
    email: "Info@alpinamotors.com",
    coordinadas: [-58.4097552, -34.5773132],
  },
  {
    id: 2,
    nombre: "Armando Automotores",
    provincia: "misiones",
    direccion: "Av. Uruguay 6132, Posadas, Misiones",
    telefono: "(0376) 445 0900",
    horario: "Lunes a Viernes de 8:00 a 12:30hs / 15:00 a 19:00hs. Sábados de 9:00 a 13:00hs",
    email: "agencia@armandoautomotores.com.ar",
    coordinadas: [-55.9144325, -27.4031935],
  },
  {
    id: 3,
    nombre: "Autodrive",
    provincia: "caba",
    direccion: "Av. Córdoba 5202, CABA, Buenos Aires",
    telefono: "(011) 3220 3333",
    horario: "Lunes a Viernes de 9:00 a 19:00hs. Sábados de 10:00 a 17:00hs",
    email: "ventaskia@autodrive.com.ar",
    coordinadas: [-58.4231858, -34.5980271],
  },
  {
    id: 4,
    nombre: "Autopremium (Olivos)",
    provincia: "buenosaires",
    direccion: "Av. Libertador 2230, Vicente López, Buenos Aires",
    telefono: "(011) 4799 6698",
    horario: "Lunes a Viernes de 9:00 a 19:00hs. Sábados de 10:00 a 14:00hs",
    email: "ventas@kiaolivos.com.ar",
    coordinadas: [-58.478294, -34.5109242],
  },
  {
    id: 5,
    nombre: "Autopremium (Pilar)",
    provincia: "buenosaires",
    direccion: "Panamericana Km 52.300, Pilar, Buenos Aires",
    telefono: "(0230) 466 3500",
    horario: "Lunes a Viernes de 9:00 a 19:00hs. Sábados de 10:00 a 14:00hs",
    email: "ventas@kia-pilar.com.ar",
    coordinadas: [-58.892075, -34.446289],
  },
  {
    id: 6,
    nombre: "Autovisiones",
    provincia: "caba",
    direccion: "Av. Libertador 5750, CABA, Buenos Aires",
    telefono: "(011) 5254 7333",
    horario: "Lunes a Viernes de 9:30 a 19:00hs. Sábados de 10:00 a 14:00hs",
    email: "ventas@autovisioneskia.com.ar",
    coordinadas: [-58.445786, -34.558711],
  },
  {
    id: 7,
    nombre: "Car Bureau",
    provincia: "caba",
    direccion: "Av. San Martín 4641, CABA, Buenos Aires",
    telefono: "(011) 4504 0972/0474/8437",
    horario: "Lunes a Viernes de 8:30 a 18:00hs",
    email: "ventas@carbureau.com.ar",
    coordinadas: [-58.484328, -34.597263],
  },
  {
    id: 8,
    nombre: "Chahín Automotores",
    provincia: "cordoba",
    direccion: "Av. Fuerza Aérea 1810, Córdoba",
    telefono: "(0351) 465 7536",
    horario: "Lunes a Viernes de 9:00 a 13:00hs / 15:00 a 19:30hs",
    email: "info@automotoreschahin.com.ar",
    coordinadas: [-64.2146915, -31.4305145],
  },
  {
    id: 9,
    nombre: "Chahín Automotores",
    provincia: "cordoba",
    direccion: "Av. Urquiza 474, San Fransisco, Córdoba",
    telefono: "(03564) 43 6660",
    horario: "Lunes a Viernes de 9:00 a 13:00hs / 15:00 a 19:30hs",
    email: "info@automotoreschahin.com.ar",
    coordinadas: [-62.094966761742185, -31.408285167491385],
  },
  {
    id: 10,
    nombre: "CP Motors",
    provincia: "tucuman",
    direccion: "Ruta 9 Km 1301, Tafí Viejo, Tucumán",
    telefono: "(0381) 453 3819 / 15 4132674",
    horario: "Lunes a Viernes de 8:00 a 17:30hs",
    email: "odupuy@cpmotors.com.ar",
    coordinadas: [-65.276842, -26.815713],
  },
  {
    id: 11,
    nombre: "Del Norte",
    provincia: "chaco",
    direccion: "Av. 25 de Mayo 1934, Resistencia, Chaco",
    telefono: "(0362) 4466835",
    horario: "Lunes a Viernes de 9:00 a 12:30hs / 16:30 a 20:30hs. Sábados de 8:00 a 12:30hs / 17:30 a 20:30hs",
    email: "info@kiadelnorte.com.ar",
    coordinadas: [-58.982534, -27.447252],
  },
  {
    id: 12,
    nombre: "Dietrich",
    provincia: "buenosaires",
    direccion: "Jorge Newbery 25, Bahía Blanca, Buenos Aires",
    telefono: "(0291)  511 2490",
    horario: "Lunes a Viernes de 08:00 a 19:00hs. Säbados 9:00 a 13:00hs",
    email: "online@kiadietrich.com",
    coordinadas: [-62.220894, -38.68113],
  },
  {
    id: 13,
    nombre: "Giuvi",
    provincia: "buenosaires",
    direccion: "Av. 44 n° 1.835 (entre 131 y 132), La Plata, Buenos Aires",
    telefono: "(0221) 470 0707",
    horario: "Lunes a Sábados de 8:00 a 17:00hs. Sábados de 8:00 a 12:00hs",
    email: "ventas@giuvisa.com.ar",
    coordinadas: [-57.981087, -34.9343144],
  },
  {
    id: 14,
    nombre: "Hiperplatinum",
    provincia: "cordoba",
    direccion: "Av. Fuerza Aérea 3742, Córdoba",
    telefono: "(0351) 466 8990",
    horario: "Lunes a Viernes de 8:30 a 19:30hs. Sábados de 9:30hs a 13:30hs",
    email: "afrencia@grupoantun.com.ar / info@gamotsa.com.ar",
    coordinadas: [-64.2374038, -31.432092],
  },
  {
    id: 15,
    nombre: "Kijack",
    provincia: "buenosaires",
    direccion: "Av. Hipólito Yrigoyen 18, Quilmes, Buenos Aires",
    telefono: "(011) 5236 4708 / 4709",
    horario: "Lunes a Viernes de 9:00 a 19:00hs. Sábados de 09:00 a 17:00hs",
    email: "info@kijack.com.ar",
    coordinadas: [-58.267668, -34.713562],
  },
  {
    id: 16,
    nombre: "Kinor Motors",
    provincia: "buenosaires",
    direccion: "Av. Santa Fe 1007, Martínez, Buenos Aires",
    telefono: "(011) 4793 5400",
    horario: "Lunes a Sábados de 09:00 a 190:00hs",
    email: "ventas@kinormotors.com.ar",
    coordinadas: [-58.505864, -34.481783],
  },
  {
    id: 17,
    nombre: "Neostar",
    provincia: "santafe",
    direccion: "Av. Alem y Sarmiento (Puerto), Santa Fe, Santa Fe",
    telefono: "(0342) 453 2211",
    horario: "Lunes a Viernes de 9:00 a 18:00hs. Sábados de 8:30 a 12:30hs",
    email: "info@neostar.com.ar / dgiauque@neostar.com.ar",
    coordinadas: [-60.69562452682497, -31.64599060213668],
    
  },
  {
    id: 18,
    nombre: "Neostar Rosario",
    provincia: "santafe",
    direccion: "Av. Mendoza 4631, Rosario, Santa Fe",
    telefono: "(0341) 421 8999",
    horario: "Lunes a Viernes de 9:00hs a 19:00hs. Sábados de 9:00 a 13:00hs",
    email: "info@neostar.com.ar",
    coordinadas: [-60.687842, -32.942768],
  },
  {
    id: 19,
    nombre: "Novo Automotores (Ushuaia)",
    provincia: "tierradelfuego",
    direccion: "Av. Perito Moreno 1917, Ushuaia, Tierra del Fuego",
    telefono: "(02901) 536975 / 494793",
    horario: "Lunes a Viernes de 10:00 a 13:00hs / 15:30 a 20:00hs. Sabados de 10:00 a 13:00hs",
    email: "ezequiel.delprado@tdfmotors.com",
    coordinadas: [-68.304872, -54.802612],
  },
  {
    id: 20,
    nombre: "Novo Automotores (Río Grande)",
    provincia: "tierradelfuego",
    direccion: "Av. San Martín 2427, Río Grande, Tierra del Fuego",
    telefono: "(0296) 444 5938",
    horario: "Lunes a Viernes de 10:00 a 13:00hs / 15:30 a 20:00hs. Sábados de 10:00 a 13:00hs",
    email: "infonovo@ushuaiaautomotores.com.arr",
    coordinadas: [-67.72622, -53.77318],
  },
  {
    id: 21,
    nombre: "One Saw",
    provincia: "caba",
    direccion: "Av. Rivadavia 9100, CABA, Buenos Aires",
    telefono: "(011) 4674-6644 / 6643 / 5485",
    horario: "Lunes a Viernes de 10:00 a 19:00hs",
    email: "ventas@kiaonesaw.com.ar",
    coordinadas: [-58.4921132, -34.6363241],
  },
  {
    id: 22,
    nombre: "Sevek Automotores",
    provincia: "entrerios",
    direccion: "Mendiburu 91, Concordia, Entre Ríos",
    telefono: "(0345) 421 4675",
    horario: "Lunes a Viernes de 8:00 a 13:00hs / 16:00 a 20:00hs. Sábados de 8:00 a 13:00hs.",
    email: "sevekautos@gmail.com",
    coordinadas: [-58.016649, -31.3833671],
  },
  {
    id: 23,
    nombre: "Surkai",
    provincia: "mendoza",
    direccion: "Av. San Martín 598, Godoy Cruz, Mendoza",
    telefono: "(0261) 476 9060",
    horario: "Lunes a Viernes 9:00 a 19:00hs. Sábados de 10:00 a 13:00hs.",
    email: "kia@surkai.com.ar",
    coordinadas: [-68.84966913, -32.93054299],
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
