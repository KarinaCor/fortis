import * as SC from "../HomeModuleProducts/HomeModuleProducts.styled";
import { IMG } from "../../../images";

export const HomeModuleProducts = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.LeftSide>
          <SC.HeadingTitle>CASE MODELARE</SC.HeadingTitle>
          <SC.Span>Producție Case Modulare</SC.Span>
          <SC.Title>Despre producția noastră de case modulare:</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            Transformăm containerele în opere de artă arhitecturală, oferind
            soluții inovatoare pentru locuințe contemporane sau spații de
            birouri.
          </SC.Descrp>
          <SC.Descrp>
            Fiecare casă modulară reflectă atenția noastră la detalii și dorința
            de a oferi un stil de viață contemporan, sustenabil și eficient
            energetic. Utilizăm tehnologii avansate pentru a asigura că fiecare
            modul îndeplinește cele mai înalte standarde de calitate și
            siguranță.
          </SC.Descrp>
          <SC.Descrp>
            Casele noastre modulare din containere sunt o expresie a
            flexibilității și adaptabilității în construcții. Designul modular
            permite personalizarea fiecărui spațiu, oferind o gamă diversă de
            opțiuni pentru cei care caută o locuință unică și modernă.
          </SC.Descrp>
        </SC.LeftSide>

        <SC.Img src={IMG.produseModule} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
