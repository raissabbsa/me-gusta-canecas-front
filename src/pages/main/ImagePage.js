import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { URL } from "../../constants/urls";
import Header from "../../components/Header";
import styled from "styled-components";

export default function ImagePage(){
    const [image, setImage] = useState({})
    const [quant, setQuant] = useState(1)
    const { imageId } = useParams()

    useEffect(() => {
        const promise = axios.get(`${URL}/products/${imageId}`)
    
        promise.then((res) => {
          setImage(res.data)
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        })
      },[])


      function changeQuant(operator){
        if(operator === "+"){
            if(quant < Number(image.quantity)){
                setQuant(quant+1)
            }
        }
        else{
            if(quant>1){
                setQuant(quant-1)
            }
        }
      }

    return(
        <>
            <Header />            
            <ImageBox>
                <div>
                    <h1>Categoria: {image.category}</h1>
                    <h1>{image.name}</h1>
                    <img src={image.imageLink} />
                </div>
                
                <Infos stock={image.stock}>
                    <h2>R$ {image.price}</h2>
                    <p>{image.description}</p>
                    <p>Quantidade em estoque: {image.stock? image.quantity : "0"}</p>
                    <Amount>
                        <button>{quant}</button>
                        <div>
                            <button 
                                onClick={() => changeQuant("+")}
                                disabled={image.stock ? "" : "disabled"}>
                                    +
                            </button>
                            <button 
                            onClick={() => changeQuant("-")}
                            disabled={image.stock ? "" : "disabled"}>
                                -
                            </button>
                        </div>

                    </Amount>
                    <button disabled={image.stock ? "" : "disabled"}>Comprar agora</button>
                </Infos>
            </ImageBox>
        </>)
}
const Amount = styled.div`
    display: flex;
    margin-bottom: 20px;
    &>div{
        display: flex;
        flex-direction: column;
    }
    button{
        background-color: ${props => props.stock? "#E0E0E0": "#E0E0E0"};
        border-radius: 2px;

        margin-right: 2px;
        cursor: pointer;
    }
`

const Infos = styled.div`
    &>button{
        height: 40px;
        background-color: #2D799E;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
`

const ImageBox = styled.div`
    padding-top: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #404040;
    &>div{
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }
    &>img{
        width: 300px;
    }
    h1{
        margin-bottom: 20px;
    }
    p{
       margin-bottom: 10px;
    }
    
    h2{
        font-size: 25px;
        margin-bottom: 20px;
    }
`