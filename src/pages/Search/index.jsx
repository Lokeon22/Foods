import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { FavoritesContext } from "../Favorites/contexts/FavoritesContext";
import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { PlateDetails } from "../../components/PratosDetails/PlateDetails";
import { Footer } from "../../components/Footer";

export const Search = () => {
  const { data, sobremesas, bebidas } = useContext(FavoritesContext);
  const { name } = useParams();

  return (
    <section className="max-w-[1400px] h-screen flex flex-col mx-auto my-0 items-start justify-start text-white">
      <Header />
      <Link to="/home">
        <TitleCategory
          className="inline-block text-lg md:text-xl md:mt-6 mt-3 hover:duration-300 hover:text-gray-300 xl:px-16 px-4"
          title="< Voltar"
        />
      </Link>
      <TitleCategory
        className="font-normal text-xl md:text-2xl mt-8 md:mt-16 mb-5 md:mb-10 xl:px-16 px-4"
        title="Pratos encontrados"
      />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        {data
          .filter((val) => {
            if (name == "") {
              return null;
            } else if (val.title.toLowerCase().includes(name.toLowerCase())) {
              return val;
            }
          })
          .map((val) => {
            return (
              <PlateDetails
                key={val.id}
                title={val.title}
                desc={val.desc}
                preco={val.preco}
                src={val.image}
                ingre={val.ingre}
                data={val}
              />
            );
          })}
        {sobremesas
          .filter((val) => {
            if (name == "") {
              return null;
            } else if (val.title.toLowerCase().includes(name.toLowerCase())) {
              return val;
            }
          })
          .map((val) => {
            return (
              <PlateDetails
                key={val.id}
                title={val.title}
                desc={val.desc}
                preco={val.preco}
                src={val.image}
                ingre={val.ingre}
                data={val}
              />
            );
          })}
        {bebidas
          .filter((val) => {
            if (name == "") {
              return null;
            } else if (val.title.toLowerCase().includes(name.toLowerCase())) {
              return val;
            }
          })
          .map((val) => {
            return (
              <PlateDetails
                key={val.id}
                title={val.title}
                desc={val.desc}
                preco={val.preco}
                src={val.image}
                ingre={val.ingre}
                data={val}
              />
            );
          })}
      </section>
      <Footer />
    </section>
  );
};
