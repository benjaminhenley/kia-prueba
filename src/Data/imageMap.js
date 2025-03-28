// Sedan carousel images
import sedanBackDesktop from "../assets/img/models/sedan/carousel/desktop-sedan-back.webp";
import sedanBackMobile from "../assets/img/models/sedan/carousel/mobile-sedan-back.webp";
import sedanFrontDesktop from "../assets/img/models/sedan/carousel/desktop-sedan-front.webp";
import sedanFrontMobile from "../assets/img/models/sedan/carousel/mobile-sedan-front.webp";
import sedanSideDesktop from "../assets/img/models/sedan/carousel/desktop-sedan-side.webp";
import sedanSideMobile from "../assets/img/models/sedan/carousel/mobile-sedan-side.webp";

// Cross carousel images
import crossBackDesktop from "../assets/img/models/cross/carousel/desktop-cross-back.webp";
import crossBackMobile from "../assets/img/models/cross/carousel/mobile-cross-back.webp";
import crossFrontDesktop from "../assets/img/models/cross/carousel/desktop-cross-front.webp";
import crossFrontMobile from "../assets/img/models/cross/carousel/mobile-cross-front.webp";
import crossSideDesktop from "../assets/img/models/cross/carousel/desktop-cross-side.webp";
import crossSideMobile from "../assets/img/models/cross/carousel/mobile-cross-side.webp";

// Sedan exterior images
import sedanExteriorFront from "../assets/img/models/sedan/exterior/sedan-exterior-1.webp";
import sedanExteriorRear from "../assets/img/models/sedan/exterior/sedan-exterior-2.webp";
import sedanExteriorWheel from "../assets/img/models/sedan/exterior/sedan-exterior-3.webp";
import sedanExteriorMirror from "../assets/img/models/sedan/exterior/sedan-exterior-4.webp";
import sedanExteriorGrille from "../assets/img/models/sedan/exterior/sedan-exterior-5.webp";
import sedanExteriorFrontMobile from "../assets/img/models/sedan/exterior/sedan-exterior-1-mobile.webp";
import sedanExteriorRearMobile from "../assets/img/models/sedan/exterior/sedan-exterior-2-mobile.webp";
import sedanExteriorWheelMobile from "../assets/img/models/sedan/exterior/sedan-exterior-3-mobile.webp";
import sedanExteriorMirrorMobile from "../assets/img/models/sedan/exterior/sedan-exterior-4-mobile.webp";
import sedanExteriorGrilleMobile from "../assets/img/models/sedan/exterior/sedan-exterior-5-mobile.webp";

// Cross exterior images
import crossExteriorFront from "../assets/img/models/cross/exterior/cross-exterior-1.webp";
import crossExteriorRear from "../assets/img/models/cross/exterior/cross-exterior-2.webp";
import crossExteriorWheel from "../assets/img/models/cross/exterior/cross-exterior-3.webp";
import crossExteriorMirror from "../assets/img/models/cross/exterior/cross-exterior-4.webp";
import crossExteriorGrille from "../assets/img/models/cross/exterior/cross-exterior-5.webp";

// Cross color images
import crossBlack from "../assets/img/models/cross/colors/cross-black.webp";
import crossGray from "../assets/img/models/cross/colors/cross-gray.webp";
import crossSilver from "../assets/img/models/cross/colors/cross-silver.webp";
import crossWhite from "../assets/img/models/cross/colors/cross-white.webp";
import crossBlue from "../assets/img/models/cross/colors/cross-blue.webp";

// Sedan interior images
import sedanInteriorSeats from "../assets/img/models/sedan/interior/sedan-interior-1.webp";
import sedanInteriorPanel from "../assets/img/models/sedan/interior/sedan-interior-2.webp";
import sedanInteriorKeys from "../assets/img/models/sedan/interior/sedan-interior-3.webp";
import sedanInteriorAirConditioner from "../assets/img/models/sedan/interior/sedan-interior-4.webp";
import sedanInteriorTrunk from "../assets/img/models/sedan/interior/sedan-interior-6.webp";
import sedanInteriorGears from "../assets/img/models/sedan/interior/sedan-interior-5.webp";

import sedanInteriorPanelMobile from "../assets/img/models/sedan/interior/sedan-interior-2-mobile.webp";
import sedanInteriorKeysMobile from "../assets/img/models/sedan/interior/sedan-interior-3-mobile.webp";
import sedanInteriorAirConditionerMobile from "../assets/img/models/sedan/interior/sedan-interior-4-mobile.webp";
import sedanInteriorTrunkMobile from "../assets/img/models/sedan/interior/sedan-interior-6-mobile.webp";
import sedanInteriorSeatsMobile from "../assets/img/models/sedan/interior/sedan-interior-1-mobile.webp";
import sedanInteriorGearsMobile from "../assets/img/models/sedan/interior/sedan-interior-5-mobile.webp";

// Cross interior images
import crossInteriorSeats from "../assets/img/models/cross/interior/cross-interior-5.webp";
import crossInteriorPanel from "../assets/img/models/cross/interior/cross-interior-1.webp";
import crossInteriorBox from "../assets/img/models/cross/interior/cross-interior-2.webp";
import crossInteriorAirConditioner from "../assets/img/models/cross/interior/cross-interior-3.webp";
import crossInteriorKeys from "../assets/img/models/cross/interior/cross-interior-4.webp";

// Atributes images
import sedanAtributesDesktop from "../assets/img/models/sedan/atributes/sedan-atributes.webp";
import sedanAtributesMobile from "../assets/img/models/sedan/atributes/sedan-atributes-mobile.webp";

