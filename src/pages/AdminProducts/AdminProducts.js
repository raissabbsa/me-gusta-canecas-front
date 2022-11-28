import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/Context";
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_HOST}/products`, adminConfig);

    promise.then((res) => {
      setProducts(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, [adminConfig]);

  function fillForm(e) {
    setAddProductForm({ ...addProductForm, [e.target.name]: e.target.value });
  }
  function addProductSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(addProductForm);
    const promise = axios.post(
      `${process.env.REACT_APP_HOST}/add-product`,
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
      <div>
        <h1>Acesso de Administrador</h1>
        <p>Olá, {adminUserInfo.name}</p>
      </div>
      <form onSubmit={addProductSubmit}>
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
  h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }
  p {
    font-size: 17px;
    margin-bottom: 20px;
  }
  form {
    margin-top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
