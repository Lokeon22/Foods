import { useState, useContext } from "react";
import { FavoritesContext } from "../pages/Favorites/contexts/FavoritesContext";

import minus from "../assets/icons/Minus.svg";
import plus from "../assets/icons/Plus.svg";
import heart from "../assets/icons/HeartStraight.svg";
import redheart from "../assets/icons/redheart.svg";

export function Plates({ id, title, desc, preco, src }) {
  const { data, favorites, setFavorites } = useContext(FavoritesContext);
  const [amount, setAmount] = useState(1);

  const addPlatesFavorites = (data) => {
    const teste = favorites.find((fav) => fav.id === data.id);
    if (teste === true || teste !== undefined) {
      //tratamento para não colocar o mesmo prato preferido varias vezes
      return null;
    }
    setFavorites([...favorites, data]);
  };

  const removePlatesFavorites = (id) => {
    let filtered = favorites.filter((plate) => plate.id !== id);
    setFavorites(filtered);
  };

  const isFavorites = favorites.some((dt) => dt.title === data[0].title);

  return (
    <div
      key={id}
      className="sm:w-[300px] w-full flex flex-none py-2 px-2 sm:py-14 sm:px-6 flex-col items-center"
    >
      <img
        src={isFavorites ? redheart : heart}
        className="w-8 h-8 cursor-pointer self-end"
        onClick={() =>
          isFavorites
            ? removePlatesFavorites(data.id)
            : addPlatesFavorites(data)
        }
      />
      <img src={src} className="w-44 h-44 object-cover" />
      <h2 className="text-[22px] text-center font-Poppins font-semibold mt-4 mb-4">
        {title}
      </h2>
      <p className="text-xs font-Roboto font-normal text-center">{desc}</p>
      <span className="text-[#82F3FF] text-3xl font-Roboto mt-4 mb-4">
        R$ {preco}
      </span>
      <form className="flex flex-wrap justify-center items-center gap-4">
        <button type="button">
          <img src={minus} className="w-6 h-6" />
        </button>
        <button
          type="number"
          className="font-Roboto font-semibold text-lg bg-transparent"
          onClick={(e) => e.preventDefault()}
        >
          {amount}
        </button>
        <button type="button">
          <img src={plus} className="w-6 h-6" />
        </button>
        <button
          type="submit"
          className="bg-[#92000E] px-4 py-2 rounded font-Poppins"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          incluir
        </button>
      </form>
    </div>
  );
}
