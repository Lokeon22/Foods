import { useContext } from "react";

import { Link } from "react-router-dom";
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

  return (
    <section className="max-w-[1400px] h-screen flex flex-col mx-auto my-0  text-white ">
      <Header />
      <section className="max-w-[1120px] grid grid-cols-6 mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium mt-5 md:mt-10">
        <div className="col-span-3">
          <TitleCategory title="Meu pedido" className="text-3xl mb-8" />
          <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
            {pedidos.map((pedido, index) => (
              <PlatesPedidos
                key={index}
                id={pedido.id}
                indexItem={index}
                title={pedido.title}
                src={pedido.image}
                pedido={pedido}
                removeFromCart={removeFromCart}
              />
            ))}
          </section>
        </div>

        <div className="col-span-3">
          <PagamentoPixCard />
        </div>
      </section>
      <Footer />
    </section>
  );
};
