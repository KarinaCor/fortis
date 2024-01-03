import * as SC from '../NewHorizonts/NewHorizonts.styled'
import { IMG } from "../../../../images";

export const NewHorizonts = () => {
    return (
      <>
        <SC.Wrapper>
          <SC.Title>Explorează noi orizonturi cu Fortis</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            Fie că sunteți în proces de construire a unei locuințe de vis sau
            căutați soluții funcționale pentru spații comerciale, suntem aici să
            transformăm visurile în realitate. Descoperă cum inovația, eleganța
            și eficiența pot defini fiecare proiect. Bine ați venit în lumea
            Fortis – unde construcțiile iau formă și eleganța întâlnește
            funcționalitatea!**
          </SC.Descrp>
          <SC.Img src={IMG.despreHorizonts} alt="introducing" />
        </SC.Wrapper>
      </>
    );
}