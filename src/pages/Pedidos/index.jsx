import { useContext } from "react";

import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PlatesPedidos } from "../../components/PratosPedidos/PlatesPedidos";
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
    <section className="max-w-[1400px] h-screen flex flex-col mx-auto my-0  text-white">
      <Header />
      <Link to="/home">
        <TitleCategory
          className="inline-block text-lg md:text-xl md:mt-6 mt-3  hover:duration-300 hover:text-gray-300 xl:px-16 px-4"
          title="< Voltar"
        />
      </Link>
      <TitleCategory
        className="font-normal text-xl md:text-2xl mt-8 md:mt-16 mb-5 md:mb-10 xl:px-16 px-4"
        title="Pedidos"
      />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        {pedidos.length > 0 ? (
          pedidos.map((pedido, index) => (
            <PlatesPedidos
              key={index}
              id={pedido.id}
              indexItem={index}
              title={pedido.title}
              src={pedido.image}
              pedido={pedido}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <h2 className="w-full text-sm sm:text-base text-gray-400">
            Nenhum pedido
          </h2>
        )}
      </section>
      <Footer />
    </section>
  );
};
