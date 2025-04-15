import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import FormDropdown from '../Components/Common/forms/FormDropdown';
import KiaButton from '../Components/Common/KiaButton';
import DealersTable from '../Components/Concesionarios/DealersTable';
import ViewModeToggle from '../Components/Common/ViewModeToggle';
import MapView from '../Components/Concesionarios/MapView';


// Asegúrate de que este token sea válido
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ldGFtYm9yIiwiYSI6ImNtOWczNHk3MTFzMHkybG9xZzdxYzYzejUifQ.rOyZbMUPMFct3ht7ULUYrQ';

// Datos de concesionarios
const DEALERS = [
    {
      id: 1,
      nombre: "Alpina Motors",
      provincia: "buenosaires",
      direccion: "Av. Libertador 2814, CABA, Buenos Aires",
      telefono: "1124770008",
      horario: "Lunes a Viernes de 10:00hs a 18:00hs",
      email: "ventas@alpinamotors.com",
      coordinadas: [-58.408977, -34.577695]
    },
    {
      id: 2,
      nombre: "Armando Automotores", 
      provincia: "misiones",
      direccion: "Av. Uruguay 6132, Posadas, MISIONES",
      telefono: "(0351) 487-9900", 
      horario: "Lunes a Viernes de 10:00hs a 12:30hs / 16:00hs a 20:30hs",
      email: "cordoba@kiamotors.com",
      coordinadas: [-64.1810, -31.4135]
    },
    {
      id: 3,
      nombre: "Autodrive", 
      provincia: "buenosaires",
      direccion: "Av. Córdoba 5202, CABA, Buenos Aires",
      telefono: "(0351) 487-9900", 
      horario: "Lunes a Viernes de 10:00hs a 18:00hs",
      email: "cordoba@kiamotors.com",
      coordinadas: [-64.1810, -31.4135]
    },
    {
      id: 4,
      nombre: "Autopremium (Olivos)",
      provincia: "buenosaires",
      direccion: "Av. Libertador 2230, Vicente López, Buenos Aires",
      horario: "Lunes a Viernes de 09:00hs a 18:30hs y Sábados de 10:00hs a 14:00hs"
    },
    {
      id: 5,
      nombre: "Autopremium (Pilar)",
      provincia: "buenosaires",
      direccion: "Panamericana Km 52.300, Pilar, Buenos Aires",
      horario: "Lunes a Viernes de 09:00hs a 18:30hs y Sábados de 10:00hs a 14:00hs"
    },
    {
      id: 6,
      nombre: "Autovisiones",
      provincia: "buenosaires",
      direccion: "Av. Libertador 5750, CABA, Buenos Aires",
      horario: "Lunes a Viernes de 09:00hs a 19:00hs y Sábados de 09:00hs a 13:00hs"
    },
    {
      id: 7,
      nombre: "Car Bureau",
      provincia: "buenosaires",
      direccion: "Av. San Martín 4641, CABA, Buenos Aires",
      horario: "Lunes a Viernes de 09:00hs a 19:00hs y Sábados de 09:00hs a 14:00hs"
    },
    {
      id: 8,
      nombre: "Chahín Automotores",
      provincia: "cordoba",
      direccion: "Av. Fuerza Aérea Argentina 810, Córdoba",
      horario: "Lunes a Viernes de 09:00hs a 13:00hs / 15:30hs a 19:30hs"
    },
    {
      id: 9,
      nombre: "CP Motors",
      provincia: "tucuman",
      direccion: "Ruta 9 Km 1301, Yerba Buena, Tucumán",
      horario: "Lunes a Viernes de 08:30hs a 17:00hs"
    },
    {
      id: 10,
      nombre: "Del Norte",
      provincia: "chaco",
      direccion: "Av. 25 de Mayo 1934, Resistencia, Chaco",
      horario: "Lunes a Viernes de 08:00hs a 12:30hs / 16:30hs a 20:30hs y Sábados de 08:00hs a 12:00hs"
    },
    {
      id: 11,
      nombre: "Dietrich",
      provincia: "buenosaires",
      direccion: "Jorge Newbery 25, Bahía Blanca, Buenos Aires",
      horario: "Lunes a Viernes de 09:00hs a 18:00hs"
    },
    {
      id: 12,
      nombre: "Giuvi",
      provincia: "buenosaires",
      direccion: "Av. 44 (n°)1835, La Plata, Buenos Aires",
      horario: "Lunes a Viernes de 08:00hs a 19:00hs y Sábados de 09:00hs a 14:00hs"
    },
    {
      id: 13,
      nombre: "Hiperplatinum",
      provincia: "cordoba",
      direccion: "Av. Fuerza Aérea 3742, Córdoba",
      horario: "Lunes a Viernes de 09:00hs a 18:30hs y Sábados de 09:30hs a 13:00hs"
    },
    {
      id: 14,
      nombre: "Kijack",
      provincia: "buenosaires",
      direccion: "Av. Hipólito Yrigoyen 18, Quilmes, Buenos Aires",
      horario: "Lunes a Viernes de 08:00hs a 13:00hs / 14:00hs a 18:00hs"
    },
    {
      id: 15,
      nombre: "Kinor Motors",
      provincia: "buenosaires",
      direccion: "Av. Santa Fe 1007, Martínez, Buenos Aires",
      horario: "Lunes a Sábados de 09:00hs a 20:00hs"
    },
    {
      id: 16,
      nombre: "Neostar Rosario",
      provincia: "santafe",
      direccion: "Av. Mendoza 4631, Rosario, Santa Fe",
      horario: "Lunes a Viernes de 09:00hs a 19:00hs y Sábados de 09:00hs a 13:00hs"
    },
    {
      id: 17,
      nombre: "Neostar Santa fe",
      provincia: "santafe",
      direccion: "Av. Alem y Sarmiento (Puerto), Sta. Fe, Santa Fe",
      horario: "Lunes a Viernes de 09:00hs a 17:00hs y Sábados de 09:00hs a 13:00hs"
    },
    {
      id: 18,
      nombre: "Novo Automotores (Ushuaia)",
      provincia: "tierradelfuego",
      direccion: "Perito F. Moreno 1917, Ushuaia, Tierra del Fuego",
      horario: "Lunes a Viernes de 10:00hs a 13:00hs / 15:00hs a 20:00hs y Sábados de 10:00hs a 13:00hs"
    },
    {
      id: 19,
      nombre: "Novo Automotores (Ushuaia)",
      provincia: "tierradelfuego",
      direccion: "Perito F. Moreno 2597, Ushuaia, Tierra del Fuego",
      horario: "Lunes a Viernes de 10:00hs a 13:00hs / 15:00hs a 20:00hs y Sábados de 10:00hs a 13:00hs"
    },
    {
      id: 20,
      nombre: "Novo Automotores (Río Grande)",
      provincia: "tierradelfuego",
      direccion: "Av. San Martín 2427, Río Grande, Tierra del Fuego",
      horario: "Lunes a Viernes de 10:00hs a 13:00hs / 15:00hs a 20:00hs y Sábados de 10:00hs a 13:00hs"
    },
    {
      id: 21,
      nombre: "One Saw",
      provincia: "buenosaires",
      direccion: "Av. Rivadavia 9130, CABA, Bs.As.",
      horario: "Lunes a Viernes de 10:00hs a 19:00hs"
    },
    {
      id: 22,
      nombre: "Sebastian Bronstein e Hijo",
      provincia: "cordoba",
      direccion: "Fray L. Beltrán 2584, Córdoba",
      horario: "Lunes a Viernes de 09:00hs a 12:00hs / 15:00hs a 19:00hs"
    },
    {
      id: 23,
      nombre: "Sevek Automotores",
      provincia: "entrerios",
      direccion: "Mendiburu 91, Concordia, Entre Ríos",
      horario: "Lunes a Viernes de 08:30hs a 13:00hs / 16:00hs a 20:00hs"
    },
    {
      id: 24,
      nombre: "Surkai",
      provincia: "mendoza",
      direccion: "Av. San Martín 598, Godoy Cruz, Mendoza",
      horario: "Lunes a Viernes 08:30hs a 13:00hs / 16:30hs a 20:30hs"
    }
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
  { value: "tucuman", label: "Tucumán" }
];

