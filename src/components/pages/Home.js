
import styled from 'styled-components';
import TodayHorario from '../templates/TodayHorario'
const medida = {
    desktop: '968px',
    tablet: '826px',
    phoneSmall: '320px',
    phoneMedium: '375px',
    phoneBig: '450px'
}

const WrapperHome = styled.div`
    display:flex;
    @media(max-width:${medida.tablet}){
        flex-direction:column;
    }
    `;

const WrapperCursoFull = styled.div`
    width:100%;
    margin:1em 1em 1em 0;
    display:flex;    
    height:94vh;
    background:#f5f5f5;
`;

const Home = () => {
    return (
        <WrapperHome>
            <TodayHorario expandible={true} />
            <WrapperCursoFull>
                calendar
            </WrapperCursoFull>
        </WrapperHome>)
}


export default Home;
