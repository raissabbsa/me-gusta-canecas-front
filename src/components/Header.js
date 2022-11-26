import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../contexts/Context";

import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  const { userInfo } = useContext(Context);

  return (
    <Container>
      <Top>
        <div onClick={() => navigate("/")}>
          <ion-icon name="cafe-outline"></ion-icon>
          <p>Me Gusta Canecas</p>
        </div>
        <Right>
          Olá,{" "}
          {userInfo.name === undefined
            ? "Visitante!"
            : `${userInfo.name.toUpperCase()}!`}
          <ion-icon
            onClick={() => navigate("/login")}
            name="person-circle-outline"
          ></ion-icon>
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="log-out-outline"></ion-icon>
        </Right>
      </Top>
      <Sections>
        <p>Geek</p>
        <p>Profissão</p>
        <p>Animais</p>
        <p>Namorados</p>
      </Sections>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #2d799e;
  width: 100%;
  height: 100px;
`;
const Top = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  p {
    color: black;
    font-size: 25px;
    font-family: "Patrick Hand", cursive;
  }
  ion-icon {
    font-size: 35px;
    margin: 0 10px;
    cursor: pointer;
  }
  & > div {
    display: flex;
  }
`;
const Right = styled.div`
  justify-content: space-between;
  align-items: center;
  ion-icon {
    font-size: 25px;
  }
`;
const Sections = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
  background-color: #82b4d4;
  padding: 10px;
  margin-bottom: 70px;
  & > p {
    cursor: pointer;
  }
`;
