var config = {
    style: 'mapbox://styles/nereagr/cmfr5assf00jc01s4a8b217og',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibmVyZWFnciIsImEiOiJjbWZrMzJibXQxMHExMmpxcWhscmU0NHhsIn0.ELlzMBnLaf1fRBA2xa2pZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'INFRAESTRUCTURAS DE GENERACIÓN DE ENERGÍA EN TENERIFE',
    subtitle: 'Un análisis de las principales plantas renovables y su contribución a la transición energética en la isla.',
    byline: 'Nerea García Rollán',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'introtenerife',
            alignment: 'left',
            hidden: false,
            title: 'PANORAMA DE LA ENERGÍA RENOVABLE EN TENERIFE',
            image: 'https://celdares.mx/wp-content/uploads/2021/05/panelessolares-vs-energiaeolica.jpg',
            description: 'Tenerife avanza hacia un modelo energético sostenible con el impulso de infraestructuras renovables que aprovechan el sol y el viento. Este proyecto muestra las principales plantas fotovoltaicas y parques eólicos que contribuyen a la transición energética de la isla, destacando su ubicación y capacidad instalada',
            
            location: {
                center: [-16.59251, 28.25921],
                zoom: 8.14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'introtenerife2',
            alignment: 'right',
            hidden: false,
            title: 'ESTADO Y DISTRIBUCIÓN DE LAS INFRAESTRUCTURAS RENOVABLES',
            image: 'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/598f6dfe07530ffd8e998998fbf336c0/382770cd-6b64-4c00-8522-17b8fb4d2a8e/3898f0db.png',
            description: 'Tenerife cuenta con 12 instalaciones principales de energía renovable, sumando 99.6 MW de potencia instalada dividida en 8 plantas fotovoltaicas (41.2 MW) y 4 parques eólicos (58.4 MW). Estas infraestructuras aprovechan el sol y el viento de la isla para impulsar la transición hacia un modelo energético sostenible.<br><br>La energía eólica representa el 58.6% de la capacidad, reflejando las condiciones de viento favorables, especialmente en las zonas altas de Tenerife. Las instalaciones varían desde pequeñas plantas piloto hasta grandes parques eólicos, contribuyendo a la descarbonización del archipiélago.',
            
            location: {
                center: [-16.54286, 28.28827],
                zoom: 9.75,
                pitch: 55,
                bearing: -24
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'introtenerife3',
            alignment: 'center',
            hidden: false,
            title: 'PRINCIPALES INFRAESTRUCTURAS DE TENERIFE',
            image: 'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/087e8c232dea01b018ebd8472731e09d/bea22c4f-229d-4858-b8b7-9e6df019b3cd/d498a624.png',
            description: 'Las cuatro instalaciones más importantes de Tenerife representan el 67% de toda la potencia renovable instalada en la isla. Los parques eólicos La Roca (18,4 MW) y CAT (18,4 MW) lideran la capacidad instalada, seguidos por Areté (16,8 MW) y la planta fotovoltaica Solten I (13 MW). Estas infraestructuras, gestionadas principalmente por ITER, pueden abastecer conjuntamente más de 35.000 hogares y evitan la emisión anual de más de 216.000 toneladas de CO₂ a la atmósfera.',
            
            location: {
                center: [-16.48506, 28.34874],
                zoom: 10.21,
                pitch: 67.50,
                bearing: 145.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'planta1',
            alignment: 'right',
            hidden: false,
            title: 'PARQUE LA ROCA',
            image: 'https://www.iter.es/wp-content/uploads/2024/04/Paqrue-55_-ITER.jpg',
            description: 'El Parque Eólico La Roca, con 19,130 kW de potencia instalada, está formado por tres aerogeneradores Enercon E-92 de 2.350 kW y cuatro aerogeneradores Enercon E82 E4 de 3.020 kW. Ubicado en el Polígono Industrial de Granadilla, forma parte de un proyecto de inversión estratégica de 29 millones de euros junto con Areté. Las obras finalizaron en 2018 y el parque fue declarado de Interés General por el Gobierno de Canarias.',
            location: {
                center: [-16.51557680496288, 28.08638554737609],
                zoom: 16,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'planta2',
            alignment: 'left',
            hidden: false,
            title: 'PARQUE CAT',
            image: 'https://diariodeavisos.elespanol.com/wp-content/uploads/2016/03/parque-eolico.jpg',
            description: 'El Parque Eólico del Complejo Medioambiental de Arico (CAT) cuenta con 18,4 MW de potencia y está formado por ocho aerogeneradores Enercon E-92 de 2.350 kW cada uno. Ubicado cerca de la zona del Lomo del Arrastradero, forma parte de los tres parques promovidos por ITER tras el concurso público de 2007. El proyecto incluye co-financiación del Marco Estratégico de Desarrollo Insular (MEDI) y el Fondo de Desarrollo de Canarias.',
            location: {
                center: [-16.482718, 28.121992],
                zoom: 16,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'planta3',
            alignment: 'center',
            hidden: false,
            title: 'PARQUE ARETÉ',
            image: 'https://reve.aeeolica.org/wp-content/uploads/2015/09/canarias-e%C3%B3lica.jpg',
            description: 'El Parque Eólico Areté dispone de 17,790 kW distribuidos en cinco aerogeneradores Enercon E-92 de 2.350 kW y dos aerogeneradores Enercon E82 E4 de 3.020 kW. Ubicado en Granadilla de Abona, las obras comenzaron en julio de 2018 como parte del proyecto conjunto con La Roca. Cuenta con subestación transformadora propia y conexión a la red de 66 kV, siendo operado por ITER.',
            location: {
                center: [-16.504877941033765, 28.07884566286583],
                zoom: 16,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'planta4',
            alignment: 'right',
            hidden: false,
            title: 'PLANTA SOLTEN I',
            image: 'https://www.iter.es/wp-content/uploads/2015/11/2006_SOLTENI.jpg',
            description: 'La plataforma Solten I es una instalación fotovoltaica pionera de 13 MW ubicada en el Polígono Industrial de Granadilla, compuesta por 130 plantas de 100 kW cada una. Promovida por ITER desde 2005, fue considerada la mayor planta fotovoltaica de Europa en su momento. Cada planta pertenece a un titular diferente, actuando ITER como promotor, instalador y mantenedor. Utiliza inversores modelo TEIDE 100 diseñados por ITER y estructuras soporte de aluminio modulares.',
            location: {
                center: [-16.52524, 28.06986],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            alignment: 'center',
            hidden: false,
            title: 'HACIA UN FUTURO ENERGÉTICO SOSTENIBLE',
            image: 'https://www.iter.es/wp-content/uploads/2015/12/quienessomos.jpg',
            description: 'Tenerife se encuentra en un momento decisivo para su futuro energético. Las infraestructuras actuales representan solo el comienzo de una transformación que debe acelerar significativamente para alcanzar los objetivos de descarbonización. Con el Plan Nacional Integrado de Energía y Clima (PNIEC), Canarias se ha comprometido a alcanzar el 58% de penetración renovable para 2030, lo que requerirá multiplicar considerablemente la capacidad instalada actual.<br><br>El desarrollo de nuevas tecnologías como la geotermia, con inversiones superiores a 80 millones de euros en Tenerife, y los proyectos de almacenamiento energético con 186 MWh adicionales previstos, marcan el camino hacia un sistema 100% descarbonizado. La isla cuenta con el respaldo institucional necesario: 313 millones de euros destinados por la Consejería de Transición Ecológica para 2025 y las Zonas de Aceleración de Renovables (ZAR) ya en desarrollo.',
            location: {
                center: [-16.51429, 28.30508],
                zoom: 9.9,
                pitch: 49.5,
                bearing: -23.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
