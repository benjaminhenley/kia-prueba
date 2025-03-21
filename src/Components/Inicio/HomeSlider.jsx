import React, { useState, useEffect } from "react";
import { homeSlider } from "../../Data/inicio";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotation functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlider.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para cambiar manualmente la diapositiva
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const slide = homeSlider[currentSlide];

  return (
    <div className="relative w-full h-auto md:h-screen overflow-hidden">
      {/* Contenedor de imagen para móvil con proporción definida */}
      <div className="relative w-full h-full">
        {/* Imagen Mobile */}
        <div className="block md:hidden relative w-full aspect-[3/4]">
          <img
            src={slide.imagenMobile}
            alt={slide.titulo}
            className="absolute w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>

        {/* Imagen Desktop */}
        <img
          src={slide.imagen}
          alt={slide.titulo}
          className="hidden md:block w-full h-full object-cover transition-opacity duration-1000"
        />
        {/* Contenido - Ahora absolutamente posicionado tanto en móvil como en desktop */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-white z-10 py-8 md:mb-4">
          <h1
            className="text-2xl md:text-4xl font-bold mb-1 animate-fade-in"
            style={{ animation: "fadeIn 1s ease-in" }}>
            {slide.titulo}
          </h1>
          <p className="text-base md:text-lg mb-4 md:mb-8">{slide.subtitulo}</p>
          <a
            href={slide.linkBoton}
            className="bg-white text-black px-6 py-2 text-sm font-medium rounded hover:bg-gray-100 transition mb-6 md:mb-12">
            {slide.textoBoton}
          </a>

          {/* Indicatores Dots */}
          <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-6">
            {homeSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentSlide ? "40px" : "30px",
                  height: "4px",
                  backgroundColor:
                    index === currentSlide
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease",
                }}
                className="rounded-sm"
                aria-label={`Go to slide ${index + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
