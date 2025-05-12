import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLabel from "../Components/Common/forms/FormLabel";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import TextField from "../Components/Common/forms/TextField";
import SquareButton from "../Components/Common/ui/SquareButton";
import Arrow from "../Components/Common/Icons/Arrow";
import Checkbox from "../Components/Common/Icons/Checkbox";
import CarModelGallery from "../Components/Common/CarModelGallery";
import SuccessMessage from "../Components/Common/ui/SuccessMessage";
import { PROVINCES } from "../Data/provinces";
import { CAR_DEALERS } from "../Data/carDealers";
import kiaApiCall from "../utils/apiCall";
import CAR_MODELS from "../Data/models";
import {
  MONTHS,
  generateDaysOptions,
  generateYearsOptions,
} from "../Data/months";

const CONTACT_PREFERENCES = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Teléfono" },
];

export default function Promociones() {
  const [formData, setFormData] = useState({
    car: CAR_MODELS[0].id,
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
        "https://www.google.com/recaptcha/api.js?render=6LeMoSMrAAAAAPsksQG06PD87F2gwqI6ALl4JzaP";
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
    validateForm();
  }, [formData, acceptedTerms]);

  useEffect(() => {
    const source = window.location.href;
    setFormData((prev) => ({
      ...prev,
      source,
    }));
  }, []);

  // Add useEffect to filter dealers when province changes
  useEffect(() => {
    if (formData.province) {
      // Find the label of the selected province using its value
      const selectedProvinceLabel = PROVINCES.find(
        (p) => p.value === parseInt(formData.province)
      )?.label;

      if (selectedProvinceLabel) {
        // Filter dealers whose province matches the selected province label
        const dealers = CAR_DEALERS.filter(
          (dealer) => dealer.province === selectedProvinceLabel
        );
        setAvailableDealers(dealers);
      } else {
        // If province label not found (shouldn't happen with valid data), clear dealers
        setAvailableDealers([]);
      }
    } else {
      // If no province is selected, clear available dealers
      setAvailableDealers([]);
    }
    // Reset dealer selection when province changes or clears
    // This is handled in handleFormChange now
  }, [formData.province]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    // If province changes, reset dealer selection
    if (name === "province") {
      setFormData((prev) => ({
        ...prev,
        province: value,
        dealer: "", // Reset dealer when province changes
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Update the form validation function
  const validateForm = () => {
    // Basic validation - check if required fields are filled
    const {
      firstName,
      car,
      lastName,
      contactPreference,
      province,
      email,
      phone,
      birthDay,
      birthMonth,
      birthYear,
    } = formData;

    // Check if the proper contact info is provided based on contact preference
    const isContactInfoValid =
      (contactPreference === "email" && email !== "") ||
      (contactPreference === "phone" && phone !== "") ||
      (contactPreference !== "" && email !== "" && phone !== "");

    const valid =
      acceptedTerms &&
      car !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      contactPreference !== "" &&
      isContactInfoValid &&
      birthDay !== "" &&
      birthMonth !== "" &&
      birthYear !== "" &&
      province !== "";

    setIsValid(valid);
    return valid;
  };

  const isFormValid = () => {
    return isValid;
  };

  // Toggle model gallery visibility
  const toggleModelGallery = () => {
    setShowModelGallery(!showModelGallery);
  };

  const executeRecaptcha = () => {
    if (typeof window.grecaptcha !== "undefined") {
      window.grecaptcha.ready(function () {
        window.grecaptcha
          .execute("6LeMoSMrAAAAAPsksQG06PD87F2gwqI6ALl4JzaP", {
            action: "submit",
          })
          .then(function (token) {
            setRecaptchaToken(token);
            handleSubmit(token);
          });
      });
    } else {
      console.error("reCAPTCHA not loaded");
    }
  };

  const handleSubmit = async () => {
    const name = `${formData.firstName} ${formData.lastName}`;
    try {
      const response = await kiaApiCall(
        { ...formData, name },
        "kiaweb: Promociones"
      );
      setIsSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const submitForm = () => {
    executeRecaptcha();
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData({
      car: "",
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
    setAcceptedTerms(false);
    setIsSubmitted(false);
  };

  // Function to navigate home
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full mx-auto bg-white pt-[55px] md:pt-[80px]">
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
                    <CarModelGallery
                      onModelSelect={(model) =>
                        setFormData((prev) => ({
                          ...prev,
                          car: model.id,
                        }))
                      }
                    />

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
                            placeholder="Teléfono"
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
                              !formData.province ||
                              availableDealers.length === 0
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
                  <a
                    target="_blank"
                    href="https://www.kia.com.ar/img/consentimiento_gral.pdf"
                    className="underline">
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
