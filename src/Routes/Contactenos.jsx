import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLabel from "../Components/Common/forms/FormLabel";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import TextField from "../Components/Common/forms/TextField";
import SquareButton from "../Components/Common/ui/SquareButton";
import Checkbox from "../Components/Icons/Checkbox";
import RadioButton from "../Components/Common/ui/RadioButton";
import SuccessMessage from "../Components/Common/ui/SuccessMessage";
import kiaApiCall from "../utils/apiCall";
import PROVINCES from "../Data/provinces";
import CAR_MODELS from "../Data/models";

// Dropdown data collections
const DOCUMENT_TYPES = [
  { value: "dni", label: "DNI" },
  { value: "pasaporte", label: "Pasaporte" },
];

const CONSULTATION_TYPES = [
  { value: "repuestos", label: "Repuestos" },
  { value: "ventas", label: "Ventas" },
  { value: "postventa", label: "Post venta" },
];

// Helper function to generate days options
const generateDaysOptions = () => {
  return Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));
};

// Helper function to generate months options
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

const initialFormData = {
  documentType: "",
  documentNumber: "",
  firstName: "",
  lastName: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  street: "",
  streetNumber: "",
  province: "",
  city: "",
  country: "",
  email: "",
  phone: "",
  model: "",
  consultationType: "",
  domain: "",
  mileage: "",
  vinNumber: "",
  contactedDealer: "",
  additionalMessage: "",
  campaign: "",
  source: "",
};

// Helper function to generate years options
const generateYearsOptions = () => {
  return Array.from({ length: 80 }, (_, i) => ({
    value: String(new Date().getFullYear() - i - 18),
    label: String(new Date().getFullYear() - i - 18),
  }));
};

