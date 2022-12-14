import prato1 from "../assets/foods/prato1.png";
import prato2 from "../assets/foods/prato2.png";
import prato3 from "../assets/foods/prato3.png";
import prato4 from "../assets/foods/prato4.png";

import alface from "../assets/foods/alface.png";
import tomate from "../assets/foods/tomate.png";
import rabanete from "../assets/foods/rabanete.png";
import paonaan from "../assets/foods/pao-naan.png";

import pao from "../assets/foods/pao.png";
import presunto from "../assets/foods/presunto.png";
import rucula from "../assets/foods/rucula.png";

import camarao from "../assets/foods/camarao.png";
import massa from "../assets/foods/massa.png";
import pesto from "../assets/foods/pesto.png";
import pepino from "../assets/foods/pepino.png";

const pratos = [
  {
    id: 1,
    title: "Torradas de Parma",
    desc: "Presunto de parma e rúcula em um pão com fermentação natural.",
    preco: "25,97",
    ingre: {
      titleIngre: ["alface", "tomate", "rabanete", "pão"],
      imageIngre: [alface, tomate, rabanete, paonaan],
    },
    image: prato1,
  },
  {
    id: 2,
    title: "Spaguetti Gambe",
    desc: "Massa fresca com camarões e pesto recheado.",
    preco: "79,97",
    ingre: {
      titleIngre: ["camarão", "massa", "pesto"],
      imageIngre: [camarao, massa, pesto],
    },
    image: prato2,
  },
  {
    id: 3,
    title: "Salada Molla",
    desc: "Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
    preco: "19,97",
    ingre: {
      titleIngre: ["alface", "tomate", "pepino"],
      imageIngre: [alface, tomate, pepino],
    },
    image: prato3,
  },
  {
    id: 4,
    title: "Salada Ravanello",
    desc: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
    preco: "49,97",
    ingre: {
      titleIngre: ["pão", "presunto", "rúcula"],
      imageIngre: [pao, presunto, rucula],
    },
    image: prato4,
  },
  {
    id: 5,
    title: "Salada Molla",
    desc: "Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
    preco: "19,97",
    ingre: {
      titleIngre: ["alface", "tomate", "pepino"],
      imageIngre: [alface, tomate, pepino],
    },
    image: prato3,
  },
  {
    id: 6,
    title: "Spaguetti Gambe",
    desc: "Massa fresca com camarões e pesto recheado.",
    preco: "79,97",
    ingre: {
      titleIngre: ["camarão", "massa", "pesto"],
      imageIngre: [camarao, massa, pesto],
    },
    image: prato2,
  },
  {
    id: 7,
    title: "Torradas de Parma",
    desc: "Presunto de parma e rúcula em um pão com fermentação natural.",
    preco: "25,97",
    ingre: {
      titleIngre: ["alface", "tomate", "rabanete", "pão"],
      imageIngre: [alface, tomate, rabanete, paonaan],
    },
    image: prato1,
  },
  {
    id: 8,
    title: "Torradas de Parma",
    desc: "Presunto de parma e rúcula em um pão com fermentação natural.",
    preco: "25,97",
    ingre: {
      titleIngre: ["alface", "tomate", "rabanete", "pão"],
      imageIngre: [alface, tomate, rabanete, paonaan],
    },
    image: prato1,
  },
];

export default pratos;
