import React, { useState, useEffect } from "react";
import { homeSlider } from "../../Data/inicio";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); // Estado para controlar la opacidad

  // Auto rotation functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Inicia el fade out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % homeSlider.length);
        setFade(true); // Inicia el fade in
      }, 300); // Duración del fade out
    }, 7000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para cambiar manualmente la diapositiva
  const goToSlide = (slideIndex) => {
    setFade(false); // Inicia el fade out
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setFade(true); // Inicia el fade in
    }, 300); // Duración del fade out
  };

  const slide = homeSlider[currentSlide];

  return (
    <div className="relative w-full h-[calc(100dvh-1rem)] overflow-hidden">
      {/* Contenedor de imagen para móvil con proporción definida */}
      <div className="relative w-full h-full">
        {/* Imagen Mobile - Ahora con 100vh */}
        <img
          src={slide.imagenMobile}
          alt={slide.titulo}
          className={`block lg:hidden relative absolute w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Imagen Desktop */}
        <img
          src={slide.imagen}
          alt={slide.titulo}
          className={`hidden lg:block w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Contenido - Ahora absolutamente posicionado tanto en móvil como en desktop */}
        <div className="absolute px-1 pb-3 inset-0 flex flex-col items-center justify-end text-white z-10">
          <h1
            className="text-[2rem] xl:text-[2.25rem] 2xl:text-[4rem] win:text-[2rem] font-bold  animate-fade-in"
            style={{ animation: "fadeIn 1s ease-in" }}>
            {slide.titulo}
          </h1>
          <p className="text-[1rem] py-1 xl:text-[1.5rem] 2xl:text-[2.5rem] 2xl:py-3 win:text-[1rem] win:py-1">{slide.subtitulo}</p>
          {slide.esExterna ? (
            <a
              href={slide.linkBoton}
              target={slide.target}
              rel="noopener noreferrer"
              className="group mt-5 mb-10 lg:mt-3 lg:mb-6 xl:mt-5 xl:mb-10 win:mt-3 win:mb-5 inline-block">
              <div className="relative bg-white font-bold text-[0.875rem] text-midnight-black py-5 px-10 hover:bg-[#37434C] hover:text-white transition">
                <span className="relative block">
                  {slide.textoBoton}
                  <div className="absolute left-0 bottom-[-2px] group-hover:w-full h-[1px] bg-white transition-all duration-300 ease-in-out"></div>
                </span>
              </div>
            </a>
          ) : (
            <Link
              to={slide.linkBoton}
              className="group mt-5 mb-10 lg:mt-3 lg:mb-6 xl:mt-5 xl:mb-10 win:mt-3 win:mb-5 inline-block">
              <div className="relative bg-white font-bold text-[0.875rem] text-midnight-black py-5 px-10 hover:bg-[#37434C] hover:text-white transition">
                <span className="relative block">
                  {slide.textoBoton}
                  <div className="absolute left-0 bottom-[-2px] group-hover:w-full h-[1px] group-hover:bg-white transition-all duration-300 ease-in-out"></div>
                </span>
              </div>
            </Link>
          )}

          {/* Indicatores Dots */}
          <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-6">
            {homeSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 sm:w-10 h-[4px] transition-all duration-300 ease-in-out ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
