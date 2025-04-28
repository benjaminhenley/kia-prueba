import React, { useState } from "react";
import {
  serviceIcons,
  serviceBenefits,
} from "../../Common/Icons/CotizaTuService";
import RadioButton from "../../Common/ui/RadioButton";
import RoundedButton from "../../Common/ui/RoundedButton";
import CustomStepper from "../../Common/ui/CustomStepper";
import CAR_MODELS from "../../../Data/models";

const Cotiza = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedModel, setSelectedModel] = useState(null);
  const [fuelType, setFuelType] = useState("ambos");

  // Define car variants to display
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
      <CustomStepper
        selected={selectedStep === 1}
        step="01"
        title="Seleccioná el vehículo"
        description="Consultá por el modelo que andás buscando"
      />

      {/* Vehicle Category Selection */}
      <div className="mb-8">
        <div className="text-sm mb-2 font-medium">Categoría:</div>
        <div className="flex gap-4 mb-6">
          <RadioButton
            checked={selectedCategory === "todos"}
            onChange={() => setSelectedCategory("todos")}
            id="todos"
            label="Todos"
          />
          <RadioButton
            checked={selectedCategory === "autos"}
            onChange={() => setSelectedCategory("autos")}
            id="autos"
            label="Autos"
          />
          <RadioButton
            checked={selectedCategory === "suv"}
            onChange={() => setSelectedCategory("suv")}
            id="suv"
            label="SUV"
          />
          <RadioButton
            checked={selectedCategory === "utilitarios"}
            onChange={() => setSelectedCategory("utilitarios")}
            id="utilitarios"
            label="Utilitarios"
          />
        </div>

        <div className="text-sm mb-2 font-medium">Combustible:</div>
        <div className="flex gap-4 mb-8">
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
                  className="w-full h-auto"
                />
                <div className="mt-2 font-medium">{car.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomStepper
        selected={selectedStep === 2}
        step="02"
        title="Sobre el service"
        description="Te contamos con qué contás en el service del vehículo que has seleccionado"
      />
    </div>
  );
};

export default Cotiza;
