import EquisImg from "../atoms/svg/HamburguerMenu";
import styled from "styled-components";
import TodayHorario from "./TodayHorario";
import ReactDom from "react-dom";

const Wrapper = styled.div`
  position: fixed;
  width: 250px;
  left: ${(props) => (props.open ? "0" : "-250px")};
  top: 0;
  background: #fff;
  box-shadow: ${(props) => (props.open ? "0px 5px 28px -8px gray" : "")};
  height: 100vh;
  overflow:hidden;
`;

const CloseNav = styled.div`
  position: absolute;
  left: 0.8em;
  top: 0.5em;
  margin: 1em;
  cursor: pointer;
  z-index:5;
`;



const NavLeftCurso = ({ handelClickOpenNavLeft, open}) => {
  return (
   <Wrapper open={open}>
      <CloseNav onClick={handelClickOpenNavLeft}>
        <EquisImg/>
      </CloseNav>
      <TodayHorario expandible={false}  closeNavLeft={handelClickOpenNavLeft} />
    </Wrapper>
  )
};

export default NavLeftCurso;
