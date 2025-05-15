import React, { useState, useEffect } from "react";
import CustomStepper from "../Components/Common/ui/CustomStepper";
import RadioButton from "../Components/Common/ui/RadioButton";
import todos from "../assets/img/logos/todos.png";
import autos from "../assets/img/logos/auto.png";
import suv from "../assets/img/logos/suv.png";
import utilitarios from "../assets/img/logos/utilitarios.png";
import { PROVINCES, PROVINCES_TEST_DRIVE } from "../Data/provinces";
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
import CAR_MODELS from "../Data/models";
import SuccessMessage from "../Components/Common/ui/SuccessMessage";
import ExecuteRecaptcha from "../Components/Common/captcha/ExecuteRecaptcha";
import RecaptchaLoader from "../Components/Common/captcha/RecaptchaLoader";
import { initialFormDataTestDrive } from "../Data/initialFormsData";
import kiaApiCall from "../utils/apiCall";
import Arrow from "../Components/Common/Icons/Arrow";

const ALL_CAR_MODELS = [
  { id: 24, name: "K3 Cross", category: "suv" },
  { id: 25, name: "K3 Sedán", category: "autos" },
];

const categories = [
  { id: "todos", name: "Todos", icon: todos },
  { id: "autos", name: "Autos", icon: autos },
  { id: "suv", name: "SUV", icon: suv },
  { id: "utilitarios", name: "Utilitarios", icon: utilitarios },
];

const CarCard = ({ car, onClick, selected }) => (
  <div
    id={car.name}
    className={`bg-[#F8F8F8] border border-[#CDD0D2] p-4 text-center cursor-pointer md:max-w-[250px] w-full`}
    onClick={onClick}>
    <img
      src={CAR_MODELS.find((model) => model.id === car.id)?.image}
      alt={car.name}
      className="w-full h-auto "
    />
    <div className="mt-2 font-medium">{car.name}</div>
  </div>
);

const CarCardStepper = ({ car, step }) => (
  <div id={car.name} className={`bg-transparent text-center cursor-pointer`}>
    <img
      src={CAR_MODELS.find((model) => model.id === car.id)?.image}
      alt={car.name}
      className="w-auto scale-x-[-1]  md:h-[61px] h-[22px]"
    />
    <h6
      className={`md:mt-2 font-bold ${
        step === 1 ? "text-white" : "text-[#05141F]"
      }`}>
      {car.name}
    </h6>
  </div>
);

const DealerCard = ({ dealer }) => (
  <div
    id={dealer.id}
    className={`bg-[#CDD0D2] text-center cursor-pointer p-4 gap-2.5 flex flex-row items-center max-h-10 md:max-h-auto`}>
    <RadioButton checked={true} />
    <h6 className={`font-medium text-[#37434C]`}>{dealer.label}</h6>
  </div>
);

