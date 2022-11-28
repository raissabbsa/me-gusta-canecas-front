import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import CartImage from "./CartImage";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cart() {
  const { config } = useContext(Context);
  const { cart, setCart } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_HOST}/cart`, config);
    promise.then((res) => {
      setCart(res.data);
      setLoading(true);
      console.log("res.data");
      console.log(res.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [config, setCart, cart]);

  return (
    <>
      <Header />
      <Container>
        {cart?.map((p) => (
          <CartImage
            key={p._id}
            _id={p._id}
            productId={p.productId}
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
