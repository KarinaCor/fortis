import { useOurValues } from "../../../../common/components/hooks/useOurValues";
import * as SC from "../OurValues/OurValues.styled";

export const OurValues = () => {
  const ourValues = useOurValues();
  return (
    <>
      <SC.Wrapper>
        <SC.Span>Valori</SC.Span>
        <SC.Title>Valorile noastre sunt cărămizile poveștii Fortis</SC.Title>

        <SC.Blocks>
          <SC.List>
            {ourValues.map(({ id, text }) => (
              <SC.Item key={id}>
                <SC.Text>{text}</SC.Text>
              </SC.Item>
            ))}
          </SC.List>
          <img></img>
          <SC.Title>Explorează noi orizonturi cu Fortis</SC.Title>
          <SC.Descrp>
            Fie că sunteți în proces de construire a unei locuințe de vis sau
            căutați soluții funcționale pentru spații comerciale, suntem aici să
            transformăm visurile în realitate. Descoperă cum inovația, eleganța
            și eficiența pot defini fiecare proiect. Bine ați venit în lumea
            Fortis – unde construcțiile iau formă și eleganța întâlnește
            funcționalitatea!**
          </SC.Descrp>
          <img></img>
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
