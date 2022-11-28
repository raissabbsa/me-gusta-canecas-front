import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Adress() {
  const { config } = useContext(Context);
  const [adress, setAdress] = useState({});
  const [loading, setLoading] = useState(false);
  const [savedAdress, setSavedAdress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_HOST}/adress`, config);
    promise.then((res) => {
      setSavedAdress(res.data);
      console.log(res.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, [config]);
 

  function fillForm(e) {
    setAdress({ ...adress, [e.target.name]: e.target.value });
  }

  function registerAdress(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      `${process.env.REACT_APP_HOST}/adress`,
      adress,
      config
    );
    promise.then((res) => {
      console.log(res.data);
      navigate("/checkout");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      console.log(err);
      setLoading(true);
    });
  }

  if (savedAdress) {
    return (
      <>
      <Header />
      <Container>
        <h1>Endereço de entrega</h1>
        <div>
          <Line>Rua: {savedAdress.street}</Line>
          <Line>Número: {savedAdress.number}</Line>
          <Line>Complemento: {savedAdress.complement}</Line>
          <Line>Bairro: {savedAdress.district}</Line>
          <Line>Cidade: {savedAdress.city}</Line>
          <Line>Estado: {savedAdress.state}</Line>
          <Line>CEP: {savedAdress.postalCode}</Line>
          <Line>Tipo: {savedAdress.type}</Line>
        </div>
        <Button to="/checkout">{loading ? "Carregando..." : "Checkout"}</Button>
      </Container>
    </>
  )}
  
  if (!savedAdress) {
    return (
    <>
      <Header />
      <Container>
        <h1>Cadastre um endereço para envio dos produtos</h1>
        <form onSubmit={registerAdress}>
          <input
            placeholder="Rua"
            type="text"
            name="street"
            value={adress.street}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Numero"
            type="number"
            name="number"
            value={adress.number}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Complemento"
            type="text"
            name="complement"
            value={adress.complement}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="CEP"
            type="number"
            name="postalCode"
            value={adress.postalCode}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Bairro"
            type="text"
            name="district"
            value={adress.district}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Cidade"
            type="text"
            name="city"
            value={adress.city}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Estado"
            type="text"
            name="state"
            value={adress.state}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <input
            placeholder="Tipo de endereço (residencial, comercial, etc)"
            type="text"
            name="type"
            value={adress.type}
            onChange={fillForm}
            disabled={loading ? "disabled" : ""}
          />
          <Button type="submit" disabled={loading ? "disabled" : ""}>
            {loading ? "Carregando..." : "Cadastrar endereço"}
          </Button>
        </form>
      </Container>
    </>
  )};
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 130px 0;
  h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }
  p {
    font-size: 17px;
    margin-bottom: 20px;
  }
  form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    color: black;
    background-color: #add8e5;
    width: 80%;
    height: 35px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 18px;
  }
  div {
    margin: 30px 0 0 0;
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
  margin-top: 10px;
`;
const Line = styled.p``;
