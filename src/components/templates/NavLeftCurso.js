import equisImg from "../../images/wrong.png";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 333px;
  left: ${(props) => (props.open ? "0" : "-333px")};
  top: 0;
  background: #fff;
  box-shadow: ${(props) => (props.open ? "0px 5px 28px -8px gray" : "")};
  height: 100vh;
`;

const CloseNav = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 1em;
  cursor: pointer;
`;
const WrongImg = styled.img`
  width: 20px;
`;

const NavLeftCurso = ({ handelClickOpenNavLeft, open}) => {
  return (
    <Wrapper open={open}>
      <CloseNav onClick={handelClickOpenNavLeft}>
        <WrongImg src={equisImg} alt="s" />
      </CloseNav>
    </Wrapper>
  );
};

export default NavLeftCurso;
