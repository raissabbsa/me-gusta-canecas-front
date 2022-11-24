import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AdminHeader() {
  const navigate = useNavigate();

  return (
    <>
      <Top>
        <ion-icon name="home" onClick={() => navigate("/")}></ion-icon>
        <div>
          <ion-icon name="cafe-outline"></ion-icon>
          <p>Me Gusta Canecas</p>
        </div>

        <div>
          <ion-icon name="cog" onClick={() => navigate("/admin/cadastro")}></ion-icon>
          <ion-icon name="log-out-outline"></ion-icon>
         </div>
      </Top>
    </>
  );
}
const Top = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  background-color: #2d799e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 10px;
  z-index: 1;
  p {
    color: black;
    font-size: 25px;
    font-family: "Patrick Hand", cursive;
    z-index: 2;
  }
  ion-icon {
    font-size: 35px;
    margin-right: 10px;
    cursor: pointer;
    margin-left: 10px;
  }
  & > div {
    display: flex;
  }
`;