const ConcesionariosVenta = () => {
  const [viewMode, setViewMode] = useState('list');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [filteredDealers, setFilteredDealers] = useState(DEALERS);

  const handleSearch = (province) => {
    const dealers = !province || province === 'todos' 
      ? DEALERS 
      : DEALERS.filter(dealer => dealer.provincia === province);
    
    setFilteredDealers(dealers);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[7rem]">
      {/* Header Section */}
      <div className="mb-7 md:mb-8">
        <h2 className="text-lg md:text-2xl text-midnight-black mb-0 md:mb-5">Concesionarios</h2>
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-bold text-midnight-black">Venta</h1>
          <div className="relative top-7px] md:top-2 left-0 w-6 md:w-12 h-[2px] bg-midnight-black"></div>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex flex-col gap-6 items-start md:gap-0 md:flex-row md:flex-row-reverse justify-between md:items-center mb-8">
        <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        <div className="flex gap-4 w-full md:w-auto">
          <div className='w-full md:w-[450px]'>
            <FormDropdown 
              placeholder="Seleccionar provincia"
              name="provincia"
              value={selectedProvince}
              onChange={(e) => {
                const province = e.target.value;
                setSelectedProvince(province);
                // Solo en mobile, disparar búsqueda al seleccionar
                if (window.innerWidth < 768) { // 768px es el breakpoint para md
                  handleSearch(province);
                }
              }}
              options={PROVINCES}
            />
          </div>  
          {/* Botón de búsqueda solo visible en pantallas md y más grandes */}
          <div className="hidden md:block">
            <KiaButton
              onClick={() => handleSearch(selectedProvince)} // Usar el estado actual al hacer clic
              titulo='Buscar'
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col item-start gap-3 md:gap-0 md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">Concesionarios de venta</h3>
          <div className="relative top-[0px] md:top-1 md:top-2 left-0 w-10 md:w-14 h-[1px] bg-midnight-black"></div>
        </div>
        {filteredDealers && (
          <p className="text-midnight-black text-xs md:text-sm">
            Resultados: <br/><span className='font-medium'>{filteredDealers.length} Concesionarios encontrados</span>
          </p>
        )}
      </div>   

      {/* Content Section */}
      {filteredDealers.length > 0 ?
            <>
                {viewMode === 'list' && (
                    <DealersTable dealers={filteredDealers} showResultsCount={false} />
                )}
                {viewMode === 'map' && (
                    <MapView dealers={filteredDealers} showResultsCount={false}/>
                )}
            </>
            : <div className="bg-[#CDD0D233] p-6 text-center mt-4 md:mt-[4rem]">
                <p className="text-midnight-black">No hay concesionarios para mostrar.</p>
            </div>
        }
    </div>
  );
}

export default ConcesionariosVenta;