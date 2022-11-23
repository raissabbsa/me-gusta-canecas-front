import styled from "styled-components";
import Header from "../components/Header";
import Image from "./Image";

export default function MainPage(){
    const object = {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw_37OMhhw9K8R-L_a5kFvq-2LJaO0dwTSKVX-0vrsCCEn2wAD1Krjr0fIzAYHFRBHJQ&usqp=CAU",
        name: "Caneca de ursinhos"
    }
    let list = []
    for(let i=0;i<10;i++){
        list.push(object)
    }
    return(
        <>
            <Header />
            <Container>
                {list.map((e,i) => <Image key={i} e={e}/>)}

            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 100px 30px 0;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
`