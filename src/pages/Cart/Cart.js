import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import CartImage from "./CartImage";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState();
  const { config } = useContext(Context);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_HOST}/cart`, config);
    promise.then((res) => {
      setCart(res.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [config]);

  return (
    <>
      <Header />
      <Container>
        {cart?.map((p) => (
          <CartImage
            key={p._id}
            id={p._id}
            name={p.name}
            price={p.price}
            imageLink={p.imageLink}
            quantity={p.quantity}
          />
        ))}
        <Button to={"/carrinho/endereco"}>Próximo</Button>
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
  width: 150px;
  height: 60px;
  background-color: #2d799e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
