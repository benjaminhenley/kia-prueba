//here we will have the garantia section

import { useState } from "react";
import AccordeonItem from "../../Common/ui/AccordeonItem";
import SquareButton from "../../Common/ui/SquareButton";

// Placeholder icons for now
const IconPlaceholder = ({ label }) => (
  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#F2F5F8] mb-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#05141F" fillOpacity="0.1" />
      <path
        d="M20 10V30M10 20H30"
        stroke="#05141F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// Benefits data
const garantiaBenefits = [
  {
    id: "optima-calidad",
    title: "Óptima calidad",
    icon: <IconPlaceholder />,
  },
  {
    id: "tranquilidad",
    title: "Tranquilidad",
    icon: <IconPlaceholder />,
  },
  {
    id: "garantia-fabrica",
    title: "Garantía de fábrica",
    icon: <IconPlaceholder />,
  },
  {
    id: "transferible",
    title: "Transferible",
    icon: <IconPlaceholder />,
  },
  {
    id: "mayor-valor",
    title: "Mayor valor de reventa",
    icon: <IconPlaceholder />,
  },
];

// FAQ data
const faqItems = [
  {
    id: 1,
    title: "¿Qué es el Manual de Garantía y Mantenimiento?",
    content: (
      <p className="text-[#37434C]">
        El manual de Garantia es el documento que se entrega junto con cada
        vehículo nuevo y en el que se explica cómo y bajo qué circunstancias se
        aplica la garantía sobre una determinada falla y los elementos que están
        cubiertos por ella. Una vez que recibas tu vehículo, te recomendamos
        leer tu Manual del Garantía y Mantenimiento, el cual te ayudará a
        conocer los diferentes consejos, especificaciones técnicas, el detalle
        de nuestra política de garantía y el Plan de Mantenimiento a realizar en
        tu vehículo.
      </p>
    ),
  },
  {
    id: 2,
    title: "¿Cómo funciona la garantía?",
    content: (
      <p className="text-[#37434C]">
        El manual de Garantia es el documento que se entrega junto con cada
        vehículo nuevo y en el que se explica cómo y bajo qué circunstancias se
        aplica la garantía sobre una determinada falla y los elementos que están
        cubiertos por ella. Una vez que recibas tu vehículo, te recomendamos
        leer tu Manual del Garantía y Mantenimiento, el cual te ayudará a
        conocer los diferentes consejos, especificaciones técnicas, el detalle
        de nuestra política de garantía y el Plan de Mantenimiento a realizar en
        tu vehículo.
      </p>
    ),
  },
  {
    id: 3,
    title: "¿Cuáles son los requisitos para hacer válida la garantía?",
    content: (
      <div className="text-[#37434C]">
        <ol className="list-decimal" style={{ listStyleType: "none" }}>
          <li>
            1. Haber adquirido el vehículo en alguno de los CONCESIONARIOS de la
            Red de Kia Argentina.
          </li>
          <li>
            2. Conservar el cupón firmado de la ACTIVACIÓN DE LA GARANTÍA dentro
            del MANUAL DE GARANTÍA Y MANTENIMIENTO.
          </li>
          <li>
            3. Presentar este MANUAL DE GARANTÍA Y MANTENIMIENTO cuando le sea
            requerido en el CONCESIONARIO KIA.
          </li>
          <li>
            4. Usar el CONCESIONARIO de KIA Argentina para los servicios del
            Programa de Mantenimiento, reparaciones, instalación de accesorios
            originales y cualquier arreglo de chapa y pintura.
          </li>
          <li>
            5. Usar repuestos originales y accesorios distribuidos por Kia
            Argentina y comercializados por la Red de CONCESIONARIOS KIA a
            Argentina.
          </li>
          <li>
            6. Que la falla sea atribuible a un defecto de producto (corroboró
            el Concesionario de la Red Kia Argentina).
          </li>
          <li>
            7. No alterar o modificar los números de identificación del
            vehículo, ni tampoco el sistema cuenta kilómetros (odómetro).
          </li>
          <li>
            8. Aplicar la garantía únicamente a las partes de origen de
            fabricación del sistema de frenos, neumático, llantas, tapicería,
            vidrios y carrocería. Dar un uso normal y adecuado al vehículo para
            el cual fue diseñado.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    title: "¿Pierdo la garantía si instalo accesorios en mi vehículo?",
    content: (
      <p className="text-[#37434C]">
        No, siempre que estos elementos se encuentran previamente homologados
        por el departamento de Post Venta de KIA Argentina S.A. y se instalen en
        los Concesionarios y/o Servicios Autorizados de la Red Kia Argentina. La
        instalación de accesorios y elementos adicionales en el vehículo que no
        formen parte del equipo original, puede interferir con los elementos de
        seguridad y funcionamiento del vehículo, especialmente con sus sistemas
        electrónicos. Además, el realizarlo en servicios no calificados donde no
        están familiarizados con los sistemas del automóvil, puede incrementar
        sensiblemente el riesgo de problemas.
      </p>
    ),
  },
];

export default function Garantia() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="mx-auto px-4 md:px-20 py-10 text-[#05141F] flex flex-col gap-10">
      {/* Header section */}
      <div>
        <div className="flex flex-col gap-5">
          <h3 className=" font-bold">
            La confianza que solo te da tu concesionario Kia
          </h3>

          <h4>
            Debido a la avanzada arquitectura mecánica/electrónica incorporada
            en los vehículos Kia y a la gran incidencia que tiene el buen
            funcionamiento de su vehículo, el uso de repuestos provistos por Kia
            Argentina a través de sus Concesionarios KIA, tanto el servicio de
            inspección y mantenimiento como otros servicios requieren
            conocimientos e instrucciones específicas del fabricante cuya
            aplicación sólo puede ser asegurada si el vehículo es atendido por
            un concesionario Kia.
            <br />
            Esto se debe a que solo el personal de los concesionarios Kia es
            altamente calificado y periódicamente entrenado en los sistemas
            mecánicos y electrónicos que su vehículo posee y es el único que
            dispone de las herramientas y computadores de diagnóstico especiales
            Kia, necesarios para el correcto servicio de todos los sistemas. Los
            concesionarios Kia son continuamente supervisados por el
            Departamento de Asistencia Técnica de Kia Argentina y su personal es
            sometido a un entrenamiento intensivo y constante para garantizar al
            usuario un mantenimiento confiable del vehículo en cualquier lugar
            del país.
            <br />
            En Kia argentina, nos sentimos comprometidos a garantizar que usted
            va a disfrutar de su Kia en los próximos años, y por eso te contamos{" "}
            <b>cinco ventajas con las que cuenta en Kia nuevo:</b>
          </h4>

          {/* Benefits section */}
          <div className="flex flex-wrap justify-center gap-10">
            {garantiaBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex flex-col items-center text-center p-6">
                {benefit.icon}
                <h4 className="font-bold">{benefit.title}</h4>
              </div>
            ))}
          </div>

          {/* Warranty information */}
          <h4>
            Para los vehículos de uso particular, nuestra garantía le ofrece
            cobertura por{" "}
            <span className="text-kia-red">5 años o 100.000 km</span>, y para
            los vehículos utilitarios K2500, nuestra garantía le ofrece
            cobertura por{" "}
            <span className="text-kia-red">3 años o 100.000 km</span>.
          </h4>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {/* Download buttons */}
        <div className="flex flex-wrap gap-5 justify-center md:justify-center">
          <SquareButton type="secondary">
            Descargar manual de 5 años
          </SquareButton>
          <SquareButton type="secondary">
            Descargar manual de 3 años
          </SquareButton>
        </div>
      </div>

      {/* FAQ section */}
      <div className="flex flex-col gap-5">
        <h3 className="font-bold">Preguntas frecuentes</h3>

        <div className="flex flex-col">
          <div className="w-full h-[2px] bg-[#05141F]"></div>
          {faqItems.map((item, index) => (
            <AccordeonItem
              key={item.id}
              sectionID={item.id}
              toggleSection={toggleSection}
              activeSection={activeSection}
              title={`${index + 1}. ${item.title}`}
              content={item.content}
            />
          ))}
          <div className="w-full h-[2px] bg-[#05141F]"></div>
        </div>
      </div>
    </div>
  );
}
