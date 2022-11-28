import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";
import styled from "styled-components";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader";

export default function AdminSignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { adminUserInfo, setAdminUserInfo } = useContext(Context);
    const { setAdminConfig } = useContext(Context);
  
    const signInFomr = {
      email: email,
      password: password,
    };
  
    function loginSubmit(e) {
      e.preventDefault();
      setLoading(true);
      const promise = axios.post(`${process.env.REACT_APP_HOST}/root-sign-in`, signInFomr);
  
      promise.then((res) => {
        setAdminUserInfo(res.data);
        setAdminConfig({
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        });

        const rootLocalInfo = JSON.stringify(res.data);
      sessionStorage.setItem("adminUserInfo", rootLocalInfo);

      setLoading(false);
      navigate("/admin/produtos");
    });

    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data.message);
    });
  }

  useEffect(() => {
    const savedInfo = JSON.parse(sessionStorage.getItem("adminUserInfo"));

    if (savedInfo !== null) {
      setAdminUserInfo(savedInfo);
      setAdminConfig({
        headers: {
          Authorization: `Bearer ${savedInfo.token}`,
        },
      });
      navigate("/admin/produtos");
    }
    });

  return (
    <Container>
      <AdminHeader />      
      <form onSubmit={loginSubmit}>
        <h1>Acesso de Administrador</h1>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
        <input
           type="password"
           placeholder="Senha"
           onChange={(e) => setPassword(e.target.value)}
           disabled={loading}
           required
        />
         {loading ? (
          <Button disabled={loading}></Button>
        ) : (
          <Button disabled={loading} type="submit">
            Entrar
          </Button>
        )}
      </form>
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    color: black;
    background-color: #add8e5;
    width: 350px;
    height: 20px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
  }
  h1{
    font-size: 25px;
    margin-bottom: 25px;
  }
  p {
    color: black;
    font-size: 25px;
    font-family: "Patrick Hand", cursive;
    z-index: 2;
  }
`;
const Button = styled.button`
    cursor: pointer;
    width: 50%;
    height: 50px;
    color: white;
    background-color: #2d799e;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
`;

