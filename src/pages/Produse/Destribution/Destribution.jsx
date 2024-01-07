import * as SC from "../Destribution/Destribution.styled";
import { IMG } from "../../../images";

export const Destribution = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.RightSide>
          <SC.HeadingTitle>DISTRIBUTIE</SC.HeadingTitle>
          <SC.Span>Distribuție de materiale de construcție</SC.Span>
          <SC.Title>Apelează la Fortis cu încredere!?</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            Cu o rețea extinsă de parteneriate strategice și o expertiză solidă
            în domeniu, asigurăm distribuția eficientă a unei game variate de
            produse. Distribuția noastră acoperă nu doar nevoile de bază, ci și
            oferă soluții personalizate pentru a răspunde cerințelor specifice
            ale partenerilor noștri.
          </SC.Descrp>
          <SC.Descrp>
            Indiferent dacă sunteți o companie de construcții în căutare de
            materiale de încredere sau un depozit care dorește să ofere
            clienților produse de calitate superioară, distribuția Fortis este
            răspunsul. Construim parteneriate solide și susținem dezvoltarea
            durabilă, punând pe primul loc nevoile clienților noștri.
          </SC.Descrp>
        </SC.RightSide>

        <SC.Img src={IMG.produseDestribution} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
