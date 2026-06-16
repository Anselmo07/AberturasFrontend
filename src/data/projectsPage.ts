import p1 from "../assets/heroAberturas.jpg";
import p2 from "../assets/heroAberturas.jpg";
import p3 from "../assets/heroAberturas.jpg";
import p4 from "../assets/heroAberturas.jpg";

export const projects = [
  {
    id: 1,
    title: "Quincho Aluminio Negro",
    category: "Quinchos",

    description:
      "Cerramiento completo realizado en aluminio negro con vidrios laminados.",

    images: [p1, p2, p3],
  },

  {
    id: 2,
    title: "Quincho Vidriado",
    category: "Quinchos",

    description:
      "Proyecto de quincho con vista panorámica y perfiles de aluminio.",

    images: [p2, p1, p4],
  },

  {
    id: 3,
    title: "Mampara Corrediza",
    category: "Mamparas",

    description:
      "Mampara a medida realizada con perfilería premium.",

    images: [p3, p1, p2],
  },

  {
    id: 4,
    title: "Roller Blackout",
    category: "Roller",

    description:
      "Sistema roller blackout instalado en vivienda particular.",

    images: [p4, p2, p1],
  },
];