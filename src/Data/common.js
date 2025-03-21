// Imports de imágenes
import Facebook from "../assets/img/footer/Facebook.svg";
import Youtube from "../assets/img/footer/Youtube.svg";
import Instagram from "../assets/img/footer/Instagram.svg";
import X from "../assets/img/footer/X.svg";
import AllNewK3Cross from "../assets/img/common/modelos/AllNewK3Cross.webp";
import AllNewK3Sedan from "../assets/img/common/modelos/AllNewK3Sedan.webp";
import Cerato from "../assets/img/common/modelos/Cerato.webp";
import Carnival from "../assets/img/common/modelos/Carnival.webp";
import Sportage from "../assets/img/common/modelos/Sportage.webp";
import Seltos from "../assets/img/common/modelos/Seltos.webp";
import K2500 from "../assets/img/common/modelos/K2500.webp";
import Nuevo from "../assets/img/common/Nuevo.svg";

// Datos de las marcas Footer
export const redes = [
  {
    nombre: "Facebook",
    logo: Facebook,
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true, // Indica que es un enlace externo
  },
  {
    nombre: "Youtube",
    logo: Youtube,
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
  },
  {
    nombre: "Instagram",
    logo: Instagram,
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
  },
  {
    nombre: "X",
    logo: X,
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
  },
];

// Datos de los modelos tanto para el Footer como para el Navbar
export const autos = [
  {
    nombre: "All-new K3 Cross",
    href: "all-new-k3-cross",
    target: "",
    esExterna: false,
    esNuevo: Nuevo,
    foto: AllNewK3Cross,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
  {
    nombre: "All-new K3 Sedán",
    href: "all-new-k3-sedan",
    target: "",
    esExterna: false,
    esNuevo: Nuevo,
    foto: AllNewK3Sedan,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
  {
    nombre: "Cerato",
    href: "/autos/cerato",
    target: "_blank",
    esExterna: true,
    esNuevo: null,
    foto: Cerato,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
];

export const camionetasSuv = [
  {
    nombre: "Carnival",
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
    esNuevo: null,
    foto: Carnival,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
  {
    nombre: "Sportage",
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
    esNuevo: null,
    foto: Sportage,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
  {
    nombre: "Seltos",
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
    esNuevo: null,
    foto: Seltos,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
];

export const utilitarios = [
  {
    nombre: "K2500",
    href: "http://kia.com.ar/",
    target: "_blank",
    esExterna: true,
    esNuevo: null,
    foto: K2500,
    precio: (
      <p>
        $00.000USD{" "}
        <span className="text[#697279]">
          modelo especificado<sup>*</sup>
        </span>
      </p>
    ),
  },
];

export const concesionarios = [
  {
    nombre: "Venta",
    href: "",
    target: "k",
    esExterna: true,
  },
  {
    nombre: "Post Venta",
    href: "",
    target: "",
    esExterna: true,
  },
];

export const postVenta = [
  {
    nombre: "Agendá tu cita",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Contactá a tu asesor",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Beneficios",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Cotizá tu service",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Promise to care",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Garantía",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Originales Kia",
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Kia Assistance",
    href: "",
    target: "",
    esExterna: true,
  },
];

// Datos del Navbar
export const blackbarLeft = [
  {
    nombre: <p>PROMOCIONES</p>,
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: <span>|</span>,
    href: null,
    target: null,
    esExterna: null,
  },
  {
    nombre: <p>CONTÁCTENOS</p>,
    href: "",
    target: "",
    esExterna: true,
  },
];

export const blackbarRight = [
  {
    nombre: <p>WORLDWIDE</p>,
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: <span>|</span>,
    href: null,
    target: null,
    esExterna: null,
  },
  {
    nombre: <p>POLÍTICA DE PRIVACIDAD</p>,
    href: "",
    target: "",
    esExterna: true,
  },
];

export const transparentbarLeft = [
  {
    nombre: <p>Modelos</p>,
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: <p>Concesionarios</p>,
    href: "",
    target: "",
    esExterna: true,
  },
];

export const logo = [
  {
    nombre: "",
    href: "/",
    target: "",
    esExterna: false,
  },
];

export const transparentbarRight = [
  {
    nombre: <p>Post Venta</p>,
    href: "",
    target: "",
    esExterna: true,
  },
  {
    nombre: <p>Nueva Kia</p>,
    href: "",
    target: "",
    esExterna: true,
  },
];