function Contactenos() {
  const [formData, setFormData] = useState(initialFormData);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [contactedDealer, setContactedDealer] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Add reCAPTCHA script to the page
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // Once loaded, initialize
    window.onload = function () {
      if (typeof window.grecaptcha !== "undefined") {
        window.grecaptcha.ready(function () {
          console.log("reCAPTCHA ready");
        });
      }
    };

    return () => {
      // Clean up, if needed
      if (document.querySelector('script[src*="recaptcha"]')) {
        document.querySelector('script[src*="recaptcha"]').remove();
      }
    };
  }, []);

  // Add useEffect to validate form on every change
  useEffect(() => {
    if (!isSubmitted) {
      validateForm();
    }
  }, [formData, acceptedTerms, contactedDealer, isSubmitted]);

  useEffect(() => {
    const source = window.location.href;
    setFormData((prev) => ({
      ...prev,
      source,
    }));
  }, []);

  const executeRecaptcha = () => {
    if (typeof window.grecaptcha !== "undefined") {
      window.grecaptcha.ready(function () {
        window.grecaptcha
          .execute("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", {
            action: "submit",
          })
          .then(function (token) {
            console.log("reCAPTCHA token:", token);
            setRecaptchaToken(token);
            handleSubmit(token);
          });
      });
    } else {
      console.error("reCAPTCHA not loaded");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Apply input filtering based on field type without showing errors
    switch (name) {
      case "documentNumber":
        // Only allow numbers to be entered
        newValue = value.replace(/[^\d]/g, "");
        break;

      case "firstName":
      case "lastName":
        // Only allow letters, spaces, and special characters for names
        newValue = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, "");
        break;

      case "street":
        // Only allow letters, spaces, and special characters for street name (no numbers)
        newValue = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, "");
        break;

      case "streetNumber":
        // Only allow numbers for street number
        newValue = value.replace(/[^\d]/g, "");
        break;

      case "phone":
        // Only allow numbers for phone
        newValue = value.replace(/[^\d]/g, "");
        break;

      case "mileage":
        // Only allow numbers for mileage
        newValue = value.replace(/[^\d]/g, "");
        break;

      case "email":
        // Let email pass through - form validation will check it later
        break;

      case "vinNumber":
        // Let VIN pass through - form validation will check it later
        break;

      default:
        // No special filtering for other fields
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleDealerChange = (value) => {
    setContactedDealer(value);
  };

  const handleSubmit = async () => {
    const name = `${formData.firstName} ${formData.lastName}`;
    console.log("Form data", { ...formData, name });
    try {
      const response = await kiaApiCall(
        { ...formData, name },
        "kiaweb:contactenos"
      );
      setIsSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const submitForm = () => {
    executeRecaptcha();
  };

  // Update the form validation function to include email and VIN validation
  const validateForm = () => {
    // Check all required fields
    const {
      documentType,
      documentNumber,
      firstName,
      lastName,
      birthDay,
      birthMonth,
      birthYear,
      street,
      streetNumber,
      province,
      city,
      country,
      email,
      phone,
      model,
      consultationType,
      vinNumber,
    } = formData;

    // Basic email validation with @ - silent validation
    const isEmailValid = email.includes("@") && /\S+@\S+\.\S+/.test(email);

    // Check VIN length - silent validation
    const isVinValid = !vinNumber || vinNumber.length >= 17;

    // If the contactedDealer field is null, the question hasn't been shown yet
    // and we shouldn't require an answer. If it has a value (true/false),
    // we need that value to validate the form.
    const isContactedDealerValid = contactedDealer !== null;

    // All fields must be filled and terms must be accepted
    // Note: additionalMessage is not required
    const valid =
      documentType !== "" &&
      documentNumber !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      birthDay !== "" &&
      birthMonth !== "" &&
      birthYear !== "" &&
      street !== "" &&
      streetNumber !== "" &&
      province !== "" &&
      city !== "" &&
      country !== "" &&
      email !== "" &&
      isEmailValid &&
      phone !== "" &&
      model !== "" &&
      consultationType !== "" &&
      isVinValid &&
      isContactedDealerValid &&
      acceptedTerms;

    setIsValid(valid);
    return valid;
  };

  const isFormValid = () => {
    return isValid;
  };

  // Function to reset the form
  const resetForm = () => {
    console.log("Resetting form");
    setFormData(initialFormData);
    setAcceptedTerms(false);
    setContactedDealer(null);
    setRecaptchaToken(null);
    setIsValid(false);
    setIsSubmitted(false);
  };

  // Function to navigate home
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full  mx-auto bg-white pt-[55px] md:pt-[80px]">
      {/* Main Content Container */}
      <div className="px-4 md:px-20 py-10 flex flex-col gap-5 md:gap-10">
        {/* Header Section */}
        <div className="flex flex-col">
          <div className="relative items-start">
            <h1 className="text-[#05141F] font-semibold font-kia">
              Contáctenos
            </h1>
            <div className="mt-2.5 h-[1.5px] md:w-12 md:h-[2px] w-8 bg-[#05141F]"></div>
          </div>
          <div className="text-[#05141F] font-normal font-kia mt-2.5 md:mt-5">
            <h4>
              Por favor comuníquese al <b>0800-999-9542</b>, de{" "}
              <b>lunes a viernes de 09:00hs a 18:00hs</b> o complete el
              formulario que se encuentra a continuación que nuestro personal se
              encargará de asistirlo. Sus datos personales serán tratados
              conforme a la{" "}
              <a
                href="https://www.kia.com.ar/docs/politicadeprivacidadkia.pdf"
                target="_blank"
                className="underline">
                Política de Privacidad de Kia Argentina
              </a>
              .
            </h4>
          </div>
        </div>

        {isSubmitted ? (
          <SuccessMessage
            firstName={formData.firstName}
            onReset={resetForm}
            onHome={goHome}
          />
        ) : (
          <>
            {/* Form Section */}
            <div className="flex flex-col">
              <div className="w-full flex flex-col">
                {/* Top Border */}
                <div className="self-stretch h-0 outline outline-[1px] outline-[#05141F]" />

                {/* Form Content */}
                <div className="self-stretch md:px-6 py-5 md:p-6 flex flex-col gap-5">
                  {/* Collapsible Form Section Header */}
                  <div className="flex flex-row items-center gap-[15px]">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-90">
                      <path
                        d="M5.00008 0L0 5.08425L0.823318 5.91667L5.00008 1.66483L9.17684 5.91667L10.0002 5.08425L5.00008 0Z"
                        fill="#05141F"
                      />
                    </svg>
                    <h4 className="text-[#05141F] font-bold font-kia">
                      Ingrese sus datos en el formulario
                    </h4>
                  </div>

                  {/* Form Fields */}
                  <div className="flex flex-col gap-5">
                    {/* Document Field */}
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <FormLabel text="Documento de identidad" />
                      <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                        <FormDropdown
                          placeholder="Tipo de documento"
                          name="documentType"
                          value={formData.documentType}
                          onChange={handleFormChange}
                          options={DOCUMENT_TYPES}
                        />
                        <TextField
                          placeholder="Número de documento"
                          name="documentNumber"
                          value={formData.documentNumber}
                          onChange={handleFormChange}
                        />
                      </div>
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
                          options={[{ value: "argentina", label: "Argentina" }]}
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

                    {/* Vehicle Field */}
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <FormLabel text="Vehículo" />
                      <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                        <FormDropdown
                          placeholder="Modelo"
                          name="model"
                          value={formData.model}
                          onChange={handleFormChange}
                          options={CAR_MODELS.map((model) => ({
                            value: model.id,
                            label: model.name,
                          }))}
                        />
                        <FormDropdown
                          placeholder="Tipo de consulta"
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleFormChange}
                          options={CONSULTATION_TYPES}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center  md:gap-5">
                      <div className="md:w-52"></div>
                      <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                        <TextField
                          placeholder="Dominio"
                          name="domain"
                          value={formData.domain}
                          onChange={handleFormChange}
                        />
                        <TextField
                          placeholder="Kilometraje"
                          name="mileage"
                          value={formData.mileage}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-5">
                      <div className="md:w-52"></div>
                      <div className="flex flex-col md:flex-1 ">
                        <div className="flex flex-col md:flex-row gap-5 w-full md:flex-1">
                          <TextField
                            placeholder="N° de chasis/VIN"
                            name="vinNumber"
                            value={formData.vinNumber}
                            onChange={handleFormChange}
                          />
                          <h5 className="text-[#697279] md:w-[50%] md:hidden">
                            VIN del vehículo. Ingrese los 17 dígitos de su
                            vehículo. Esta información podrá verla en la
                            documentación de su unidad.
                          </h5>

                          <div className="flex flex-row gap-5 md:items-center md:mt-2 w-full md:flex-1">
                            <h6 className="text-[12px] font-bold text-[#05141F]">
                              ¿Contactó a algún concesionario?
                            </h6>
                            <div className="flex gap-5">
                              <RadioButton
                                id="dealer-yes"
                                name="contactedDealer"
                                checked={contactedDealer === true}
                                onChange={() => handleDealerChange(true)}
                                label="Sí"
                              />
                              <RadioButton
                                id="dealer-no"
                                name="contactedDealer"
                                checked={contactedDealer === false}
                                onChange={() => handleDealerChange(false)}
                                label="No"
                              />
                            </div>
                          </div>
                        </div>
                        <h5 className="text-[#697279] mt-5 md:w-[50%] hidden md:block">
                          VIN del vehículo. Ingrese los 17 dígitos de su
                          vehículo. Esta información podrá verla en la
                          documentación de su unidad.
                        </h5>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="w-full md:flex-1">
                        <textarea
                          className="w-full border border-[#CDD0D2] p-2.5 h-[150px] font-normal text-[#05141F] resize-none outline-none focus:outline-[#05141F] focus:outline-1 placeholder:text-[#697279]"
                          placeholder="Mensaje adicional"
                          name="additionalMessage"
                          value={formData.additionalMessage}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>

                    <div className="text-[#EA0029] font-normal font-kia">
                      <h5 className="font-normal text-[16px]">
                        *Campo obligatorio
                      </h5>
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
              <SquareButton type="secondary">Cancelar</SquareButton>
              <SquareButton
                type="primary"
                disabled={!isValid}
                onClick={submitForm}>
                Enviar
              </SquareButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Contactenos;
