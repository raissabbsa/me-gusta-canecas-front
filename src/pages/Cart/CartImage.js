import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import Context from "../../contexts/Context";

export default function CartImage({ id, name, price, imageLink, quantity }) {
  const { config } = useContext(Context);

  function removeProduct() {
    const promise = axios.delete(
      `${process.env.REACT_APP_HOST}/cart/`,
      { productId: id },
      config
    );
    promise.then((res) => {
      console.log(res);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  return (
    <Conteiner>
      <img src={imageLink} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>Qtd.: {quantity}</p>
      </div>
      <h2>R$ {price}</h2>

      <Button onClick={() => removeProduct(id)}>
        Remover
        <br />
        do carrinho
      </Button>
    </Conteiner>
  );
}

const Conteiner = styled.div`
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
const Button = styled.div`
  height: 45px;
  background-color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
