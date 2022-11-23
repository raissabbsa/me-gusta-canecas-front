import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()

    return(
    <>
        <Top>
            <ion-icon name="list-outline"></ion-icon>
            <div>
            <ion-icon name="cafe-outline"></ion-icon>
                <p>Me Gusta Canecas</p>
            </div>
            
        
            <div>
                <ion-icon onClick={() => navigate("/login")} name="person-circle-outline"></ion-icon>
                <ion-icon name="cart-outline"></ion-icon>
                <ion-icon name="log-out-outline"></ion-icon>
            </div>
        </Top>
    </>)
}
const Top = styled.div`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    background-color: #2D799E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    margin-bottom: 70px;
    padding: 10px;
    p{
        color: black;
        font-size: 25px;
        font-family: 'Patrick Hand', cursive;
    }
    ion-icon{
        font-size: 35px;
        margin-right: 10px;
        cursor: pointer;
        margin-left: 10px;
    }
    &>div{
        display: flex;
    }
`
