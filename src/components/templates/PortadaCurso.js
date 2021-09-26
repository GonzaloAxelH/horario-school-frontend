import styled from "styled-components";
const imgCurso = "https://www.gstatic.com/classroom/themes/img_bookclub.jpg";
const Wrapper = styled.div`
  background-image: url(${imgCurso});
  background-size:cover;
  margin-top:2em;
  width:calc(100vw - 20vw);
  height:180px;
  border-radius:8px;
  @media (min-width:660px){
    height:240px;
  }
  @media (max-width:660px){
    background-size:cover;
    background-repeat:no-repeat;
  }
`;
const TitleCurso = styled.h1`
    color:#fff;
  font-size:28px;
  padding:1em;
`;

const PortadaCurso = ({data}) => {
  return <Wrapper>
    <TitleCurso>
      {data}
    </TitleCurso>
  </Wrapper>;
};

export default PortadaCurso;
