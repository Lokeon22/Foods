import { useContext, useRef } from "react";

import { FavoritesContext } from "../../pages/Favorites/contexts/FavoritesContext";

import { Sobremesas } from "./Sobremesas";
import { Carouselleft } from "../Carouselleft";
import { Carouselright } from "../Carouselright";

export const SobremesasPlates = () => {
  const { sobremesas, favorites, setFavorites } = useContext(FavoritesContext);
  const carousel = useRef(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const addSobremesasFavorites = (sobremesas) => {
    setFavorites([...favorites, sobremesas]);
  };

  const removeSobremesasFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="flex flex-row items-center justify-center gap-7 mt-0 mb-16">
      <Carouselleft handleLeftClick={handleLeftClick} />
      <div
        className="carousel flex flex-nowrap overflow-x-auto md:scrollbar-hide scrollbar-default scroll-smooth"
        ref={carousel}
      >
        {sobremesas.map((sobremesas) => (
          <div
            key={sobremesas.id}
            className="sm:w-[300px] w-full flex flex-none py-2 px-2 sm:py-14 sm:px-6 flex-col items-center"
          >
            <Sobremesas
              key={sobremesas.id}
              title={sobremesas.title}
              desc={sobremesas.desc}
              preco={sobremesas.preco}
              src={sobremesas.image}
              sobremesas={sobremesas}
              addSobremesasFavorites={() => addSobremesasFavorites(sobremesas)}
              removeSobremesasFavorites={() =>
                removeSobremesasFavorites(sobremesas.id)
              }
            />
          </div>
        ))}
      </div>
      <Carouselright handleRightClick={handleRightClick} />
    </div>
  );
};
