import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { Favorites } from "./pages/Favorites/contexts/FavoritesContext";

export const App = () => {
  return (
    <BrowserRouter>
      <Favorites>
        <AppRoutes />
      </Favorites>
    </BrowserRouter>
  );
};
