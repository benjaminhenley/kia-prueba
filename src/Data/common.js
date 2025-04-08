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
    nombre: "All-new K3 Sedán",
    href: "k3-sedan",
    target: "",
    esExterna: false,
    esNuevo: Nuevo,
    foto: AllNewK3Sedan,
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
    nombre: "Cerato",
    href: "https://www.kia.com.ar/cerato",
    target: "",
    esExterna: true,
    esNuevo: null,
    foto: Cerato,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $34.000USD{" "}
          <span className="font-regular text-kia-gray">SX 2.0 AT*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
];

export const camionetasSuv = [
  {
    nombre: "All-new K3 Cross",
    href: "k3-cross",
    target: "",
    esExterna: false,
    esNuevo: Nuevo,
    foto: AllNewK3Cross,
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
    href: "https://www.kia.com.ar/seltos",
    target: "",
    esExterna: true,
    esNuevo: null,
    foto: Seltos,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $36.000USD{" "}
          <span className="font-regular text-kia-gray">LX 1.5 A/T*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "Sportage",
    href: "https://www.kia.com.ar/all-new-sportage",
    target: "",
    esExterna: true,
    esNuevo: null,
    foto: Sportage,
    precio: (
      <>
        <p className="text-sm font-bold py-0.5">
          $48.000USD{" "}
          <span className="font-regular text-kia-gray">EX 1.6T 4X2 DCT*</span>
        </p>
        <p className="text-sm font-bold py-0.5">
          $56.000USD{" "}
          <span className="font-regular text-kia-gray">1.6T AWD DCT*</span>
        </p>
        <p className="text-sm font-bold py-0.5"></p>
      </>
    ),
  },
  {
    nombre: "Carnival",
    href: "https://www.kia.com.ar/carnival",
    target: "",
    esExterna: true,
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
    href: "https://www.kia.com.ar/k2500",
    target: "",
    esExterna: true,
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
    nombre: "Venta",
    href: "https://www.kia.com.ar/red-venta",
    target: "",
    esExterna: true,
  },
  {
    nombre: "Post Venta",
    href: "https://www.kia.com.ar/red-postventa",
    target: "",
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
    href: "https://www.kia.com.ar/contacto",
    target: "",
    esExterna: true,
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
    nombre: <p>POLÍTICA DE PRIVACIDAD</p>,
    href: "/cookies",
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

// Opciones del dropdown de concesionarios
export const concesionariosDropdownOpciones = [
  {
    id: "venta",
    nombre: "Venta",
    href: "https://www.kia.com.ar/red-venta",
    target: "",
    esExterna: true,
  },
  {
    id: "postVenta",
    nombre: "Post Venta",
    href: "https://www.kia.com.ar/red-postventa",
    target: "",
    esExterna: true,
  },
];
