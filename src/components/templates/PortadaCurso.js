import styled from "styled-components";
const imgCurso = "";


const Wrapper = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  margin-top: 2em;
  width: calc(100vw - 20vw);
  height: 190px;
  border-radius: 8px;
  @media (min-width: 715px) {
    height: 235px;
  }
  @media (max-width: 715px) {
    background-size: cover;
    background-repeat: no-repeat;
    width: calc(100vw - 10vw);
  }
`;
const TitleCurso = styled.h1`
  color: #fff;
  font-size: 28px;
  @media (max-width: 554px) {
    font-size: 22px;
  }
  padding: 1em;
  font-weight: 600;
  line-height: 2.25rem;
  letter-spacing: 2px;
`;

const codigos = {
    PROG_VIDE: {
      codigo: "sdf5ds55",
      name: "PROGRAMACION DE VIDEOJUEGOS",
    },
    DA_MIN: { codigo: "dfs4546gbg", name: "DATA MINING" },
    PRO_INV: { codigo: "g45df654vf65", name: "PROYETO DE INVESTIGACION" },
    ALG_PAR: { codigo: "te654f654", name: "ALGORITMOS PARALELOS" },
  };


const imgs = {
  pro_vdeojuegos: "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
  data_min:
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/B2S-BlogHeader-ap_v05-2880x1200.jpg",
  proye_inv:
    "https://media.slidesgo.com/storage/1563060/6-classroom-headers-for-college.png",
  algo_para:
    "https://media.slidesgo.com/storage/1563071/15-classroom-headers-for-college.png",
};
const PortadaCurso = ({ data }) => {
    
  const selectImg = title  =>{
    if(title === codigos.PRO_INV.name) return imgs.proye_inv
    if(title === codigos.DA_MIN.name) return imgs.data_min  
    if(title === codigos.PROG_VIDE.name) return imgs.pro_vdeojuegos  
    if(title === codigos.ALG_PAR.name) return imgs.algo_para
  }
  return (
    <Wrapper img={selectImg(data)}>
      <TitleCurso>{data}</TitleCurso>
    </Wrapper>
  );
};

export default PortadaCurso;
