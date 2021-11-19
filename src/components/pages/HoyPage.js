import PageCurso from "./PageCurso";
import PortadaCurso from "../templates/PortadaCurso";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemMaterial from "../organims/ItemMaterial";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const WrapperWrokplace = styled.div`
  display: flex;
  justify-content:space-around;
  width: calc(100vw - 20vw);
  border-radius: 8px;
  @media (max-width: 715px) {
    
  }
`;
const ListAnuncios = styled.div``;

const NotTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 166px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  padding: 1.5em;
  a {
    color: green;
    font-size: 14px;
  }
  p:nth-child(1) {
    color: #3c4043;
    font-size: 14px;
  }
  p:nth-child(2) {
    color: #0000008c;
    font-size: 13px;
  }
  margin: 0 24px 24px 0;
  @media (max-width: 815px) {
    display: none;
  }
`;
const InfoTaksPending = styled.div`
  margin-top: 1em;
`;
const ListMateriales = styled.div`
  width: 100%;
  @media (max-width: 715px) {
    background-size: cover;
    background-repeat: no-repeat;
    width: 75vw;
  }

  @media (max-width: 530px) {
    width: 92vw;
  }
`;

const HoyPage = ({ data }) => {
  const { id } = useParams();
  return (
    <PageCurso data={id}>
      <PortadaCurso data={id} />

      <WrapperWrokplace>
        
        <InfoTaksPending>
          <NotTasks>
            <p>Proximas</p>
            <p>¡Vaya! No tienes que entregar tareas próximamente.</p>
            <Link to="/taskspending">Ver todo</Link>
          </NotTasks>
        </InfoTaksPending>
        
        <ListAnuncios>
          <ListMateriales>
            {data.map((tarea) => {
              return <ItemMaterial data={tarea} />;
            })}
          </ListMateriales>
        </ListAnuncios>
      
      </WrapperWrokplace>
    </PageCurso>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.tareas,
  };
};

export default connect(mapStateToProps)(HoyPage);
