import styled from "styled-components";
import ItemCurso from "../organims/ItemCurso";
import { useState } from "react";
import sidebarImg from "../../images/sidebar.png";
import calendarImg from "../../images/calendar.png";
const medida = {
  desktop: "768px",
  tablet: "826px",
  phoneSmall: "320px",
  phoneMedium: "375px",
  phoneBig: "450px",
};

const WrapperTodayHorario = styled.div`
  position: relative;
  display: flex;
  width: ${(props) => (props.open ? "650px" : "220px")};
  overflow-x: hidden;
  background: #f5f5f5;
  margin: 1em;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  height: 94vh;
  padding: 0 0 1em 0;
  @media (max-width: ${medida.tablet}) {
    width: 100%;
    margin: 0;
    overllow: visible;
    height: auto;
  }
  transition: 0.4s all;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
`;
const DayDate = styled.h1`
  color: #000;
  font-size: 45px;
  text-align: center;
`;
const MonthDate = styled.h3``;
const WrapperInfoHoy = styled.div``;
const HiddenSidebar = styled.img`
  position: absolute;
  right: 1em;
  top: 1em;
  cursor: pointer;
  @media (max-width: ${medida.tablet}) {
    display: none;
  }
`;
const MiniCalendar = styled.img`
  position: absolute;
  left: 1em;
  top: 1em;
  cursor: pointer;
`;
const TodayHorario = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const handleOpen = () => {
    setOpenSidebar(!openSidebar);
  };

  const codigos = {
    PROG_VIDE: "g4hg6db51g",
    DA_MIN: "dfs4546gbg",
    PRO_INV: "g45df654vf65",
    ALG_PAR: "te654f654",
  };
  return (
    <WrapperTodayHorario open={openSidebar}>
      <WrapperInfoHoy>
        <DayDate>23</DayDate>
        <MonthDate>
          <b>Septiembre</b>
        </MonthDate>
      </WrapperInfoHoy>
      <MiniCalendar src={calendarImg} alt="s" />
      <HiddenSidebar onClick={handleOpen} src={sidebarImg} alt="s" />
      <ItemCurso
        cod={codigos.PROG_VIDE}
        title="PROGRAMACION DE VIDEOJUEGOS"
        docente="LIMACHE FLORES, ALBERTO"
        participants="12"
        warning={false}
        infomation="info"
        color="#C39BD3"
        contraido={openSidebar}
      />
      <ItemCurso
        cod={codigos.DA_MIN}
        title="DATA MINING"
        docente="FLORES GUTIERREZ, VANEZA"
        participants="7"
        warning={false}
        infomation="info"
        color="#FF5733"
        contraido={openSidebar}
      />
      <ItemCurso
        cod={codigos.PRO_INV}
        title="PROYECTO DE INVESTIGACION I"
        docente="LOAIZA FERNANDEZ, MANUEL "
        participants="11"
        warning={true}
        infomation="info"
        color="#82E0AA"
        contraido={openSidebar}
      />
      <ItemCurso
        cod={codigos.ALG_PAR}
        title="ALGORITMOS PARALELOS"
        docente="LIMACHE FLORES, ALBERTO"
        participants="30"
        warning={true}
        infomation="info"
        color="#FFC300"
        contraido={openSidebar}
      />
    </WrapperTodayHorario>
  );
};

export default TodayHorario;

