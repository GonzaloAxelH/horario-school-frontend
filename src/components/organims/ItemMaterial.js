import { useState } from "react";
import RecursoImg from "../../images/recursoimg.png";
import CaseOfStudyImg from "../atoms/svg/CaseOfStydy.js";
import {
  Item,
  TypeImg,
  TypeName,
  Other,
  DateCreated,
  Wrapper,
  InfoBotoom,
  TitleMaterial,
  DetailMaterial,
  ListMateriales,
  InfoRecurso,
  DescriptionMaterial,
  WraperRecurso,
  ImgRecurso,
} from "./ItemMaterial.jsx";

function ItemMaterial({ data }) {
  const [openBottom, setOpenBottom] = useState(true);
  const toogleItem = () => setOpenBottom(!openBottom);

  return (
    <Wrapper plegado={openBottom}>
      <Item plegado={openBottom} onClick={toogleItem}>
        <Other></Other>
        <TypeImg>
          <CaseOfStudyImg />
        </TypeImg>
        <TypeName>
          <p>
            {data.type}: {limitarLetras(data.title)}...
          </p>
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

//Functions

const limitarLetras = (str) => str.substring(0, 15);

//SubComponents

const Recurso = ({ data }) => {
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

const ItemInfo = ({ data }) => {
  const limitarLetras = (str) => str.substring(0, 50);
  return (
    <InfoBotoom>
      <TitleMaterial>{data.title}</TitleMaterial>
      <DetailMaterial>
        {data.files.length === 0 ? (
          ""
        ) : (
          <ListMateriales>
            {data.files.map((file) => {
              return <Recurso data={file} />;
            })}
          </ListMateriales>
        )}
        <DescriptionMaterial>
          <p>
            <b>Descripccion : </b>
          </p>
          {limitarLetras(data.description)}...
        </DescriptionMaterial>
      </DetailMaterial>
    </InfoBotoom>
  );
};
