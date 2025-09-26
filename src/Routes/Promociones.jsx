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
import kiaApiCallPromociones from "../utils/apiCall";
import ExecuteRecaptcha from "../Components/Common/captcha/ExecuteRecaptcha";
import { initialFormDataPromociones } from "../Data/initialFormsData";
import RecaptchaLoader from "../Components/Common/captcha/RecaptchaLoader";
import CAR_MODELS from "../Data/modelsPromociones";

const CONTACT_PREFERENCES = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Teléfono" },
];

const DOCUMENT_TYPES = [
  { value: "dni", label: "DNI" },
  { value: "pasaporte", label: "Pasaporte" },
];

export default function Promociones() {
  const [formData, setFormData] = useState(initialFormDataPromociones);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showModelGallery, setShowModelGallery] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [concesionarios, setConcesionarios] = useState([]);
  const [concesionariosFiltro, setConcesionariosFiltro] = useState([]);
  // const [provinces, setProvinces] = useState(PROVINCES);

  const [errors, setErrors] = useState({});

  const MIN_PHONE_DIGITS = 8; // pick the N you want

  const validateEmail = (v) => {
    return v === "" || v.includes("@");
  };

  const validatePhone = (v) => {
    const digits = v.replace(/\D/g, "");
    return digits.length >= MIN_PHONE_DIGITS;
  };

  function fetchAndMapConcesionarios() {
    fetch("https://fusio.encender-dev.online/public/kia/concesionarios")
      .then((response) => response.json())
      .then((data) => {
        const mappedConcesionarios = data.concesionarios.map((dealer, key) => ({
          id: key,
          value: dealer.codigo,
          label: dealer.nombre + " " + dealer.direccion,
          // province: dealer.provincia,
        }));
        setConcesionarios(mappedConcesionarios);
        setConcesionariosFiltro(mappedConcesionarios);
      })
      .catch((error) => {
        setConcesionarios(CAR_DEALERS);
      });
  }

  useEffect(() => {
    fetchAndMapConcesionarios();
  }, []);

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    // Apply input filtering based on field type
    switch (name) {
      case "documentNumber":
        // Only allow numbers to be entered for DNI
        newValue = value.replace(/[^\d]/g, "");
        break;

      case "firstName":
      case "lastName":
        // Only allow letters, spaces, and special characters for names
        newValue = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, "");
        break;

      // case "province": {
      //   const provinceObject = provinces.find((p) => p.value === newValue);
      //   const provinceLabel = provinceObject?.label ?? "";
      //   const filtered = concesionarios.filter(
      //     (d) => d.province === provinceLabel
      //   );
      //   setConcesionariosFiltro(filtered);

      //   // actualizar provincia y resetear dealer si no aplica
      //   setFormData((prev) => ({
      //     ...prev,
      //     province: newValue,
      //     dealer: filtered.some((d) => d.value === prev.dealer)
      //       ? prev.dealer
      //       : "",
      //   }));
      //   return; // importante: no seguir al setFormData genérico
      // }
      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(newValue)
          ? undefined
          : "Email inválido (falta '@').",
      }));
    }
    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(newValue)
          ? undefined
          : `Teléfono inválido (mínimo ${MIN_PHONE_DIGITS} dígitos).`,
      }));
    }
  };

  // Update the form validation function
  const validateForm = () => {
    const {
      firstName,
      car,
      lastName,
      documentNumber,
      contactPreference,
      // province,
      email,
      dealer,
      phone,
    } = formData;

    const emailOk = validateEmail(email);
    const phoneOk = validatePhone(phone);

    const valid =
      acceptedTerms &&
      car !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      documentNumber !== "" &&
      contactPreference !== "" && // still required if you want them to pick one
      dealer !== "" &&
      // province !== "" &&
      email !== "" &&
      phone !== "" &&
      emailOk &&
      phoneOk;

    setIsValid(valid);
    return valid;
  };

  // Toggle model gallery visibility
  const toggleModelGallery = () => {
    setShowModelGallery(!showModelGallery);
  };

  const buildPromosPayload = (fd) => ({
    // Mapped fields
    nombre: fd.firstName.trim() || "",
    apellido: fd.lastName.trim() || "",
    fecha_nacimiento: new Date().toISOString().split("T")[0],
    mail: fd.email || "",
    celular: fd.phone || "",
    ubicacion: fd.dealer || "",
    newsletter: 0,
    contacto: 1,
    origen: "HomePromociones",
    tipoLanding: "promocional",
    modeloAuto: CAR_MODELS.find((car) => car.id === fd.car).name,
  });

  const submitForm = async () => {
    try {
      const token = ExecuteRecaptcha();
      setRecaptchaToken(token);

      const payload = buildPromosPayload(formData);
      await kiaApiCallPromociones(payload, "kiaweb: Promociones");
      setIsSubmitting(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData(initialFormDataPromociones);
    setAcceptedTerms(false);
    setIsSubmitted(false);
    setRecaptchaToken(null);
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
              message="Muchas gracias por interesarte en nuestras promociones. Vamos a estar contactándolo a la brevedad."
              buttonText="Deseo consultar por otras promos"
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
                            <TextField
                              placeholder="DNI"
                              name="documentNumber"
                              value={formData.documentNumber}
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>

                        {/* Contact Field */}
                        <div className="flex flex-col md:flex-row md:items-center gap-5">
                          <FormLabel text="Contacto" />
                          <div className="flex flex-col md:grid grid-cols-3 gap-5 w-full md:flex-1">
                            <FormDropdown
                              placeholder="Preferencia de contacto"
                              name="contactPreference"
                              value={formData.contactPreference}
                              onChange={handleFormChange}
                              options={CONTACT_PREFERENCES}
                              className="h-fit"
                            />
                            <div>
                              <TextField
                                className="w-full"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                              />
                              {errors.email && (
                                <p className="text-red-600 text-sm mt-1">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                            <div>
                              <TextField
                                className="w-full"
                                placeholder="Teléfono"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleFormChange}
                              />
                              {errors.phone && (
                                <p className="text-red-600 text-sm mt-1">
                                  {errors.phone}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Location Field */}
                        <div className="flex flex-col md:flex-row md:items-center gap-5">
                          <FormLabel text="Concesionario" />
                          <div className="flex flex-col md:flex-row gap-5 flex-1">
                            {/* <FormDropdown
                              placeholder="Provincia"
                              name="province"
                              value={formData.province}
                              onChange={handleFormChange}
                              options={provinces}
                            /> */}
                            <FormDropdown
                              placeholder="Concesionario"
                              name="dealer"
                              disabled={concesionariosFiltro.length === 0}
                              value={formData.dealer}
                              onChange={handleFormChange}
                              options={concesionariosFiltro}
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
                  disabled={!isValid | isSubmitting}
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
