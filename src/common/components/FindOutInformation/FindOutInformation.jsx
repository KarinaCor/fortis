import { IMG } from "../../../images";
import * as SC from "./FindOutInformation.styled";


export const FindOutInformation = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.constructionWorker})` }}>
        <SC.LeftBlock>
          <SC.Title>Ai o întrebare?</SC.Title>
          <SC.Descrp>
            Suntem aici pentru a vă ajuta! Avem răspunsuri la toate întrebările
            dumneavoastră. Nu ezitați să ne contactați pentru a vă oferi
            asistență sau pentru a clarifica orice nelămurire. Suntem aici să vă
            ghidăm prin toate etapele și să vă oferim informațiile de care aveți
            nevoie. Echipa noastră stă la dispoziția dumneavoastră pentru a vă
            oferi soluții personalizate și a vă satisface cerințele. Nu ezitați
            să ne scrieți sau să ne sunați – suntem bucuroși să vă ascultăm și
            să vă ajutăm!
          </SC.Descrp>
        </SC.LeftBlock>
        <SC.RightBlock>
          <SC.Button>CONTACT</SC.Button>
        </SC.RightBlock>
      </SC.Wrapper>
    </>
  );
};
