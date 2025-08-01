import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./view/login/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
