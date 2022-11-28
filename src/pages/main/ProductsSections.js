import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState, useContext} from "react";
import Context from "../../contexts/Context";
import { useParams } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";
//import { URL } from "../../constants/urls";

export default function ProductsSections(){
    const { sections } = useParams();
    const [products, setProducts] = useState([]);
    const { changeSection } = useContext(Context);
  
    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_HOST}/${sections}`);
    
        promise.then((res) => {
          setProducts(res.data);
        });
    
        promise.catch((err) => {
          console.log(err.response.data);
        });
      },[changeSection]);
    return(
        <>
            <Header />
            <Container>
                { products.length  >0 
                ? products.map((p => (<Image key={p._id} p={p}/>)))
                : "Não há produtos disponíveis nesta seção" }
            </Container>
        </>
    )
}
const Container = styled.div`
  padding: 100px 30px 0;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;