import { useContext } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ImageCheckout from "./ImageCheckout";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useContext(Context);
  const { savedAdress } = useContext(Context);

  function finish() {
    alert("Compra finalizada com sucesso!");
  }

  return (
    <>
      <Header />
      <Container>
        <Products>
          {cart?.map((p) => (
            <ImageCheckout
              key={p._id}
              price={p.price}
              imageLink={p.imageLink}
              name={p.name}
              quantity={p.quantity}
            />
          ))}
        </Products>

        <Adress>
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
        </Adress>
        <Button onClick={finish} to={"/"}>Concluir compra</Button>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 40px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  width: 300px;
  height: 60px;
  background-color: #2d799e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.p`
  margin: 10px 0;
`;
const Adress = styled.div`
  padding: 50px;
  width: 100%;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;
const Products = styled.div`
  width: 100%;
  padding: 0 50px 0 50px;
`;
