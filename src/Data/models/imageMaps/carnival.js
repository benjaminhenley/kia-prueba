// Carnival carousel images
import carnivalFrontDesktop from "../../../assets/img/models/carnival/carousel/carnival-front-desktop.webp";
import carnivalFrontMobile from "../../../assets/img/models/carnival/carousel/carnival-front-mobile.webp";
import carnivalBackDesktop from "../../../assets/img/models/carnival/carousel/carnival-back-desktop.webp";
import carnivalBackMobile from "../../../assets/img/models/carnival/carousel/carnival-back-mobile.webp";
import carnivalSideDesktop from "../../../assets/img/models/carnival/carousel/carnival-side-desktop.webp";
import carnivalSideMobile from "../../../assets/img/models/carnival/carousel/carnival-side-mobile.webp";
// Carnival hero video images
import carnivalHeroVideoDesktop from "../../../assets/videos/carnival-hero-desktop.mp4";
import carnivalHeroVideoMobile from "../../../assets/videos/carnival-hero-mobile.mp4";
// Carnival exterior images
import carnivalExteriorBacklights from "../../../assets/img/models/carnival/exterior/carnival-exterior-backlights.webp";
import carnivalExteriorDoors from "../../../assets/img/models/carnival/exterior/carnival-exterior-doors.webp";
import carnivalExteriorLights from "../../../assets/img/models/carnival/exterior/carnival-exterior-lights.webp";
import carnivalExteriorTrunk from "../../../assets/img/models/carnival/exterior/carnival-exterior-trunk.webp";
import carnivalExteriorWheel from "../../../assets/img/models/carnival/exterior/carnival-exterior-wheel.webp";
// Carnival interior images
import carnivalInteriorAirConditioning from "../../../assets/img/models/carnival/interior/carnival-interior-air-conditioning.webp";
import carnivalInteriorPanel from "../../../assets/img/models/carnival/interior/carnival-interior-panel.webp";
import carnivalInteriorRooftop from "../../../assets/img/models/carnival/interior/carnival-interior-rooftop.webp";
import carnivalInteriorWhole from "../../../assets/img/models/carnival/interior/carnival-interior-whole.webp";
import carnivalInteriorSeats from "../../../assets/img/models/carnival/interior/carnival-interior-seats.webp";
// Carnival colors images
import carnivalAstraBlue from "../../../assets/img/models/carnival/colors/carnival-astra-blue.webp";
import carnivalAuroraBlackPearl from "../../../assets/img/models/carnival/colors/carnival-aurora-black-pearl.webp";
import carnivalPantheraMetal from "../../../assets/img/models/carnival/colors/carnival-panthera-metal.webp";
import carnivalCeramicSilver from "../../../assets/img/models/carnival/colors/carnival-ceramic-silver.webp";
import carnivalSnowWhitePearl from "../../../assets/img/models/carnival/colors/carnival-snow-white-pearl.webp";
// Carnival Atributes
import carnivalAtributesDesktop from "../../../assets/img/models/carnival/atributes/carnival-atributes-desktop.webp";
import carnivalAtributesMobile from "../../../assets/img/models/carnival/atributes/carnival-atributes-mobile.webp";
// Carnival Etiqueta
import carnivalEtiqueta from "../../../assets/fichas/Ficha técnica K3 Carnival EX.pdf";
// Carnival Fichas
import carnivalFichas from "../../../assets/fichas/Ficha técnica K3 Carnival EX.pdf";

export const carnivalImages = {
  carousel: {
    front: {
      desktop: carnivalFrontDesktop,
      mobile: carnivalFrontMobile,
    },
    back: {
      desktop: carnivalBackDesktop,
      mobile: carnivalBackMobile,
    },
    side: {
      desktop: carnivalSideDesktop,
      mobile: carnivalSideMobile,
    },
  },
  exterior: {
    backlights: {
      desktop: carnivalExteriorBacklights,
      mobile: carnivalExteriorBacklights,
    },
    trunk: {
      desktop: carnivalExteriorTrunk,
      mobile: carnivalExteriorTrunk,
    },
    lights: {
      desktop: carnivalExteriorLights,
      mobile: carnivalExteriorLights,
    },
    doors: {
      desktop: carnivalExteriorDoors,
      mobile: carnivalExteriorDoors,
    },
    wheel: {
      desktop: carnivalExteriorWheel,
      mobile: carnivalExteriorWheel,
    },
  },
  interior: {
    rooftop: {
      desktop: carnivalInteriorRooftop,
      mobile: carnivalInteriorRooftop,
    },
    whole: {
      desktop: carnivalInteriorWhole,
      mobile: carnivalInteriorWhole,
    },
    panel: {
      desktop: carnivalInteriorPanel,
      mobile: carnivalInteriorPanel,
    },
    airConditioning: {
      desktop: carnivalInteriorAirConditioning,
      mobile: carnivalInteriorAirConditioning,
    },
    seats: {
      desktop: carnivalInteriorSeats,
      mobile: carnivalInteriorSeats,
    },
  },
  colors: {
    astraBlue: carnivalAstraBlue,
    auroraBlackPearl: carnivalAuroraBlackPearl,
    pantheraMetal: carnivalPantheraMetal,
    ceramicSilver: carnivalCeramicSilver,
    snowWhitePearl: carnivalSnowWhitePearl,
  },
  heroVideo: {
    desktop: carnivalHeroVideoDesktop,
    mobile: carnivalHeroVideoMobile,
  },
  attributes: {
    desktop: carnivalAtributesDesktop,
    mobile: carnivalAtributesMobile,
  },
  etiqueta: carnivalEtiqueta,
  fichas: carnivalFichas,
};
