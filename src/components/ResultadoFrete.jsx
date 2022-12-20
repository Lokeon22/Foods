import { useState, useEffect } from "react";

export const ResultadoFrete = ({ simulate, getfrete, pedidos }) => {
  const [valorfinal, setValorfinal] = useState("");

  useEffect(() => {
    let valorTotal = 0;
    let taxaentrega = +simulate.replace(",", ".");
    pedidos.map(({ preco }) => {
      let precos = +preco.replace(",", ".");
      valorTotal += precos;
    });
    const newprice = valorTotal + taxaentrega;
    let alterandoBRLnewprice = String(newprice).replace(".", ",").slice(0, 6);
    setValorfinal(alterandoBRLnewprice);
  }, [pedidos]);

  return (
    <div className="flex flex-col flex-wrap mt-1 text-sm md:text-base text-gray-300">
      <p>{getfrete.logradouro}</p>
      <p>
        {getfrete.localidade}-{getfrete.uf}
      </p>
      <span>Taxa de entrega: R${simulate}</span>
      <p className="text-lg text-white mt-1">Valor final: R$ {valorfinal}</p>
    </div>
  );
};
