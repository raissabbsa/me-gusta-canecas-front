import styled from "styled-components";

export default function CartImage({ name, price, imageLink, quantity }) {
  console.log(name, price, imageLink, quantity);
  return (
    <Conteiner>
      <img src={imageLink} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>Qtd.: {quantity}</p>
      </div>
      <h2>R$ {price}</h2>

      <button>Remover</button>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 90%;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  border: 1px solid black;
  img {
    width: 90px;
  }
  p {
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
  }
`;
