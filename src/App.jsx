import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
