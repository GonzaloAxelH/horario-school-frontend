import PageCurso from "./PageCurso";
import { useParams } from "react-router";
const Trabajoenclase = () => {
    const { id } = useParams();
  return (
    <PageCurso cod={id}>
      <h1>Trabajo en Clase Page :{id}</h1>
    </PageCurso>
  );
};

export default Trabajoenclase;
