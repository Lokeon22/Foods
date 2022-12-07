import { useState } from "react";

import explorer from "../assets/icons/explorer.svg";
import logout from "../assets/icons/SignOut.svg";
import search from "../assets/icons/search.svg";
import receipt from "../assets/icons/receipt.svg";

export const Header = () => {
  const [pedidos, setPedidos] = useState(0);

  return (
    <section className="w-full h-44 xl:h-[104px] bg-[#00111A] px-8 py-4 xl:px-8 lg:px-16 lg:py-3 grid xl:grid-cols-4 grid-cols-1 mb-40">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 xl:col-span-3">
        <img src={explorer} className="w-40 h-8 md:w-48" />
        <a href="#" className="text-[#E1E1E6] font-Roboto font-normal mt-2">
          Meus favoritos
        </a>
        <label className="relative flex items-center md:w-1/2 w-3/4 md:py-3 py-1">
          <input
            type="text"
            className="relative font-Roboto w-full px-12 md:py-3 py-2 bg-[#0D1D25] border-none outline-none rounded-md placeholder:text-[#7C7C8A]"
            placeholder="Busque pelas opções de pratos"
          />
          <img src={search} className="md:w-6 md:h-6 w-5 h-5 absolute left-3" />
        </label>
      </div>
      <div className="flex items-center justify-center xl:justify-start md:gap-8 gap-3 md:mt-0 mt-4">
        <button className="bg-[#750310] md:px-10 px-8 md:py-4 py-2 rounded-md font-Poppins font-medium relative text-sm">
          Meu pedido <span className="text-sm">({pedidos})</span>
          <img
            src={receipt}
            className="md:w-8 md:h-8 w-6 h-6 absolute md:top-2.5 md:left-1.5 top-1.5 left-1"
          />
        </button>
        <a href="">
          <img src={logout} className="md:w-8 md:h-8 w-7 h-7" />
        </a>
      </div>
    </section>
  );
};