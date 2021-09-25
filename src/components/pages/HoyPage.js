import PageCurso from "./PageCurso"
import { useParams } from "react-router";
const HoyPage = () => {
  const { id } = useParams();
  return (
      <PageCurso cod={id}>
            <h1>Hoy</h1>
      </PageCurso>
  )
}

export default HoyPage
