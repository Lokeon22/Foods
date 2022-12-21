import { useState, useEffect, useContext } from "react";
import { ResultadoFrete } from "./ResultadoFrete";

import { FavoritesContext } from "../pages/Favorites/contexts/FavoritesContext";

export const ValorPedidoFrete = ({ brlValorTotal }) => {
  const { pedidos } = useContext(FavoritesContext);

  const [cep, setCep] = useState("");
  const [getfrete, setGetfrete] = useState(null);
  const [simulate, setSimulate] = useState("");

  const getCep = async () => {
    // Api publica para conseguir CEP
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
      (res) => res.json()
    );
    setGetfrete(data);
  };

  const maskCep = (e) => {
    const modify = e.target.value.replace(/\D/g, "");
    setCep(modify);
  };

  useEffect(() => {
    // Codigo simples apenas para simulação de um valor da entrega do produto pois não possui na API.
    const aleatorio = +brlValorTotal.replace(",", ".") / 4.25;
    const aleatorioConvert = aleatorio.toFixed(2).replace(".", ",");
    setSimulate(aleatorioConvert);
  }, [pedidos]);

  return (
    <div>
      <h2 className="text-lg mt-1 sm:mt-8 sm:mb-0 mb-4">
        Total: R$ {brlValorTotal}
      </h2>
      {getfrete === null ? null : (
        <ResultadoFrete
          brlValorTotal={brlValorTotal}
          getfrete={getfrete}
          simulate={simulate}
          pedidos={pedidos}
        />
      )}
      <div className="flex flex-row flex-wrap items-center gap-1 mt-2">
        <input
          type="text"
          placeholder="CEP 00000-000"
          maxLength="9"
          value={cep.replace(/^(\d{5})(\d)/, "$1-$2")}
          className="px-1 py-1 outline-none rounded-md text-xs md:text-base bg-transparent border border-gray-500 text-slate-200"
          onChange={(e) => {
            setCep(e.target.value);
            maskCep(e);
          }}
        />
        <button
          type="submit"
          className="px-1 py-1 bg-[#750310] hover:bg-[#66030f] hover:duration-300 rounded text-xs md:text-base font-normal"
          onClick={(e) => {
            e.preventDefault();
            getCep();
          }}
        >
          Calcular Entrega
        </button>
      </div>
    </div>
  );
};
