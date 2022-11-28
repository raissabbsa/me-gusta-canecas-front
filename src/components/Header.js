import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../contexts/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import {URL} from "../constants/urls"
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const { userInfo, config, setConfig, setSection, setUserInfo} = useContext(Context);
  
  function acessCart() {
    
    if (userInfo.token !== undefined) {

      navigate("/carrinho");
    } else {
      navigate("/login");
    }
  
  }

  function exit(){
    const promise = axios.delete(`${process.env.REACT_APP_HOST}/exit`, config);
    promise.then(res => {
      setConfig({})
      setUserInfo({})
    })
    promise.catch(err => {
      console.log(err)
    })

  }
    return (
    <Container>
      <Top>
        <div onClick={() => navigate("/")}>
          <ion-icon name="cafe-outline"></ion-icon>
          <p>Me Gusta Canecas</p>
        </div>
        <Right>
          {userInfo.name === undefined
            ? ""
            : `Olá, ${userInfo.name.toUpperCase()}!`}
          <ion-icon
            onClick={() => navigate("/login")}
            name="person-circle-outline"
          ></ion-icon>
          <ion-icon onClick={()=> acessCart()} name="cart-outline"></ion-icon>
          <ion-icon onClick={() => exit()} name="log-out-outline"></ion-icon>
        </Right>
      </Top>
      <Sections>
        <Link onClick={() => setSection("geek")} to={"/Geek"}><p>Geek</p></Link>
        <Link onClick={() => setSection("profissao")} to={"/Profissão"}><p>Profissão</p></Link>
        <Link onClick={() => setSection("animais")} to={"/Animais"}><p>Animais</p></Link>
        <Link onClick={() => setSection("namorados")} to={"/Namorados"}><p>Namorados</p></Link>
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
