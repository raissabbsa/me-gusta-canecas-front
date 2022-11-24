import styled from "styled-components"

export default function Image({p}){
    return(
        <Block>
            <img src={p.imageLink} alt={p.name}/>
            <p>{p.name}</p>
        </Block>
        
    )

}
const Block = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;
    img{
        width: 120px;
        margin-bottom: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    &>p{
        text-align: center;
        width: 120px;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
`