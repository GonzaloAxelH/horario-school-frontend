import styled from "styled-components";
import arrowImg from "../../images/arrowRight.png";
import exclamationImg from "../../images/exclamation-mark.png";
import checkImg from "../../images/check.png";
import arrowdowImg from "../../images/down-arrow.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const imgCurso = "https://www.gstatic.com/classroom/themes/img_bookclub.jpg";
const ItemWrapper = styled.div`
  position: relative;
  width: 90%;
  border: none;
  box-shadow: 0px 3px 18px -8px gray;
  background:url('${imgCurso}');
  background-position: center;
	background-size: cover;
  border-radius: 7px;
  height: ${(props) => (props.large ? "13em" : "7em")};
  max-height: 13em;
  margin: 1em 0 0 0;
  padding: 1em 0 0 1.3em;
  transition: 0.5s all;
`;

const TitleCurse = styled(Link)`
  display: flex;
  width: ${(props) => (!props.contraido ? "80%" : "60%")};
  font-size: ${(props) => (!props.contraido ? "13px" : "17px")};
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
  color: #fff;
  margin: 0.4em 0 0.5em 0;
`;
const NameDocente = styled.p`
  font-size: 11px;
  color: #fff;
  display: ${(props) => (!props.contraido ? "none" : "block")};
`;
const Participants = styled.p`
  font-size: 12px;
  color: #fff;
  display: ${(props) => (!props.contraido ? "none" : "block")};
`;
const ArrowImg = styled.img`
  width: 40px;
  position: absolute;
  right: 2.5em;
  top: 2.5em;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    transform: translateX(10px);
  }
  display: ${(props) => (!props.contraido ? "none" : "block")};
`;
const Exclamation = styled.img`
  width: 15px;
  object-fit: contain;
`;
const WarningInfo = styled.div`
    position: absolute;
    display: flex;
    right: ${(props) => (!props.contraido ? "0.7em" : "10px")};
    top: ${(props) => (!props.contraido ? "70%" : "0.5em")};
    width: ${(props) => (!props.contraido ? "100%" : "40%")}
    align-items:center;
    text-align:center;
`;

const Info = styled.span`
  font-size: 11px;
  color: #fff;
  word-wrap: break-word;
  margin: 0 0.5em;
  align-items: center;
`;
const ArrowDown = styled.img`
  position: absolute;
  width: 150px;
  height: 12px;
  right: 8%;
  bottom: 8px;
  transform: translateX(-50%)
  rotate(${(props) => (props.large ? "180deg" : "0deg")});
  transition: 0.5s all;
  display: ${(props) => (!props.contraido ? "none" : "inline-block")};
  cursor: pointer;
  box-sizing: border-box;
  object-fit: contain;
  background: transparent;
`;
const InfoExtra = styled.div`
  margin: 1em 0 1.5em 0;
  transition: 0.5s all;
  color:#fff;
  height: ${(props) => (props.large ? "6em" : "0")};
  overflow: hidden;
`;

const ItemCurso = ({
  color,
  title,
  docente,
  participants,
  warning,
  infomation,
  contraido,
  data,
  closeNavLeft
}) => {
  const [toggleInformation, setToggleInformation] = useState(false);
  const openInformation = () => setToggleInformation(!toggleInformation);
  return (
    <ItemWrapper fondo={color} large={toggleInformation}>
      <TitleCurse onClick={closeNavLeft} contraido={contraido} to={`/curso/${data}`}>
        {title}
      </TitleCurse>
      <NameDocente contraido={contraido}>{docente}</NameDocente>
      <Participants contraido={contraido}>
        {" "}
        <b>{participants}</b> Participantes
      </Participants>
     
      <WarningInfo contraido={contraido}>
        {warning ? (
          <Exclamation src={exclamationImg} alt="Asa" />
        ) : (
          <Exclamation src={checkImg} alt="Asa" />
        )}
        {warning ? (
          <Info>Tareas pendientes </Info>
        ) : (
          <Info>Tareas Completadas</Info>
        )}
      </WarningInfo>
      <ArrowDown
        contraido={contraido}
        onClick={openInformation}
        large={toggleInformation}
        src={arrowdowImg}
        alt="As"
      />
      <InfoExtra large={toggleInformation}>
        <b>{infomation}</b>
      </InfoExtra>
    </ItemWrapper>
  );
};

export default ItemCurso;
