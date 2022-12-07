import { useState } from "react";

import heart from "../assets/icons/HeartStraight.svg";
import prato1 from "../assets/foods/prato1.png";
import minus from "../assets/icons/Minus.svg";
import plus from "../assets/icons/Plus.svg";

export const Plates = () => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(25.97);

  const changeminusPrice = () => {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
    setPrice((prevValue) => prevValue - 25.97);
  };

  const changeplusPrice = () => {
    if (amount >= 10) {
      return alert("Quantidade de pratos atingido!");
    }
    setAmount(amount + 1);
    setPrice((prevValue) => prevValue + 25.97);
  };

  return (
    <div className="max-w-[300px] px-10 py-14 mb-[400px]">
      <img src={heart} className="w-8 h-8 cursor-pointer my-0 mx-[90%]" />
      <div className="flex flex-col items-center justify-center">
        <img src={prato1} className="w-44 h-44" />
        <h2 className="text-[22px] font-Poppins font-semibold mt-4 mb-4">
          Torradas de Parma
        </h2>
        <p className="text-xs font-Roboto font-normal text-center">
          Presunto de parma e rúcula em um pão com fermentação natural.
        </p>
        <span className="text-[#82F3FF] text-3xl font-Roboto mt-4 mb-4">
          R$ {price}
        </span>
        <form className="flex flex-wrap justify-center items-center gap-4">
          <button type="button" onClick={changeminusPrice}>
            <img src={minus} className="w-6 h-6" />
          </button>
          <p className="font-Roboto font-semibold text-lg">{amount}</p>
          <button type="button" onClick={changeplusPrice}>
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
    </div>
  );
};
