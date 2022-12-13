import { useContext } from "react";
import { FavoritesContext } from "../../pages/Favorites/contexts/FavoritesContext";

import heart from "../../assets/icons/HeartStraight.svg";
import redheart from "../../assets/icons/redheart.svg";

export const HeartFavoritesSobremesas = ({
  addSobremesasFavorites,
  removeSobremesasFavorites,
  sobremesas,
}) => {
  const { favorites } = useContext(FavoritesContext);
  const isFavorites = favorites.some((fav) => fav.title === sobremesas.title);

  return (
    <img
      src={isFavorites ? redheart : heart}
      className="w-8 h-8 cursor-pointer self-end"
      onClick={() =>
        isFavorites ? removeSobremesasFavorites() : addSobremesasFavorites()
      }
    />
  );
};
