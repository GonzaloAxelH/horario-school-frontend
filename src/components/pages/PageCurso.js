import { useParams } from "react-router";

const PageCurso = () => {
 let { id } = useParams();
    return <h1>Page Curso : {id}</h1>
}

export default PageCurso;