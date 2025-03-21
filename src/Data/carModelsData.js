// Icons
import HeroIcons from "../Components/Icons/HeroIcons";
import { imageMap } from "./imageMap";

// Model IDs for reference
export const MODEL_IDS = {
  SEDAN: "k3-sedan",
  CROSS: "k3-cross",
};

// K3 Sedan model
export const k3Sedan = {
  id: MODEL_IDS.SEDAN,
  name: "K3 Sedán",
  tagline: "Más allá de lo posible",
  heroImage: "/images/placeholder-sedan-hero.jpg",
  heroVideo: imageMap.sedan.heroVideo,
  heroInfo: {
    stars: {
      icon: HeroIcons.stars,
      title: "Stars",
      description: "5 <br/> Estrellas <br/> Latin NCAP",
    },
    airbag: {
      icon: HeroIcons.airbag,
      title: "Airbag",
      description: "6 <br/> Airbags",
    },
    adas: {
      icon: HeroIcons.adas,
      title: "ADAS",
      description: "Asistencias <br/> Avanzadas a <br/> la conducción",
    },
    radio: {
      icon: HeroIcons.radio,
      title: "Radio",
      description: "Radio 10,25'' <br/> con conectividad <br/> inalámbrica",
    },
    roof: {
      icon: HeroIcons.roof,
      title: "Roof",
      description: "Techo solar <br/> OneTouch <br/> + Safety",
    },
  },
  sections: {
    characteristics: {
      features: [
        {
          id: "motor",
          title: "Motor",
          value: "1.6 MPI | 1,591cc",
        },
        {
          id: "performance",
          title: "Performance",
          value: "121hp | 151Nm",
        },
        {
          id: "consumption",
          title: "Consumo",
          value: "6,9L / 100km",
        },
        {
          id: "warranty",
          title: "Garantía",
          value: "5 años o 100.000km",
        },
      ],
      vr: "https://worldwide.kia.com/int/vr-showroom/csa/k3/lhd/index.html#/k3/exterior",
      // colorPicker: [
      //   {
      //     id: "azure-blue",
      //     name: "Azure Blue",
      //     color: "#0B4A76",
      //     thumbnail: "../assets/images/colors/azure-blue-thumbnail.png",
      //   },
      //   {
      //     id: "black",
      //     name: "Black",
      //     color: "#000000",
      //     thumbnail: "../assets/images/colors/black-thumbnail.png",
      //   },
      //   {
      //     id: "silver",
      //     name: "Silver",
      //     color: "#A0A0A0",
      //     thumbnail: "../assets/images/colors/silver-thumbnail.png",
      //   },
      //   {
      //     id: "light-silver",
      //     name: "Light Silver",
      //     color: "#D0D0D0",
      //     thumbnail: "../assets/images/colors/light-silver-thumbnail.png",
      //   },
      //   {
      //     id: "white",
      //     name: "White",
      //     color: "#FFFFFF",
      //     thumbnail: "../assets/images/colors/white-thumbnail.png",
      //   },
      // ],
      atributes: {
        category: "Atributos",
        title: "All-new K3 Sedán",
        subtitle: "Seguridad y funcionalidad en cada detalle",
        image: imageMap.sedan.attributes,
        bulletPoints: [
          "**Seguridad de última generación:** Sistema Kia DriveWise con asistencias avanzadas y calificación de 5 estrellas en Latin NCAP para máxima protección.",
          "**Tecnología y conectividad:** Infotainment LCD de 10,25 con Apple CarPlay y Android Auto inalámbrico, cargador inalámbrico y acceso keyless para una experiencia sin interrupciones.",
          "**Estilo y confort premium:** Tapizados exclusivos, techo solar OneTouch y climatizador Bi-Zona crean un espacio sofisticado y confortable.",
        ],
        description:
          "El All-new K3 Sedán combina diseño sofisticado, tecnología intuitiva y un alto nivel de seguridad. Su interior premium y sus asistencias avanzadas elevan cada experiencia al volante.",
      },
      exterior: {
        category: "Exterior",
        layout: "sedan",
        title: "Un diseño que redefine la elegancia",
        description:
          "Se destaca por sus líneas modernas y sofisticadas, combinando tecnología y estética en cada detalle. Desde sus faros LED hasta el techo solar OneTouch, cada elemento está pensado para ofrecer un estilo único y una experiencia de conducción inigualable.",
        images: [
          {
            id: "exterior-front",
            src: imageMap.sedan.exterior.front,
            alt: "Exterior front view",
            title: "Parabrisa",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-rear",
            src: imageMap.sedan.exterior.rear,
            alt: "Rear light",
            title: "Faros traseros halógenos",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-wheel",
            src: imageMap.sedan.exterior.wheel,
            alt: "Wheel",
            title: "Llantas de Aleación de 17'",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-mirror",
            src: imageMap.sedan.exterior.mirror,
            alt: "Side mirror",
            title: "Faros delanteros: Halógenos Bifuncionales",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-grille",
            src: imageMap.sedan.exterior.grille,
            alt: "Front grille",
            title: "Espejos rebatibles",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-sides",
            src: imageMap.sedan.exterior.sides,
            alt: "Front grille",
            title: "Espejos rebatibles",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
        ],
      },
      interior: {
        category: "Interior",
        layout: "sedan",
        title: "Confort, tecnología y seguridad en su interior",
        description:
          "Diseñado para ofrecerte una experiencia única, con tapizados exclusivos, un sistema infotainment de 10,25” y climatizador automático Bi-Zona para un confort total. Además, con su calificación de 5 estrellas en seguridad Latin NCAP, garantiza máxima protección en cada viaje.",
        images: [
          {
            id: "interior-seats",
            src: imageMap.sedan.interior.seats,
            alt: "Interior seats",
            title: "Asientos tapizados en cuero",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-panel",
            src: imageMap.sedan.interior.panel,
            alt: "Interior panel",
            title: "Panel de aire y radio",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-keys",
            src: imageMap.sedan.interior.keys,
            alt: "Interior keys",
            title: "Llaves de arranque",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-air-conditioner",
            src: imageMap.sedan.interior.airConditioner,
            alt: "Interior air conditioner",
            title: "Aire acondicionado",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-trunk",
            src: imageMap.sedan.interior.gears,
            alt: "Trunk space",
            title: "Amplio maletero",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-panel",
            src: imageMap.sedan.interior.trunk,
            alt: "Panel de aire y radio",
            title: "Panel de aire y radio",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-steering-wheel",
            src: imageMap.sedan.interior.trunk,
            alt: "Steering wheel",
            title: "Volante",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
        ],
      },
    },
    specifications: {
      carouselImages: [
        {
          id: 1,
          src: {
            mobile: imageMap.sedan.carousel.front.mobile,
            desktop: imageMap.sedan.carousel.front.desktop,
          },
          alt: "K3 Sedan Front",
        },
        {
          id: 2,
          src: {
            mobile: imageMap.sedan.carousel.back.mobile,
            desktop: imageMap.sedan.carousel.back.desktop,
          },
          alt: "K3 Sedan Back",
        },
        {
          id: 3,
          src: {
            mobile: imageMap.sedan.carousel.side.mobile,
            desktop: imageMap.sedan.carousel.side.desktop,
          },
          alt: "K3 Sedan Side",
        },
      ],
      features: [
        {
          id: "frontlights",
          title: "Faros delanteros LED",
          value: "Faros LED + delanteros <br/> con Cornering Light",
        },
        {
          id: "smartkey",
          title: "Smart Key",
          value: "Smart Key + <br/> Botón de arranque",
        },
        {
          id: "wheels",
          title: "Aleación",
          value: 'Llantas de 17"',
        },
        {
          id: "battery",
          title: "Batería",
          value: "Cargador <br/> inalámbrico",
        },
        {
          id: "upholstery",
          title: "Tapizado",
          value: "Tapizados Bi-Tono <br/> GT-Line",
        },
      ],
      dimensions: {
        title: "Dimensiones (mm)",
        details: [
          {
            name: "EXTERIOR largo / ancho / alto",
            value: "4.545 / 1.765 / 1.475",
          },
          { name: "Distancia entre ejes", value: "2.670" },
          { name: "Distancia del suelo", value: "165" },
          {
            name: "Capacidad de baúl (2ª Fila/ 1ª Fila)",
            value: "455 VDA Lts",
          },
          { name: "Peso Neto", value: "1.215 Kg" },
          { name: "Plazas", value: "5" },
          { name: "Medida de neumáticos", value: "205 / 50R17" },
          { name: "Auxilio", value: "Acero" },
        ],
      },
    },
  },
};

// K3 Cross model
export const k3Cross = {
  id: MODEL_IDS.CROSS,
  name: "K3 Cross",
  tagline: "Mas allá de lo posible",
  heroImage: "/images/placeholder-cross-hero.jpg",
  heroVideo: imageMap.cross.heroVideo,
  heroInfo: {
    stars: {
      icon: HeroIcons.stars,
      title: "Stars",
      description: "5 Estrellas <br/> Latin NCAP",
    },
    airbag: {
      icon: HeroIcons.airbag,
      title: "Airbag",
      description: "6 <br/> Airbags",
    },
    adas: {
      icon: HeroIcons.adas,
      title: "ADAS",
      description: "Asistencias <br/> Avanzadas a <br/> la conducción",
    },
    radio: {
      icon: HeroIcons.radio,
      title: "Radio",
      description: "Radio 10,25'' <br/> con conectividad <br/> inalámbrica",
    },
    roof: {
      icon: HeroIcons.roof,
      title: "Roof",
      description: "Techo solar <br/> OneTouch <br/> + Safety",
    },
  },
  sections: {
    characteristics: {
      features: [
        {
          id: "motor",
          title: "Motor",
          value: "1.6 MPI | 1,591cc",
        },
        {
          id: "performance",
          title: "Performance",
          value: "121hp | 151Nm",
        },
        {
          id: "consumption",
          title: "Consumo",
          value: "7L / 100km",
        },
        {
          id: "warranty",
          title: "Garantía",
          value: "5 años o 100.000km",
        },
      ],
      colorPicker: [
        {
          id: "blue",
          name: "Azure Blue",
          color: "#134363",
          thumbnail: imageMap.cross.colors.blue,
        },
        {
          id: "black",
          name: "Aurora Black Pearl",
          color: "#1b181a",
          thumbnail: imageMap.cross.colors.black,
        },
        {
          id: "gray",
          name: "Steel Gray",
          color: "#7e7e7e",
          thumbnail: imageMap.cross.colors.gray,
        },
        {
          id: "silver",
          name: "Silky Silver",
          color: "#b8b6b6",
          thumbnail: imageMap.cross.colors.silver,
        },
        {
          id: "white",
          name: "Snow White Pearl",
          color: "#f6f6f6",
          thumbnail: imageMap.cross.colors.white,
        },
      ],
      atributes: {
        category: "Atributos",
        title: "Aventura y estilo en cada recorrido",
        subtitle: "Atributos",
        image: imageMap.cross.attributes,
        bulletPoints: [
          "**Diseño deportivo y funcional:** Con iluminación Star Map LED, techo solar OneTouch y un diseño robusto, el K3 Cross combina elegancia con espíritu aventurero.",
          "**Seguridad y confianza en cada trayecto:** Equipado con Kia DriveWise: asistentes de pre-colisión frontal, en punto ciego y de tráfico cruzado trasero y de mantenimiento y seguimiento de carril, además de una calificación de 5 estrellas en Latin NCAP.",
          "**Tecnología para un viaje conectado:** Pantalla full LCD de 10,25 con Apple CarPlay y Android Auto inalámbrico, climatizador Bi-Zona y cargador inalámbrico para estar siempre conectado.",
        ],
        description:
          "El All-new K3 Cross combina diseño dinámico con un interior refinado y la mejor tecnología en su segmento. Un Crossover versátil, seguro y equipado para acompañarte en cada aventura.",
      },
      exterior: {
        category: "Exterior",
        title: "Presencia imponente y diseño innovador",
        description:
          "Con un diseño audaz y líneas deportivas, el All-new K3 Cross combina elegancia y funcionalidad en cada detalle.",
        images: [
          {
            id: "exterior-faros",
            src: imageMap.cross.exterior.grille,
            alt: "Faros",
            title: "Parabrisa",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-front",
            src: imageMap.cross.exterior.front,
            alt: "Parabrisa",
            title: "Faros traseros halógenos",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-rear",
            src: imageMap.cross.exterior.rear,
            alt: "Rear light",
            title: "Llantas de Aleación de 17'",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-espejo",
            src: imageMap.cross.exterior.mirror,
            alt: "Espejo",
            title: "Espejos rebatibles",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "exterior-grille",
            src: imageMap.cross.exterior.grille,
            alt: "Faros",
            title: "Faros delanteros: Halógenos Bifuncionales",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
        ],
      },
      interior: {
        category: "Interior",
        title: "Confort y tecnología en cada detalle",
        description:
          "Cada viaje se disfruta con el máximo confort, conectividad y asistencia a la conducción para una experiencia más segura y entretenida, respaldada por la calificación de 5 estrellas en Latin NCAP.",
        images: [
          {
            id: "interior-seats",
            src: imageMap.cross.interior.seats,
            alt: "Asientos tapizados",
            title: "Asientos Tapizados",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-seats",
            src: imageMap.cross.interior.panel,
            alt: "Baul 455",
            title: "Baul 455 VDA Lts",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-keys",
            src: imageMap.cross.interior.box,
            alt: "Interior keys",
            title: "Caja Automática ",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-air-conditioner",
            src: imageMap.cross.interior.airConditioner,
            alt: "Interior air conditioner",
            title: "Aire acondicionado",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
          {
            id: "interior-panel",
            src: imageMap.cross.interior.keys,
            alt: "Interior keys",
            title: "Llaves de arranque",
            description:
              "Lorem ipsum placerat platea enim aliquet natoque ullamcorper amet lacus eu scelerisque nunc tincidunt ipsum tristique auctor id in integer vulputate sit lectus faucibus sit.",
          },
        ],
      },
    },
    specifications: {
      carouselImages: [
        {
          id: 1,
          src: {
            mobile: imageMap.cross.carousel.front.mobile,
            desktop: imageMap.cross.carousel.front.desktop,
          },
          alt: "Cross Front",
        },
        {
          id: 2,
          src: {
            mobile: imageMap.cross.carousel.back.mobile,
            desktop: imageMap.cross.carousel.back.desktop,
          },
          alt: "Cross Interior",
        },
        {
          id: 3,
          src: {
            mobile: imageMap.cross.carousel.side.mobile,
            desktop: imageMap.cross.carousel.side.desktop,
          },
          alt: "Cross Side",
        },
      ],
      features: [
        {
          id: "frontlights",
          title: "Faros delanteros LED",
          value: "Faros LED + delanteros <br/> con Cornering Light",
        },
        {
          id: "smartkey",
          title: "Smart Key",
          value: "Smart Key + <br/> Botón de arranque",
        },
        {
          id: "wheels",
          title: "Aleación",
          value: 'Llantas de 17"',
        },
        {
          id: "battery",
          title: "Batería",
          value: "Cargador <br/> inalámbrico",
        },
        {
          id: "upholstery",
          title: "Tapizado",
          value: "Tapizados Bi-Tono <br/> GT-Line",
        },
      ],
      dimensions: {
        title: "Dimensiones (mm)",
        details: [
          {
            name: "EXTERIOR largo / ancho / alto",
            value: "4.630 / 1.865 / 1.665",
          },
          { name: "Distancia entre ejes", value: "2.755" },
          { name: "Distancia del suelo", value: "205" },
          {
            name: "Capacidad de baúl (2ª Fila/ 1ª Fila)",
            value: "543 / 1.703 VDA Lts",
          },
          { name: "Peso Neto", value: "1.785 Kg" },
          { name: "Plazas", value: "5" },
          { name: "Medida de neumáticos", value: "235 / 55R18" },
          { name: "Auxilio", value: "Aleación" },
        ],
      },
    },
  },
};
