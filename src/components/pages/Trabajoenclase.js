import PageCurso from "./PageCurso";
import { useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ItemMaterial from "../organims/ItemMaterial";
import { connect } from "react-redux";


const WrapperTrabajos = styled.div`
  margin-top: 2em;
`;
const WrapperMenuOptions = styled.div`
  display: flex;
  width:95vw;
  justify-content: center;
  margin:2em 0;
  overflow-y: hidden;
  height: 25px;
  max-width:100vw;
  box-sizing:border-box;
  @media(max-width:554px){
    justify-content: flex-start;
  }
`;
const ItemMenuOption = styled.div`
  border: 1px solid #C2C2C2;
  margin: 0 1em;
  border-radius: 30px;
  padding: 0.2em 1em;
  display: flex;
  min-width:150px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-size: 13px;
  }
  background: ${(props) => (props.on ? "#E6F4EA" : "transparent")};
  p {
  justify-content: center;
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
        <p>Semana Pasada</p>
      </ItemMenuOption>
      <ItemMenuOption
        on={on === "4" ? true : false}
        onClick={() => handelClickSelect(4)}
      >
        <p>Todo</p>
      </ItemMenuOption>
    
    </WrapperMenuOptions>
  );
};


const ListMateriales = styled.div`

  width:60vw;
    @media (max-width:715px){
    background-size:cover;
    background-repeat:no-repeat;
    width:75vw;
  }

  @media (max-width:530px){
    width:92vw;
  }
`;


const Trabajoenclase = ({tareas}) => {
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
      <WrapperTrabajos dateOption={on}>
      <ListMateriales>
        {tareas.map(tarea => {
          return tarea.type === 'TASK' ?  
          <ItemMaterial  data={tarea}/>: 
          ""
        })}
        </ListMateriales>       
      </WrapperTrabajos>
    </PageCurso>
  );
};

const mapStateToProps = (state) =>{
  return {
    tareas:state.tareas
  }
}


export default connect(mapStateToProps)(Trabajoenclase);
