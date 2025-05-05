import React, { useState } from "react";
import { renderIcon } from "../../Common/Icons/CotizaTuService";
import RadioButton from "../../Common/ui/RadioButton";
import PillButton from "../../Common/ui/PillButton";
import CustomStepper from "../../Common/ui/CustomStepper";
import CAR_MODELS from "../../../Data/models";
import todos from "../../../assets/img/logos/todos.png";
import autos from "../../../assets/img/logos/auto.png";
import suv from "../../../assets/img/logos/suv.png";
import utilitarios from "../../../assets/img/logos/utilitarios.png";
import { serviceSections } from "../../../Data/serviceSections";
import AccordeonItem from "../../Common/ui/AccordeonItem";

export const serviceBenefits = [
  {
    id: "seguridad",
    title: "Te damos seguridad por contar con profesionales especializados.",
    icon: renderIcon("seguridad"),
  },
  {
    id: "equipamiento",
    title: "Tenemos el equipamiento con la tecnología necesaria para tu auto.",
    icon: renderIcon("equipamiento"),
  },
  {
    id: "mantenimiento",
    title:
      "Contamos con un plan de mantenimiento personalizado para tu modelo.",
    icon: renderIcon("mantenimiento"),
  },
  {
    id: "repuestos",
    title:
      "Nuestros repuestos son originales para brindarte la confianza y durabilidad que estás buscando.",
    icon: renderIcon("repuestos"),
  },
  {
    id: "garantia",
    title:
      "Es necesario cumplir con los planes de mantenimiento para mantener la garantía de tu auto.",
    icon: renderIcon("garantia"),
  },
  {
    id: "asistencia",
    title:
      "Contamos con Kia Assistance, un programa de asistencia 24/7 en el país y países limítrofes.",
    icon: renderIcon("asistencia"),
  },
];

const carVariants = [
  { name: "K3 Cross EX", baseModel: "All-new K3 Cross" },
  { name: "K3 Cross GT-Line", baseModel: "All-new K3 Cross" },
  { name: "K3 Sedán EX", baseModel: "All-new K3 Sedán" },
  { name: "K3 Sedán GT-Line", baseModel: "All-new K3 Sedán" },
  { name: "Cerato SX", baseModel: "Cerato" },
  { name: "Seltos LX", baseModel: "Seltos" },
  { name: "Sportage EX", baseModel: "Sportage" },
  { name: "Sportage X-Line", baseModel: "Sportage" },
  { name: "Carnival EX", baseModel: "Carnival" },
  { name: "Carnival SX", baseModel: "Carnival" },
  { name: "K2500 CS", baseModel: "K2500" },
];

const categories = [
  { id: "todos", name: "Todos", icon: todos },
  { id: "autos", name: "Autos", icon: autos },
  { id: "suv", name: "SUV", icon: suv },
  { id: "utilitarios", name: "Utilitarios", icon: utilitarios },
];

