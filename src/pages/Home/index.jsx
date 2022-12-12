import { useContext, useRef } from "react";

import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";

import { Header } from "../../components/Header";
import { Plates } from "../../components/Plates";
import { Carouselleft } from "../../components/Carouselleft";
import { Carouselright } from "../../components/Carouselright";

import frutas from "../../assets/icons/frutas.svg";

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
      <div className="max-w-[1120px] h-64 bg-[#00111A] rounded-lg mx-auto mt-0 mb-16 grid grid-cols-1 md:grid-cols-2 items-center">
        <img
          src={frutas}
          className="relative xl:-top-[104px] xl:right-14 w-full xl:h-full h-64"
        />
        <div className="font-Poppins text-[#E1E1E6] bg-[#00111A] flex flex-col justify-center items-center text-center">
          <h2 className="font-medium text-3xl md:text-[40px]">
            Sabores inigualáveis
          </h2>
          <p className="text-sm md:font-normal xl:mb-16">
            Sinta o cuidado do preparo com ingredientes selecionados
          </p>
        </div>
      </div>
      <section className="flex flex-row items-center justify-center gap-7 mb-40">
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
      </section>
    </section>
  );
};
