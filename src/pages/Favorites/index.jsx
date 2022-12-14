import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./contexts/FavoritesContext";

import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PratosFavoritos } from "../../components/PratosFavoritos";
import { NotFoundFavorites } from "../../components/NotFoundFavorites";

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

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
          title="Meus favoritos"
        />
        {favorites.length > 0 ? (
          favorites.map((data) => (
            <PratosFavoritos
              key={data.id}
              title={data.title}
              desc={data.desc}
              preco={data.preco}
              src={data.image}
              ingre={data.ingre}
              data={data}
            />
          ))
        ) : (
          <NotFoundFavorites />
        )}
      </section>
    </section>
  );
};
