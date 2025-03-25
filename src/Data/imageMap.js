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
import sedanInteriorPanel from "../assets/img/models/sedan/interior/sedan-interior-2.webp";
import sedanInteriorKeys from "../assets/img/models/sedan/interior/sedan-interior-3.webp";
import sedanInteriorAirConditioner from "../assets/img/models/sedan/interior/sedan-interior-4.webp";
import sedanInteriorTrunk from "../assets/img/models/sedan/interior/sedan-interior-6.webp";
import sedanInteriorSeats from "../assets/img/models/sedan/interior/sedan-interior-1.webp";
import sedanInteriorGears from "../assets/img/models/sedan/interior/sedan-interior-5.webp";
// Cross interior images
import crossInteriorSeats from "../assets/img/models/cross/interior/cross-interior-5.webp";
import crossInteriorPanel from "../assets/img/models/cross/interior/cross-interior-1.webp";
import crossInteriorBox from "../assets/img/models/cross/interior/cross-interior-2.webp";
import crossInteriorAirConditioner from "../assets/img/models/cross/interior/cross-interior-3.webp";
import crossInteriorKeys from "../assets/img/models/cross/interior/cross-interior-4.webp";

// Atributes images
import sedanAtributes from "../assets/img/models/sedan/atributes/sedan-atributes.webp";
import crossAtributes from "../assets/img/models/cross/atributes/cross-atributes.webp";

// Cross images
import crossBack from "../assets/img/models/cross/cross-back.webp";
import crossFront from "../assets/img/models/cross/cross-front.webp";
import crossSide from "../assets/img/models/cross/cross-side.webp";

// Hero Videos
import heroVideoSedanDesktop from "../assets/videos/sedan-hero-desktop.mp4";
import heroVideoSedanMobile from "../assets/videos/sedan-hero-mobile.mp4";
import heroVideoCrossDesktop from "../assets/videos/cross-hero-desktop.mp4";
import heroVideoCrossMobile from "../assets/videos/cross-hero-mobile.mp4";

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
      front: sedanExteriorFront,
      rear: sedanExteriorRear,
      wheel: sedanExteriorWheel,
      mirror: sedanExteriorMirror,
      grille: sedanExteriorGrille,
    },
    interior: {
      panel: sedanInteriorPanel,
      keys: sedanInteriorKeys,
      airConditioner: sedanInteriorAirConditioner,
      trunk: sedanInteriorTrunk,
      gears: sedanInteriorGears,
      seats: sedanInteriorSeats,
    },
    attributes: sedanAtributes,
    heroVideo: {
      desktop: heroVideoSedanDesktop,
      mobile: heroVideoSedanMobile,
    },
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
      front: crossExteriorFront,
      rear: crossExteriorRear,
      wheel: crossExteriorWheel,
      mirror: crossExteriorMirror,
      grille: crossExteriorGrille,
    },
    interior: {
      seats: crossInteriorSeats,
      panel: crossInteriorPanel,
      keys: crossInteriorKeys,
      airConditioner: crossInteriorAirConditioner,
      box: crossInteriorBox,
    },
    colors: {
      blue: crossBlue,
      black: crossBlack,
      gray: crossGray,
      silver: crossSilver,
      white: crossWhite,
    },
    attributes: crossAtributes,
    heroVideo: {
      desktop: heroVideoCrossDesktop,
      mobile: heroVideoCrossMobile,
    },
    general: {
      front: crossFront,
      back: crossBack,
      side: crossSide,
    },
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
