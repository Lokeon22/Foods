import { useContext, useRef } from "react";

import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";

import { Header } from "../../components/Header";
import { Plates } from "../../components/Plates";
import { Carouselleft } from "../../components/Carouselleft";
import { Carouselright } from "../../components/Carouselright";
import { SaboresIni } from "../../components/SaboresIni";

export const Home = () => {
  const { data, favorites, setFavorites } = useContext(FavoritesContext);
  const carousel = useRef(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <SaboresIni />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <h2 className="text-2xl sm:text-3xl">Pratos Principais</h2>
        <div className="flex flex-row items-center justify-center gap-7 mt-0 mb-16">
          <Carouselleft handleLeftClick={handleLeftClick} />
          <div
            className="carousel flex flex-nowrap overflow-x-auto md:scrollbar-hide scrollbar-default scroll-smooth"
            ref={carousel}
          >
            {data.map((data) => (
              <Plates
                key={data.id}
                title={data.title}
                desc={data.desc}
                preco={data.preco}
                src={data.image}
              />
            ))}
          </div>
          <Carouselright handleRightClick={handleRightClick} />
        </div>
      </section>
    </section>
  );
};
