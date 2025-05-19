import { useState } from "react";
import sections from "../Data/cookieSections";
import PillButton from "../Components/Common/ui/PillButton";
import AccordeonItem from "../Components/Common/ui/AccordeonItem";
import Separator from "../Components/Common/ui/Separator";
function Cookies() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    setActiveSection(activeSection === sectionNumber ? null : sectionNumber);
  };

  const handleShowCookieModal = () => {
    // Accedemos a los objetos de OneTrust que deberían estar disponibles globalmente
    if (
      window.OneTrust &&
      typeof window.OneTrust.ToggleInfoDisplay === "function"
    ) {
      window.OneTrust.ToggleInfoDisplay();
    } else if (
      window.Optanon &&
      typeof window.Optanon.ToggleInfoDisplay === "function"
    ) {
      window.Optanon.ToggleInfoDisplay();
    } else if (typeof window.ot_showCookieSettings === "function") {
      window.ot_showCookieSettings();
    } else {
      console.error("No se pudo encontrar la API de OneTrust");
    }
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

        {/* Accordion sections */}
        <div className="mb-10">
          <Separator />
          {sections.map((section) => (
            <AccordeonItem
              key={section.id}
              sectionID={section.id}
              toggleSection={toggleSection}
              activeSection={activeSection}
              title={section.title}
              content={section.content}
            />
          ))}
          <Separator />
        </div>

{/*         <PillButton
          size="large"
          title="Cambiar configuración de Cookies"
          onClick={handleShowCookieModal}
        /> */}
      </div>
    </div>
  );
}

export default Cookies;
