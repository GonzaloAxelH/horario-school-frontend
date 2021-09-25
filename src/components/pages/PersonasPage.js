import PageCurso from "./PageCurso"
import { useParams } from "react-router";
const PersonasPage = () => {

  const { id } = useParams();
    return (
    <PageCurso cod={id}>
        <h1>Personas Page :{id}</h1>
    </PageCurso>
  )
}

export default PersonasPage
