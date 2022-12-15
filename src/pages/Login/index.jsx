import { Link } from "react-router-dom";

import { TitleCategory } from "../../components/TitleCategory";
import { LoginRegister } from "../../components/LoginRegister";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Href } from "../../components/Href";

export const Login = () => {
  return (
    <>
      <LoginRegister>
        <TitleCategory
          className="font-medium text-2xl sm:text-3xl text-center mb-8 font-Poppins max-[346px]:mb-2"
          title="Login"
        />
        <form>
          <Input
            id="email"
            type="text"
            place="Exemplo: exemplo@exemplo.com.br"
            required
          />
          <Input id="senha" type="password" place="No mínimo 6 caracteres" />
          <Link to="/home">
            <Button id="login" name="Entrar" />
          </Link>
          <Href name="Criar uma conta" to="/register" />
        </form>
      </LoginRegister>
    </>
  );
};
