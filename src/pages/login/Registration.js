import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Registration(){
    const [form,setForm] = useState({name:"", email:"", password:""})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function fillForm(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    function register(e){
        e.preventDefault()
        setLoading(true)
        console.log(form)
    }
    return(
        <Container>
            <Top>
                <ion-icon name="cafe-outline"></ion-icon>
                Me gusta Canecas
            </Top>
            <form onSubmit={register}>
            <input placeholder="nome"
                    type="name"
                    name="name"
                    value={form.name}
                    onChange={fillForm}
                    disabled={loading ? "disabled" : ""}
                />
            <input placeholder="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={fillForm}
                    disabled={loading ? "disabled" : ""}
                />
                <input placeholder="senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={fillForm}
                    disabled={loading ? "disabled" : ""}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <p onClick={() => navigate("/login")}>Já tem conta? Faça o login!</p>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        color: black;
        background-color: #ADD8E5;
        width: 350px;
        height: 50px;
        border-radius: 10px;
        border: none;
        margin-bottom: 10px;
        padding: 15px;
        font-size: 24px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button{
        cursor: pointer;
        width: 370px;
        height: 50px;
        color: white;
        background-color: #2D799E;
        border: none;
        border-radius: 10px;
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
    }
    p{
        margin-top: 10px;
        color: #2D799E;
        cursor: pointer;
    }
`
const Top = styled.div`
    display: flex;
    margin-bottom: 150px;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    background-color: #2D799E;
    font-family: 'Patrick Hand', cursive;
    font-size: 25px;
    ion-icon{
        margin-right: 10px;
        font-size: 35px;
    }
`