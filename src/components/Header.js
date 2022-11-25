import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()

    return(
    <Container>
        <Top>
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
        <Sections>
            <p>Geek</p>
            <p>Profissão</p>
            <p>Animais</p>
            <p>Namorados</p>
        </Sections>
    </Container>)
}
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #2D799E;
    width: 100%;
    height: 100px;

`
const Top = styled.div`
    box-sizing: border-box;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const Sections = styled.div`
    display: flex;
    justify-content: space-around;
    height: 30px;
    background-color: #82B4D4;
    padding: 10px;
    margin-bottom: 70px;
    &>p{
        cursor: pointer;
        
    }
`
