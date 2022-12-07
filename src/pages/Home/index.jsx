import React from "react";

import { Header } from "../../components/Header";
import { Plates } from "../../components/Plates";

import frutas from "../../assets/icons/frutas.svg";

export const Home = () => {
  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <div className="max-w-[1120px] h-64 bg-[#00111A] rounded-lg mx-auto mt-0 mb-16 grid grid-cols-2 items-center">
        <img
          src={frutas}
          className="relative xl:-top-[104px] xl:right-14 w-full xl:h-full h-64"
        />
        <div className="font-Poppins text-[#E1E1E6]">
          <h2 className="font-medium text-[40px]">Sabores inigualáveis</h2>
          <p className="font-normal xl:mb-16">
            Sinta o cuidado do preparo com ingredientes selecionados
          </p>
        </div>
      </div>
      <section className="max-w-[1120px] h-full rounded-lg mx-auto my-0">
        <Plates />
      </section>
    </section>
  );
};
