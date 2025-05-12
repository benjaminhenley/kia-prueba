import React, { useState, useEffect } from "react";
import CustomStepper from "../Components/Common/ui/CustomStepper";
import RadioButton from "../Components/Common/ui/RadioButton";
import todos from "../assets/img/logos/todos.png";
import autos from "../assets/img/logos/auto.png";
import suv from "../assets/img/logos/suv.png";
import utilitarios from "../assets/img/logos/utilitarios.png";
import { PROVINCES_WITH_ALL, PROVINCES } from "../Data/provinces";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import PillButton from "../Components/Common/ui/PillButton";
import { CAR_DEALERS_BY_PROVINCE } from "../Data/carDealers";
import FormLabel from "../Components/Common/forms/FormLabel";
import TextField from "../Components/Common/forms/TextField";
import {
  MONTHS,
  generateDaysOptions,
  generateYearsOptions,
} from "../Data/months";
import Separator from "../Components/Common/ui/Separator";
import SquareButton from "../Components/Common/ui/SquareButton";

const categories = [
  { id: "todos", name: "Todos", icon: todos },
  { id: "autos", name: "Autos", icon: autos },
  { id: "suv", name: "SUV", icon: suv },
  { id: "utilitarios", name: "Utilitarios", icon: utilitarios },
];

const Precios = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [fuelType, setFuelType] = useState("ambos");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDealers, setSelectedDealers] = useState(
    CAR_DEALERS_BY_PROVINCE
  );
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0].value);
  const [selectedDay, setSelectedDay] = useState(
    generateDaysOptions()[0].value
  );
  const [selectedYear, setSelectedYear] = useState(
    generateYearsOptions()[0].value
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (province) => {
    console.log(selectedProvince);
    const filteredDealers = CAR_DEALERS_BY_PROVINCE.filter(
      (dealer) => dealer.province === selectedProvince
    );

    setSelectedDealers(filteredDealers);
  };

  return (
    <div className="mx-4 md:mx-20 mt-[55px] md:mt-[80px]">
      <div className="flex flex-col gap-5 py-10">
        <div className="flex flex-col gap-2.5">
          <h1 className="font-bold">Solicitar Test Drive</h1>
          <div className="h-[1.5px] md:w-12 md:h-[2px] w-8 bg-[#05141F]"></div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <CustomStepper
              onClick={() => setSelectedStep(1)}
              selected={selectedStep === 1}
              step="01"
              title="Seleccioná el vehículo"
              description="Consultá por el modelo que andás buscando"
            />
            {/* Vehicle Category Selection */}
            {selectedStep === 1 && (
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
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="mb-2"
                      />
                      <h6 className="font-normal text-[#05141F] text-center">
                        {category.name}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <CustomStepper
              onClick={() => setSelectedStep(2)}
              selected={selectedStep === 2}
              step="02"
              title="Elegí un concesionario"
              description="Ingresá el nombre de un concesionario o lugar geográfico"
            />
            {selectedStep === 2 && (
              <div className="flex flex-col mx-10">
                <div className="flex flex-row gap-20 py-10 w-full">
                  <div className="flex flex-row gap-5 items-center w-full">
                    <FormDropdown
                      options={PROVINCES_WITH_ALL}
                      placeholder="Seleccionar provincia"
                      className="w-full max-w-[665px]"
                      onChange={(e) => console.log(e.target)}
                    />
                    <PillButton
                      type="secondary"
                      label="Buscar"
                      title="Buscar"
                      onClick={() => handleSubmit(selectedProvince)}
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <h6>Resultados:</h6>
                    <h6 className="font-bold">
                      {selectedDealers.length} concesionarios encontrados
                    </h6>
                  </div>
                </div>

                <div>
                  <table className="w-full border border-[#CDD0D2] overflow-x-auto">
                    <thead className="bg-[#05141F]">
                      <tr>
                        <th
                          className={`font-bold px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-1/3`}>
                          <h4 className="font-bold">Concesionario</h4>
                        </th>
                        <th
                          className={`px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-1/3`}>
                          <h4 className="font-bold">Dirección</h4>
                        </th>
                        <th
                          className={`px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-1/3`}>
                          <h4 className="font-bold">Horario de atención</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDealers.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-[#E1E3E4]" : "bg-[#F5F6F6]"
                          }>
                          <td className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F]">
                            <h6 className="font-bold">{row.label}</h6>
                          </td>
                          <td className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F]">
                            <h6>{row.direccion}</h6>
                          </td>
                          <td className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F]">
                            <h6>{row.horariosDeAtencion}</h6>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <CustomStepper
              onClick={() => setSelectedStep(3)}
              selected={selectedStep === 3}
              step="02"
              title="Elegí un concesionario"
              description="Ingresá el nombre de un concesionario o lugar geográfico"
            />
            {/* STEP #3 */}
            <>
              <div className="self-stretch md:px-8 py-5 md:p-6 flex flex-col gap-5">
                <Separator />
                <div className="flex flex-col gap-5 px-6">
                  {selectedStep === 3 && (
                    <>
                      {/* Name Field */}
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <FormLabel text="Nombre completo" />
                        <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                          <TextField
                            placeholder="Nombre"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleFormChange}
                          />
                          <TextField
                            placeholder="Apellido"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>

                      {/* Contact Field */}
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <FormLabel text="Contacto" />
                        <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                          <TextField
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                          />
                          <TextField
                            placeholder="Teléfono"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>

                      {/* Direction Fields */}
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <FormLabel text="Dirección" />
                        <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                          <TextField
                            placeholder="Calle"
                            name="street"
                            value={formData.street}
                            onChange={handleFormChange}
                          />
                          <TextField
                            placeholder="Número"
                            name="streetNumber"
                            value={formData.streetNumber}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:gap-5">
                        <div className="md:w-52"></div>
                        <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                          <FormDropdown
                            placeholder="Provincia"
                            name="province"
                            value={formData.province}
                            onChange={handleFormChange}
                            options={PROVINCES}
                          />
                          <TextField
                            placeholder="Localidad"
                            name="city"
                            value={formData.city}
                            onChange={handleFormChange}
                          />
                          <FormDropdown
                            placeholder="País"
                            name="country"
                            value={formData.country}
                            onChange={handleFormChange}
                            options={[
                              { value: "argentina", label: "Argentina" },
                            ]}
                          />
                        </div>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex flex-col-reverse xs:flex-row justify-end gap-2.5">
                        <SquareButton type="secondary" onClick={() => {}}>
                          Cancelar
                        </SquareButton>
                        <SquareButton type="primary" onClick={() => {}}>
                          Enviar
                        </SquareButton>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precios;
