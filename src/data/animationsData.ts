import type { IAnimation } from "../types/customInterfaces";

export const animationsData: { [key: string]: IAnimation[] } = {
    "celula-animal": [
        {
            clip: "Celula",
            description: 'La célula animal es una pequeña parte que forma a los animales, como las personas y los gatos. Tiene un centro llamado núcleo y muchas otras partes pequeñas que la ayudan a funcionar. No tiene una pared dura como las plantas.',
            label: "Célula Animal"
        },
        {
            clip: "Nucleo",
            description: "Contiene un núcleo definido que alberga el material genético (ADN).",
            label: "Núcleo",
            loop: "repeat",
            image: "nucleo.png"
        }, {
            clip: "Lisosoma",
            description: "Puede contener lisosomas, organelos encargados de la digestión celular y la eliminación de desechos.",
            label: "Lisosomas",
            loop: "repeat",
            image: "lisosomas.png"
        },
        {
            clip: "Mitocondria",
            description: 'Las mitocondrias son los "generadores de energía" de la célula animal. Producen ATP, la fuente principal de energía celular, mediante un proceso llamado respiración celular.',
            label: "Mitocondria",
            loop: "repeat",
            image: "mitocondria.png"
        },
        {
            clip: "Ribosomas",
            description: 'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
            label: "Ribosomas",
            loop: "repeat",
            image: "ribosomas.png"
        },
        {
            clip: "ReticuloEndo",
            description: "El retículo endoplasmático es una red de membranas que transporta proteínas y lípidos dentro de la célula. Existen dos tipos: el retículo endoplasmático rugoso (con ribosomas) y el liso (sin ribosomas).",
            label: "Retículo Endoplasmático",
            loop: "repeat",
            image: "reticulo-endoplasmatico.png"
        },
        {
            clip: "Golgi",
            description: 'El complejo de Golgi es como el "centro de envío" de la célula. Modifica, empaca y distribuye proteínas y lípidos producidos en la célula, preparándolos para su exportación o uso interno.',
            label: "Aparato de Golgi",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
        {
            clip: "Vacuola",
            description: 'Descripción de la vacuola',
            label: "Vacuola",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
        {
            clip: "Centriolo",
            description: 'Descripción del Centriolo',
            label: "Centriolo",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
    ],
    "celula-procariota": [
        {
            clip: "Celula",
            description: 'Las células procariotas son células más simples y primitivas, sin un núcleo definido y con muy pocos organelos. El término "procariota" significa "antes del núcleo". Bacterias y arqueas son ejemplos de células procariotas.',
            label: "Célula Procariota"
        },
        {
            clip: "Nucleoide",
            description: "Descripción de nucleoide",
            label: "Nucleoide",
            loop: "repeat",
            image: "nucleo.png"
        }, {
            clip: "Plasmidos",
            description: "Descripción de plasmidos",
            label: "Plasmidos",
            loop: "repeat",
            image: "lisosomas.png"
        },
        {
            clip: "Ribosomas",
            description: 'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
            label: "Ribosomas",
            loop: "repeat",
            image: "ribosomas.png"
        },
    ],
    "celula-eucariota": [
        {
            clip: "Celula",
            description: 'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
            label: "Célula Eucariota"
        },
        {
            clip: "Nucleo",
            description: "Contiene un núcleo definido que alberga el material genético (ADN).",
            label: "Núcleo",
            loop: "repeat",
            image: "nucleo.png"
        }, {
            clip: "Lisosoma",
            description: "Puede contener lisosomas, organelos encargados de la digestión celular y la eliminación de desechos.",
            label: "Lisosomas",
            loop: "repeat",
            image: "lisosomas.png"
        },
        {
            clip: "Mitocondria",
            description: 'Las mitocondrias son los "generadores de energía" de la célula animal. Producen ATP, la fuente principal de energía celular, mediante un proceso llamado respiración celular.',
            label: "Mitocondria",
            loop: "repeat",
            image: "mitocondria.png"
        },
        {
            clip: "Ribosomas",
            description: 'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
            label: "Ribosomas",
            loop: "repeat",
            image: "ribosomas.png"
        },
        {
            clip: "ReticuloEndo",
            description: "El retículo endoplasmático es una red de membranas que transporta proteínas y lípidos dentro de la célula. Existen dos tipos: el retículo endoplasmático rugoso (con ribosomas) y el liso (sin ribosomas).",
            label: "Retículo Endoplasmático",
            loop: "repeat",
            image: "reticulo-endoplasmatico.png"
        },
        {
            clip: "Golgi",
            description: 'El complejo de Golgi es como el "centro de envío" de la célula. Modifica, empaca y distribuye proteínas y lípidos producidos en la célula, preparándolos para su exportación o uso interno.',
            label: "Aparato de Golgi",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
        {
            clip: "Vacuola",
            description: 'Descripción de la vacuola',
            label: "Vacuola",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
        {
            clip: "Centriolo",
            description: 'Descripción del Centriolo',
            label: "Centriolo",
            loop: "repeat",
            image: "aparato-de-golgi.png"
        },
    ],
    "celula-vegetal": [
        {
            clip: "*",
            description: 'La célula vegetal es lo que forma a las plantas, como los árboles y las flores. También tiene un núcleo, pero a diferencia de las células animales, tiene una pared dura que la rodea. Además, tiene cloroplastos, que son como pequeñas fábricas que convierten la luz del sol en energía.',
            label: "Célula Vegetal"

        },
        {
            clip: "Membrana Celular",
            description: "Al igual que la célula animal, la célula vegetal tiene una membrana celular.",
            image: "membrana-celular.png",
            label: "Membrana Celular",
            loop: "repeat"
        }, {
            clip: "ParedCelular.idle",
            description: "Además de la membrana, la célula vegetal está rodeada por una pared celular resistente y rígida compuesta principalmente de celulosa.",
            image: "pared-celular.png",
            label: "Pared Celular",
            loop: "repeat"
        }, {
            clip: "Nucleo.idle",
            description: "Contiene un núcleo que alberga el material genético.",
            image: "nucleo.png",
            label: "Núcleo",
            loop: "repeat"
        }, {
            clip: "Citoplasma.idle",
            description: "Alberga organelos como las mitocondrias para la producción de energía y el retículo endoplásmico para la síntesis de proteínas.",
            image: "citoplasma.png",
            label: "Citoplasma",
            loop: "repeat"
        }, {
            clip: "Cloroplastos.idle",
            description: "Contiene cloroplastos, organelos que contienen clorofila y son esenciales para la fotosíntesis.",
            image: "cloroplastos.png",
            label: "Cloroplastos",
            loop: "repeat"
        }, {
            clip: "VacuolaCentral.idle",
            description: "Presenta una gran vacuola central que almacena agua, nutrientes y desechos.",
            image: "vacuola-central.png",
            label: "Vacuola Central",
            loop: "repeat"
        },
        {
            clip: "ReticuloEndoplasmatico.idle",
            description: "Al igual que en la célula animal, la célula vegetal también posee retículo endoplasmático. Este sistema de membranas ayuda en la síntesis de proteínas y lípidos, transportando materiales a través de la célula.",
            image: "reticulo-endoplasmatico.png",
            label: "Retículo Endoplasmático",
            loop: "repeat"
        }, {
            clip: "Ribosomas.idle",
            description: "Los ribosomas en la célula vegetal participan en la síntesis de proteínas, ayudando a construir las estructuras esenciales para el funcionamiento celular.",
            image: "ribosomas.png",
            label: "Ribosomas",
            loop: "repeat"
        },
        {
            clip: "MembranaNuclear.idle",
            description: "Al igual que en la célula animal, la célula vegetal tiene una membrana nuclear que rodea el núcleo, actuando como una barrera protectora y reguladora del paso de sustancias.",
            image: "membrana-nuclear.png",
            label: "Membrana Nuclear",
            loop: "repeat"
        },
        {
            clip: "AparatoDeGolgi.idle",
            description: "El complejo de Golgi en la célula vegetal modifica, empaca y distribuye proteínas y lípidos. Juega un papel crucial en la secreción y el transporte de sustancias dentro y fuera de la célula.",
            image: "aparato-de-golgi.png",
            label: "Aparato de Golgi",
            loop: "repeat"
        },
        {
            clip: "Mitocondria.idle",
            description: "Las mitocondrias en la célula vegetal, al igual que en la célula animal, son los sitios de producción de energía mediante la respiración celular. Generan ATP para alimentar diversas actividades celulares.",
            image: "mitocondria.png",
            label: "Mitocondria",
            loop: "repeat"
        },

    ],
    "celula-sanguinea": [
        {
            clip: "*",
            description: 'Son como los "mensajeros del cuerpo". Las células sanguíneas viajan por todo el cuerpo para llevar oxígeno, nutrientes y ayudar a combatir las enfermedades.',
            label: "Célula Sanguínea",
        },
    ], "celula-muscular": [
        {
            clip: "*",
            description: 'Son como los "motores del cuerpo". Las células musculares trabajan juntas para hacer que nuestros músculos se contraigan y nos movamos.',
            label: "Célula Muscular",
        },
    ], "neurona": [
        {
            clip: "*",
            description: 'Son como las "mensajeras eléctricas". Las neuronas llevan mensajes rápidos alrededor del cuerpo, permitiéndonos ver, oír, sentir y pensar.',
            label: "Neurona",
        },
    ], "piel": [
        {
            clip: "Celula",
            description: 'Son como el "escudo protector". Las células de la piel forman una capa que protege nuestro cuerpo contra gérmenes y ayuda a regular la temperatura.',
            label: "Piel",
        },
    ], "celula-osea": [
        {
            clip: "*",
            description: 'Son como los "constructores de huesos". Las células óseas trabajan juntas para formar y mantener nuestros huesos fuertes y resistentes.',
            label: "Célula Ósea",
        },
    ], "celula-reproductiva": [
        {
            clip: "*",
            description: 'Son como los "creadores de la vida". Las células reproductivas, como los óvulos y espermatozoides, se combinan para formar nuevas células y dar origen a nuevos seres vivos.',
            label: "Célula Reproductiva",
        },
    ],
    "prueba": [
        {
            clip: "Celula",
            description: 'Son como los "creadores de la vida". Las células reproductivas, como los óvulos y espermatozoides, se combinan para formar nuevas células y dar origen a nuevos seres vivos.',
            label: "Célula Reproductiva",
        },
        {
            clip: "Mitocondria",
            description: 'Animación de escalado del mitocondria',
            label: "Mitocondria",
            loop: "repeat"
        },
    ]
}