const TestDrive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [selectedModel, setSelectedModel] = useState(false);
  const [carModelElement, setCarModelElement] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState(initialFormDataTestDrive);
  const [selectedDealers, setSelectedDealers] = useState(
    CAR_DEALERS_BY_PROVINCE
  );
  const [carCards, setCarCards] = useState(ALL_CAR_MODELS);

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "street",
    "streetNumber",
    "province",
    "city",
    "country",
    "car",
    "dealer",
  ];

  const validateForm = () =>
    requiredFields.every((field) => formData[field] && formData[field] !== "");

  useEffect(() => {
    const valid = validateForm();
    setIsValid(valid);
  }, [formData]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchProvince = () => {
    const filteredDealers = CAR_DEALERS_BY_PROVINCE.filter(
      (dealer) => dealer.province == selectedProvince.label
    );

    setSelectedDealers(filteredDealers);
  };

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
  };

  useEffect(() => {
    if (selectedCategory !== "todos") {
      setCarCards(
        ALL_CAR_MODELS.filter((car) => car.category === selectedCategory)
      );
    } else {
      setCarCards(ALL_CAR_MODELS);
    }
  }, [selectedCategory]);

  const handleCarSelect = (car) => {
    setFormData((prev) => ({
      ...prev,
      car: car.id,
    }));
    setSelectedModel(car.name);
    setCarModelElement(car);

    setSelectedStep(2);
  };

  const handleDealerSelect = (dealer) => {
    setFormData((prev) => ({
      ...prev,
      dealer: dealer.id,
    }));
    setSelectedDealer(dealer);
    setSelectedStep(3);
  };

  const submitForm = () => {
    try {
      const token = ExecuteRecaptcha();
      setRecaptchaToken(token);

      kiaApiCall(formData, "kiaweb: Test-drive");
      resetForm();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormDataTestDrive);
    setRecaptchaToken(null);
    setSelectedDealer(null);
    setSelectedModel(false);
    setCarModelElement(null);
    setIsValid(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <RecaptchaLoader />
      <div className="mx-4 md:mx-20 mt-[55px] md:mt-[80px]">
        <div className="flex flex-col gap-5 md:gap-10 py-10">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-bold">Solicitar Test Drive</h1>
            <div className="h-[1.5px] md:w-12 md:h-[2px] w-8 bg-[#05141F]"></div>
          </div>

          {isSubmitted ? (
            <SuccessMessage
              message="Muchas gracias por interesarte en nuestros servicios. Vamos a estar contactándolo a la brevedad."
              buttonText="Deseo solicitar otro Test Drive"
              firstName={formData.firstName}
              onReset={() => setIsSubmitted(false)}
              onHome={"goHome"}
            />
          ) : (
            <div className="flex flex-col gap-5">
              {/* STEP #1 */}
              <div className="flex flex-col">
                <CustomStepper
                  checked={selectedModel ? true : false}
                  items={
                    carModelElement ? (
                      <CarCardStepper
                        step={selectedStep}
                        key={carModelElement.name}
                        car={carModelElement}
                        onClick={() => handleCarSelect(carModelElement)}
                      />
                    ) : null
                  }
                  onClick={() => setSelectedStep(1)}
                  selected={selectedStep === 1}
                  step="01"
                  title="Seleccioná el vehículo"
                  description="Consultá por el modelo que andás buscando"
                />
                {/* Vehicle Category Selection */}
                {selectedStep === 1 && (
                  <>
                    <div className="flex flex-col md:flex-row px-2 py-5 md:px-8 md:py-6 gap-5">
                      <h5 className="mb-5">Categoría:</h5>
                      <div className="grid grid-cols-2 md:flex md:flex-row h-full justify-start gap-5 w-full">
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
                    <hr className="border-[#CDD0D2]" />

                    {/* Vehicle Grid */}
                    {carCards.length > 0 && (
                      <div className="md:my-10 my-5 md:mx-[110px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full md:w-fit">
                          {carCards.map((car) => (
                            <CarCard
                              key={car.name}
                              car={car}
                              onClick={() => handleCarSelect(car)}
                              selected={selectedModel === car.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* STEP #2 */}
              <div className="flex flex-col">
                <CustomStepper
                  onClick={selectedModel ? () => setSelectedStep(2) : null}
                  items={
                    selectedDealer ? (
                      <DealerCard dealer={selectedDealer} />
                    ) : null
                  }
                  checked={selectedDealer ? true : false}
                  selected={selectedStep === 2}
                  step="02"
                  title="Elegí un concesionario"
                  description="Ingresá el nombre de un concesionario o lugar geográfico"
                />
                {selectedStep === 2 && (
                  <div className="flex flex-col lg:mx-20 md:mb-20">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-20 py-6 md:py-10 w-full">
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center w-full">
                        <FormDropdown
                          value={selectedProvince ? selectedProvince.label : ""}
                          options={PROVINCES_TEST_DRIVE}
                          placeholder={
                            selectedProvince
                              ? selectedProvince.label
                              : "Seleccionar provincia"
                          }
                          className="w-full "
                          onChange={(e) => handleProvinceSelect(e.target)}
                        />
                        <PillButton
                          isWide={true}
                          type="secondary"
                          label="Buscar"
                          title="Buscar"
                          size="medium"
                          className="w-full md:w-fit"
                          onClick={() => searchProvince(selectedProvince)}
                        />
                      </div>

                      <div className="flex flex-col flex-shrink-0 whitespace-nowrap">
                        <h6>Resultados:</h6>
                        <h6 className="font-bold">
                          {selectedDealers.length}
                          {selectedDealers.length > 1
                            ? " concesionarios encontrados"
                            : " concesionario encontrado"}
                        </h6>
                      </div>
                    </div>

                    <div className="w-full overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full border border-[#CDD0D2]">
                          <thead className="bg-[#05141F]">
                            <tr className="">
                              <th className="font-bold px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-[100px] md:w-1/3 min-w-[100px] sticky left-0 z-10 bg-[#05141F]">
                                <h4 className="font-bold">Concesionario</h4>
                              </th>
                              <th className="px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-[240px] md:w-1/3 min-w-[300px]">
                                <h4 className="font-bold">Dirección</h4>
                              </th>
                              <th className="px-3 text-left sm:px-6 py-3 sm:py-4 text-white border-0 w-[240px] md:w-1/3 min-w-[320px]">
                                <h4 className="font-bold">
                                  Horario de atención
                                </h4>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedDealers.map((dealer, index) => (
                              <tr
                                key={index}
                                className={`h-[100px] ${
                                  index % 2 === 0
                                    ? "bg-[#E1E3E4]"
                                    : "bg-[#F5F6F6]"
                                }`}>
                                <td
                                  className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F] w-[100px] min-w-[100px] md:w-1/3 sticky left-0 z-10"
                                  style={{
                                    backgroundColor:
                                      index % 2 === 0 ? "#E1E3E4" : "#F5F6F6",
                                  }}>
                                  <div className="flex flex-row items-center gap-5">
                                    <RadioButton
                                      checked={selectedDealer === dealer}
                                      onChange={() =>
                                        handleDealerSelect(dealer)
                                      }
                                      id={dealer.id}
                                    />
                                    <h4 className="font-bold">
                                      {dealer.label}
                                    </h4>
                                  </div>
                                </td>
                                <td className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F] w-[300px] md:w-1/3">
                                  <h4>{dealer.direccion}</h4>
                                </td>
                                <td className="px-3 text-left sm:px-6 py-3 sm:py-4 border border-t-2 border-[#CDD0D2] text-[#05141F] w-[320px] md:w-1/3">
                                  <h4>{dealer.horariosDeAtencion}</h4>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* STEP #3 */}
              <div className="flex flex-col">
                <CustomStepper
                  onClick={selectedDealer ? () => setSelectedStep(3) : null}
                  selected={selectedStep === 3}
                  step="03"
                  title="Completá tus datos"
                  description="Dejanos los siguientes datos para poder contactarte"
                />
                {selectedStep === 3 && (
                  <div className="md:px-8 mt-5">
                    <Separator />
                    <div className="self-stretch py-5 md:p-6 flex flex-col gap-5">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-row items-center gap-[15px]">
                          <Arrow />
                          <h4 className="font-bold">
                            Ingrese sus datos en el formulario
                          </h4>
                        </div>
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
                        {/* Additional Message */}
                        <div className="flex flex-col md:flex-row md:items-start gap-5">
                          <div className="w-full md:flex-1">
                            <textarea
                              className="w-full border border-[#CDD0D2] p-2.5 h-[150px] font-normal text-[#05141F] resize-none outline-none focus:outline-[#05141F] focus:outline-1 placeholder:text-[#697279]"
                              placeholder="Mensaje adicional"
                              name="comments"
                              value={formData.comments}
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>

                        <div className="text-[#EA0029] font-normal font-kia -mt-2">
                          <h5 className="font-normal text-[16px]">
                            *Campo obligatorio
                          </h5>
                        </div>
                      </div>
                    </div>
                    <hr className="border-[#CDD0D2]" />
                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse xs:flex-row justify-end gap-2.5 mt-5">
                      <SquareButton type="secondary" onClick={() => {}}>
                        Cancelar
                      </SquareButton>
                      <SquareButton
                        type="primary"
                        disabled={!isValid}
                        onClick={() => {
                          submitForm();
                        }}>
                        Enviar
                      </SquareButton>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestDrive;
