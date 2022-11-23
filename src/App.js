import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import MainPage from "./pages/main/MainPage";
import ResetStyle from "./styles/ResetStyle";
import Registration from "./pages/login/Registration";

export default function App(){
  return(
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  )
}