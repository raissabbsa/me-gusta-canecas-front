import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login/Login";
import Context from "./contexts/Context";
import MainPage from "./pages/main/MainPage";
import ResetStyle from "./styles/ResetStyle";
import Registration from "./pages/login/Registration";
import Admin from "./pages/Admin/Admin";
import AdminRegistration from "./pages/AdminRegistration/AdminRegistration";
import AdminProducts from "./pages/AdminProducts/AdminProducts";

export default function App() {
  const [adminUserInfo, setAdminUserInfo] = useState({});
  const [adminConfig, setAdminConfig] = useState({});
  return (
    <Context.Provider value={{ adminUserInfo, setAdminUserInfo, adminConfig, setAdminConfig }}>
      <BrowserRouter>
        <ResetStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/cadastro" element={<AdminRegistration />} />
          <Route path="/admin/produtos" element={<AdminProducts />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
