import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";
import { URL } from "../../constants/urls";
import styled from "styled-components";
import axios from "axios";
import AdminHeader from "../../components/AdminHeader";

export default function AdminProducts() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addProductForm, setAddProductForm] = useState({
    name: "",
    description: "",
    price: "",
    imageLink: "",
    category: "",
    stock: true,
    quantity: "",
  });
  const { adminUserInfo } = useContext(Context);
  const { adminConfig } = useContext(Context);

  /*   const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${URL}/products`, adminConfig);

    promise.then((res) => {
      setProducts(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }); */
  function fillForm(e) {
    setAddProductForm({ ...addProductForm, [e.target.name]: e.target.value });
  }
  function addProductSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(addProductForm);
    const promise = axios.post(
      `${URL}/add-product`,
      addProductForm,
      adminConfig
    );

    promise.then((res) => {
      console.log(res.data);
      setAddProductForm({
        name: "",
        description: "",
        price: "",
        imageLink: "",
        category: "",
        stock: true,
        quantity: "",
      });
    });

    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data.message);
    });
  }

  return (
    <Container>
      <AdminHeader />
      <form onSubmit={addProductSubmit}>
        <h1>Acesso de Administrador</h1>
        <p>Cadastrar novo produto</p>
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={addProductForm.name}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do produto"
          value={addProductForm.description}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Preço do produto"
          value={addProductForm.price}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="text"
          name="imageLink"
          placeholder="Link da imagem do produto"
          value={addProductForm.imageLink}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria do produto"
          value={addProductForm.category}
          onChange={fillForm}
          disabled={loading}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantidade de itens"
          value={addProductForm.quantity}
          onChange={fillForm}
          disabled={loading}
          required
        />
        {loading ? (
          <Button disabled={loading}></Button>
        ) : (
          <Button disabled={loading} type="submit">
            Cadastrar produto
          </Button>
        )}
      </form>
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  form {
    margin-top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-size: 25px;
    margin-bottom: 5px;
  }
  p {
    font-size: 17px;
    margin-bottom: 20px;
  }
  input {
    color: black;
    background-color: #add8e5;
    width: 80%;
    height: 20px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 20px;
  }
    p {
    margin-top: 10px;
    color: #2d799e;
    cursor: pointer;
  }
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  background-color: #2d799e;
  font-family: "Patrick Hand", cursive;
  font-size: 25px;
  ion-icon {
    margin-right: 10px;
    font-size: 35px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 50%;
  height: 50px;
  color: white;
  background-color: #2d799e;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;

