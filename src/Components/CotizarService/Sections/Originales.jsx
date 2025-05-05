import { useState } from "react";
import AccordeonItem from "../../Common/ui/AccordeonItem";
import Separator from "../../Common/ui/Separator";

// Fix image imports
import filtroAceite from "../../../assets/img/piezas/Aceite.webp";
import filtroAire from "../../../assets/img/piezas/Aire.webp";
import filtroCombustible from "../../../assets/img/piezas/Combustible.webp";
import filtroHabitaculo from "../../../assets/img/piezas/Habitaculo.webp";
import pastillasFreno from "../../../assets/img/piezas/Pastillas.webp";
import escobillaLimpiaParabrisa from "../../../assets/img/piezas/Escobilla.webp";

// Otros item placeholder
const OtroItemPlaceholder = ({ title }) => (
  <div className="flex flex-col items-center w-[180px] mb-8">
    <div className="w-[180px] h-[140px] bg-[#F2F5F8] rounded-md mb-2 flex items-center justify-center">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="5" fill="#D1D5DB" />
        <path
          d="M30 20V40M20 30H40"
          stroke="#05141F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <h5 className="text-center">{title}</h5>
  </div>
);

// Data for Otros section
const otrosPartsData = [
  { id: 1, title: "Cadena de distribución" },
  { id: 2, title: "Paragolpes trasero" },
  { id: 3, title: "Paragolpes delantero" },
  { id: 4, title: "Disco de embrague" },
  { id: 5, title: "Placa de embrague" },
  { id: 6, title: "Rodamiento de rueda" },
  { id: 7, title: "Brazo de suspensión" },
  { id: 8, title: "Llave inteligente" },
  { id: 9, title: "Parrilla" },
  { id: 10, title: "Semieje" },
  { id: 11, title: "Óptica" },
  { id: 12, title: "Sistema de escape" },
  { id: 13, title: "Capot" },
  { id: 14, title: "Bujías" },
  { id: 15, title: "Faro Trasero" },
  { id: 16, title: "Correa accesorios" },
];

