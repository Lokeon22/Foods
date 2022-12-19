import { useContext } from "react";

import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PlatesPedidos } from "../../components/PratosPedidos/PlatesPedidos";
import { PagamentoPixCard } from "../../components/PagamentoPixCard";
import { Footer } from "../../components/Footer";

import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";

export const Pedidos = () => {
  const { pedidos, setPedidos } = useContext(FavoritesContext);

  const removeFromCart = (indexItem) => {
    let filteredPed = pedidos.filter((x, index, arr) => {
      arr[index] !== indexItem;

      return index !== indexItem;
    });
    setPedidos(filteredPed);
  };

  let valorTotal = 0;
  pedidos.map(({ preco }) => {
    let precos = +preco.replace(",", ".");
    valorTotal += precos;
  });
  let brlValorTotal = String(valorTotal).replace(".", ",").slice(0, 6);

  return (
    <section className="max-w-[1400px] h-screen flex flex-col mx-auto my-0  text-white ">
      <Header />
      <section className="max-w-[1120px] grid grid-cols-6 mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium mt-5 md:mt-10">
        <div className="col-span-3">
          <TitleCategory title="Meu pedido" className="text-3xl mb-8" />
          <section
            className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins scrollbar-hide lg:scrollbar-default font-medium overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#660000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
            style={
              pedidos.length >= 4 ? { height: "330px" } : { height: "auto" }
            }
          >
            {pedidos.map((pedido, index) => (
              <PlatesPedidos
                key={index}
                id={pedido.id}
                indexItem={index}
                title={pedido.title}
                src={pedido.image}
                preco={pedido.preco}
                pedido={pedido}
                removeFromCart={removeFromCart}
              />
            ))}
          </section>
          {brlValorTotal.length > 1 ? (
            <h2 className="text-lg mt-8">Total: R$ {brlValorTotal}</h2>
          ) : (
            <p className="text-sm text-gray-400">Nenhum prato adicionado</p>
          )}
        </div>

        <div className="col-span-3">
          <PagamentoPixCard />
        </div>
      </section>
      <Footer />
    </section>
  );
};
