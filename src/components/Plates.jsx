import { useEffect, useState } from "react";

import minus from "../assets/icons/Minus.svg";
import plus from "../assets/icons/Plus.svg";
import heart from "../assets/icons/HeartStraight.svg";
import redheart from "../assets/icons/redheart.svg";

import pratos from "../data";

export const Plates = () => {
  const [amount, setAmount] = useState(1);
  const [coracao, setCoracao] = useState(false);

  const teste = () => {
    setCoracao(!coracao);
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row gap-7">
      {pratos.map(({ id, title, desc, preco, image }) => (
        <div
          key={id}
          className="max-w-[300px] flex py-14 px-10 flex-col items-center"
        >
          {coracao ? (
            <img
              src={redheart}
              className="w-8 h-8 cursor-pointer self-end"
              onClick={teste}
            />
          ) : (
            <img
              src={heart}
              className="w-8 h-8 cursor-pointer self-end"
              onClick={teste}
            />
          )}
          <img src={image} className="w-44 h-44" />
          <h2 className="text-[22px] text-center font-Poppins font-semibold mt-4 mb-4">
            {title}
          </h2>
          <p className="text-xs font-Roboto font-normal text-center">{desc}</p>
          <span className="text-[#82F3FF] text-3xl font-Roboto mt-4 mb-4">
            R$ {preco}
          </span>
          <form className="flex flex-wrap justify-center items-center gap-4">
            <button type="button">
              <img src={minus} className="w-6 h-6" />
            </button>
            <p className="font-Roboto font-semibold text-lg">{amount}</p>
            <button type="button">
              <img src={plus} className="w-6 h-6" />
            </button>
            <button
              type="submit"
              className="bg-[#92000E] px-4 py-2 rounded font-Poppins"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              incluir
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
