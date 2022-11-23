import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResetStyle from "./styles/ResetStyle";

export default function App(){
  return(
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}