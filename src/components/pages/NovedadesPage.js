import {useParams} from "react-router-dom";
import styled from "styled-components";

import PageCurso from "./PageCurso";
const NovedadesPage = (props) => {
  const { id } = useParams();
  return (
    <PageCurso data={id}>
      <h1>Conferencias</h1>
    </PageCurso>
  );
};

export default NovedadesPage;