import crossAtributesDesktop from "../assets/img/models/cross/atributes/cross-atributes.webp";
import crossAtributesMobile from "../assets/img/models/cross/atributes/cross-atributes.webp";

// Cross images
import crossBack from "../assets/img/models/cross/cross-back.webp";
import crossFront from "../assets/img/models/cross/cross-front.webp";
import crossSide from "../assets/img/models/cross/cross-side.webp";

// Hero Videos
import heroVideoSedanDesktop from "../assets/videos/sedan-hero-desktop.mp4";
import heroVideoSedanMobile from "../assets/videos/sedan-hero-mobile.mp4";
import heroVideoCrossDesktop from "../assets/videos/cross-hero-desktop.mp4";
import heroVideoCrossMobile from "../assets/videos/cross-hero-mobile.mp4";

import sedanEtiqueta from "../assets/etiquetas/etiqueta-sedan.pdf";
import crossEtiqueta from "../assets/etiquetas/etiqueta-cross.pdf";

import sedanFichas from "../assets/fichas/ficha-sedan.pdf";
import crossFichas from "../assets/fichas/ficha-cross.pdf";

/**
 * Centralized image mapping for all car models
 * Organized by model (sedan/cross) and category
 */
export const imageMap = {
  sedan: {
    carousel: {
      front: {
        desktop: sedanFrontDesktop,
        mobile: sedanFrontMobile,
      },
      back: {
        desktop: sedanBackDesktop,
        mobile: sedanBackMobile,
      },
      side: {
        desktop: sedanSideDesktop,
        mobile: sedanSideMobile,
      },
    },
    exterior: {
      front: {
        desktop: sedanExteriorFront,
        mobile: sedanExteriorFrontMobile,
      },
      rear: {
        desktop: sedanExteriorRear,
        mobile: sedanExteriorRearMobile,
      },
      wheel: {
        desktop: sedanExteriorWheel,
        mobile: sedanExteriorWheelMobile,
      },
      mirror: {
        desktop: sedanExteriorMirror,
        mobile: sedanExteriorMirrorMobile,
      },
      grille: {
        desktop: sedanExteriorGrille,
        mobile: sedanExteriorGrilleMobile,
      },
    },
    interior: {
      panel: {
        desktop: sedanInteriorPanel,
        mobile: sedanInteriorPanelMobile,
      },
      keys: {
        desktop: sedanInteriorKeys,
        mobile: sedanInteriorKeysMobile,
      },
      airConditioner: {
        desktop: sedanInteriorAirConditioner,
        mobile: sedanInteriorAirConditionerMobile,
      },
      trunk: {
        desktop: sedanInteriorTrunk,
        mobile: sedanInteriorTrunkMobile,
      },
      gears: {
        desktop: sedanInteriorGears,
        mobile: sedanInteriorGearsMobile,
      },
      seats: {
        desktop: sedanInteriorSeats,
        mobile: sedanInteriorSeatsMobile,
      },
    },
    attributes: {
      desktop: sedanAtributesDesktop,
      mobile: sedanAtributesMobile,
    },
    heroVideo: {
      desktop: heroVideoSedanDesktop,
      mobile: heroVideoSedanMobile,
    },
    etiqueta: sedanEtiqueta,
    fichas: sedanFichas,
  },
  cross: {
    carousel: {
      front: {
        desktop: crossFrontDesktop,
        mobile: crossFrontMobile,
      },
      back: {
        desktop: crossBackDesktop,
        mobile: crossBackMobile,
      },
      side: {
        desktop: crossSideDesktop,
        mobile: crossSideMobile,
      },
    },
    exterior: {
      front: {
        desktop: crossExteriorFront,
        mobile: crossExteriorFront,
      },
      rear: {
        desktop: crossExteriorRear,
        mobile: crossExteriorRear,
      },
      wheel: {
        desktop: crossExteriorWheel,
        mobile: crossExteriorWheel,
      },
      mirror: {
        desktop: crossExteriorMirror,
        mobile: crossExteriorMirror,
      },
      grille: {
        desktop: crossExteriorGrille,
        mobile: crossExteriorGrille,
      },
    },
    interior: {
      seats: {
        desktop: crossInteriorSeats,
        mobile: crossInteriorSeats,
      },
      panel: {
        desktop: crossInteriorPanel,
        mobile: crossInteriorPanel,
      },
      keys: {
        desktop: crossInteriorKeys,
        mobile: crossInteriorKeys,
      },
      airConditioner: {
        desktop: crossInteriorAirConditioner,
        mobile: crossInteriorAirConditioner,
      },
      box: {
        desktop: crossInteriorBox,
        mobile: crossInteriorBox,
      },
    },
    colors: {
      blue: crossBlue,
      black: crossBlack,
      gray: crossGray,
      silver: crossSilver,
      white: crossWhite,
    },
    attributes: {
      desktop: crossAtributesDesktop,
      mobile: crossAtributesMobile,
    },
    heroVideo: {
      desktop: heroVideoCrossDesktop,
      mobile: heroVideoCrossMobile,
    },
    general: {
      front: crossFront,
      back: crossBack,
      side: crossSide,
    },
    etiqueta: crossEtiqueta,
    fichas: crossFichas,
  },
};

/**
 * Helper function to get image mapping for a specific model
 */

export const getModelImages = (modelId) => {
  if (modelId === "k3-sedan") {
    return imageMap.sedan;
  } else if (modelId === "k3-cross") {
    return imageMap.cross;
  }
  return null;
};

export default imageMap;
