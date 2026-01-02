// data.js
const playersData = [
    {
        id: "flora",
        name: "Flora",
        team: "Desesperdidos",
        imgBase: "img/player/3688_Flora.png",
        imgMiximax: "img/player/3934_Flora.png",
        imgArmadura: "img/player/3934_FloraArm.png",
        // Miximax principal
        hexOriginal: ["6A 29 68 DF E6 88 13 A2 A1 F8 0D AF 00 00 00 00 00 00 00 00 00 00 00 00 DC FA 01"],
        hexModified: ["6A 29 68 DF 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 64 14 02"],
        // Opciones extra dentro del mismo personaje
        subOptions: [
            {
                id: "flora_armadura",
                name: "ARMADURA",
                img: "img/player/3934_FloraArm.png", // Imagen específica si se activa
                hexOriginal: ["1F 07 5C 7A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF 35 30 5C F8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DC FA 01"],
                hexModified: ["1F 07 5C 7A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF 35 30 5C F8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 64 14 02"]
            }
        ]
    },
    {
        id: "arion",
        name: "Arion Sherwind",
        team: "Chrono Storm",
        imgBase: "img/player/2432_ArionSherwind.png",
        imgMiximax: "img/player/3900_ArionSherwind.png",
        hexOriginal: "FF 33 7C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 08 00 00 00 F2 59 01",
        hexModified: "FF 33 7C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 08 00 00 00 CA 0F 02"
    },
    {
        id: "drakul",
        name: "Drakul Desmodus",
        team: "Criaturas de la Noche",
        imgBase: "img/player/3672_DesmodusDrakul.png",
        imgMiximax: "img/player/3933_DesmodusDrakul.png",
        hexOriginal: "36 89 E8 50 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 96 E9 19 98 D1 99 07 95 00 00 00 00 BA 5E 46 A9 00 00 00 00 8E F6 01",
        hexModified: "36 89 E8 50 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 D6 14 02"
    },
    {
        id: "wolfram",
        name: "Wolfram Vulpeen",
        team: "Criaturas de la Noche",
        imgBase: "img/player/3662_WolframVulpeen.png",
        imgMiximax: "img/player/3932_WolframVulpeen.png",
        hexOriginal: "26 8C 6C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 43 5B 4F 69 04 2B 51 64 00 00 00 00 E5 08 25 89 00 00 00 00 12 F5 01",
        hexModified: "26 8C 6C 83 00 00 00 00 00 00 00 00 00 00 00 00 E9 BA 0D 66 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 B0 14 02"
    },
    {
        id: "arecks",
        name: "Ar Ecks",
        team: "Cascada Perfecta",
        imgBase: "img/player/3583_ArEcks.png",
        imgMiximax: "img/player/3923_ArEcks.png",
        hexOriginal: "B7 6C 7F F0 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 F7 50 38 CF B0 20 26 C2 00 00 00 00 00 00 00 00 00 00 00 00 A4 E9 01",
        hexModified: "B7 6C 7F F0 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 F7 50 38 CF B0 20 26 C2 00 00 00 00 00 00 00 00 00 00 00 00 34 13 02"
    },
    {
        id: "mercury",
        name: "Mercury",
        team: "Epsilon Plus",
        imgBase: "img/player/1076_Mercury.png",
        imgMiximax: "img/player/1076_Mercury.png",
        hexOriginal: "EF D7 4F 38 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF EE 59 FD C5 A9 29 E3 C8 00 00 00 00 CA 8C 03 A8 00 00 00 00 3E A0 00",
        hexModified: "EF D7 4F 38 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF EE 59 FD C5 A9 29 E3 C8 00 00 00 00 CA 8C 03 A8 00 00 00 00 F4 35 03"
    },
    {
        id: "romeo",
        name: "Romeo",
        team: "Protocolo Omega 3.0",
        imgBase: "img/player/3514_Romeo.png",
        imgMiximax: "img/player/3904_Romeo.png",
        hexOriginal: "E7 C6 46 8B 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 9A 3C 81 D1 AD C3 7F 14 3F E2 3A 3A 00 00 00 00 00 00 00 00 F6 E2 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF 6C 8D BA",
        hexModified: "E7 C6 46 8B 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 9A 3C 81 D1 AD C3 7F 14 3F E2 3A 3A 00 00 00 00 00 00 00 00 62 10 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF 54 73 C7"
    },
    {
        id: "gamma",
        name: "Gamma",
        team: "Protocolo Omega 3.0",
        imgBase: "img/player/3518_Gamma.png",
        imgMiximax: "img/player/3913_Gamma.png",
        hexOriginal: "9B B0 01 99 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 EA B3 61 19 AD C3 7F 14 00 00 00 00 00 00 00 00 00 00 00 00 8E E3 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF CC E6 F7",
        hexModified: "9B B0 01 99 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 EA B3 61 19 AD C3 7F 14 00 00 00 00 00 00 00 00 00 00 00 00 B8 11 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF 54 74 C7"
    },
    {
        id: "victor",
        name: "Victor Blade",
        team: "Chrono Storm",
        imgBase: "img/player/2433_VictorBlade.png",
        imgMiximax: "img/player/3898_VictorBlade.png",
        // Miximax base de Victor
        hexOriginal: ["C0 D3 67 4A 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 0A 00 00 00 3E 5A 01 00 00 00 00 00 01 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 FF BD D5 F1"],
        hexModified: ["C0 D3 67 4A 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 0A 00 00 00 7E 0F 02 00 00 00 00 00 01 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 FF 6B 96 C9"],
        subOptions: [
            {
                id: "victor_idolos",
                name: "ARM. ÍDOLOS",
                img: "", // Usa la imagen del miximax al estar vacío
                // Aquí van los dos bloques de los ídolos
                hexOriginal: [
                    "DD C0 9A FC 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 68 64 65 39 00 00 00 00 00 00 00 00 00 00 00 00 0A 00 00 00 3E 5A 01",
                    "EA AA 58 FD 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 7E 0F 02"
                ],
                hexModified: [
                    "DD C0 9A FC 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 68 64 65 39 00 00 00 00 00 00 00 00 00 00 00 00 0A 00 00 00 EC 4F 02",
                    "EA AA 58 FD 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 7E 0F 02"
                ]
            }
        ]
    },
    {
        id: "zanark",
        name: "Zanark",
        team: "Zanark Domain",
        imgBase: "img/player/3568_ZanarkAvalonic.png",
        imgMiximax: "img/player/3902_ZanarkAvalonic.png",
        hexOriginal: "AD 44 65 29 00 00 00 00 00 00 00 00 00 00 00 00 7A FC C4 54 52 83 64 04 15 F3 7A 09 00 00 00 00 00 00 00 00 00 00 00 00 6A E7 01",
        hexModified: "AD 44 65 29 00 00 00 00 00 00 00 00 00 00 00 00 7A FC C4 54 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 16 10 02"
    },
    {
        id: "zanarkZ",
        name: "Zanark",
        team: "Chrono Storm",
        imgBase: "img/player/3568_ZanarkAvalonic.png",
        imgMiximax: "img/player/3903_ZanarkAvalonic.png",
        hexOriginal: "AD 44 65 29 00 00 00 00 00 00 00 00 00 00 00 00 7A FC C4 54 52 83 64 04 15 F3 7A 09 00 00 00 00 00 00 00 00 00 00 00 00 6A E7 01",
        hexModified: "AD 44 65 29 00 00 00 00 00 00 00 00 00 00 00 00 7A FC C4 54 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 16 10 02"
    },
    {
        id: "sierra",
        name: "Sierra",
        team: "Protocolo Omega 3.0",
        imgBase: "img/player/3517_Sierra.png",
        imgMiximax: "img/player/3911_Sierra.png",
        hexOriginal: "AE 7D 84 5A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF EA B3 61 19 AD C3 7F 14 00 00 00 00 00 00 00 00 00 00 00 00 68 E3 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF CD E6 F7",
        hexModified: "AE 7D 84 5A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF EA B3 61 19 AD C3 7F 14 00 00 00 00 00 00 00 00 00 00 00 00 6C 11 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF 54 74 C7"
    },
    {
        id: "gabi",
        name: "Gabi",
        team: "Chrono Storm",
        imgBase: "img/player/2436_GabrielGarcia.png",
        imgMiximax: "img/player/3892_GabrielGarcia.png",
        hexOriginal: "34 EA 88 60 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 03 00 00 00 34 59 01",
        hexModified: "34 EA 88 60 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 03 00 00 00 9A 0E 02"
    },
    {
        id: "veewai",
        name: "Vee Wai",
        team: "Cascada Perfecta",
        imgBase: "img/player/3575_VeeWai.png",
        imgMiximax: "img/player/3915_VeeWai.png",
        hexOriginal: "BF E6 A6 38 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 87 DF D8 07 B0 20 26 C2 22 01 63 EC 00 00 00 00 00 00 00 00 74 E8 01",
        hexModified: "BF E6 A6 38 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 87 DF D8 07 B0 20 26 C2 22 01 63 EC 00 00 00 00 00 00 00 00 04 12 02"
    },
    {
        id: "bailong",
        name: "Bai Long",
        team: "Chrono Storm",
        imgBase: "img/player/2700_Bailong.png",
        imgMiximax: "img/player/3901_Bailong.png",
        hexOriginal: "F2 D4 DB 5F 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 AD 3A EF 9F EA 4A F1 92 00 00 00 00 00 00 00 00 07 00 00 00 04 7E 01",
        hexModified: "F2 D4 DB 5F 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 AD 3A EF 9F EA 4A F1 92 00 00 00 00 00 00 00 00 07 00 00 00 F0 0F 02"
    },
];