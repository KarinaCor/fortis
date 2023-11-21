import * as SC from "./Hero.styled";
import { IMG } from "../../../../images";

export const Hero = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.heroImage})` }}>
        <SC.MainTitle>Fortis - Built the future!</SC.MainTitle>
        <SC.Descr>
          Fortis este rezultatul unei pasiuni comune pentru construcții,
          inovație și performanță. Am pornit la drum cu un obiectiv simplu: să
          aducem pe piață soluții care nu doar satisfac, ci uimesc și depășesc
          orice așteptări.
        </SC.Descr>
        <SC.Button>VEZI MAI MULT</SC.Button>
      </SC.Wrapper>
    </>
  );
};
