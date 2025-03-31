import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FormLabel from "../Components/Common/forms/FormLabel";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import TextField from "../Components/Common/forms/TextField";
import FormButton from "../Components/Common/forms/FormButton";
// Dropdown data collections
const CONTACT_PREFERENCES = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Teléfono" },
  { value: "whatsapp", label: "WhatsApp" },
];

const MONTHS = [
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

const PROVINCES = [
  { value: "buenosaires", label: "Buenos Aires" },
  { value: "caba", label: "Ciudad Autónoma de Buenos Aires" },
  { value: "catamarca", label: "Catamarca" },
  { value: "chaco", label: "Chaco" },
  { value: "chubut", label: "Chubut" },
  { value: "cordoba", label: "Córdoba" },
  { value: "corrientes", label: "Corrientes" },
  { value: "entrerios", label: "Entre Ríos" },
  { value: "formosa", label: "Formosa" },
  { value: "jujuy", label: "Jujuy" },
  { value: "lapampa", label: "La Pampa" },
  { value: "larioja", label: "La Rioja" },
  { value: "mendoza", label: "Mendoza" },
  { value: "misiones", label: "Misiones" },
  { value: "neuquen", label: "Neuquén" },
  { value: "rionegro", label: "Río Negro" },
  { value: "salta", label: "Salta" },
  { value: "sanjuan", label: "San Juan" },
  { value: "sanluis", label: "San Luis" },
  { value: "santacruz", label: "Santa Cruz" },
  { value: "santafe", label: "Santa Fe" },
  { value: "santiagodelestero", label: "Santiago del Estero" },
  { value: "tierradelfuego", label: "Tierra del Fuego" },
  { value: "tucuman", label: "Tucumán" },
];

// Car models data
const CAR_MODELS = [
  { id: "cerato", name: "Cerato", image: "https://placehold.co/256x88" },
  { id: "seltos", name: "Seltos", image: "https://placehold.co/256x88" },
  { id: "sportage", name: "Sportage", image: "https://placehold.co/256x88" },
  { id: "carnival", name: "Carnival", image: "https://placehold.co/256x88" },
  { id: "k2500", name: "K2500", image: "https://placehold.co/256x88" },
  {
    id: "k3-cross",
    name: "All-new K3 Cross",
    image: "https://placehold.co/256x88",
  },
  {
    id: "k3-sedan",
    name: "All-new K3 Sedán",
    image: "https://placehold.co/256x88",
  },
];

// Helper function to generate days options
const generateDaysOptions = () => {
  return Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));
};

// Helper function to generate years options
const generateYearsOptions = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    value: String(new Date().getFullYear() - i),
    label: String(new Date().getFullYear() - i),
  }));
};

