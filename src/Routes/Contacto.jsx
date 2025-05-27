import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLabel from "../Components/Common/forms/FormLabel";
import FormDropdown from "../Components/Common/forms/FormDropdown";
import TextField from "../Components/Common/forms/TextField";
import SquareButton from "../Components/Common/ui/SquareButton";
import Checkbox from "../Components/Common/Icons/Checkbox";
import RadioButton from "../Components/Common/ui/RadioButton";
import SuccessMessage from "../Components/Common/ui/SuccessMessage";
import kiaApiCall from "../utils/apiCall";
import { PROVINCES } from "../Data/provinces";
import CAR_MODELS from "../Data/models";
import { CAR_DEALERS } from "../Data/carDealers";
import {
  MONTHS,
  generateDaysOptions,
  generateYearsOptions,
  generateCarYearsOptions,
} from "../Data/months";
import RecaptchaLoader from "../Components/Common/captcha/RecaptchaLoader";
import ExecuteRecaptcha from "../Components/Common/captcha/ExecuteRecaptcha";
import { initialFormDataContact } from "../Data/initialFormsData";

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

function Contactenos() {
  const [formData, setFormData] = useState(initialFormDataContact);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [contactedDealer, setContactedDealer] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

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

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleDealerChange = (value) => {
    let newValue = value === true ? "si" : "no";
    handleFormChange({ target: { name: "contactedDealer", value } });
    setContactedDealer(value);
  };

  const handleSubmit = async () => {
    const name = `${formData.firstName} ${formData.lastName}`;
    try {
      await kiaApiCall({ ...formData, name }, "kiaweb: Contactenos");
      setIsSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const submitForm = () => {
    try {
      const token = ExecuteRecaptcha();
      setRecaptchaToken(token);
      handleSubmit();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Update the form validation function to include email and VIN validation
  const validateForm = () => {
    // Check all required fields
    const {
      documentType,
      documentNumber,
      firstName,
      lastName,
      street,
      streetNumber,
      province,
      city,
      country,
      email,
      phone,
      car,
      carYear,
      consultationType,
      vinNumber,
      contactedDealer,
      dealer,
    } = formData;

    const isEmailValid = email.includes("@") && /\S+@\S+\.\S+/.test(email);

    const isVinValid = !vinNumber || vinNumber.length >= 17;

    const isContactedDealerValid = contactedDealer !== null;

    const valid =
      documentType !== "" &&
      documentNumber !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      street !== "" &&
      streetNumber !== "" &&
      province !== "" &&
      city !== "" &&
      country !== "" &&
      email !== "" &&
      isEmailValid &&
      phone !== "" &&
      car !== "" &&
      carYear !== "" &&
      consultationType !== "" &&
      isVinValid &&
      isContactedDealerValid &&
      acceptedTerms;

    setIsValid(valid);
    return valid;
  };

  const resetForm = () => {
    setFormData(initialFormDataContact);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RecaptchaLoader />
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
                formulario que se encuentra a continuación que nuestro personal
                se encargará de asistirlo. Sus datos personales serán tratados
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
              message="Muchas gracias por estar interesado en nuestra ayuda. Le enviaremos un correo electrónico con la respuesta a tu consulta."
              buttonText="Deseo agregar otro contacto"
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
                      {/* <div className="flex flex-col md:flex-row md:items-center gap-5">
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
                      </div> */}

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
                            name="car"
                            value={formData.car}
                            onChange={handleFormChange}
                            options={CAR_MODELS.map((model) => ({
                              value: model.id,
                              label: model.name,
                            }))}
                          />
                          <FormDropdown
                            placeholder="Año"
                            name="carYear"
                            value={formData.carYear}
                            onChange={handleFormChange}
                            options={generateCarYearsOptions()}
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
                            <div className="flex flex-col gap-5 md:items-left w-full md:flex-1">
                              <TextField
                                placeholder="N° de chasis/VIN"
                                name="vinNumber"
                                value={formData.vinNumber}
                                onChange={handleFormChange}
                              />
                              <h5 className="text-[#697279]">
                                VIN del vehículo. Ingrese los 17 dígitos de su
                                vehículo. Esta información podrá verla en la
                                documentación de su unidad.
                              </h5>
                            </div>

                            <div className="flex flex-col gap-5 md:items-start w-full md:flex-1">
                              <div className="flex flex-row gap-5 items-center w-full h-[28px]">
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
                              <div className="flex flex-col  w-full">
                                <FormDropdown
                                  disabled={!contactedDealer}
                                  placeholder="Nombre del concesionario"
                                  name="dealer"
                                  options={CAR_DEALERS}
                                  value={formData.dealer}
                                  onChange={handleFormChange}
                                />
                              </div>
                            </div>
                          </div>
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
                      Consentimiento Informado sobre Uso y Procesamiento de
                      Datos
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
    </>
  );
}

export default Contactenos;
