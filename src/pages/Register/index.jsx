import React from "react";
import explorer from "../../assets/icons/explorer.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Href } from "../../components/Href";

export const Register = () => {
  return (
    <section className="absolute w-full h-full flex justify-center items-center">
      <div className="relative grid grid-cols-1 px-4 sm:grid-cols-2 sm:gap-20 gap-10 text-white">
        <div className="flex justify-center items-center mb-0 md:mb-16">
          <img src={explorer} className="w-80 h-12" />
        </div>
        <div className="w-full md:w-[450px] bg-[#001119] px-8 py-8 md:px-16 md:py-16 flex flex-col justify-center rounded-lg">
          <h2 className="font-medium text-3xl text-center mb-8">
            Crie sua conta
          </h2>
          <form>
            <Input
              id="seu nome"
              type="text"
              place="Exemplo: Joaquim Barbosa"
              required
            />
            <Input
              id="email"
              type="text"
              place="Exemplo: exemplo@exemplo.com.br"
              required
            />
            <Input id="senha" type="password" place="No mínimo 6 caracteres" />
            <Button id="login" name="Criar conta" />
            <Href name="Já tenho uma conta" to="/" />
          </form>
        </div>
      </div>
    </section>
  );
};
