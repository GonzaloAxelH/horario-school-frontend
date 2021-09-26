import styled from "styled-components";
const imgCurso = "https://www.gstatic.com/classroom/themes/img_bookclub.jpg";
const Wrapper = styled.div`
  background-image: url(${imgCurso});
  background-size:cover;
  margin-top:2em;
  width:calc(100vw - 20vw);
  height:190px;
  border-radius:8px;
  @media (min-width:715px){
    height:235px;
  }
  @media (max-width:715px){
    background-size:cover;
    background-repeat:no-repeat;
    width:calc(100vw - 10vw);
  }
`;
const TitleCurso = styled.h1`
    color:#fff;
  font-size:28px;
  padding:1em;
    font-weight: 600;
    line-height: 2.25rem;
    letter-spacing:2px;
`;

const PortadaCurso = ({data}) => {
  return <Wrapper>
    <TitleCurso>
      {data}
    </TitleCurso>
  </Wrapper>;
};

export default PortadaCurso;
