import styled from "styled-components";

export default function ImageCheckout({
  imageLink,
  name,
  price,
  quantity,
  _id,
}) {

  return (
    <ConteinerCheckout>
      <img src={imageLink} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>Qtd.: {quantity}</p>
      </div>
      <h2>R$ {price}</h2>
    </ConteinerCheckout>
  );
}

const ConteinerCheckout = styled.div`
  width: 90%;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #2d799e;
  border-radius: 5px;
  margin: 5px 0;
  img {
    width: 90px;
  }
  p {
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    font-size: 13px;
  }
  h1 {
    font-size: 20px;
    padding: 5px 0;
    font-weight: 700;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;
