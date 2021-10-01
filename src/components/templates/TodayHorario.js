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
  width: ${(props) => (props.open ? "550px" : "220px")};
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
const TodayHorario = ({ expandible, closeNavLeft }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpen = () => {
    setOpenSidebar(!openSidebar);
  };
  const codigos = {
    PROG_VIDE: {
      codigo: "sdf5ds55",
      name: "PROGRAMACION DE VIDEOJUEGOS",
    },
    DA_MIN: { codigo: "dfs4546gbg", name: "DATA MINING" },
    PRO_INV: { codigo: "g45df654vf65", name: "PROYETO DE INVESTIGACION" },
    ALG_PAR: { codigo: "te654f654", name: "ALGORITMOS PARALELOS" },
  };

  const imgs = {
    pro_vdeojuegos: "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
    data_min:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/B2S-BlogHeader-ap_v05-2880x1200.jpg",
    proye_inv:
      "https://media.slidesgo.com/storage/1563060/6-classroom-headers-for-college.png",
    algo_para:
      "https://media.slidesgo.com/storage/1563071/15-classroom-headers-for-college.png",
  };
  return (
    <WrapperTodayHorario open={openSidebar}>
      <WrapperInfoHoy>
        <DayDate>23</DayDate>
        <MonthDate>
          <b>Septiembre</b>
        </MonthDate>
      </WrapperInfoHoy>

      {expandible ? (
        <HiddenSidebar onClick={handleOpen} src={sidebarImg} alt="s" />
      ) : (
        ""
      )}
      <ItemCurso
        data={codigos.PROG_VIDE.name}
        img={imgs.pro_vdeojuegos}
        title="PROGRAMACION DE VIDEOJUEGOS"
        docente="LIMACHE FLORES, ALBERTO"
        participants="12"
        warning={false}
        infomation="info"
        color="#C39BD3"
        contraido={openSidebar}
        closeNavLeft={closeNavLeft}
      />
      <ItemCurso
        img={imgs.data_min}
        data={codigos.DA_MIN.name}
        title="DATA MINING"
        docente="FLORES GUTIERREZ, VANEZA"
        participants="7"
        warning={false}
        infomation="info"
        color="#FF5733"
        contraido={openSidebar}
        closeNavLeft={closeNavLeft}
      />
      <ItemCurso
        img={imgs.proye_inv}
        data={codigos.PRO_INV.name}
        title="PROYECTO DE INVESTIGACION I"
        docente="LOAIZA FERNANDEZ, MANUEL "
        participants="11"
        warning={true}
        infomation="info"
        color="#82E0AA"
        contraido={openSidebar}
        closeNavLeft={closeNavLeft}
      />
      <ItemCurso
        img={imgs.algo_para}
        data={codigos.ALG_PAR.name}
        title="ALGORITMOS PARALELOS"
        docente="LIMACHE FLORES, ALBERTO"
        participants="30"
        warning={true}
        infomation="info"
        color="#FFC300"
        contraido={openSidebar}
        closeNavLeft={closeNavLeft}
      />
    </WrapperTodayHorario>
  );
};

export default TodayHorario;
