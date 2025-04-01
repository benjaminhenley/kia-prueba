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
  menu: {
    etiqueta: { id: "brochures", link: imageMap.sedan.etiqueta },
    fichas: { id: "technical-sheet", link: imageMap.sedan.fichas },
  },
  heroVideo: imageMap.sedan.heroVideo,
  heroInfo: {
    stars: {
      icon: HeroIcons.stars,
      title: "Stars",
      description: "5 <br/> Estrellas Latin <br/> NCAP",
      description_mobile: "5 Estrellas Latin <br/> NCAP",
    },
    airbag: {
      icon: HeroIcons.airbag,
      title: "Airbag",
      description: "6 <br/> Airbags",
      description_mobile: "6 Airbags <br/>",
    },
    adas: {
      icon: HeroIcons.adas,
      title: "ADAS",
      description: "Asistencias <br/> Avanzadas a <br/> la conducción",
      description_mobile: "Asistencias Avanzadas <br/> a la conducción",
    },
    radio: {
      icon: HeroIcons.radio,
      title: "Radio",
      description: 'Radio 10,25" <br/> con conectividad <br/> inalámbrica',
      description_mobile: 'Radio 10,25" con <br/> conectividad inalámbrica',
    },
    roof: {
      icon: HeroIcons.roof,
      title: "Roof",
      description: "Techo solar <br/> OneTouch <br/> + Safety",
      description_mobile: "Techo solar <br/> OneTouch + Safety",
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
            title: "Diseñado para abrir nuevos horizontes",
            description:
              "Su silueta dinámica y acabados elegantes proyectan una presencia segura y distintiva, reflejando carácter y estilo en cada rincón de la ciudad.",
          },
          {
            id: "exterior-rear",
            src: imageMap.sedan.exterior.rear,
            alt: "Rear light",
            title: "Faros traseros LED",
            description:
              "Detalles que marcan la diferencia. Su iluminación de vanguardia no solo realza el equipamiento, sino que se integra con armonía al diseño, destacando su carácter innovador.",
          },
          {
            id: "exterior-wheel",
            src: imageMap.sedan.exterior.wheel,
            alt: "Wheel",
            title: "Llantas de aleación diamantadas de 17'",
            description:
              "Con un diseño que impone personalidad y realza su perfil deportivo, el All-new K3 Sedán se destaca por su carácter audaz y contemporáneo.",
          },
          {
            id: "exterior-mirror",
            src: imageMap.sedan.exterior.mirror,
            alt: "Side mirror",
            title: "Faros delanteros LED c/ Corneling light",
            description:
              "Diseño frontal que cautiva a primera vista con su iluminación Star-map, que integra faros LED con función Cornering Light y luces diurnas con formato exclusivo.",
          },
          {
            id: "exterior-grille",
            src: imageMap.sedan.exterior.grille,
            alt: "Front grille",
            title: "Elegancia y estilo en movimiento",
            description:
              "Un diseño audaz, tecnología intuitiva y confort superior hacen del All-new K3 Sedán el compañero ideal para quienes buscan estilo y desempeño en cada viaje.",
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
            title: "Confort pensado al detalle",
            description:
              "Con un espacio interior muy amplio, el All-new K3 es innovador y confortable. Kia reinterpretó la selección y concentración de todos los elementos de diseño de una manera funcional.",
          },
          {
            id: "interior-panel",
            src: imageMap.sedan.interior.panel,
            alt: "Interior panel",
            title: "Apoyá. Cargá. Seguí tu camino",
            description:
              "Cargá tu smartphone de forma simple y sin cables: apoyalo en la base de carga inalámbrica y seguí conectado en todo momento. <br/> *Disponible para dispositivos compatibles con esta tecnología.",
          },
          {
            id: "interior-keys",
            src: imageMap.sedan.interior.keys,
            alt: "Interior keys",
            title: "Climatizador automático Bi-Zona",
            description:
              "Tanto si estás al volante como en el asiento del acompañante, cada uno puede ajustar su propio clima para disfrutar de un viaje cómodo y a medida.",
          },
          {
            id: "interior-air-conditioner",
            src: imageMap.sedan.interior.airConditioner,
            alt: "Interior air conditioner",
            title: "Infotainment full LCD 10,25'",
            description:
              "El All-new K3 se adelanta a su tiempo incorporando una pantalla táctil de alta definición, equipada con conectividad inalámbrica para Android Auto™ y Apple CarPlay™, que lleva la experiencia digital más allá de las expectativas.",
          },
          {
            id: "interior-gears",
            src: imageMap.sedan.interior.gears,
            alt: "gears",
            title: "Apertura con llave inteligente y botón de arranque",
            description:
              "Con la tecnología “Keyless”, accedé y arrancá tu All-new K3 con total comodidad, sin necesidad de sacar las llaves del bolsillo.",
          },
          {
            id: "interior-trunk",
            src: imageMap.sedan.interior.trunk,
            alt: "Panel de aire y radio",
            title: "Espacio sin límites, comodidad sin esfuerzo",
            description:
              "El baúl con apertura manos libres del All-new K3 Sedán destaca por su gran capacidad de 544 litros, ofreciendo el mayor espacio en comparación al resto del segmento.",
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
  menu: {
    etiqueta: { id: "brochures", link: imageMap.cross.etiqueta },
    fichas: { id: "technical-sheet", link: imageMap.cross.fichas },
  },
  heroInfo: {
    stars: {
      icon: HeroIcons.stars,
      title: "Stars",
      description: "5 <br/> Estrellas Latin <br/> NCAP",
      description_mobile: "5 Estrellas Latin <br/> NCAP",
    },
    airbag: {
      icon: HeroIcons.airbag,
      title: "Airbag",
      description: "6 <br/> Airbags",
      description_mobile: "6 Airbags <br/>",
    },
    adas: {
      icon: HeroIcons.adas,
      title: "ADAS",
      description: "Asistencias <br/> Avanzadas a <br/> la conducción",
      description_mobile: "Asistencias Avanzadas <br/> a la conducción",
    },
    radio: {
      icon: HeroIcons.radio,
      title: "Radio",
      description: 'Radio 10,25" <br/> con conectividad <br/> inalámbrica',
      description_mobile: 'Radio 10,25" con <br/> conectividad inalámbrica',
    },
    roof: {
      icon: HeroIcons.roof,
      title: "Roof",
      description: "Techo solar <br/> OneTouch <br/> + Safety",
      description_mobile: "Techo solar <br/> OneTouch + Safety",
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
          border: "#0B293B",
          color: "#124463",
          outline: "#0F3A54",
          thumbnail: imageMap.cross.colors.blue,
        },
        {
          id: "black",
          name: "Aurora Black Pearl",
          border: "#05141F",
          color: "#1B171B",
          outline: "#05141F",
          thumbnail: imageMap.cross.colors.black,
        },
        {
          id: "gray",
          name: "Steel Gray",
          border: "#4C4C4C",
          color: "#7E7E7E",
          outline: "#6B6B6B",
          thumbnail: imageMap.cross.colors.gray,
        },
        {
          id: "silver",
          name: "Silky Silver",
          border: "#817F7F",
          color: "#B8B6B6",
          outline: "#A6A4A4",
          thumbnail: imageMap.cross.colors.silver,
        },
        {
          id: "white",
          name: "Snow White Pearl",
          border: "#D6D6D6",
          color: "#F6F6F6",
          outline: "#EFEFEF",
          thumbnail: imageMap.cross.colors.white,
        },
      ],
      atributes: {
        category: "Atributos",
        title: "All-new K3 Cross",
        subtitle: "Aventura y estilo en cada recorrido",
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
            id: "exterior-front",
            src: imageMap.cross.exterior.grille,
            alt: "Faros",
            title: "Diseñado para abrir nuevos horizontes",
            description:
              "Sus contornos deportivos y detalles refinados transmiten una fuerza y compostura que inspiran personalidad y confianza en cada trayecto.",
          },
          {
            id: "exterior-front",
            src: imageMap.cross.exterior.front,
            alt: "Parabrisa",
            title: "Faros delanteros LED c/ Corneling light",
            description:
              "Uno de los elementos más llamativos de su diseño frontal es su conjunto lumínico delantero con faros LED, luces diurnas LED de estilo Star-Map en formato vertical y función Cornering Light.",
          },
          {
            id: "exterior-rear",
            src: imageMap.cross.exterior.rear,
            alt: "Rear light",
            title: "Llantas de aleación diamantadas de 17'",
            description:
              "El diseño definitivo que añade una dosis de actitud y deportividad al diseño del All-new K3.",
          },
          {
            id: "exterior-grille",
            src: imageMap.cross.exterior.wheel,
            alt: "Faros",
            title: "El All-new K3 Cross va más allá de lo conocido",
            description:
              "Con el All-new K3 Cross la diversión está garantizada, ofrece una experiencia de manejo entretenida, eficiente y dinámica que te dará la mejor experiencia al conducir.",
          },
          {
            id: "exterior-espejo",
            src: imageMap.cross.exterior.mirror,
            alt: "Espejo",
            title: "Faros traseros LED con barra horizontal",
            description:
              "Detalles que lo hacen único. Luces con estilo futurista, no sólo complementan el equipamiento, se fusiona con el diseño para hacerlo sobresalir.",
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
            title: "Modelo a seguir en espacio",
            description:
              "El All-new K3 reinterpreta la forma de conectarse con el interior, con elementos de diseño ergonómicos y que priorizan la funcionalidad, logra un espacio interior amplio, innovador y confortable.",
          },
          {
            id: "interior-seats",
            src: imageMap.cross.interior.panel,
            alt: "Baul 455",
            title: "Infotainment full LCD 10,25'",
            description:
              "El nuevo Kia K3 va un paso adelante en tecnología y conectividad con su sistema de entretenimiento con pantalla táctil de alta resolución con conectividad inalámbrica Android Auto™ y Apple CarPlay™.",
          },
          {
            id: "interior-keys",
            src: imageMap.cross.interior.box,
            alt: "Interior keys",
            title: "Apertura con llave inteligente y botón de arranque",
            description:
              'Abrí, cerrá y encendé el auto sin tener que buscar las llaves en tu bolsillo gracias a la llave inteligente "Keyless".',
          },
          {
            id: "interior-air-conditioner",
            src: imageMap.cross.interior.airConditioner,
            alt: "Interior air conditioner",
            title: "Climatizador automático Bi-Zona",
            description:
              "No importa si conducís o acompañás, podés personalizar de forma independiente tu temperatura ideal, asegurando el máximo confort en cada viaje.",
          },
          {
            id: "interior-panel",
            src: imageMap.cross.interior.keys,
            alt: "Interior keys",
            title: "Carga fácil, energía que no frena",
            description:
              "Ya no necesitás cables para mantener la carga de tu smartphone* al 100%. Sólo colocalo en la base de carga y seguí la aventura. <br/> *Disponible para dispositivos compatibles con esta tecnología.",
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
