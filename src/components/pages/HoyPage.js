import PageCurso from "./PageCurso"
import PortadaCurso from "../templates/PortadaCurso";
import {useParams} from "react-router-dom";
const HoyPage = () => {
  const { id } =  useParams()
  return (
      <PageCurso data={id}>
        <PortadaCurso data={id}/>
      </PageCurso>
  )
}

export default HoyPage
