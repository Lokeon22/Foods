import bebida1 from "../assets/foods/bebida1.png";
import bebida2 from "../assets/foods/bebida2.png";
import bebida3 from "../assets/foods/bebida3.png";
import bebida4 from "../assets/foods/bebida4.png";

import cafe from "../assets/foods/cafe.png";
import maracuja from "../assets/foods/maracuja.png";
import canela from "../assets/foods/canela.png";
import aniz from "../assets/foods/aniz.png";
import limao from "../assets/foods/limao.png";
import whiskey from "../assets/foods/whiskey.png";
import maca from "../assets/foods/maca.png";

export const bebidas = [
  {
    id: 17,
    title: "Espresso",
    desc: "Café cremoso feito na temperatura e pressões perfeitas.",
    preco: "49,97",
    ingre: {
      titleIngre: ["café"],
      imageIngre: [cafe],
    },
    image: bebida1,
  },
  {
    id: 18,
    title: "Suco de maracujá",
    desc: "Suco de maracujá gelado, cremoso, docinho.",
    preco: "32,97",
    ingre: {
      titleIngre: ["maracujá"],
      imageIngre: [maracuja],
    },
    image: bebida2,
  },
  {
    id: 19,
    title: "Tè d'autunno",
    desc: "Chá de anis, canela e limão. Sinta o outono italiano.",
    preco: "19,97",
    ingre: {
      titleIngre: ["canela", "anises", "limão"],
      imageIngre: [canela, aniz, limao],
    },
    image: bebida3,
  },
  {
    id: 20,
    title: "Pomo bourbon",
    desc: "Maçã, whisky, canela. On the rocks.",
    preco: "79,97",
    ingre: {
      titleIngre: ["canela", "whiskey", "maçã"],
      imageIngre: [canela, whiskey, maca],
    },
    image: bebida4,
  },
];

export default bebidas;
