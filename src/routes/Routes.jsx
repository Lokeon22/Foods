import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Details } from "../pages/Details";
import { Pedidos } from "../pages/Pedidos";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
