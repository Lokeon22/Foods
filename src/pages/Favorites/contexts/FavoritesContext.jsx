import { createContext, useState } from "react";
import data from "../../../data";

export const FavoritesContext = createContext();

export const Favorites = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ data, favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
