import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Checkout() {
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
          <Image key={p._id}>
          <img src={p.imageLink} alt={p.name} />
          <div>
            <h1>{p.name}</h1>
            <p>Qtd.: {p.quantity}</p>
          </div>
          <h2>R$ {p.price}</h2>
          </Image>
        ))}
        <Button >Concluir compra?</Button>
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
  font-size: 20px;
  text-align: center;
  padding: 5px;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 90%;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #2d799e;
  border-radius: 5px;
  margin: 5px 0;
  img {
    width: 90px;
  }
  p {
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    font-size: 13px;
  }
  h1 {
    font-size: 20px;
    padding: 5px 0;
    font-weight: 700;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;
