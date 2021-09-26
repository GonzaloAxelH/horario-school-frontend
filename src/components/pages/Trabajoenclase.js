import PageCurso from "./PageCurso";
import { useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";

const WrapperTrabajos = styled.div`
  margin-top: 2em;
`;
const WrapperMenuOptions = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 2em 0;
  overflow-y: hidden;
  height: 25px;
`;
const ItemMenuOption = styled.div`
  border: 2px solid gray;
  margin: 0 1em;
  border-radius: 30px;
  padding: 0.2em 1em;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-size: 13px;
  }

  background: ${(props) => (props.on ? "#E6F4EA" : "transparent")};
  p {
    color: ${(props) => (props.on ? "#137333" : "gray")};
  }
`;

export const MenuOptions = ({ on, handelClickSelect }) => {
  return (
    <WrapperMenuOptions>
      <ItemMenuOption
        on={on === "1" ? true : false}
        onClick={() => handelClickSelect(1)}
      >
        <p>Hoy</p>
      </ItemMenuOption>
      <ItemMenuOption
        on={on === "2" ? true : false}
        onClick={() => handelClickSelect(2)}
      >
        <p>Ayer</p>
      </ItemMenuOption>
      <ItemMenuOption
        on={on === "3" ? true : false}
        onClick={() => handelClickSelect(3)}
      >
        <p>Ante Ayer</p>
      </ItemMenuOption>
      <ItemMenuOption
        on={on === "4" ? true : false}
        onClick={() => handelClickSelect(4)}
      >
        <p>Semana Pasada</p>
      </ItemMenuOption>
      <ItemMenuOption
        on={on === "5" ? true : false}
        onClick={() => handelClickSelect(5)}
      >
        <p>Todo</p>
      </ItemMenuOption>
    </WrapperMenuOptions>
  );
};

const Trabajoenclase = () => {
  const { id } = useParams();
  const [on, setOn] = useState(
    localStorage.getItem("num") === null ? "1" : localStorage.getItem("num")
  );
  useEffect(() => {
    const numOption =
      localStorage.getItem("num") === null ? "1" : localStorage.getItem("num");
    setOn(numOption);
  });
  return (
    <PageCurso data={id}>
      <MenuOptions
        on={on}
        handelClickSelect={(num) => {
          if (num !== localStorage.getItem("num")) {
            localStorage.setItem("num", num);
            setOn(localStorage.getItem("num"));
          }
        }}
      />
      <WrapperTrabajos dateOption={on}></WrapperTrabajos>
    </PageCurso>
  );
};

export default Trabajoenclase;
