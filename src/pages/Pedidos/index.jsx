import { useContext } from "react";

import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PlatesPedidos } from "../../components/PratosPedidos/PlatesPedidos";
import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";

export const Pedidos = () => {
  const { pedidos, setPedidos } = useContext(FavoritesContext);

  const removeFromCart = (id) => {
    const filtered = pedidos.filter((ped) => ped.id !== id);
    setPedidos(filtered);
  };

  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <Link to="/home">
          <TitleCategory
            className="inline-block text-lg md:text-xl md:mt-6 mt-3  hover:duration-300 hover:text-gray-300"
            title="< Voltar"
          />
        </Link>
        <TitleCategory
          className="font-normal text-xl md:text-2xl mt-8 md:mt-16 mb-5 md:mb-10"
          title="Pedidos"
        />
        {pedidos.length > 0 ? (
          pedidos.map((pedido, index) => (
            <PlatesPedidos
              key={index}
              id={pedido.id}
              title={pedido.title}
              pedido={pedido}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <h2 className="text-white">Nenhum pedido</h2>
        )}
      </section>
    </section>
  );
};
