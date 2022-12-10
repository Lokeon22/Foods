import { useContext } from "react";
import { Header } from "../../components/Header";
import { FavoritesContext } from "./contexts/FavoritesContext";

export const Favorites = () => {
  const { data, favorites, setFavorites } = useContext(FavoritesContext);

  console.log(favorites);

  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <h2>Pagina Favorites</h2>
      {favorites.map((fav) => (
        <div key={fav.id} className="text-white">
          <h2>{fav.title}</h2>
        </div>
      ))}
    </section>
  );
};
