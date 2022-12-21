import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../pages/Favorites/contexts/FavoritesContext";

import explorer from "../assets/icons/explorer.svg";
import logout from "../assets/icons/SignOut.svg";
import searchicon from "../assets/icons/search.svg";
import receipt from "../assets/icons/receipt.svg";

export const Header = () => {
  const { pedidos } = useContext(FavoritesContext);
  const [search, setSearch] = useState("");

  return (
    <section className="w-full h-auto xl:h-[104px] bg-[#00111A] px-8 py-4 xl:px-8 lg:px-16 lg:py-3 grid xl:grid-cols-4 grid-cols-1">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 xl:col-span-3">
        <Link to="/home">
          <img src={explorer} className="w-40 h-8 md:w-48 max-[346px]:w-32" />
        </Link>
        <Link
          to="/favorites"
          className="text-[#E1E1E6] font-Roboto font-normal mt-1 max-[346px]:text-sm max-[346px]:mt-1 hover:text-gray-400 hover:duration-300"
        >
          Meus favoritos
        </Link>
        <label className="relative flex items-center md:w-1/2 sm:w-1/2 w-72 md:py-3 py-1">
          <input
            type="text"
            className="relative font-Roboto w-full px-12 md:py-3 py-2 bg-[#0D1D25] border-none outline-none rounded-md placeholder:text-[#7C7C8A]"
            placeholder="Busque pelas opções de pratos"
            value={search}
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />
          <Link to={search.length > 0 ? `/search/${search}` : null}>
            <img
              src={searchicon}
              className="md:w-6 md:h-6 w-5 h-5 absolute top-3.5 md:top-6 left-3"
            />
          </Link>
        </label>
      </div>
      <div className="flex items-center justify-center xl:justify-start md:gap-8 gap-3 md:mt-0 mt-4">
        <Link to="/pedidos">
          <button className="bg-[#750310] md:px-10 px-8 md:py-4 py-2 rounded-md font-Poppins font-medium relative text-sm max-[346px]:text-[12px] hover:bg-[#66030f] hover:duration-300">
            Meu pedido <span className="text-sm">({pedidos.length})</span>
            <img
              src={receipt}
              className="md:w-8 md:h-8 w-6 h-6 absolute md:top-2.5 md:left-1.5 top-1.5 left-1"
            />
          </button>
        </Link>
        <Link to="/">
          <img src={logout} className="md:w-8 md:h-8 w-7 h-7" />
        </Link>
      </div>
    </section>
  );
};
