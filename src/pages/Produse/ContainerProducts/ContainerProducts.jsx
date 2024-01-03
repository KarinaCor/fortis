import * as SC from "../ContainerProducts/ContainerProducts.styled";
import { IMG } from "../../../images";

export const ContainerProducts = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.HeadingTitle>CONTAINERE</SC.HeadingTitle>
        <SC.Span>Producție Containere</SC.Span>
        <SC.Title>Despre producția noastră de containere:</SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          Fie că sunt destinate utilizării comerciale, birourilor mobile,
          spațiilor de depozitare sau chiar locuințelor modulare, containerele
          noastre sunt construite pentru a rezista la cerințele complexe ale
          diverselor proiecte. Utilizăm materiale de înaltă calitate și
          proceduri de asamblare riguroase pentru a garanta fiabilitatea și
          durabilitatea în timp.
        </SC.Descrp>
        <SC.Descrp>
          Flexibilitatea designului modular ne permite să oferim soluții
          personalizate și adaptabile, astfel încât fiecare container să își
          găsească locul perfect în proiectul dumneavoastră. Angajamentul nostru
          pentru sustenabilitate este reflectat în procesele noastre de
          producție, unde promovăm reciclarea și eficiența energetică.
        </SC.Descrp>
        <SC.Descrp>
          Alegând containerele Fortis, optați pentru mai mult decât spații
          simple. Optați pentru versatilitate, durabilitate și inovație în
          construcții. Descoperiți o lume în care containerele devin elemente
          cheie în proiectele dumneavoastră, aducând un suflu nou și o eficiență
          remarcabilă.
        </SC.Descrp>

        <SC.Img src={IMG.produseHero} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
