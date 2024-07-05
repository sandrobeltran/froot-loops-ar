import type { IAnimation } from "../types/customInterfaces";

export const animationsData: { [key: string]: IAnimation[] } = {
  "celula-animal": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            "La célula animal es una pequeña parte que forma a los animales, como las personas y los gatos. Tiene un centro llamado núcleo y muchas otras partes pequeñas que la ayudan a funcionar. No tiene una pared dura como las plantas.",
          label: "Célula Animal",
        },
      ],
    },
    {
      clip: "Nucleo",

      loop: "repeat",
      dataSections: [
        {
          description:
            "Contiene un núcleo definido que alberga el material genético (ADN).",
          image: "nucleo.webp",
          label: "Núcleo",
        },
      ],
    },
    {
      clip: "Lisosoma",
      loop: "repeat",
      dataSections: [
        {
          image: "lisosomas.webp",
          description:
            "Puede contener lisosomas, organelos encargados de la digestión celular y la eliminación de desechos.",
          label: "Lisosomas",
        },
      ],
    },
    {
      clip: "Mitocondria",
      loop: "repeat",
      dataSections: [
        {
          image: "mitocondria.webp",
          description:
            'Las mitocondrias son los "generadores de energía" de la célula animal. Producen ATP, la fuente principal de energía celular, mediante un proceso llamado respiración celular.',
          label: "Mitocondria",
        },
      ],
    },
    {
      clip: "Ribosomas",
      loop: "repeat",
      dataSections: [
        {
          image: "ribosomas.webp",
          description:
            'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
          label: "Ribosomas",
        },
      ],
    },
    {
      clip: "ReticuloEndo",
      loop: "repeat",
      dataSections: [
        {
          image: "reticulo-endoplasmatico.webp",
          description:
            "El retículo endoplasmático es una red de membranas que transporta proteínas y lípidos dentro de la célula. Existen dos tipos: el retículo endoplasmático rugoso (con ribosomas) y el liso (sin ribosomas).",
          label: "Retículo Endoplasmático",
        },
      ],
    },
    {
      clip: "Golgi",

      loop: "repeat",
      dataSections: [
        {
          image: "aparato-de-golgi.webp",
          description:
            'El complejo de Golgi es como el "centro de envío" de la célula. Modifica, empaca y distribuye proteínas y lípidos producidos en la célula, preparándolos para su exportación o uso interno.',
          label: "Aparato de Golgi",
        },
      ],
    },
    {
      clip: "Vacuola",
      loop: "repeat",
      dataSections: [
        {
          image: "vacuola.webp",
          description: "Descripción de la vacuola",
          label: "Vacuola",
        },
      ],
    },
    {
      clip: "Centriolo",
      loop: "repeat",
      dataSections: [
        {
          image: "centriolo.webp",
          description:
            "Presenta centríolos, que son importantes en la división celular.",
          label: "Centriolo",
        },
      ],
    },
  ],
  "celula-procariota": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Las células procariotas son células más simples y primitivas, sin un núcleo definido y con muy pocos organelos. El término "procariota" significa "antes del núcleo". Bacterias y arqueas son ejemplos de células procariotas.',
          label: "Célula Procariota",
        },
      ],
    },
    {
      clip: "Nucleoide",

      loop: "repeat",
      dataSections: [
        {
          description: "Descripción de nucleoide",
          image: "nucleoide.webp",
          label: "Nucleoide",
        },
      ],
    },
    {
      clip: "Plasmidos",
      loop: "repeat",
      dataSections: [
        {
          description: "Descripción de plasmidos",
          label: "Plasmidos",
          image: "plasmidos.webp",
        },
      ],
    },
    {
      clip: "Ribosomas",
      loop: "repeat",
      dataSections: [
        {
          description:
            'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
          label: "Ribosomas",
          image: "ribosomas.webp",
        },
      ],
    },
  ],
  "celula-eucariota": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
          label: "Célula Eucariota",
        },
      ],
    },
    {
      clip: "Nucleo",
      loop: "repeat",
      dataSections: [
        {
          description:
            "Contiene un núcleo definido que alberga el material genético (ADN).",
          label: "Núcleo",
          image: "nucleo.webp",
        },
      ],
    },
    {
      clip: "Lisosoma",
      loop: "repeat",
      dataSections: [
        {
          description:
            "Puede contener lisosomas, organelos encargados de la digestión celular y la eliminación de desechos.",
          label: "Lisosomas",
          image: "lisosomas.webp",
        },
      ],
    },
    {
      clip: "Mitocondria",
      loop: "repeat",
      dataSections: [
        {
          description:
            'Las mitocondrias son los "generadores de energía" de la célula animal. Producen ATP, la fuente principal de energía celular, mediante un proceso llamado respiración celular.',
          label: "Mitocondria",
          image: "mitocondria.webp",
        },
      ],
    },
    {
      clip: "Ribosomas",
      loop: "repeat",
      dataSections: [
        {
          description:
            'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
          label: "Ribosomas",
          image: "ribosomas.webp",
        },
      ],
    },
    {
      clip: "ReticuloEndo",
      loop: "repeat",
      dataSections: [
        {
          description:
            "El retículo endoplasmático es una red de membranas que transporta proteínas y lípidos dentro de la célula. Existen dos tipos: el retículo endoplasmático rugoso (con ribosomas) y el liso (sin ribosomas).",
          label: "Retículo Endoplasmático",
          image: "reticulo-endo.webp",
        },
      ],
    },
    {
      clip: "Golgi",
      loop: "repeat",
      dataSections: [
        {
          description:
            'El complejo de Golgi es como el "centro de envío" de la célula. Modifica, empaca y distribuye proteínas y lípidos producidos en la célula, preparándolos para su exportación o uso interno.',
          label: "Aparato de Golgi",
          image: "golgi.webp",
        },
      ],
    },
    {
      clip: "Vacuola",
      loop: "repeat",
      dataSections: [
        {
          description: "Descripción de la vacuola",
          label: "Vacuola",
          image: "vacuola.webp",
        },
      ],
    },
    {
      clip: "Centriolo",
      loop: "repeat",
      dataSections: [
        {
          description: "Descripción del Centriolo",
          label: "Centriolo",
          image: "centriolo.webp",
        },
      ],
    },
  ],
  "celula-vegetal": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            "La célula vegetal es lo que forma a las plantas, como los árboles y las flores. También tiene un núcleo, pero a diferencia de las células animales, tiene una pared dura que la rodea. Además, tiene cloroplastos, que son como pequeñas fábricas que convierten la luz del sol en energía.",
          label: "Célula Vegetal",
        },
      ],
    },
    {
      clip: "Nucleo",
      loop: "repeat",
      dataSections: [
        {
          image: "nucleo.webp",
          description: "Contiene un núcleo que alberga el material genético.",
          label: "Núcleo",
        },
      ],
    },
    {
      clip: "Cloroplastos",
      loop: "repeat",
      dataSections: [
        {
          image: "cloroplastos.webp",
          description:
            "Contiene cloroplastos, organelos que contienen clorofila y son esenciales para la fotosíntesis.",
          label: "Cloroplastos",
        },
      ],
    },
    {
      clip: "Vacuola",
      loop: "repeat",
      dataSections: [
        {
          image: "vacuola-central.webp",
          description:
            "Presenta una gran vacuola central que almacena agua, nutrientes y desechos.",
          label: "Vacuola Central",
        },
      ],
    },
    {
      clip: "ReticuloEndo",
      loop: "repeat",
      dataSections: [
        {
          image: "reticulo-endoplasmatico.webp",
          description:
            "Al igual que en la célula animal, la célula vegetal también posee retículo endoplasmático. Este sistema de membranas ayuda en la síntesis de proteínas y lípidos, transportando materiales a través de la célula.",
          label: "Retículo Endoplasmático",
        },
      ],
    },
    {
      clip: "Ribosomas",
      loop: "repeat",
      dataSections: [
        {
          image: "ribosomas.webp",
          description:
            "Los ribosomas en la célula vegetal participan en la síntesis de proteínas, ayudando a construir las estructuras esenciales para el funcionamiento celular.",
          label: "Ribosomas",
        },
      ],
    },
    {
      clip: "Golgi",
      loop: "repeat",
      dataSections: [
        {
          image: "aparato-de-golgi.webp",
          description:
            "El complejo de Golgi en la célula vegetal modifica, empaca y distribuye proteínas y lípidos. Juega un papel crucial en la secreción y el transporte de sustancias dentro y fuera de la célula.",
          label: "Aparato de Golgi",
        },
      ],
    },
    {
      clip: "Mitocondria",
      loop: "repeat",
      dataSections: [
        {
          image: "mitocondria.webp",
          description:
            "Las mitocondrias en la célula vegetal, al igual que en la célula animal, son los sitios de producción de energía mediante la respiración celular. Generan ATP para alimentar diversas actividades celulares.",
          label: "Mitocondria",
        },
      ],
    },
  ],
  "celula-sanguinea": [
    {
      clip: "Celula",
      loop: "repeat",
      dataSections: [
        {
          description:
            'Son como los "mensajeros del cuerpo". Las células sanguíneas viajan por todo el cuerpo para llevar oxígeno, nutrientes y ayudar a combatir las enfermedades.',
          label: "Célula Sanguínea",
        },
      ],
    },
  ],
  "celula-muscular": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Son como los "motores del cuerpo". Las células musculares trabajan juntas para hacer que nuestros músculos se contraigan y nos movamos.',
          label: "Célula Muscular",
        },
      ],
    },
  ],
  neurona: [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Son como las "mensajeras eléctricas". Las neuronas llevan mensajes rápidos alrededor del cuerpo, permitiéndonos ver, oír, sentir y pensar.',
          label: "Neurona",
        },
      ],
    },
  ],
  piel: [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Son como el "escudo protector". Las células de la piel forman una capa que protege nuestro cuerpo contra gérmenes y ayuda a regular la temperatura.',
          label: "Piel",
        },
      ],
    },
  ],
  "celula-osea": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Son como los "constructores de huesos". Las células óseas trabajan juntas para formar y mantener nuestros huesos fuertes y resistentes.',
          label: "Célula Ósea",
        },
      ],
    },
  ],
  "tejido-vegetal": [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            "Los tejidos vegetales están formados por células que se unen para realizar diferentes funciones, como la fotosíntesis, el transporte de agua y el soporte estructural. ",
          label: "Tejido Vegetal",
        },
      ],
    },
  ],
  prueba: [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
          label: "Célula Eucariota",
        },
      ],
    },
  ],
  emission: [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
          label: "Prueba de emission",
        },
      ],
    },
  ],
  bsdf: [
    {
      clip: "Celula",
      dataSections: [
        {
          description:
            'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
          label: "Prueba de BSDF",
        },
      ],
    },
  ],
};

export const celulaReproductivaAnimations: IAnimation[] = [
  {
    clip: "Celula",
    loop: "repeat",
    dataSections: [
      {
        description:
          'Son como los "creadores de la vida". Las células reproductivas, como los óvulos y espermatozoides, se combinan para formar nuevas células y dar origen a nuevos seres vivos.',
        image: "",
        label: "Célula Reproductiva",
      },
    ],
  },
];
