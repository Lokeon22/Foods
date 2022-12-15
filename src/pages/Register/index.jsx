import React from "react";

import { LoginRegister } from "../../components/LoginRegister";
import { TitleCategory } from "../../components/TitleCategory";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Href } from "../../components/Href";

export const Register = () => {
  return (
    <>
      <LoginRegister>
        <TitleCategory
          className="font-medium text-2xl sm:text-3xl text-center mb-8 font-Poppins max-[346px]:mb-2"
          title="Criar Conta"
        />
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
      </LoginRegister>
    </>
  );
};
