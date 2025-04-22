import { useState } from "react";
import Arrow from "../Components/Icons/Arrow";
import sections from "../Data/cookieSections";
import CookieModal from "../Components/Cookies/CookieModal";
import RoundedButton from "../Components/Common/ui/RoundedButton";
function Cookies() {
  const [activeSection, setActiveSection] = useState(null);
  const [showCookieModal, setShowCookieModal] = useState(false);

  const toggleSection = (sectionNumber) => {
    setActiveSection(activeSection === sectionNumber ? null : sectionNumber);
  };

  const handleShowCookieModal = () => {
    setShowCookieModal(true);
  };

  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
  };

  const handleAcceptAll = () => {
    // Handle accept all cookies logic here
    setShowCookieModal(false);
  };

  const handleRejectAll = () => {
    // Handle reject all cookies logic here
    setShowCookieModal(false);
  };

  return (
    <div className="w-full mx-auto bg-white text-[#05141F] pt-[56px] md:pt-[75px]">
      <div className="px-4 md:px-20 py-10">
        {/* Header */}
        <h1 className=" font-bold font-kia mb-2.5">Política de cookies</h1>
        <div className="h-0.5 w-10 bg-[#05141F] mb-5"></div>

        {/* Main content */}
        <div className=" font-normal mb-8 md:mb-10">
          <h4>
            Este sitio web www.kia.com.ar es responsabilidad de KIA ARGENTINA
            S.A., con CUIT 30-70753507-1 (en adelante, "la Empresa"), con
            dirección comercial en Av. Sucre 1932, Beccar, Buenos Aires,
            Argentina, CP 1643 y dirección de correo electrónico de privacidad
            privacy.ar@astara.com.ar. En consecuencia, el uso de cookies está
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
        <div className="self-stretch h-0 outline outline-[1px] outline-[#05141F]" />

        {/* Accordion sections */}
        <div className="border-t border-[#05141F]">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`border-b ${
                section.id === 6
                  ? "border-[#37434C] border-b-[2.5px]"
                  : "border-gray-300"
              }`}>
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-start w-full p-4 md:py-[22px] md:px-[25px]  text-left focus:outline-none gap-[15px]">
                <Arrow
                  fill="#05141F"
                  className={`text-[#05141F] ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`}
                />
                <h4 className="text-[18px] font-semibold flex flex-row">
                  <span className="mr-2 text-[#05141F]">{section.id}.</span>
                  {section.title}
                </h4>
              </button>
              {activeSection === section.id &&
                (section.id === 2 ? (
                  <div className="text-[#37434C]">{section.content}</div>
                ) : (
                  <div className={`px-9 py-4 md:px-[50px] md:py-[22px]`}>
                    {section.content}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <RoundedButton
          title="Cambiar configuración de Cookies"
          onClick={handleShowCookieModal}
        />
      </div>

      {/* Cookie Modal */}
      <CookieModal
        isOpen={showCookieModal}
        onClose={handleCloseCookieModal}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
      />
    </div>
  );
}

export default Cookies;
