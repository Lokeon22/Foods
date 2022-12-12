import { useContext } from "react";
import { FavoritesContext } from "../pages/Favorites/contexts/FavoritesContext";

import heart from "../assets/icons/HeartStraight.svg";
import redheart from "../assets/icons/redheart.svg";

export const HeartFavorites = ({
  addPlatesFavorites,
  removePlatesFavorites,
  data,
}) => {
  const { favorites } = useContext(FavoritesContext);
  const isFavorites = favorites.some((fav) => fav.title === data.title);

  return (
    <img
      src={isFavorites ? redheart : heart}
      className="w-8 h-8 cursor-pointer self-end"
      onClick={() =>
        isFavorites ? removePlatesFavorites() : addPlatesFavorites()
      }
    />
  );
};
