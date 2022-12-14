import { createContext, useState } from "react";
import data from "../../../data/PratosPrincipais";
import sobremesas from "../../../data/SobremesasPrincipais";
import bebidas from "../../../data/BebidasPrincipais";

export const FavoritesContext = createContext();

export const Favorites = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [details, setDetails] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        data,
        sobremesas,
        bebidas,
        favorites,
        setFavorites,
        details,
        setDetails,
        pedidos,
        setPedidos,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
