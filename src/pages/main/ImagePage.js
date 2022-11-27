import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { URL } from "../../constants/urls";
import Context from "../../contexts/Context";
import Header from "../../components/Header";
import styled from "styled-components";

export default function ImagePage() {
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [quant, setQuant] = useState(1);
  const { imageId } = useParams();
  const { config, userInfo } = useContext(Context);
  const cartForm = { productId: image._id, quantity: quant.toString() };
  console.log("image._id")
  console.log(image._id)
  console.log("image")
  console.log(image)
  console.log("cartForm")
  console.log(cartForm)
  console.log("quant")
  console.log(quant.toString())
  console.log("config")
  console.log(config)

  useEffect(() => {
    const promise = axios.get(`${URL}/products/${imageId}`);

    promise.then((res) => {
      setImage(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  },[]);

  function changeQuant(operator) {
    if (operator === "+") {
      if (quant < Number(image.quantity)) {
        setQuant(quant + 1);
      }
    } else {
      if (quant > 1) {
        setQuant(quant - 1);
      }
    }
  }

  function addToCart() {
    if (!userInfo.token) {
      navigate("/login");
      return;
    } else {
      const promise = axios.post(`${URL}/cart`, cartForm, config);
      promise.then((res) => {
        alert(res.data);
        console.log("cartForm in addToCart");
        console.log(cartForm);
      });
      promise.catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <Header />
      <Main>
        <TitleContainer>
          <h1>{image.name}</h1>
          <h2>Categoria: {image.category}</h2>
        </TitleContainer>
        <ProductContainer>
          <ImageContainer src={image.imageLink} alt={image.name} />
          <InfoContainer>
            <h3>R$ {image.price}</h3>
            <h4>Quantidade em estoque: {image.stock ? image.quantity : "0"}</h4>
            <Amount>
              <button>{quant}</button>
              <div>
                <button
                  onClick={() => changeQuant("+")}
                  disabled={image.stock ? "" : "disabled"}
                >
                  +
                </button>
                <button
                  onClick={() => changeQuant("-")}
                  disabled={image.stock ? "" : "disabled"}
                >
                  -
                </button>
              </div>
            </Amount>
            <button
              onClick={addToCart}
              disabled={image.stock ? "" : "disabled"}
            >
              Comprar agora
            </button>
          </InfoContainer>
        </ProductContainer>
        <DescriptionContainer>
          <p>Descrição:</p> {image.description}
        </DescriptionContainer>
      </Main>
    </>
  );
}

const Main = styled.div`
  padding: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 100px;
  }
  @media (max-width: 650px) {
    padding: 100px 30px;
  }
`;
const TitleContainer = styled.div`
  justify-content: center;
  align-items: center;
  color: #404040;
  padding: 15px;
  width: 100%;
  h1 {
    margin: 10px 0;
    font-size: 25px;
    font-weight: 700;
  }
  h2 {
    margin: 10px 0;
    font-size: 15px;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.img`
  border-radius: 5px;
  width: 70%;
`;
const InfoContainer = styled.div`
  justify-content: center;
  color: #404040;
  padding: 20px;
  width: 100%;
  h3 {
    margin: 15px 0;
    font-size: 23px;
    font-weight: 700;
  }
  h4 {
    margin: 15px 0;
    font-size: 14px;
    font-weight: 400;
  }
  & > button {
    width: 100%;
    height: 40px;
    background-color: #2d799e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
  }
`;
const DescriptionContainer = styled.div`
  p {
    font-weight: 700;
    margin: 10px 0;
  }
`;
const Amount = styled.div`
  display: flex;
  margin-bottom: 20px;
  & > div {
    display: flex;
    flex-direction: column;
  }
  button {
    background-color: ${(props) => (props.stock ? "#E0E0E0" : "#E0E0E0")};
    border-radius: 2px;
    border: none;

    margin: 2px 3px;
    cursor: pointer;
  }
`;
