import PageCurso from "./PageCurso"
import { useParams } from "react-router";
import styled from "styled-components";
const WrapperParticopants = styled.div`
  margin-top:2em;
  padding:0 0 0 0;
  width:100%;
  @media (min-width:890px){
    width:calc(100vw - 15em);
  }
`;
const ListParticipantes = styled.div``;
const ListDocentes = styled.div``;
const Title = styled.div`
  display:flex;
  border-bottom:1px solid green;
  align-items:center;
  justify-content:space-between;
    h1{
    color:green;
    font-size:28px;
  }
  p{
    color:#137333;
    font-weight:bold;
    padding:0 1em 0 0;
    font-size:14px;
  }
  padding:0 0 0 1em;
  margin-bottom:1em;
  height:74px;
`;
const Info = styled.div`
  display:grid;
  grid-template-columns:1fr 10fr 2fr;
  align-items:center;
  padding:8px;
`;
const Name = styled.p`
  margin:0 10px;
`;
const Photo = styled.div`
  display:flex;
  justify-content:center;
`;
const UserImg = styled.img`
  border-radius:50%;
  width:32px;
  height:32px;
`;
const Other = styled.div`
  display:flex;
  justify-content:center;
`;

const Usuario = ({name,img,other}) => {
  return  <Info>
            <Photo>
              <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GgfdJmgXUMtrZKagKBFE24M03BqwbV1aND_4AB4=s32-c"/>
            </Photo>
            <Name>
              {name}
            </Name>
            <Other>

          </Other>
          </Info>
}


const PersonasPage = () => {

  const { id } = useParams();
  return (
    <PageCurso data={id}>
      <WrapperParticopants>
        <Title><h1>Profesores</h1>
        </Title>
        <ListDocentes>
          <Usuario name="Maribel Estela Coaguila" other="Other" />
        </ListDocentes>
        <Title><h1>Compañeros de clase</h1>
          <p>9 alumnos</p> 
        </Title>
        <ListParticipantes>
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
          <Usuario name="Maribel Estela Coaguila" other="Other" />
        </ListParticipantes>
      </WrapperParticopants>
    </PageCurso>
  );

}

export default PersonasPage
