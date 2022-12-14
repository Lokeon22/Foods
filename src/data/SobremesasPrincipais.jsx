import sobremesa1 from "../assets/foods/sobremesa1.png";
import sobremesa2 from "../assets/foods/sobremesa2.png";
import sobremesa3 from "../assets/foods/sobremesa3.png";
import sobremesa4 from "../assets/foods/sobremesa4.png";

import ameixa from "../assets/foods/ameixa.png";
import pessego from "../assets/foods/pessego.png";
import claras from "../assets/foods/claras.png";
import amendoas from "../assets/foods/amendoas.png";
import damasco from "../assets/foods/damasco.png";
import farinha from "../assets/foods/farinha.png";

export const sobremesas = [
  {
    id: 9,
    title: "Prugna Pie",
    desc: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    preco: "49,97",
    ingre: {
      titleIngre: ["ameixa", "farinha"],
      imageIngre: [ameixa, farinha],
    },
    image: sobremesa1,
  },
  {
    id: 10,
    title: "Peachy Pastrie",
    desc: "Delicioso folheado de pêssego com folhas de hortelã.",
    preco: "32,97",
    ingre: {
      titleIngre: ["pessego", "farinha"],
      imageIngre: [pessego, farinha],
    },
    image: sobremesa2,
  },
  {
    id: 11,
    title: "Macarons",
    desc: "Farinha de amêndoas, manteiga, claras e açúcar.",
    preco: "79,97",
    ingre: {
      titleIngre: ["claras", "amendoas"],
      imageIngre: [claras, amendoas],
    },
    image: sobremesa3,
  },
  {
    id: 12,
    title: "Bolo de Damasco",
    desc: "Damascos frescos em uma massa sem glúten.",
    preco: "19,97",
    ingre: {
      titleIngre: ["damasco", "farinha"],
      imageIngre: [damasco, farinha],
    },
    image: sobremesa4,
  },
  {
    id: 13,
    title: "Peachy Pastrie",
    desc: "Delicioso folheado de pêssego com folhas de hortelã.",
    preco: "32,97",
    ingre: {
      titleIngre: ["pessego", "farinha"],
      imageIngre: [pessego, farinha],
    },
    image: sobremesa2,
  },
  {
    id: 14,
    title: "Macarons",
    desc: "Farinha de amêndoas, manteiga, claras e açúcar.",
    preco: "79,97",
    ingre: {
      titleIngre: ["claras", "amendoas"],
      imageIngre: [claras, amendoas],
    },
    image: sobremesa3,
  },
  {
    id: 15,
    title: "Prugna Pie",
    desc: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    preco: "49,97",
    ingre: {
      titleIngre: ["ameixa", "farinha"],
      imageIngre: [ameixa, farinha],
    },
    image: sobremesa1,
  },
  {
    id: 16,
    title: "Bolo de Damasco",
    desc: "Damascos frescos em uma massa sem glúten.",
    preco: "19,97",
    ingre: {
      titleIngre: ["damasco", "farinha"],
      imageIngre: [damasco, farinha],
    },
    image: sobremesa4,
  },
];

export default sobremesas;