// Data for parts
const partsData = [
  {
    id: 1,
    title: "Filtro de aceite",
    description:
      "El filtro de aceite separa las partículas contaminantes del aceite, antes de que llegue a las piezas del motor.",
    content: (
      <div>
        <p>
          El filtro de aceite separa las partículas contaminantes del aceite,
          antes de que llegue a las piezas del motor.
        </p>
        <h4 className="font-bold mt-4 mb-2">Función y diseño</h4>
        <p>
          El filtro de aceite evita que las partículas contaminantes lleguen al
          motor y generen abrasión dentro de los cilindros. Si el filtro de
          aceite no se reemplaza regularmente, puede obstruirse con
          contaminantes. Esto creará una restricción en el flujo de aceite,
          causando una caída significativa en el rendimiento del motor. Es por
          ello que el filtro de aceite es una pieza de repuesto vital que
          requiere inspecciones periódicas y/o reemplazo según el manual del
          propietario de cada modelo específico.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={filtroAceite}
            alt="Filtro de aceite"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Filtro de aire",
    description:
      "El filtro de aire separa las partículas de suciedad del aire, antes de que ingresen en el motor.",
    content: (
      <div>
        <h6>
          El filtro de aire separa las partículas de suciedad del aire, antes de
          que ingresen en el motor.
        </h6>
        <h6 className="font-bold">Función y diseño</h6>
        <h6>
          El motor requiere una mezcla correcta de aire - combustible para
          funcionar de manera eficiente. Cuando el aire ingresa al sistema de
          admisión, el filtro de aire lo filtra inmediatamente. El filtro de
          aire atrapa la suciedad en el aire, evitando que desciendan por el
          sistema de admisión y se alojen en el interior del motor acortando su
          vida útil. Es por ello que el filtro de aire es una pieza de repuesto
          vital que requiere inspecciones periódicas y/o reemplazo según el
          manual del propietario de cada modelo específico.
        </h6>
        <div className="flex justify-center mt-4">
          <img
            src={filtroAire}
            alt="Filtro de aire"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Filtro de combustible",
    description:
      "El filtro de combustible separa las partículas contaminantes del combustible, antes de ingresar al circuito de alimentación de combustible.",
    content: (
      <div>
        <p>
          El filtro de combustible separa las partículas contaminantes del
          combustible, antes de ingresar al circuito de alimentación de
          combustible.
        </p>
        <h4 className="font-bold mt-4 mb-2">Función y diseño</h4>
        <p>
          El filtro de combustible evita que las partículas contaminantes
          lleguen al motor y generen abrasión dentro de los cilindros. Si el
          filtro de combustible no se reemplaza regularmente, puede obstruirse
          con contaminantes. Esto creará una restricción en el flujo de
          combustible, causando una caída significativa en el rendimiento del
          motor. Es por ello que el filtro de combustible es una pieza de
          repuesto vital que requiere inspecciones periódicas y/o reemplazo
          según el manual del propietario de cada modelo específico.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={filtroCombustible}
            alt="Filtro de combustible"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Filtro de habitáculo",
    description:
      "El filtro de Habitáculo separa las partículas de suciedad del aire que ingresa al habitáculo a través del sistema de climatización del vehículo.",
    content: (
      <div>
        <p>
          El filtro de Habitáculo separa las partículas de suciedad del aire que
          ingresa al habitáculo a través del sistema de climatización del
          vehículo.
        </p>
        <h4 className="font-bold mt-4 mb-2">Función y diseño</h4>
        <p>
          La función del filtro de habitáculo es atrapar el polvo, el polen y
          otras partículas que ingresan al interior del habitáculo a través del
          sistema de climatización. El filtro de habitáculo es una parte vital
          que requiere inspecciones periódicas y/ o reemplazo, según el manual
          del propietario de cada modelo específico.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={filtroHabitaculo}
            alt="Filtro de habitáculo"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Pastillas de frenos",
    description:
      "El sistema de frenos es un dispositivo que permite detener el vehículo al absorber energía.",
    content: (
      <div>
        <p>
          El sistema de frenos es un dispositivo que permite detener el vehículo
          al absorber energía. Reduce la velocidad del vehículo en movimiento
          mediante la fricción. Habitualmente, la mayoría de frenos utilizan la
          fricción entre dos superficies para convertir la energía cinética en
          calor.
        </p>
        <h4 className="font-bold mt-4 mb-2">Función y diseño</h4>
        <p>
          Las pastillas de freno confeccionadas por un cuerpo de acero al cual
          se le hermana el material de fricción el cual genera la fuerza en el
          disco de freno. Cuando se acciona el pedal de freno, se aplica una
          fuerza hidráulica a las pastillas de freno creando una fricción en el
          disco de freno. De esta manera, la velocidad del vehículo se reduce
          según lo requiera el conductor. El material de fricción se desgasta
          con el tiempo a una velocidad que depende del entorno de conducción,
          las características de frenado del conductor y los kilómetros
          recorridos. Las pastillas de freno son una parte vital que requiere
          inspecciones periódicas y/o reemplazo, según el manual del propietario
          de cada modelo específico o según lo recomendado por el concesionario
          en función al uso del vehículo.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={pastillasFreno}
            alt="Pastillas de freno"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Escobilla limpia parabrisa",
    description:
      "Las escobillas limpiaparabrisas son uno de los elementos clave para una conducción segura y sin sobresaltos.",
    content: (
      <div>
        <p>
          Las escobillas limpiaparabrisas son uno de los elementos clave para
          una conducción segura y sin sobresaltos.
        </p>
        <h4 className="font-bold mt-4 mb-2">Función y diseño</h4>
        <p>
          Si las escobillas de tu vehículo no se encuentran en buen estado, los
          días lluviosos o con niebla experimentarás una peligrosa pérdida de
          visibilidad. Sin duda, vale la pena seguir el consejo de nuestros
          técnicos y llevar a cabo un correcto mantenimiento de las escobillas,
          así como sustituirlas cuando sea necesario.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={escobillaLimpiaParabrisa}
            alt="Escobilla limpia parabrisa"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Otros",
    description: "",
    content: (
      <div className="flex flex-wrap justify-center">
        {otrosPartsData.map((part) => (
          <OtroItemPlaceholder key={part.id} title={part.title} />
        ))}
      </div>
    ),
  },
];

export default function Originales() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="mx-auto px-4 md:px-20 py-10 text-[#05141F] flex flex-col gap-10">
      {/* Header section */}
      <div className="flex flex-col gap-5">
        <h3 className="font-bold">¿Por qué utilizar Piezas Originales KIA?</h3>

        <h4>
          Las piezas originales de Kia están diseñadas y fabricadas
          específicamente para su Kia. A lo largo de los años, se han realizado
          importantes inversiones en investigación y desarrollo para estudiar el
          diseño, la selección de materiales y la construcción interna de las
          piezas originales de Kia.
          <br />
          Estas piezas de calidad de producción que se ajustan por primera vez
          se prueban en diversas condiciones extremas simuladas para garantizar
          la seguridad y confiabilidad a largo plazo.
          <br />
          <span className="text-kia-red">
            Para su tranquilidad, siempre instale en su vehículo piezas
            originales de Kia.
          </span>
        </h4>
      </div>

      {/* Accordion list of parts */}
      <div className="flex flex-col gap-0">
        <Separator />
        {partsData.map((part) => (
          <AccordeonItem
            key={part.id}
            sectionID={part.id}
            toggleSection={toggleSection}
            activeSection={activeSection}
            title={part.title}
            content={part.content}
          />
        ))}
        <Separator />
      </div>
    </div>
  );
}
