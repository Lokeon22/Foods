import { Link } from "react-router-dom";

import { useContext } from "react";

import { ButtonsPlates } from "./FavPieces/ButtonsPlates";
import { HeartFavorites } from "./FavPieces/HeartFavorites";

import { FavoritesContext } from "../pages/Favorites/contexts/FavoritesContext";

export function Plates({
  title,
  desc,
  preco,
  src,
  addPlatesFavorites,
  removePlatesFavorites,
  data,
}) {
  const { setDetails } = useContext(FavoritesContext);

  const detalhes = (data) => {
    setDetails(data);
  };

  return (
    <>
      <HeartFavorites
        addPlatesFavorites={addPlatesFavorites}
        removePlatesFavorites={removePlatesFavorites}
        data={data}
      />
      <Link to={`/details/${data.id}`}>
        <img
          src={src}
          className="w-44 h-44 object-cover hover:opacity-75 hover:duration-300"
          onClick={() => detalhes(data)}
        />
      </Link>
      <h2 className="text-[22px] text-center font-Poppins font-semibold mt-4 mb-4">
        {title}
      </h2>
      <p className="text-xs font-Roboto font-normal text-center">{desc}</p>
      <span className="text-[#82F3FF] text-3xl font-Roboto mt-4 mb-4">
        R$ {preco}
      </span>
      <ButtonsPlates data={data} />
    </>
  );
}
