import { useAboutUs } from "../../../../common/components/hooks/useAboutUs";
import * as SC from "../AboutUs/AboutUs.styled";

export const Introducing = () => {
  const aboutUs = useAboutUs();
  return (
    <>
      <SC.Wrapper>
        <SC.Span>Cine suntem</SC.Span>
        <SC.Title>
          Partenerul Dumneavoastră de Încredere în Construcții și Soluții
          Inovatoare!
        </SC.Title>
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
            <SC.Img></SC.Img>
          </SC.List>
        </SC.Blocks>
        <svg width="29" height="25">
          <use href=""></use>
        </svg>
      </SC.Wrapper>
    </>
  );
};
