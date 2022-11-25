import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { TokenContext } from "../../contexts/Token"
import axios from "axios"
import { URL } from "../../constants/urls";


export default function Login() {
    const [form,setForm] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)
    const {setToken} = useContext(TokenContext)
    const navigate = useNavigate()

    function fillForm(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    function login(e){
        e.preventDefault()
        setLoading(true)
        console.log(form)
        const promise = axios.post(`${URL}/sign-in`, form)
        promise.then(res => {
            setToken(res.data.token)
            navigate("/")
        })
        promise.catch(err => {
            console.log(err)
        })
    }
    return (
        <ContainerLogin>
            <Top>
                <ion-icon name="cafe-outline"></ion-icon>
                Me gusta Canecas
            </Top>
            <form onSubmit={login}>
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
                <button type="submit">Entrar</button>
            </form>
            <p onClick={() => navigate("/cadastro")}>Não tem conta? Cadastre-se!</p>
        </ContainerLogin>
    )
}
const ContainerLogin = styled.div`
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
    margin-bottom: 100px;
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