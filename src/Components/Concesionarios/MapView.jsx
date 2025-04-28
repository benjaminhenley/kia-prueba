import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ConcesionarioCard from "./ConcesionarioCard";
import Arrow from "../Common/Icons/Arrow"; // Import Arrow for the slider buttons

// Token de Mapbox
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9ldGFtYm9yIiwiYSI6ImNtOWczNHk3MTFzMHkybG9xZzdxYzYzejUifQ.rOyZbMUPMFct3ht7ULUYrQ";

const MapView = ({ dealers }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const scrollContainerRef = useRef(null); // Ref for the scrollable container
  const sliderRef = useRef(null); // Ref for the slider input
  const thumbRef = useRef(null); // Ref for the custom thumb
  const [selectedDealerId, setSelectedDealerId] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [routeSelected, setRouteSelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // State for slider position (0-100)
  const [isDragging, setIsDragging] = useState(false); // Track if user is dragging the slider

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar tamaño inicial
    checkIfMobile();

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", checkIfMobile);

    // Limpiar listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle slider input changes (only this should move the thumb directly)
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    // Calculate and apply scroll position
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight;
      const containerHeight = scrollContainerRef.current.clientHeight;
      const maxScroll = scrollHeight - containerHeight;
      const scrollPosition = (value / 100) * maxScroll;

      scrollContainerRef.current.scrollTop = scrollPosition; // Use direct assignment for smoother dragging
    }
  };

  const handleScroll = (e) => {
    console.log("autoScroll");
  };

  // Position thumb based on slider value (only when dragging or button clicks)
  useEffect(() => {
    if (thumbRef.current && sliderRef.current) {
      const trackHeight = scrollContainerRef.current.clientHeight;
      console.log(trackHeight);
      const thumbHeight = thumbRef.current.clientHeight; // Height of the thumb (two buttons)
      const topPos =
        ((trackHeight - thumbHeight - 20) / 100) * sliderValue + 10;
      thumbRef.current.style.top = `${topPos}px`;
    }
  }, [sliderValue]);

  // Función para obtener la ubicación del usuario
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.longitude,
            position.coords.latitude,
          ]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  };

  // Función para calcular y mostrar la ruta
  const showRoute = async (dealerCoordinates) => {
    if (!userLocation) {
      alert("Necesitamos tu ubicación para trazar la ruta");
      getUserLocation();
      return;
    }

    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${dealerCoordinates[0]},${dealerCoordinates[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
      );
      const json = await query.json();

      const data = json.routes[0];
      const route = data.geometry.coordinates;

      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

      // Si ya existe la ruta, la removemos
      if (map.current.getSource("route")) {
        map.current.removeLayer("route");
        map.current.removeSource("route");
      }

      // Agregamos la nueva ruta
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#05141F",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });

      // Ajustamos el mapa para mostrar la ruta completa, teniendo en cuenta el offset en desktop
      const bounds = new mapboxgl.LngLatBounds();
      route.forEach((point) => bounds.extend(point));

      // En desktop, aplicamos un offset para mostrar la ruta más hacia la derecha
      if (!isMobile) {
        const offsetOptions = {
          padding: { top: 50, bottom: 50, left: 550, right: 50 },
        };
        map.current.fitBounds(bounds, offsetOptions);
      } else {
        map.current.fitBounds(bounds, {
          padding: 50,
        });
      }

      setRouteSelected(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Obtener la ubicación del usuario cuando se monta el componente
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-64.181, -35.4135],
        zoom: 4,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    }

    // Limpiar marcadores existentes
    const markers = document.getElementsByClassName("mapboxgl-marker");
    while (markers[0]) {
      markers[0].parentNode.removeChild(markers[0]);
    }

    // Agregar marcador de ubicación del usuario si está disponible
    if (userLocation) {
      const el = document.createElement("div");
      el.className = "user-location-marker";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "#05141F";
      el.style.border = "3px solid white";

      new mapboxgl.Marker(el).setLngLat(userLocation).addTo(map.current);
    }

    // Agregar marcadores para los concesionarios
    if (dealers.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();

      dealers.forEach((dealer) => {
        if (dealer.coordinadas) {
          // Crear el marcador por defecto de Mapbox en color rojo
          new mapboxgl.Marker({ color: "#EA0029" })
            .setLngLat(dealer.coordinadas)
            .setPopup(
              new mapboxgl.Popup({ offset: 35, className: "custom-popup" })
                .setHTML(`
                  <div class="text-center p-4">
                    <h3 class="font-bold text-lg mb-4 text-midnight-black">${dealer.nombre}</h3>
                    <div>
                      <a onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${dealer.coordinadas[1]},${dealer.coordinadas[0]}&travelmode=driving', '_blank')" style="cursor: pointer;">
                        <button class="border border-midnight-black bg-midnight-black hover:bg-[#37434C] text-sm text-white font-bold rounded-full flex items-center mx-auto hover:border-[#37434C] transition-all duration-300 group relative">
                          <div class="flex items-center py-[0.046875rem] pl-3 pr-[0.046875rem]">
                            <span class="relative inline-block mr-3">
                              Iniciar Navegación
                              <span class="absolute left-0 bottom-0 h-[0.5px] group-hover:bg-white transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <div class="flex items-center justify-center w-[24px] h-[24px]">
                              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="11.5" fill="#fff"/>
                                <path d="M14.93 12.45c0.044 0.055 0.07 0.125 0.07 0.2 0 0.075-0.026 0.145-0.07 0.2l-4.586 5.8h-1.344l4.752-6L9 6.85h1.344l4.586 5.6z" fill="#000"/>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                `)
            )
            .addTo(map.current);

          bounds.extend(dealer.coordinadas);
        }
      });

      // Ajustar el mapa para mostrar todos los marcadores
      if (!bounds.isEmpty()) {
        // Aplicar offset en desktop para mostrar los marcadores más hacia la derecha
        if (!isMobile) {
          map.current.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 550, right: 50 },
            maxZoom: 15,
          });
        } else {
          map.current.fitBounds(bounds, {
            padding: 50,
            maxZoom: 15,
          });
        }
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [dealers, userLocation, isMobile]);

  // Función para centrar el mapa en un concesionario con offset en desktop
  const centerMapOnDealer = (coordinates) => {
    if (!map.current) return;

    if (isMobile) {
      // En móvil, centrar normalmente
      map.current.flyTo({
        center: coordinates,
        zoom: 15,
      });
    } else {
      // En desktop, aplicar offset hacia la derecha
      // Calculamos un nuevo centro desplazado para dar espacio al panel de concesionarios
      const currentZoom = map.current.getZoom();
      const offsetInPixels = 250; // Mitad aproximada del ancho del panel (500px)

      // Convertir el offset de píxeles a coordenadas de longitud
      const scale = Math.pow(2, currentZoom);
      const offsetLng = (offsetInPixels / scale) * 0.0003; // Factor de ajuste basado en pruebas

      // Aplicar el offset a las coordenadas
      const offsetCenter = [coordinates[0] + offsetLng, coordinates[1]];

      map.current.flyTo({
        center: offsetCenter,
        zoom: 15,
      });
    }
  };

  return (
    <div className="relative w-full mt-[4rem]">
      {/* Contenedor de mapa con altura ajustable según dispositivo */}
      <div className={`w-full ${isMobile ? "h-[300px]" : "h-[500px]"}`}>
        <div ref={mapContainer} className="w-full h-full" />
      </div>

      {/* Lista de concesionarios - posicionamiento condicional */}
      <div
        onScroll={handleScroll}
        className={`
          ${
            isMobile
              ? "relative w-full mt-6"
              : "absolute top-1/2 -translate-y-1/2 left-0 w-[500px] ml-8"
          }
        `}>
        {/* Contenedor flex para tener concesionarios y slider lado a lado */}
        <div className="relative flex flex-row  bg-white p-6 gap-4">
          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className={`
              grid grid-cols-1 gap-4 flex-grow overflow-auto
              ${
                isMobile
                  ? "max-h-full overflow-visible bg-transparent shadow-none"
                  : "overflow-y-auto max-h-[380px] bg-white "
              }
            `}>
            {dealers.map((dealer) => (
              <div key={dealer.id} className="bg-white cursor-pointer ">
                <ConcesionarioCard
                  onClick={() => {
                    if (map.current && dealer.coordinadas) {
                      // Usar nuestra nueva función para centrar con offset
                      centerMapOnDealer(dealer.coordinadas);
                      setSelectedDealerId(dealer.id);
                      showRoute(dealer.coordinadas);

                      // En móvil, hacer scroll hacia arriba para ver el mapa
                      if (isMobile) {
                        mapContainer.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                  isSelected={selectedDealerId === dealer.id}
                  nombre={dealer.nombre}
                  direccion={dealer.direccion}
                  telefono={dealer.telefono}
                  horario={dealer.horario}
                  email={dealer.email}
                />
              </div>
            ))}
            {/* Custom Vertical Slider (only shown in desktop) */}
          </div>
          {/* {!isMobile && (
            <div className="relative w-10 flex flex-col bg-white">
              <input
                ref={sliderRef}
                type="range"
                min={0}
                max={100}
                step={1}
                value={sliderValue}
                onChange={handleSliderChange}
                className="absolute left-[-168px] top-[180px] right-0 z-10 bg-white rotate-90 w-[360px] opacity-0"
              />
              <div className="border-l h-full ml-[9px]"/>

              <div
                ref={thumbRef}
                className="absolute left-[-14px] flex flex-row border-none rotate-90">
                <div className="border-none w-6 h-6 flex items-center justify-center rounded-l-full bg-[#05141F] disabled:opacity-50 cursor-pointer">
                  <Arrow fill="#fff" className="rotate-180" />
                </div>
                <div className="border-none w-6 h-6 flex items-center justify-center rounded-r-full bg-[#05141F] disabled:opacity-50 cursor-pointer">
                  <Arrow fill="#fff" />
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* Estilos necesarios para el mapa y popups */}
      <style jsx global>{`
        .mapboxgl-map {
          width: 100%;
          height: 100%;
        }
        .mapboxgl-canvas {
          width: 100% !important;
          height: 100% !important;
        }
        .custom-popup .mapboxgl-popup-content {
          padding: 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .custom-popup .mapboxgl-popup-close-button {
          right: 8px;
          top: 8px;
          color: #05141f;
          font-size: 16px;
        }
        .custom-popup .mapboxgl-popup-close-button:hover {
          background: none;
          color: rgba(5, 20, 31, 0.7);
        }
        .custom-popup .group:hover .group-hover\\:bg-white {
          background-color: #ffffff;
        }
        .custom-popup .group:hover .group-hover\\:w-full {
          width: 100%;
        }
        .custom-popup .group:hover .group-hover\\:fill-white {
          fill: #ffffff;
        }

        /* Hide default scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default MapView;
