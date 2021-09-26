import { useParams } from "react-router-dom";
import PageCurso from "./PageCurso";
import styled from "styled-components";
import { MenuOptions } from "./Trabajoenclase";
import { useEffect, useState } from "react";

const Wrapper = styled.div``;
const MaterialesPages = () => {
  const { id } = useParams();
  const [on, setOn] = useState(
    localStorage.getItem("num2") === null ? "1" : localStorage.getItem("num2")
  );
  useEffect(() => {
    const numOption =
      localStorage.getItem("num2") === null
        ? "1"
        : localStorage.getItem("num2");
    setOn(numOption);
  

  });
  return (
    <PageCurso data={id}>
      <MenuOptions
        on={on}
        handelClickSelect={(num) => {
          if (num !== localStorage.getItem("num2")) {
            localStorage.setItem("num2", num);
            setOn(localStorage.getItem("num2"));
          }
        }}
      />
      <Wrapper>
        <h1>Hello Materiales</h1>
      </Wrapper>
    </PageCurso>
  );
};

export default MaterialesPages;
