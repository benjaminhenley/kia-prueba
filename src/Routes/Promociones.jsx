import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FormLabel from "../Components/Common/forms/FormLabel";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import TextField from "../Components/Common/forms/TextField";
import FormButton from "../Components/Common/forms/FormButton";
import Arrow from "../Components/Icons/Arrow";
import Checkbox from "../Components/Icons/Checkbox";
import CarModelGallery from "../Components/gallery/CarModelGallery";
// Dropdown data collections
const CONTACT_PREFERENCES = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Teléfono" },
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

// Helper function to generate days options
const generateDaysOptions = () => {
  return Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));
};

// Helper function to generate years options
const generateYearsOptions = () => {
  return Array.from({ length: 80 }, (_, i) => ({
    value: String(new Date().getFullYear() - i - 18),
    label: String(new Date().getFullYear() - i - 18),
  }));
};

// Add a new constant for dealers by province
const DEALERS_BY_PROVINCE = {
  caba: [
    { value: "alpina-motors", label: "Alpina Motors" },
    { value: "autodrive", label: "Autodrive" },
    { value: "autovisiones", label: "Autovisiones" },
    { value: "car-bureau", label: "Car Bureau" },
    { value: "one-saw", label: "One Saw" },
  ],
  buenosaires: [
    { value: "del-plata", label: "KIA Del Plata" },
    { value: "del-oeste", label: "KIA Del Oeste" },
    { value: "del-sur", label: "KIA Del Sur" },
  ],
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
  const [showModelGallery, setShowModelGallery] = useState(true);
  const [availableDealers, setAvailableDealers] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    // If province changes, update available dealers and reset dealer selection
    if (name === "province") {
      setAvailableDealers(DEALERS_BY_PROVINCE[value] || []);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        dealer: "", // Reset dealer when province changes
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
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

  // Toggle model gallery visibility
  const toggleModelGallery = () => {
    setShowModelGallery(!showModelGallery);
  };

  const submitForm = () => {
    console.log("Form submitted", formData);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white pt-[55px] md:pt-[80px]">
      {/* Main Content Container */}
      <div className="px-4 md:px-20 py-10 flex flex-col gap-5 md:gap-10">
        {/* Header Section */}
        <div className="flex flex-col">
          <div className="relative items-start">
            <h1 className="text-[#05141F] font-semibold font-kia">
              Promociones
            </h1>
            <div className="mt-2.5 h-[1.5px] md:w-12 md:h-[2px] w-8 bg-[#05141F]"></div>
          </div>
          <div className="text-[#05141F] font-normal font-kia mt-2.5 md:mt-5">
            <h4>
              Completá el formulario y un concesionario te contactará para
              brindarte más información.
            </h4>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col">
          <div className="w-full flex flex-col">
            {/* Top Border */}
            <div className="self-stretch h-0 outline outline-[1px] outline-[#05141F]" />

            {/* Form Content */}
            <div className="self-stretch md:px-6 py-5 md:p-6 flex flex-col gap-5">
              {/* Model Selection Section */}
              <div className="flex flex-col gap-5">
                {/* Model selection header - clickable */}
                <div
                  className="flex flex-row items-center gap-[15px]"
                  onClick={toggleModelGallery}>
                  <Arrow width={6} height={12} />
                  <h4 className="text-[#05141F] font-bold font-kia">
                    Seleccione un modelo de interés
                  </h4>
                </div>
                <CarModelGallery />

                {/* Form Fields */}
                <div className="flex flex-col gap-5">
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
                        placeholder="Preferencia de contacto"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  {/* Birthdate Field */}
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <FormLabel text="Fecha de nacimiento" />
                    <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
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
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <FormLabel text="Ubicación" />
                    <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
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
                        options={availableDealers}
                        disabled={
                          !formData.province || availableDealers.length === 0
                        }
                      />
                    </div>
                  </div>

                  <div className="text-red-600 font-normal font-kia">
                    <h5 className="font-normal">*Campo obligatorio</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border */}
            <div className="self-stretch h-[1.5px] bg-[#CDD0D2]" />
          </div>
        </div>

        {/* Terms and conditions checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
          <label
            htmlFor="terms"
            className="text-[#05141F] font-normal font-kia cursor-pointer"
            onClick={() => setAcceptedTerms(!acceptedTerms)}>
            <h6>
              He leído y acepto el{" "}
              <a href="#" className="underline">
                Consentimiento Informado sobre Uso y Procesamiento de Datos
              </a>
            </h6>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse xs:flex-row justify-end gap-2.5">
          <FormButton type="secondary" disabled={!acceptedTerms}>
            Cancelar
          </FormButton>
          <FormButton
            type="primary"
            disabled={!acceptedTerms}
            onClick={submitForm}>
            Enviar
          </FormButton>
        </div>
      </div>
    </div>
  );
}
