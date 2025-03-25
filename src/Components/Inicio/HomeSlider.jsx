import React, { useState, useEffect } from "react";
import { homeSlider } from "../../Data/inicio";
import { Link } from "react-router-dom";

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
    <div className="relative w-full h-auto md:h-[calc(100vh-25px)] overflow-hidden">
      {/* Contenedor de imagen para móvil con 100vh */}
      <div className="relative w-full h-full">
        {/* Imagen Mobile - Ahora con 100vh */}
        <div className="block md:hidden relative w-full h-screen">
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
        <div className="absolute px-1 pb-3 inset-0 flex flex-col items-center justify-end text-white z-10">
          <h1
            className="text-[2rem] md:text-[2.25rem] font-bold  animate-fade-in"
            style={{ animation: "fadeIn 1s ease-in" }}>
            {slide.titulo}
          </h1>
          <p className="text-[1rem] md:text-[1.5rem] py-1">{slide.subtitulo}</p>
          {slide.esExterna ? (
            <a
              href={slide.linkBoton}
              target={slide.target}
              rel="noopener noreferrer"
              className="group inline-block">
              <button className="relative bg-white font-bold text-[0.875rem] text-midnight-black py-5 px-10 hover:bg-[#37434C] hover:text-white transition mt-5 mb-10 inline-block">
                <span className="relative">
                  {slide.textoBoton}
                  <div className="absolute left-0 bottom-[-2px] group-hover:w-full h-[1px] bg-white transition-all duration-300 ease-in-out origin-left"></div>
                </span>
              </button>
            </a>
          ) : (
            <Link to={slide.linkBoton} className="group inline-block">
              <button className="relative bg-white font-bold text-[0.875rem] text-midnight-black py-5 px-10 hover:bg-[#37434C] hover:text-white transition mt-5 mb-10 inline-block">
                <span className="relative">
                  {slide.textoBoton}
                  <div className="absolute left-0 bottom-[-2px] group-hover:w-full h-[1px] bg-white transition-all duration-300 ease-in-out origin-left"></div>
                </span>
              </button>
            </Link>
          )}

          {/* Indicatores Dots */}
          <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-6">
          {homeSlider.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 sm:w-10 h-[4px] transition-all duration-300 ease-in-out ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;