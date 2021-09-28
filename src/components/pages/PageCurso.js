import { useState, useEffect } from "react";
import styled from "styled-components";
import NavLeftCurso from "../templates/NavLeftCurso";
import NavTopCurso from "../templates/NavTopCurso";

const ContainerCurso = styled.div`
  display: flex;
  width: 100vw;
  min-height: 120vh;
`;

const WrapperAct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
  width: 100%;
`;

export const ComponenteProyegido = ({ children,closeNavLeftClickAfuera}) => {
  useEffect(()=>{
      let body = document.getElementById('body');
      body.addEventListener('click',(e)=>{
        setClose();
      })
  })
  const setClose = () => {
      closeNavLeftClickAfuera();
  }

  const handleClick = (e)=>{
    e.stopPropagation();
  }
  return <div onClick={handleClick}>
        {children}
    </div>
};

const PageCurso = ({ children, data }) => {
  const [navLeft, setNavLeft] = useState(false);
  const closeNavLeftClickAfuera = () => setNavLeft(false);
  return (
    <ContainerCurso>
      <NavTopCurso
        data={data}
        handelClickCloseNavLeft={(e) => {
          setNavLeft(true)
          e.stopPropagation();
        }}
      />
      <ComponenteProyegido
        open={navLeft}
        closeNavLeftClickAfuera={closeNavLeftClickAfuera}
      >
        <NavLeftCurso
          handelClickOpenNavLeft={() => setNavLeft(false)}
          open={navLeft}
        />
      </ComponenteProyegido>

      <WrapperAct>{children}</WrapperAct>
    </ContainerCurso>
  );
};

export default PageCurso;