const CotizaTuService = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [activeServiceSection, setActiveServiceSection] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [fuelType, setFuelType] = useState("ambos");

  return (
    <div className=" mx-auto px-4 md:px-20 py-10 text-[#05141F]">
      {/* Introduction Text */}
      <h4 className="">
        Tu Kia es una parte importante de tu vida; ¡la que te lleva a todas
        partes! Realizar el mantenimiento recomendado en un taller autorizado
        por Kia te garantiza el rendimiento óptimo de tu coche año tras año.{" "}
        <br />
        La revisión técnica aumenta la vida y el rendimiento del vehículo
        realizando las revisiones recomendadas. Hemos fabricado tu Kia y sabes
        que en un concesionario Kia autorizado está en buenas manos. Además,
        nuestros técnicos expertos solo usan piezas originales Kia en revisiones
        y mantenimiento.
      </h4>

      {/* Benefits Section - First Row */}
      <div className="grid grid-rows-2 grid-cols-3 py-5 place-items-center w-fit mx-auto">
        {serviceBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center text-center p-6 w-fit max-w-[350px]">
            <div className="mb-2 ">{benefit.icon}</div>
            <h5 className="mb-2 text-kia-midnight-black">{benefit.title}</h5>
          </div>
        ))}
      </div>

      {/* Step 1: Vehicle Selection */}
      <details open className="open">
        <summary style={{ listStyle: "none" }}>
          <CustomStepper
            onClick={() => setSelectedStep(1)}
            selected={selectedStep === 1}
            step="01"
            title="Seleccioná el vehículo"
            description="Consultá por el modelo que andás buscando"
          />
        </summary>

        {/* Vehicle Category Selection */}
        <div className="flex flex-row gap-20 p-8">
          <div className=" flex flex-row gap-5">
            <h5 className=" mb-2">Categoría:</h5>
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col w-[144px] h-[96px] p-6 relative">
                <RadioButton
                  className="absolute left-3 top-3"
                  checked={selectedCategory === category.id}
                  onChange={() => setSelectedCategory(category.id)}
                  id={category.id}
                />
                <img src={category.icon} alt={category.name} className="mb-2" />
                <h6 className="font-normal text-[#05141F] text-center">
                  {category.name}
                </h6>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h5 className="">Combustible:</h5>
            <div className="flex gap-5  h-[86px]">
              <RadioButton
                checked={fuelType === "ambos"}
                onChange={() => setFuelType("ambos")}
                id="ambos"
                label="Ambos"
              />
              <RadioButton
                checked={fuelType === "nafta"}
                onChange={() => setFuelType("nafta")}
                id="nafta"
                label="Nafta"
              />
              <RadioButton
                checked={fuelType === "diesel"}
                onChange={() => setFuelType("diesel")}
                id="diesel"
                label="Diesel"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-fit mx-auto">
            {carVariants.map((car) => (
              <div
                key={car.name}
                className={`bg-gray-100 p-4 text-center cursor-pointer max-w-[250px] ${
                  selectedModel === car.name ? "border-2 border-red-600" : ""
                }`}
                onClick={() => setSelectedModel(car.name)}>
                <img
                  src={
                    CAR_MODELS.find((model) => model.name === car.baseModel)
                      ?.image
                  }
                  alt={car.name}
                  className="w-full h-auto scale-x-[-1]"
                />
                <div className="mt-2 font-medium">{car.name}</div>
              </div>
            ))}
          </div>
        </div>
      </details>

      <details>
        <summary style={{ listStyle: "none" }}>
          <CustomStepper
            onClick={() => setSelectedStep(2)}
            selected={selectedStep === 2}
            step="02"
            title="Sobre el service"
            description="Te contamos con qué contás en el service del vehículo que has seleccionado"
          />
        </summary>

        <div className="p-10 flex flex-col gap-5">
          <div className="flex justify-between items-center flex-row">
            <h4 className="text-[#05141F] font-bold">Servicio de nafta</h4>

            <PillButton
              title="Solicitá tu service"
              type="primary"
              size="small"
            />
          </div>
          <div>
            <h6 className="text-[#05141F]">
              Incluye, en todos los servicios, reemplazo de aceite sintético
              puma synthetic 5w-40, filtro de aceite, filtro de aire, y las
              operaciones de control del vehículo especificadas en el manual de
              mantenimiento. Además los precios incluyen en los servicios del
              3er año ó 45 y 6to año ó 90 sustitución de filtro de combustible
              en motores nafta. El precio de los servicios no incluye
              sustitución de filtro de habitáculo, líquido de freno/embrague,
              líquido de enfriamiento, reemplazo de bujías de encendido y
              correas auxiliares, los cuales deberán ser realizados según las
              especificaciones de kilometraje o tiempo del manual de
              mantenimiento. Alineación y balanceo de ruedas no se encuentra
              incluido en los servicios. Servicio sugerido para los servicios de
              mantenimiento de los vehículos enunciados precedentemente,
              realizados por los concesionarios oficiales kia de la república
              argentina. No incluye reparaciones ni trabajos adicionales, ajenos
              al mencionado plan de mantenimiento.
            </h6>
          </div>
          {/* Accordion sections */}
          <div className="border-t border-[#05141F]">
            {serviceSections.map((section) => (
              <AccordeonItem
                key={section.id}
                sectionID={section.id}
                toggleSection={() => setActiveServiceSection(section.id)}
                activeSection={activeServiceSection}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};

export default CotizaTuService;
