import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Image({ p }) {
    return (
        <Block stock={p.stock}>
            <Link to={`/imagem/${p._id}`}>
                <img src={p.imageLink} alt={p.name}/>
            </Link>

            <p>{p.name}</p>
            <h1>R$ {p.price}</h1>
        </Block>

    )

}
const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    border: 1px solid #2D799E;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 40px;
    height: 300px;
    width: 300px;
    img{
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    &>p{
        text-align: center;
        width: 200;
        flex-wrap: wrap;
        margin-bottom: 10px;
        color: #2D799E;
        font-size: 20px;
        font-weight: 700;
    }
    &>h1{
        text-align: center;
        width: 200;
        flex-wrap: wrap;
        color: ${props => props.stock ? "#2D799E" : "#EB453D"};
        font-size: 15px;
    }
`