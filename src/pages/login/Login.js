import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [form,setForm] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function fillForm(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    function login(e){
        e.preventDefault()
        setLoading(true)
        console.log(form)
    }
    return (
        <ContainerLogin>
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