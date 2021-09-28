import React, { useState } from "react";
import styled from "styled-components";
import RecursoImg from "../../images/recursoimg.png";
import CaseOfStudyImg from "../atoms/svg/CaseOfStydy.js";
import { Link } from "react-router-dom";
const Item = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 16fr 5fr 1fr;
  grid-template-rows: 1fr 0;
  cursor: pointer;
  align-items: center;
  height: 60px;
  &:hover {
    background: ${(props) => (props.plegado ? "#E6F4EA" : "transparent")};
  }
  @media (max-width: 530px) {
    grid-template-areas:
      "type type title option"
      "type type title option";

    grid-template-columns: 2fr 5fr 25fr 0fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const TypeImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #c2c2c2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    fill: #fff;
  }
  @media (max-width: 530px) {
    grid-area: type;
    justify-self: center;
  }
`;

const TypeName = styled.div`
  p {
    
  }
  margin-left: 0.5em;
  @media (max-width: 530px) {
    grid-area: title;
  }
`;
const Other = styled.div``;
const DateCreated = styled.div`
  padding-right: 0.25rem;
  margin-right: -0.25rem;
  text-align:right;
  span {
    font-size: 12px;
    font-family: "Roboto", "Arial", sans-serif;
    color: rgba(0, 0, 0, 0.549);
    @media (max-width: 530px) {
      display: none;
      justify-self: center;
    }
  }
`;
const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  height: ${(props) => (props.plegado ? "60px" : "340px")};
  overflow:hidden;
  transition: 0.5s all;
  margin:1em 0;

`;
// box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
const InfoBotoom = styled.div`

  display:flex;
  flex-direction:column;
 @media (max-width: 850px) {
   
  }
  align-items:center;

`;

const TitleMaterial = styled.div`
  font-size:16px;
  text-transform:uppercase;
  margin:1em 0;
  color:#5f6368;
  width:75%;
  text-align:center;
  font-weight:bold;
`;
const DetailMaterial = styled.div`
  display:flex;
  padding:0.5em 2em;
  
`;
const ListMateriales = styled.div`
  display:flex;
  flex-direction:column;
  padding:0 1em;
  @media (max-width: 530px) {
    
  }
  min-width:320px;
  
  height:220px;
  overflow-x:hidden;
  overflow-y:auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }
`;
const DescriptionMaterial = styled.div`
  p{
    font-size:13px;
  }
  margin:0.5em 1em;
    font-size:13px;
    color:#5f6368;
  text-align:center;
    `;
const DowloadMaterial = styled.div`
`;

const WraperRecurso = styled(Link)`
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  display:flex;
  
  margin:0.6em 0;
`;
const ImgRecurso = styled(Link)`
  border-left:1px solid #c2c2c2; 
  cursor:pointer;
  overflow:hidden;
  border-radius: 8px 0 0px 8px;
  img{
    width:105px;
    height:100%;
  }
  
`;

const InfoRecurso = styled.div`
  padding:0.5em 0 0 0.5em;
  p{
    color:#000;
  }
  `;
const Recurso = ({data}) => {
  return (
    <WraperRecurso>
      <ImgRecurso to="/">
        <img src={RecursoImg} alt="" />
      </ImgRecurso>
      <InfoRecurso>
        <p>{data.name}</p>
        <p>{data.typefile}</p>
      </InfoRecurso>
    </WraperRecurso>
  );
};

const ItemInfo = ({data}) => {
  const [files,setFiles] = useState(data.files);
  
  const limitarLetras = (str) => str.substring(0, 60);
  return (
    <InfoBotoom>
      <TitleMaterial>
        {data.title}
      </TitleMaterial>
      <DetailMaterial>
      {data.files.length === 0 ? "":    
        <ListMateriales>
            {data.files.map(file => {
              return  <Recurso data={file} />
            })}
          </ListMateriales>
        }
        <DescriptionMaterial>
          <p><b>
            Descripccion : </b></p>
            {limitarLetras(data.description)}...
        </DescriptionMaterial>
      </DetailMaterial>
    </InfoBotoom>
  );
};

function ItemMaterial({data}) {
  const [openBottom, setOpenBottom] = useState(true);
  const toogleItem = () => setOpenBottom(!openBottom);
  const limitarLetras = (str) => str.substring(0, 35);
    
  return (
    <Wrapper plegado={openBottom}> 
     <Item   plegado={openBottom} onClick={toogleItem}>
        <Other></Other>
        <TypeImg>
          <CaseOfStudyImg />
        </TypeImg>
        <TypeName>
          <p>{data.type}: {limitarLetras(data.title)}...</p>
        </TypeName>
        <DateCreated>
          <span>Publicado:{data.fechapublicacion}</span>
        </DateCreated>
        <Other></Other>
      </Item>
      <ItemInfo data={data} />
    </Wrapper>  
  );
}

export default ItemMaterial;
