import { useAboutUs } from "../../../../common/components/hooks/useAboutUs";
import * as SC from "../AboutUs/AboutUs.styled";
import { IMG } from "../../../../images";

export const Introducing = () => {
  const aboutUs = useAboutUs();
  return (
    <>
      <SC.Wrapper>
        <SC.HeadingTitle>FORTIS</SC.HeadingTitle>
        <SC.Span>CINE SUNTEM</SC.Span>
        <SC.Title>
          Partenerul Dumneavoastră de Încredere în Construcții și Soluții
          Inovatoare!
        </SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          Fortis este rezultatul unei pasiuni comune pentru construcții,
          inovație și performanță. Am pornit la drum cu un obiectiv simplu: să
          aducem pe piață soluții care nu doar satisfac, ci uimesc și depășesc
          orice așteptări.
        </SC.Descrp>
        <SC.Blocks>
          <SC.List>
            {aboutUs.map(({ id, text }) => (
              <SC.Item key={id}>
                <SC.Text>{text}</SC.Text>
              </SC.Item>
            ))}
          </SC.List>
        </SC.Blocks>
        <SC.Img src={IMG.despreAboutUs} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
