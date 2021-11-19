import { useParams } from "react-router-dom";
import PageCurso from "./PageCurso";
import styled from "styled-components";
import { MenuOptions } from "./Trabajoenclase";
import { useEffect, useState } from "react";
import ItemMaterial from "../organims/ItemMaterial";
import { connect } from "react-redux";

const ListMaterials = styled.div`
  width: 100%;
  @media (max-width: 715px) {
    background-size: cover;
    background-repeat: no-repeat;
    width: 75vw;
  }

  @media (max-width: 530px) {
    width: 92vw;
  }
`;

const Wrapper = styled.div``;
const MaterialesPages = ({ tareas }) => {
  const { id } = useParams();
  const [on, setOn] = useState(
    localStorage.getItem("num2") === null ? "1" : localStorage.getItem("num2")
  );
  const [data, setData] = useState(tareas ? tareas : []);
  useEffect(() => {
    let getItem = localStorage.getItem("num2");
    const numOption = getItem === null ? "1" : getItem;
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
        <ListMaterials>
          {data.map((tarea) => {
            return tarea.type === "MATERIAL" ? (
              <ItemMaterial data={tarea} />
            ) : (
              ""
            );
          })}
        </ListMaterials>
      </Wrapper>
    </PageCurso>
  );
};

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas,
  };
};

export default connect(mapStateToProps, null)(MaterialesPages);
