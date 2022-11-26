import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Image({ p }) {
  return (
    <Block stock={p.stock}>
      <Link to={`/produto/${p._id}`}>
        <img src={p.imageLink} alt={p.name} />
      </Link>

      <p>{p.name}</p>
      <h1>R$ {p.price}</h1>
      <Button disabled={p.stock ? "" : "disabled"}>Comprar</Button>
    </Block>
  );
}
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  border: 1px solid #2d799e;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 40px;
  max-width: 300px;
  min-width: 200px;
  height: 330px;
  width: 300px;
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  & > p {
    text-align: center;
    width: 200;
    flex-wrap: wrap;
    margin-bottom: 10px;
    color: #2d799e;
    font-size: 20px;
    font-weight: 700;
  }
  & > h1 {
    text-align: center;
    width: 200;
    flex-wrap: wrap;
    color: ${(props) => (props.stock ? "#2D799E" : "#EB453D")};
    font-size: 15px;
  }
`;
const Button = styled.div`
  height: 15px;
  background-color: #2d799e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
  margin: 10px;
  color: white;
`;
