import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import MainPage from "./pages/main/MainPage";
import ResetStyle from "./styles/ResetStyle";
import Registration from "./pages/login/Registration";
import Admin from "./pages/Admin/Admin";
import AdminRegistration from "./pages/AdminRegistration/AdminRegistration";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import { UserProvider } from "./contexts/Context";
import ImagePage from "./pages/main/ImagePage";
import Cart from "./pages/Cart/Cart";
import ProductsSections from "./pages/main/ProductsSections";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ResetStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/produto/:imageId" element={<ImagePage />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/cadastro" element={<AdminRegistration />} />
          <Route path="/admin/produtos" element={<AdminProducts />} />
          <Route path="/:sections" element={<ProductsSections />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