export default function Promociones() {
  const [selectedModel, setSelectedModel] = useState("Cerato");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactPreference: "",
    email: "",
    phone: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    province: "",
    dealer: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle model navigation
  const handleModelNavigation = (direction) => {
    const currentIndex = CAR_MODELS.findIndex(
      (model) => model.name === selectedModel
    );
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < CAR_MODELS.length) {
      setSelectedModel(CAR_MODELS[newIndex].name);
    }
  };

  const isFormValid = () => {
    // Basic validation - check if required fields are filled
    const { firstName, lastName, contactPreference, province } = formData;
    return (
      acceptedTerms &&
      selectedModel &&
      firstName &&
      lastName &&
      contactPreference &&
      province
    );
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white pt-[80px]">
      {/* Main Content Container */}
      <div className="px-5 md:px-20 py-10 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col">
          <div className="relative items-start">
            <h1 className="text-gray-900 font-semibold font-kia">
              Promociones
            </h1>
            <div className="mt-2.5 h-0.5 w-10 bg-gray-900"></div>
          </div>
          <div className="text-gray-900 font-normal font-kia mt-5">
            <h4>
              Completá el formulario y un concesionario te contactará para
              brindarte más información.
            </h4>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col">
          <div className="w-full flex flex-col overflow-hidden">
            {/* Top Border */}
            <div className="self-stretch h-0 outline outline-[2.5px] outline-gray-900" />

            {/* Form Content */}
            <div className="self-stretch px-3 md:px-6 py-[22px] flex flex-col gap-5">
              {/* Model Selection Section */}
              <div className="flex flex-col gap-5">
                <h4 className="text-gray-900 font-bold font-kia">
                  Seleccione un modelo de interés
                </h4>

                {/* Simple car model selection with navigation */}
                <div className="relative w-full border border-neutral-200">
                  {/* Left arrow */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white w-8 h-8 flex items-center justify-center"
                    onClick={() => handleModelNavigation(-1)}
                    aria-label="Previous model">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.9303 12.212C15.9739 12.1571 16 12.0832 16 12C16 11.9168 15.9739 11.8429 15.9303 11.788L11.3451 6H10.0012L14.7545 12L10 18H11.3438L15.9303 12.212Z"
                        fill="white"
                        transform="rotate(180 13 12)"
                      />
                    </svg>
                  </button>

                  {/* Current model display */}
                  <div className="flex items-center justify-center py-4 px-16">
                    <h5 className="text-gray-900 font-normal font-kia text-center">
                      {selectedModel}
                    </h5>
                  </div>

                  {/* Right arrow */}
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white w-8 h-8 flex items-center justify-center"
                    onClick={() => handleModelNavigation(1)}
                    aria-label="Next model">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.06968 12.212C9.02613 12.1571 9 12.0832 9 12C9 11.9168 9.02613 11.8429 9.06968 11.788L13.6549 6H14.9988L10.2455 12L15 18H13.6562L9.06968 12.212Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-5 mt-4">
                  {/* Name Field */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                    <FormLabel text="Nombre completo" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full md:flex-1">
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
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                    <FormLabel text="Contacto" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full md:flex-1">
                      <FormDropdown
                        placeholder="Preferencia de contacto"
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleFormChange}
                        options={CONTACT_PREFERENCES}
                      />
                      <TextField
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                      <TextField
                        placeholder="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  {/* Birthdate Field */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                    <FormLabel text="Fecha de nacimiento" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full md:flex-1">
                      <FormDropdown
                        placeholder="Día"
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleFormChange}
                        options={generateDaysOptions()}
                      />
                      <FormDropdown
                        placeholder="Mes"
                        name="birthMonth"
                        value={formData.birthMonth}
                        onChange={handleFormChange}
                        options={MONTHS}
                      />
                      <FormDropdown
                        placeholder="Año"
                        name="birthYear"
                        value={formData.birthYear}
                        onChange={handleFormChange}
                        options={generateYearsOptions()}
                      />
                    </div>
                  </div>

                  {/* Location Field */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                    <FormLabel text="Ubicación" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full md:flex-1">
                      <FormDropdown
                        placeholder="Provincia"
                        name="province"
                        value={formData.province}
                        onChange={handleFormChange}
                        options={PROVINCES}
                      />
                      <FormDropdown
                        placeholder="Concesionario"
                        name="dealer"
                        value={formData.dealer}
                        onChange={handleFormChange}
                        disabled={!formData.province}
                      />
                    </div>
                  </div>

                  <div className="text-red-600 font-normal font-kia">
                    <h6>*Campo obligatorio</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border */}
            <div className="self-stretch h-0 outline outline-[1.5px] outline-neutral-300" />
          </div>
        </div>

        {/* Terms and conditions checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 outline outline-1 outline-neutral-300 checked:bg-gray-900"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
          <label htmlFor="terms" className="text-gray-900 font-normal font-kia">
            <h6>
              He leído y acepto el{" "}
              <a href="#" className="underline">
                Consentimiento Informado sobre Uso y Procesamiento de Datos
              </a>
            </h6>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-2.5">
          <FormButton type="secondary" disabled={!isFormValid()}>
            Cancelar
          </FormButton>
          <FormButton type="primary" disabled={!isFormValid()}>
            Enviar
          </FormButton>
        </div>
      </div>
    </div>
  );
}
