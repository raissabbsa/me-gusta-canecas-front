import styled from "styled-components";

export default function Image({ imageLink, name, price, id }) {

  return (
    <Block >
      <img src={imageLink} alt={name} />
      <p>{name}</p>
      <p>R$ {price}</p>
    </Block>
  );
}
const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  img {
    width: 120px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  & > p {
    text-align: center;
    width: 120px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;
