import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Context from "../../contexts/Context";
import axios from "axios";
import { URL } from "../../constants/urls";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { userInfo, setUserInfo } = useContext(Context);
  const { setConfig } = useContext(Context);
  const navigate = useNavigate();

  function fillForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function login(e) {
    e.preventDefault();
    setLoading(true);

    const promise = axios.post(`${URL}/sign-in`, form);
    promise.then((res) => {
      setUserInfo(res.data);
      setConfig({
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
      const localInfo = JSON.stringify(res.data);
      sessionStorage.setItem("userInfo", localInfo);
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    const savedInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    if (savedInfo !== null) {
      setUserInfo(savedInfo);
      setConfig({
        headers: {
          Authorization: `Bearer ${savedInfo.token}`,
        },
      });
      navigate("/");
    }
    }, [userInfo]);

  return (
    <ContainerLogin>
      <Top>
        <ion-icon name="cafe-outline"></ion-icon>
        Me gusta Canecas
      </Top>
      <form onSubmit={login}>
        <input
          placeholder="email"
          type="email"
          name="email"
          value={form.email}
          onChange={fillForm}
          disabled={loading ? "disabled" : ""}
        />
        <input
          placeholder="senha"
          type="password"
          name="password"
          value={form.password}
          onChange={fillForm}
          disabled={loading ? "disabled" : ""}
        />
        <button type="submit">Entrar</button>
      </form>
      <p onClick={() => navigate("/cadastro")}>Não tem conta? Cadastre-se!</p>
    </ContainerLogin>
  );
}
const ContainerLogin = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    color: black;
    background-color: #add8e5;
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    cursor: pointer;
    width: 370px;
    height: 50px;
    color: white;
    background-color: #2d799e;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
  }
  p {
    margin-top: 10px;
    color: #2d799e;
    cursor: pointer;
  }
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  background-color: #2d799e;
  font-family: "Patrick Hand", cursive;
  font-size: 25px;
  ion-icon {
    margin-right: 10px;
    font-size: 35px;
  }
`;
