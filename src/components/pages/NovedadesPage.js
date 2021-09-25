import styled from "styled-components";
import { useParams } from "react-router";
import PageCurso from "./PageCurso";
const NovedadesPage = () => {
  const { id } = useParams();
  return (
    <PageCurso cod={id}>
      <h1>Novedades:{id}</h1>
    </PageCurso>
  );
};

export default NovedadesPage;
