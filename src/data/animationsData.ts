import type { IAnimation } from "../types/customInterfaces";

export const animationsData: { [key: string]: IAnimation[] } = {
    "celula-animal": [
        {
            clip: "*",
            description: 'La célula animal es una pequeña parte que forma a los animales, como las personas y los gatos. Tiene un centro llamado núcleo y muchas otras partes pequeñas que la ayudan a funcionar. No tiene una pared dura como las plantas.',
            label: "Célula Animal"

        },
        {
            clip: "MembranaCelular.idle",
            description: "La célula animal tiene una membrana celular que rodea y protege la célula.",
            label: "Membrana Celular",
            loop: false,
            image: "membrana-celular.png"
        },
        {
            clip: "Nucleo.idle",
            description: "Contiene un núcleo definido que alberga el material genético (ADN).",
            label: "Núcleo",
            loop: false,
            image: "nucleo.png"
        }, {
            clip: "Citoplasma.idle",
            description: "En el citoplasma, se encuentran diversos organelos, como las mitocondrias para la producción de energía y el retículo endoplásmico para la síntesis de proteínas.",
            label: "Citoplasma",
            loop: false,
            image: "citoplasma.png"
        }, {
            clip: "Lisosomas.idle",
            description: "Puede contener lisosomas, organelos encargados de la digestión celular y la eliminación de desechos.",
            label: "Lisosomas",
            loop: false,
            image: "lisosomas.png"
        },
        {
            clip: "Centriolo.idle",
            description: "Presenta centríolos, que son importantes en la división celular.",
            label: "Centriolo",
            loop: false,
            image: "centriolo.png"
        },
        {
            clip: "Mitocondria.idle",
            description: 'Las mitocondrias son los "generadores de energía" de la célula animal. Producen ATP, la fuente principal de energía celular, mediante un proceso llamado respiración celular.',
            label: "Mitocondria",
            loop: false,
            image: "mitocondria.png"
        },
        {
            clip: "Cromosomas.idle",
            description: "Los cromosomas contienen el material genético (ADN) de la célula animal. Se encuentran dentro del núcleo y llevan la información genética necesaria para el funcionamiento celular y la herencia.",
            label: "Cromosomas",
            loop: false,
            image: "cromosomas.png"
        },
        {
            clip: "MembranaNuclear.idle",
            description: 'La membrana nuclear rodea el núcleo y actúa como una "barrera de seguridad". Regula el paso de sustancias dentro y fuera del núcleo, protegiendo así el material genético.',
            label: "Membrana Nuclear",
            loop: false,
            image: "membrana-nuclear.png"
        },
        {
            clip: "Ribosomas.idle",
            description: 'Los ribosomas son los "constructores de proteínas" de la célula animal. Participan en la síntesis de proteínas utilizando las instrucciones codificadas en el ARN mensajero.',
            label: "Ribosomas",
            loop: false,
            image: "ribosomas.png"
        },
        {
            clip: "ReticuloEndoplasmatico.idle",
            description: "El retículo endoplasmático es una red de membranas que transporta proteínas y lípidos dentro de la célula. Existen dos tipos: el retículo endoplasmático rugoso (con ribosomas) y el liso (sin ribosomas).",
            label: "Retículo Endoplasmático",
            loop: false,
            image: "reticulo-endoplasmatico.png"
        },
        {
            clip: "AparatoDeGolgi.idle",
            description: 'El complejo de Golgi es como el "centro de envío" de la célula. Modifica, empaca y distribuye proteínas y lípidos producidos en la célula, preparándolos para su exportación o uso interno.',
            label: "Aparato de Golgi",
            loop: false,
            image: "aparato-de-golgi.png"
        },
    ],
    "celula-procariota": [
        {
            clip: "*",
            description: 'Las células procariotas son células más simples y primitivas, sin un núcleo definido y con muy pocos organelos. El término "procariota" significa "antes del núcleo". Bacterias y arqueas son ejemplos de células procariotas.',
            label: "Célula Procariota"

        },
        {
            clip: "Nucleoide.idle",
            description: "El nucleoide es la parte de la célula procariota donde se encuentra el ADN. A diferencia de las células eucariotas, no está separado por una membrana.",
            label: "Nucleoide",
            loop: false,
            image: "nucleoide.png"
        },
        {
            clip: "Flagelo.idle",
            description: 'El flagelo es una especie de "cola" que tienen algunas células procariotas. Sirve para moverse como si fuera un pequeño motor que las empuja por el agua u otros líquidos.',
            label: "Flagelo",
            loop: false,
            image: "flagelo.png"
        },
        {
            clip: "ParedCelular.idle",
            description: 'La pared celular es una capa extra dura que rodea la célula procariota. Le da forma y la protege. Las células de las plantas también tienen una pared celular, pero es un poco diferente.',
            label: "Pared Celular",
            loop: false,
            image: "pared-celular.png"
        }, {
            clip: "MembranaPlasmática.idle",
            description: 'La membrana plasmática es la capa que rodea a todas las células, tanto eucariotas como procariotas. Funciona como una puerta que deja entrar y salir cosas necesarias para la célula.',
            label: "Membrana Plasmática",
            loop: false,
            image: "membrana-plasmatica.png"
        },
    ],
    "celula-eucariota": [
        {
            clip: "*",
            description: 'Las células eucariotas son células más avanzadas y complejas. Tienen un núcleo bien definido y muchos "orgánulos" o estructuras internas que cumplen diferentes funciones. Se encuentran en plantas, animales, hongos y protistas.',
            label: "Célula Eucariota"

        },
        {
            clip: "Nucleolo.idle",
            description: "El nucleolo es una parte pequeña dentro del núcleo de la célula eucariota. Aquí es donde se hacen los ribosomas, que son como pequeñas fábricas para crear proteínas.",
            label: "Nucléolo",
            loop: false,
            image: "nucleolo.png"
        },
        {
            clip: "Mitocondria.idle",
            description: 'Las mitocondrias son conocidas como las "centrales energéticas" de la célula. Producen energía a partir de los alimentos que comemos para que la célula pueda hacer su trabajo.',
            label: "Mitocondria",
            loop: false,
            image: "mitocondria.png"
        },
        {
            clip: "Nucleo.idle",
            description: 'El núcleo es el "centro de control" de la célula eucariota. Contiene el ADN, que es como un libro de instrucciones para el crecimiento y funcionamiento de la célula.',
            label: "Núcleo",
            loop: false,
            image: "nucleo.png"
        }, {
            clip: "Ribosomas.idle",
            description: 'Los ribosomas son pequeñas fábricas en la célula que crean proteínas. Las proteínas son esenciales para el crecimiento y la reparación de la célula. Los dos tipos principales de células eucariotas son las células animales y las células vegetales.',
            label: "Ribosomas",
            loop: false,
            image: "ribosomas.png"
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
            loop: false
        }, {
            clip: "ParedCelular.idle",
            description: "Además de la membrana, la célula vegetal está rodeada por una pared celular resistente y rígida compuesta principalmente de celulosa.",
            image: "pared-celular.png",
            label: "Pared Celular",
            loop: false
        }, {
            clip: "Nucleo.idle",
            description: "Contiene un núcleo que alberga el material genético.",
            image: "nucleo.png",
            label: "Núcleo",
            loop: false
        }, {
            clip: "Citoplasma.idle",
            description: "Alberga organelos como las mitocondrias para la producción de energía y el retículo endoplásmico para la síntesis de proteínas.",
            image: "citoplasma.png",
            label: "Citoplasma",
            loop: false
        }, {
            clip: "Cloroplastos.idle",
            description: "Contiene cloroplastos, organelos que contienen clorofila y son esenciales para la fotosíntesis.",
            image: "cloroplastos.png",
            label: "Cloroplastos",
            loop: false
        }, {
            clip: "VacuolaCentral.idle",
            description: "Presenta una gran vacuola central que almacena agua, nutrientes y desechos.",
            image: "vacuola-central.png",
            label: "Vacuola Central",
            loop: false
        },
        {
            clip: "ReticuloEndoplasmatico.idle",
            description: "Al igual que en la célula animal, la célula vegetal también posee retículo endoplasmático. Este sistema de membranas ayuda en la síntesis de proteínas y lípidos, transportando materiales a través de la célula.",
            image: "reticulo-endoplasmatico.png",
            label: "Retículo Endoplasmático",
            loop: false
        }, {
            clip: "Ribosomas.idle",
            description: "Los ribosomas en la célula vegetal participan en la síntesis de proteínas, ayudando a construir las estructuras esenciales para el funcionamiento celular.",
            image: "ribosomas.png",
            label: "Ribosomas",
            loop: false
        },
        {
            clip: "MembranaNuclear.idle",
            description: "Al igual que en la célula animal, la célula vegetal tiene una membrana nuclear que rodea el núcleo, actuando como una barrera protectora y reguladora del paso de sustancias.",
            image: "membrana-nuclear.png",
            label: "Membrana Nuclear",
            loop: false
        },
        {
            clip: "AparatoDeGolgi.idle",
            description: "El complejo de Golgi en la célula vegetal modifica, empaca y distribuye proteínas y lípidos. Juega un papel crucial en la secreción y el transporte de sustancias dentro y fuera de la célula.",
            image: "aparato-de-golgi.png",
            label: "Aparato de Golgi",
            loop: false
        },
        {
            clip: "Mitocondria.idle",
            description: "Las mitocondrias en la célula vegetal, al igual que en la célula animal, son los sitios de producción de energía mediante la respiración celular. Generan ATP para alimentar diversas actividades celulares.",
            image: "mitocondria.png",
            label: "Mitocondria",
            loop: false
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
            clip: "*",
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
    ]
}