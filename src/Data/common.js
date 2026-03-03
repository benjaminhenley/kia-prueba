// Imports de imágenes
import Facebook from "../assets/img/footer/Facebook.svg";
import Youtube from "../assets/img/footer/Youtube.svg";
import Instagram from "../assets/img/footer/Instagram.svg";
import X from "../assets/img/footer/X.svg";
import K3Cross from "../assets/img/common/modelos/k3-cross.webp";
import K4Sedan from "../assets/img/common/modelos/k4-sedan.webp";
import K3Sedan from "../assets/img/common/modelos/k3-sedan.webp";
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
    href: "https://www.facebook.com/KiaArgentinaSA",
    target: "",
    esExterna: true, // Indica que es un enlace externo
  },
  {
    nombre: "Youtube",
    logo: Youtube,
    href: "https://www.youtube.com/user/kiaargentina/videos",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Instagram",
    logo: Instagram,
    href: "https://www.instagram.com/kia_argentina/",
    target: "",
    esExterna: true,
  },
  {
    nombre: "X",
    logo: X,
    href: "https://x.com/Kia_Argentina",
    target: "",
    esExterna: true,
  },
];

// Datos de los modelos tanto para el Footer como para el Navbar
export const autos = [
  {
    nombre: "Nuevo K4 Sedán",
    href: "https://www.kia.com.ar/kia-k4/",
    target: "_blank",
    esExterna: true,
    esNuevo: Nuevo,
    foto: K4Sedan,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $33.000USD <span className="font-regular text-kia-gray">EX*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $38.000USD <span className="font-regular text-kia-gray">GT*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "K3 Sedán",
    href: "/k3-sedan",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: K3Sedan,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $25.000USD <span className="font-regular text-kia-gray">EX*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $28.500USD{" "}
          <span className="font-regular text-kia-gray">GT-Line*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];

export const camionetasSuv = [
  {
    nombre: "K3 Cross",
    href: "/k3-cross",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: K3Cross,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $25.000USD <span className="font-regular text-kia-gray">EX*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $28.500USD{" "}
          <span className="font-regular text-kia-gray">GT-Line*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "Seltos",
    href: "/seltos",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: Seltos,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          <span className="line-through">$36.000USD</span>{" "}
          <span className="font-regular text-kia-gray">LX 1.5 A/T*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $34.000USD{" "}
          <span className="font-normal text-black">
            (bonificación $2.000USD)
          </span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "Sportage",
    href: "/sportage",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: Sportage,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $48.000USD{" "}
          <span className="font-regular text-kia-gray">EX 2.0 4x2 ATT*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $62.000USD{" "}
          <span className="font-regular text-kia-gray">
            X-line 2.0R AWD AT*
          </span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "Carnival",
    href: "/carnival",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: Carnival,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $65.000USD{" "}
          <span className="font-regular text-kia-gray">EX 2.2R A/T*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $75.000USD{" "}
          <span className="font-regular text-kia-gray">SX 2.2R A/T*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];

export const utilitarios = [
  {
    nombre: "K2500",
    href: "/k2500",
    target: "",
    esExterna: false,
    esNuevo: null,
    foto: K2500,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $33.000USD{" "}
          <span className="font-regular text-kia-gray">CS 2.5T MT*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];

export const concesionarios = [
  {
    id: "venta",
    nombre: "Venta",
    href: "/red-venta",
    target: "",
    esExterna: false,
  },
  {
    id: "postVenta",
    nombre: "Post Venta",
    href: "/red-postventa",
    target: "",
    esExterna: false,
  },
];

export const nuevaKia = [
  {
    id: "ourMovement",
    nombre: "Nueva Kia",
    href: "https://www.kia.com.ar/ourmovement/",
    target: "_blank",
    esExterna: true,
  },
  {
    id: "talentLounge",
    nombre: "Kia Talent Lounge",
    href: "https://career.kia.com/eng/main/main.kc?utm_source=kia-dealership-site-ktl&utm_medium=link&utm_campaign=ktl-pr",
    target: "_blank",
    esExterna: true,
  },
];

export const postVentaFooter = [
  {
    nombre: "Agendá tu cita",
    href: "https://mkt.pilotsolution.net/kiaarg/postventa/",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Contactá a tu asesor",
    href: "https://www.kia.com.ar/asesor-de-servicio",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Cotizá tu service",
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Promise to care",
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Garantía",
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Originales Kia",
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Kia Assistance",
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
];

// Datos del Navbar
export const blackbarLeft = [
  {
    nombre: <p>PROMOCIONES</p>,
    href: "/promociones",
    target: "",
    esExterna: false,
  },
  {
    nombre: <span className="cursor-default">|</span>,
    href: null,
    target: null,
    esExterna: null,
  },
  {
    nombre: <p>CONTÁCTENOS</p>,
    href: "/contacto",
    target: "",
    esExterna: false,
  },
];

export const blackbarRight = [
  {
    nombre: <p>WORLDWIDE</p>,
    href: "https://worldwide.kia.com/int",
    target: "",
    esExterna: true,
  },
  {
    nombre: <span className="cursor-default">|</span>,
    href: null,
    target: null,
    esExterna: null,
  },
  {
    nombre: <p>POLÍTICA DE COOKIES</p>,
    href: "/politica-de-cookies",
    target: "",
    esExterna: false,
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
    href: "https://www.kia.com.ar/cotizar-service",
    target: "",
    esExterna: true,
  },
  {
    nombre: <p>Nueva Kia</p>,
    href: "https://www.kia.com.ar/ourmovement/",
    target: "",
    esExterna: true,
  },
];
