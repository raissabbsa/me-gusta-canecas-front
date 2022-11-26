import styled from "styled-components";

export default function CartImage({ name, price, imageLink, quantity }) {
  console.log(name, price, imageLink, quantity);
    return (
    <Conteiner>
      <img src={imageLink} alt={name} />
      <p>{name}</p>
      <p>R$ {price}</p>
      <p>Quantidade: {quantity}</p>
      <button>Remover</button>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  img{
    width: 90px;
  }
`;