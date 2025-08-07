import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./view/login/login";
import Dashboard from "./view/Dashboard/Dashboard";
import Pedidos from "./view/Pedidos/Pedidos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
