import {useState} from "react";
import styled from "styled-components";
import NavLeftCurso from "../templates/NavLeftCurso";
import NavTopCurso from "../templates/NavTopCurso";

const ContainerCurso = styled.div`
  display: flex;
  width: 100%;
`;

const WrapperAct = styled.div`
  margin-top: 128px;
`;

const PageCurso = ({children,cod}) => {
  const [navLeft,setNavLeft] = useState(false);
  return (
    <ContainerCurso>
      <NavTopCurso cod={cod} handelClickCloseNavLeft={()=> setNavLeft(true)} />
      <NavLeftCurso  handelClickOpenNavLeft={()=> setNavLeft(false)} open={navLeft} />
      <WrapperAct>{children}</WrapperAct>
    </ContainerCurso>
  );
};

export default PageCurso;

