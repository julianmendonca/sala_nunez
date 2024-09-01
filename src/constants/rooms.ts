import sala1_1 from "../assets/sala-1/1.jpg";
import sala1_2 from "../assets/sala-1/2.jpg";
import sala1_3 from "../assets/sala-1/3.jpg";
import sala1_4 from "../assets/sala-1/4.jpg";
import sala2_1 from "../assets/sala-2/salas-nunez-sala-2.jpg";
import sala2_2 from "../assets/sala-2/amplificador-de-bajo-sala-2.jpg";
import sala2_3 from "../assets/sala-2/amplificador-orange-sala-2.jpg";
import sala2_4 from "../assets/sala-2/sala-2-amplificador-vox.jpg";
import sala2_5 from "../assets/sala-2/sala-2-nunez-bateria.jpg";
import sala2_6 from "../assets/sala-2/sala-2-nunez.jpg";
import sala3_1 from "../assets/sala-3/sala-de-ensayo-nunez.png";
import sala3_2 from "../assets/sala-3/sala-3-sala-nunez.png";
import sala3_3 from "../assets/sala-3/20230807_151020-1536x2048.jpg";
import sala3_4 from "../assets/sala-3/20230807_150358-1536x2048.jpg";
import sala3_5 from "../assets/sala-3/amplificador-de-bajo.png";
import sala3_6 from "../assets/sala-3/20230807_150505-1536x2048.jpg";
import sala4_1 from "../assets/sala-4/20230807_174316-1536x2048.jpg";
import sala4_2 from "../assets/sala-4/consola-1536x2048.jpg";
import sala4_3 from "../assets/sala-4/deville-1536x2048.jpg";
import sala4_4 from "../assets/sala-4/20230807_174435-1536x2048.jpg";
import sala4_5 from "../assets/sala-4/20230815_131723-1536x2048.jpg";
import sala4_6 from "../assets/sala-4/20230815_131822-1536x2048.jpg";
import sala4_7 from "../assets/sala-4/mic.jpg";

const rooms = [
  {
    title: "Sala 1",
    size: "Sala mediana - Tamaño 4×4",
    equipment: [
      {
        title: "Amplificación de Guitarras:",
        items: ["Orange TH30 (Valvular)", "Fender Deluxe (Valvular)"],
      },
      {
        title: "Amplificación de Bajo:",
        items: ["Cabezal Ampeg B2R + Caja Hartke transporter (Americana)"],
      },
      {
        title: "Batería:",
        items: [
          "Mapex Venus mod. ‘90 (robusta y con fierros doble pata)",
          "Banqueta robusta giratoria doble pata",
        ],
      },
      {
        title: "Voces:",
        items: [
          "Micrófonos Shure SM58",
          "Cajas Samson Resound HD (600watts Peak Power)",
          "Consola Phonic 740",
        ],
      },
    ],
    images: [sala1_1, sala1_2, sala1_3, sala1_4],
  },
  {
    title: "Sala 2",
    size: "Sala mediana - Tamaño 4×4",
    equipment: [
      {
        title: "Amplificación de Guitarras:",
        items: ["Orange TH30 (Valvular)", "Vox AC30 (Valvular)"],
      },
      {
        title: "Amplificación de Bajo:",
        items: ["Cabezal SWR SM 400 + Caja Hartke transporter (Americana)"],
      },
      {
        title: "Batería:",
        items: [
          "Pearl Export ’90s (robusta y con fierros doble pata)",
          "Banqueta robusta giratoria doble pata",
        ],
      },
      {
        title: "Voces:",
        items: [
          "Micrófonos shure SM58",
          "Cajas Wharfedale 15″",
          "Consola potenciada Phonic 780",
        ],
      },
    ],
    images: [sala2_1, sala2_2, sala2_3, sala2_4, sala2_5, sala2_6],
  },
  {
    title: "Sala 3",
    size: "Sala chica. Tamaño 3×4",
    equipment: [
      {
        title: "Amplificación de Guitarras:",
        items: [
          "OraMarshall Valvestate 8080 (prevalvular)",
          "Fender Frontman 212 (Transistor)",
        ],
      },
      {
        title: "Amplificación de Bajo:",
        items: ["Ashdown touring 330 (Combo Pre Valvular)"],
      },
      {
        title: "Batería:",
        items: [
          "Taurus Mpf-710 (Madera de Maple)",
          "Banqueta robusta giratoria pata doble",
        ],
      },
      {
        title: "Voces:",
        items: [
          "Micrófonos shure SM58",
          "Cajas Samson Resound HD",
          "Consola potenciada Mackie 406m (americana)",
        ],
      },
    ],
    images: [sala3_1, sala3_2, sala3_3, sala3_4, sala3_5, sala3_6],
  },

  {
    title: 'Sala 4 - "El Bunker"',
    size: "Sala Grande. Tamaño 5×5",
    equipment: [
      {
        title: "Amplificación de Guitarras:",
        items: ["Marshall Jcm 900 (Valvular)", "Fender Deville (Valvular)"],
      },
      {
        title: "Amplificación de Bajo:",
        items: [
          "Cabezal Ampeg B2 (Blue Label)",
          "Caja Gallien Krueger BLX 4×10",
        ],
      },
      {
        title: "Batería:",
        items: [
          "Batería Pearl Master Custom",
          "Banqueta y fierros robustos doble pata",
        ],
      },
      {
        title: "Voces:",
        items: [
          "Potencia qsc 900 (americana)",
          "Consola mackie proFx16",
          "Cajas JBL 15″ (Americanas)",
        ],
      },
    ],
    images: [sala4_1, sala4_2, sala4_3, sala4_4, sala4_5, sala4_6, sala4_7],
  },
];

export default rooms;
