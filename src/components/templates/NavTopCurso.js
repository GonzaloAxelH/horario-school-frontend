import styled from "styled-components";
import { Link } from "react-router-dom";
import menuImg from "../../images/menu.png";
import back from "../../images/back.png";
import { useEffect, useState } from "react";
let imgUser =
  "https://lh3.googleusercontent.com/ogw/ADea4I6G9ODbVrzpSzl8oZhIwXpg8aP6dxx2HnD4g84y=s32-c-mo";
const WrapperNav = styled.div`
  background: #fff;
  box-sizing: content;
  width: 100%;
  height: 128px;
  display: grid;
  position: fixed;
  border-bottom: 1px solid #e4e4e4;
  grid-template-row: 1fr 1fr;
`;
const NavTop = styled.div`
  padding: 0 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 20fr 3fr;
  align-items: center;
`;
const WrapperTitle = styled.div`
  color: #000;
  font-size: 22px;
`;
const ImgUser = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;
const NavBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  &:hover {
    background: ${(props) => (props.select ? "#E6F4EA" : "#e4e4e4")};
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
const MenuToggle = styled.img`
  width: 25px;
  height: 20px;
  cursor: pointer;
`;

const BackArrow = styled.img`
  height: 20px;
  margin-top: 5px;
`;

const NavTopCurso = ({ handelClickCloseNavLeft, cod }) => {
  const [ruta, setRuta] = useState("");
  console.log({ ruta });
  useEffect(() => {
    setRuta(
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );
  });
  return (
    <WrapperNav>
      <NavTop>
        <Link to="/">
          <BackArrow src={back} />
        </Link>
        <MenuToggle onClick={handelClickCloseNavLeft} src={menuImg} />
        <WrapperTitle>CURSO CALIDAD DE SOFTWARE</WrapperTitle>
        <InfoUser>
          <ImgUser src={imgUser} />
        </InfoUser>
      </NavTop>
      <NavBottom>
        <ItemNav
          select={
            ruta == "novedades"
              ? false
              : ruta == "trabajoenclase"
              ? false
              : ruta == "personas"
              ? false
              : true
          }
          to={`/curso/${cod}/`}
        >
          Hoy
        </ItemNav>
        <ItemNav select={ruta === "novedades"} to={`/curso/${cod}/novedades`}>
          Novedades
        </ItemNav>
        <ItemNav
          select={ruta === "trabajoenclase"}
          to={`/curso/${cod}/trabajoenclase`}
        >
          Trabajo en clase
        </ItemNav>
        <ItemNav select={ruta === "personas"} to={`/curso/${cod}/personas`}>
          Personas
        </ItemNav>
      </NavBottom>
    </WrapperNav>
  );
};

export default NavTopCurso;
