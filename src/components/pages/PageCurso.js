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

export const ComponenteProyegido = ({ children, on, setOpenNavLeft }) => {
  let [wrapRef, setWrapRef] = useState(null);
  
  const handleClickOutside = (event) => {
    if (wrapRef && !wrapRef.contains(event.target)) {
      alert("Hiciste click fuera");
      setOpenNavLeft();

    }
  };

  const setWrapperRef = (node) => {
    wrapRef = node;
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return on ? <div ref={setWrapperRef}>{children}</div> : <div>{children}</div>;
};

const PageCurso = ({ children, data }) => {
  const [navLeft, setNavLeft] = useState(false);
  return (
    <ContainerCurso>
      <NavTopCurso
        data={data}
        handelClickCloseNavLeft={() => setNavLeft(true)}
      />
      <ComponenteProyegido
        open={navLeft}
        setOpenNavLeft={() => setNavLeft(false)}
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
