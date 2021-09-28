import PageCurso from "./PageCurso"
import PortadaCurso from "../templates/PortadaCurso";
import {useParams} from "react-router-dom";
import styled from "styled-components";
const WrapperWrokplace = styled.div``;
const HoyPage = () => {
  const { id } =  useParams()
  return (
      <PageCurso data={id}>
        <PortadaCurso data={id}/>
        <WrapperWrokplace>

        </WrapperWrokplace>
      </PageCurso>
  )
}

export default HoyPage
