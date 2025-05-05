import { useState } from "react";
import AccordeonItem from "../../Common/ui/AccordeonItem";
import SquareButton from "../../Common/ui/SquareButton";
import Separator from "../../Common/ui/Separator";
import PillButton from "../../Common/ui/PillButton";

// Data for assistance services
const assistanceServices = [
  {
    id: 1,
    title: "Traslado del vehículo",
    content: (
      <h6>
        En caso de que el vehículo designado, por sufrir un accidente o avería,
        no pudiera circular por sus propios medios o fueran necesarias grúas
        especiales, se proveerá el traslado del vehículo hasta el lugar
        designado por el asegurado y dentro de los límites especificados.
      </h6>
    ),
  },
  {
    id: 2,
    title: "Abastecimiento de combustible",
    content: (
      <h6>
        En caso de que el vehículo designado, e encuentre inmovilizado por falta
        de combustible y/o lubricante, se lo asistirá trasladándolo hasta la
        estación de servicio más cercana.
      </h6>
    ),
  },
  {
    id: 3,
    title: "Estancia por invovilización o robo del vehículo",
    content: (
      <h6>
        Cuando la reparación no pueda realizarse el día de la avería y/o
        accidente, "KIA ASSISTANCE" tomará a cargo los gastos de hotel de los
        ocupantes del vehículo.
      </h6>
    ),
  },
  {
    id: 4,
    title: "Cambio de neumáticos",
    content: (
      <h6>
        En caso de que el vehículo alcanzado por el servicio se encuentre
        inmovilizado por avería de un neumático, se auxiliará al conductor en el
        procedimiento de sustitución del neumático averiado o trasladando el
        vehículo hasta la gomería más cercana.
      </h6>
    ),
  },
  {
    id: 5,
    title: "Servicio de conductor",
    content: (
      <h6>
        En caso de imposibilidad absoluta del Asegurado para conducir el
        vehículo, por enfermedad, accidente o fallecimiento y ninguno de los
        acompañantes pudiera sustituirle con la debida habilitación, "Kia
        Assistance" proporcionará, a su propio cargo, un conductor a efectos de
        retornar con el vehículo al domicilio de residencia habitual del
        Asegurado.
      </h6>
    ),
  },
  {
    id: 6,
    title: "Traslado en ambulancia por accidente",
    content: (
      <h6>
        "Kia Assistance" operará el traslado del beneficiario y terceros
        damnificados u ocupantes del automóvil.
      </h6>
    ),
  },
  {
    id: 7,
    title: "Asistencia legal en caso de accidente",
    content: (
      <h6>
        Los asegurados podrán solicitar asesoramiento jurídico y/o
        representación limitada integral telefónica, sobre todas las cuestiones
        jurídicas que pudiera derivar de un accidente de tránsito, que involucre
        al vehículo declarado y que haya ocurrido en territorio argentino.
      </h6>
    ),
  },
];

export default function Asistencia() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="mx-auto px-4 md:px-20 py-10 text-[#05141F] flex flex-col gap-10">
      {/* Header section */}
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
        <h3 className="font-bold">Servicios de KIA Assistance</h3>

        <PillButton
          type="primary"
          size="large"
          title="Llamar a 0800-112-0935"
          onClick={() =>
            (window.location.href = "tel:0800-112-0935")
          }></PillButton>
      </div>

      {/* Accordion list of services */}
      <div className="flex flex-col gap-0">
        <Separator />
        {assistanceServices.map((service) => (
          <AccordeonItem
            key={service.id}
            sectionID={service.id}
            toggleSection={toggleSection}
            activeSection={activeSection}
            title={service.title}
            content={service.content}
          />
        ))}
        <Separator />
      </div>
    </div>
  );
}
