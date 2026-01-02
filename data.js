// data.js
const playersData = [
    {
        id: "flora_base",
        name: "Flora",
        team: "Desesperdidos",
        imgBase: "img/player/3688_Flora.png",
        imgMiximax: "img/player/3934_Flora.png",
        imgArmadura: "img/player/3934_FloraArm.png", // Imagen para cuando la armadura esté activa
        hexOriginal: "6A 29 68 DF E6 88 13 A2 A1 F8 0D AF 00 00 00 00 00 00 00 00 00 00 00 00 DC FA 01",
        hexModified: "6A 29 68 DF 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 64 14 02"
    },
    {
        id: "flora_armadura",
        name: "Flora (Armadura)",
        team: "Desesperdidos",
        isSubOption: true, // Esto evita que se cree una tarjeta nueva en el menú
        hexOriginal: "1F 07 5C 7A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF 35 30 5C F8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DC FA 01",
        hexModified: "1F 07 5C 7A 00 00 00 00 00 00 00 00 00 00 00 00 6A 29 68 DF 35 30 5C F8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 64 14 02"
    },
    {
        id: "arion",
        name: "Arion Sherwind",
        team: "Chrono Storm",
        imgBase: "img/player/2432_ArionSherwind.png",
        imgMiximax: "img/player/3900_ArionSherwind.png",
        hexOriginal: "FF 33 7C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 08 00 00 00 F2 59 01",
        hexModified: "FF 33 7C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 CA 0F 02"
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
        hexModified: "B7 6C 7F F0 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 34 13 02"
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
        team: "ProtocoloOmega3",
        imgBase: "img/player/3514_Romeo.png",
        imgMiximax: "img/player/3904_Romeo.png",
        hexOriginal: "E7 C6 46 8B 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 9A 3C 81 D1 AD C3 7F 14 3F E2 3A 3A 00 00 00 00 00 00 00 00 F6 E2 01",
        hexModified: "E7 C6 46 8B 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 62 10 02"
    },
    {
        id: "gamma",
        name: "Gamma",
        team: "ProtocoloOmega3",
        imgBase: "img/player/3518_Gamma.png",
        imgMiximax: "img/player/3913_Gamma.png",
        hexOriginal: "9B B0 01 99 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 EA B3 61 19 AD C3 7F 14 00 00 00 00 00 00 00 00 00 00 00 00 8E E3 01",
        hexModified: "9B B0 01 99 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 B8 11 02"
    },
    {
        id: "simeon",
        name: "Simeon",
        team: "Ragnah",
        imgBase: "img/player/3645_SimeonAyp.png",
        imgMiximax: "img/player/3931_SimeonAyp.png",
        hexOriginal: "94 F0 E1 87 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 24 7B CE FF 63 0B D0 F2 00 00 00 00 38 D7 C0 29 00 00 00 00 B2 F2 01",
        hexModified: "94 F0 E1 87 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 C8 53 02"
    },
    {
        id: "victor",
        name: "Victor Blade",
        team: "Chrono Storm",
        imgBase: "img/player/2433_VictorBlade.png",
        imgMiximax: "img/player/3898_VictorBlade.png",
        hexOriginal: "C0 D3 67 4A 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 74 B3 CB D5 33 C3 D5 D8 00 00 00 00 00 00 00 00 0A 00 00 00 3E 5A 01",
        hexModified: "C0 D3 67 4A 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 EE 1A 02"
    }
];