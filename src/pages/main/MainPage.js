import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import Image from "./Image";


export default function MainPage() {
  const { products, setProducts, config } = useContext(Context);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_HOST}/products`);
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  },[setProducts, config]);

  return (
    <>
      <Header />
      <Container>
        {products.map((p) => (<Image key={p._id} p={p} />))}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 100px 30px 0;
  flex-wrap: wrap;
  width: 90%;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
