import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./view/login/login";
import Dashboard from "./view/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
