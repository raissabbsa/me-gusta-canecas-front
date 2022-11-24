import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";
import { URL } from "../../constants/urls";
import styled from "styled-components";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader";

export default function AddAdminUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addAdminForm, setAddAdminForm] = useState({
    name: "",
    email: "",
    document: "",
    password: "",
    confirmPassword: "",
  });

  const { adminConfig } = useContext(Context);
  function fillForm(e) {
    setAddAdminForm({ ...addAdminForm, [e.target.name]: e.target.value });
  }
  function addAdminSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const promise = axios.post(
      `${URL}/root-sign-up`,
      addAdminForm,
      adminConfig
    );

    promise.then((res) => {
      console.log(res.data);
      navigate("/admin");
    });

    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data.message);
    });
  }
  return (
    <Container>
      <AdminHeader />
      <form onSubmit={addAdminSubmit}>
        <h1>Adicionar novo administrador</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={addAdminForm.name}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={addAdminForm.email}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="number"
          name="document"
          placeholder="CPF"
          value={addAdminForm.document}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={addAdminForm.password}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          value={addAdminForm.confirmPassword}
          onChange={fillForm}
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
