import styled from "styled-components";
import { Link } from "react-router-dom";
import HamburguerMenu from "../atoms/svg/HamburguerMenu";
import { useEffect, useState } from "react";
let imgUser =
  "https://lh3.googleusercontent.com/ogw/ADea4I6G9ODbVrzpSzl8oZhIwXpg8aP6dxx2HnD4g84y=s32-c-mo";
const WrapperNav = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-sizing: content;
  width: 100%;
  height: 100px;
  display: grid;
  position: fixed;
  border-bottom: 1px solid #e4e4e4;
  grid-template-row: 1fr 1fr;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;
const NavTop = styled.div`
  width: 100vw;
  overflow: visible;
  display: grid;
  grid-template-columns: 1fr 1fr 20fr 2fr 2fr;
  align-items: center;
  padding: 0 2em;
  @media(max-width:554px){
   padding: 0 1em;
  }
`;
const WrapperTitle = styled.div`
  color: #000;
  font-size: 22px;
  margin-left: 1em;
  @media(max-width:554px){
    font-size:17px;
    width:100%;
  }
`;
const ImgUser = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;
const NavBottom = styled.div`
  display: flex;
  justify-content: center;
  margin:0 1em;
  overflow-y: hidden;
  align-items: center;
  @media(max-width:554px){
    justify-content: flex-start;
  }
`;
const InfoUser = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ItemNav = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.8em;
  font-size: 14px;
  cursor: pointer;
  transition:0.2s all;
  &:hover {
    background: ${(props) =>
      props.select ? "rgba(230, 244, 234,0.4 )" : "rgba(228, 228, 228, 0.4)"};
  }
  height: 100%;
  text-align: center;
  color: ${(props) => (props.select ? "#13736C" : "#5f6368")};
  &:after {
    display: ${(props) => (props.select ? "block" : "none")};
    border-top-width: 0.25rem;
    border-top-style: solid;
    -webkit-border-radius: 0.25rem 0.25rem 0 0;
    border-radius: 0.25rem 0.25rem 0 0;
    bottom: -0.125rem;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
  }
  transition: 0s all;
`;
const MenuToggle = styled.div`
  width: 25px;
  height: 20px;
  cursor: pointer;
`;

const Other = styled.div`
`;
const NavTopCurso = ({ handelClickCloseNavLeft, data }) => {
  const [ruta, setRuta] = useState("");
  useEffect(() => {
    setRuta(
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );
  });
  const checkSelectItem = (ruta) => {
    let rutas = ["conferencias","trabajoenclase","personas","materiales"];
    return !rutas.includes(ruta)
  };
  return (
    <WrapperNav>
      <NavTop>
       <MenuToggle onClick={handelClickCloseNavLeft} >
          <HamburguerMenu />
        </MenuToggle>
        <Other></Other>
        <WrapperTitle>{data}</WrapperTitle>
        <Other>
        </Other>
        <InfoUser>
          <ImgUser src={imgUser} />
        </InfoUser>

      </NavTop>
      <NavBottom>
        <ItemNav select={checkSelectItem(ruta)} to={`/curso/${data}/`}>
          Hoy
        </ItemNav>
        
        <ItemNav
          select={ruta === "conferencias"}
          to={`/curso/${data}/conferencias`}
        >
          Conferencias
        </ItemNav>
        <ItemNav
          select={ruta === "trabajoenclase"}
          to={`/curso/${data}/trabajoenclase`}
        >
          Trabajos de clase
        </ItemNav>

        <ItemNav
          select={ruta === "materiales"}
          to={`/curso/${data}/materiales`}
        >
          Materiales
        </ItemNav>
        <ItemNav select={ruta === "personas"} to={`/curso/${data}/personas`}>
          Personas
        </ItemNav>
      </NavBottom>
    </WrapperNav>
  );
};

export default NavTopCurso;
