import { useContext, useRef } from "react";

import { FavoritesContext } from "../../pages/Favorites/contexts/FavoritesContext";

import { Plates } from "../Plates";
import { Carouselleft } from "../Carousel/Carouselleft";
import { Carouselright } from "../Carousel/Carouselright";

export const PrincipalBebidas = ({ handleRightClick, handleLeftClick }) => {
  const { bebidas, favorites, setFavorites } = useContext(FavoritesContext);
  const carousel = useRef(null);

  const addPlatesFavorites = (data) => {
    setFavorites([...favorites, data]);
  };

  const removePlatesFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="flex flex-row items-center justify-center gap-7 mt-0 mb-16">
      <Carouselleft handleLeftClick={handleLeftClick} carousel={carousel} />
      <div
        className="carousel flex flex-nowrap overflow-x-auto md:scrollbar-hide scrollbar-default scroll-smooth"
        ref={carousel}
      >
        {bebidas.map((data) => (
          <div
            key={data.id}
            className="sm:w-[300px] w-full flex flex-none py-2 px-2 sm:py-14 sm:px-6 flex-col items-center"
          >
            <Plates
              key={data.id}
              title={data.title}
              desc={data.desc}
              preco={data.preco}
              src={data.image}
              addPlatesFavorites={() => addPlatesFavorites(data)}
              removePlatesFavorites={() => removePlatesFavorites(data.id)}
              data={data}
            />
          </div>
        ))}
      </div>
      <Carouselright handleRightClick={handleRightClick} carousel={carousel} />
    </div>
  );
};
