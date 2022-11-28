import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import CartImage from "./CartImage";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { config } = useContext(Context);
  const { cart, setCart } = useContext(Context);


  return (
    <>
      <Header />
      <Container>
        </Container>
    </>
    );
}

const Container = styled.div``;