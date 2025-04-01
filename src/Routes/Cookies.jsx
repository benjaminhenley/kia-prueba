import { useState } from "react";
import Arrow from "../Components/Icons/Arrow";
import sections from "../Data/cookieSections";

function Cookies() {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (sectionNumber) => {
    setActiveSection(activeSection === sectionNumber ? null : sectionNumber);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white pt-[56px]">
      <div className="px-5 md:px-20 py-10">
        {/* Header */}
        <h1 className="text-gray-900 font-bold font-kia mb-2.5">
          Política de cookies
        </h1>
        <div className="h-0.5 w-10 bg-gray-900 mb-5"></div>

        {/* Main content */}
        <div className="text-gray-900 font-normal mb-10">
          <h4>
            Este sitio web www.kia.com.ar es responsabilidad de KIA ARGENTINA
            S.A., con CUIT 30-70753507-1 (en adelante, "la Empresa"), con
            dirección comercial en Av. Sucre 1932, Beccar, Buenos Aires,
            Argentina, CP 1643 y dirección de correo electrónico de privacidad
            privacy.ar@astara.com. En consecuencia, el uso de cookies está
            sujeto a la presente "Política de Cookies", que ha sido elaborada
            con el objeto de informar a los Usuarios de los diferentes usos que
            se llevan a cabo en estos dispositivos y podrán consentir en su
            tratamiento de forma informada, de acuerdo con lo establecido en la
            legislación vigente.
          </h4>
          <h4 className="mb-4">
            El responsable ha desarrollado esta Política de Cookies con el
            objeto de ampliar y detallar la información reflejada en el banner
            de información inicial. Por último, aprovechamos para recordarle
            que, en todo caso, el Usuario podrá en todo momento modificar la
            configuración de su navegador de acuerdo con sus preferencias.
          </h4>
        </div>
        <div className="self-stretch h-0 outline outline-[1px] outline-gray-900" />

        {/* Accordion sections */}
        <div className="border-t border-gray-300">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-gray-300">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-start w-full py-[22px] px-[25px] text-left focus:outline-none gap-[15px]">
                <Arrow
                  className={`transition-transform h-[25px] w-[25px] ${
                    activeSection === section.id ? "" : "-rotate-90"
                  }`}
                />
                <h4 className="text-gray-900 font-semibold">
                  {section.id}. {section.title}
                </h4>
              </button>
              {activeSection === section.id && (
                <div className={`px-[50px] py-[22px]`}>{section.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Configuration button */}
        <div className="mt-10 flex justify-start">
          <button className="border border-[#05141F] rounded-full py-[3px] px-[3px] pl-5 gap-[15px] text-[#05141F] font-medium flex items-center">
            <h4 className="font-bold">Cambiar configuración de Cookies</h4>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                y="0.47583"
                width="32"
                height="32.0484"
                rx="16"
                fill="#05141F"
              />
              <path
                d="M19.9071 16.217C19.9652 16.2904 20 16.389 20 16.5001C20 16.6113 19.9652 16.7099 19.9071 16.7833L13.7934 24.5122H12.0017L18.3393 16.5001L12 8.48804H13.7918L19.9071 16.217Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
