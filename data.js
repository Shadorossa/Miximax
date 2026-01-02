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
        hexModified: "7A 70 47 32 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 D6 14 02"
    },
    {
        id: "wolfram",
        name: "Wolfram Vulpeen",
        team: "Criaturas de la Noche",
        imgBase: "img/player/3662_WolframVulpeen.png",
        imgMiximax: "img/player/3932_WolframVulpeen.png",
        hexOriginal: "26 8C 6C 83 00 00 00 00 00 00 00 00 00 00 00 00 CB 5C 09 00 43 5B 4F 69 04 2B 51 64 00 00 00 00 E5 08 25 89 00 00 00 00 12 F5 01",
        hexModified: "BD E6 06 7D 00 00 00 00 00 00 00 00 00 00 00 00 E9 BA 0D 66 10 BD 2B 9D 57 CD 35 90 00 00 00 00 00 00 00 00 00 00 00 00 B0 14 02"
    }
];