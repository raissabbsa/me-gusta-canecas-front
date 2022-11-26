import axios from "axios";
import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import Context from "../../contexts/Context";
import CartImage from "./CartImage";
import { URL } from "../../constants/urls";
import styled from "styled-components";

export default function Cart() {
    const [ cart, setCart ] = useState();
    const { config } = useContext(Context);
    
    useEffect(() => {
        const promise = axios.get(`${URL}/cart`, config);
        promise.then((res) => {
        setCart(res.data);
        console.log(res.data);
        });
        promise.catch((err) => {
        console.log(err);
        });
    },[setCart, config]);
    
    return (
        <>
        <Header />
        <>
            {cart.map((p) => (<CartImage key={p._id} name={p.name} price={p.price} imageLink={p.imageLink} quantity={p.quantity} />))}
        </> 
        </>
    );
}


