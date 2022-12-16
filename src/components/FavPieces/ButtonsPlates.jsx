import { useState, useRef, useContext, useEffect } from "react";
import { FavoritesContext } from "../../pages/Favorites/contexts/FavoritesContext";

import minus from "../../assets/icons/Minus.svg";
import plus from "../../assets/icons/Plus.svg";

export const ButtonsPlates = ({ data }) => {
  const { pedidos, setPedidos } = useContext(FavoritesContext);
  const [carrinho, setCarrinho] = useState([]);
  const [amount, setAmount] = useState(1);
  const botao = useRef(null);

  const addProduct = (id) => {
    if (amount >= 25) {
      alert("Numero máximo de pratos atingido");
      return null;
    }
    if (id === data.id) {
      setCarrinho([...carrinho, data]);
      setAmount(amount + 1);
    }
  };

  const adicionarCarrinho = (id) => {
    if (id === data.id) {
      setPedidos([...pedidos, ...carrinho, data]);
    }
  };

  const removeProduct = (id) => {
    if (amount <= 1) {
      return null;
    }
    if (id === data.id) {
      setAmount(amount - 1);
    }
  };

  return (
    <form className="flex flex-wrap justify-center items-center gap-4">
      <button type="button">
        <img
          src={minus}
          className="w-6 h-6"
          onClick={() => removeProduct(data.id)}
        />
      </button>
      <button
        type="number"
        className="font-Roboto font-semibold text-lg bg-transparent"
        onClick={(e) => e.preventDefault()}
      >
        {amount}
      </button>
      <button type="button">
        <img
          src={plus}
          className="w-6 h-6"
          onClick={() => addProduct(data.id)}
        />
      </button>
      <button
        type="submit"
        ref={botao}
        className="bg-[#92000E] px-4 py-2 rounded font-Poppins hover:bg-[#7c000d] hover:duration-300"
        onClick={(e) => {
          e.preventDefault();
          adicionarCarrinho(data.id);
          botao.current.classList.toggle("animate-modifyScale");
        }}
      >
        incluir
      </button>
    </form>
  );
};
