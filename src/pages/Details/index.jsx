import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";

import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PlateDetails } from "../../components/PlateDetails/";
import sad from "../../assets/icons/sad.svg";

export const Details = () => {
  const { details } = useContext(FavoritesContext);

  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <Link to="/home">
          <TitleCategory
            className="inline-block text-lg md:text-xl md:mt-6 mt-3  hover:duration-300 hover:text-gray-400"
            title="< Voltar"
          />
        </Link>
        <TitleCategory
          className="font-normal text-xl md:text-2xl mt-6 md:mt-12 mb-4 md:mb-6 lg:mb-12"
          title="Detalhes do prato"
        />
        {details.id === undefined ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl text-gray-500">Nada por aqui</h2>
            <img src={sad} className="w-32 invert opacity-20" />
          </div>
        ) : (
          <PlateDetails
            key={details.id}
            title={details.title}
            desc={details.desc}
            preco={details.preco}
            src={details.image}
            ingre={details.ingre}
            data={details}
          />
        )}
      </section>
    </section>
  );
};
