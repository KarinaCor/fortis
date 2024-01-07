import * as SC from "../SheetProfile/SheetProfile.styled";
import { IMG } from "../../../images";

export const SheetProfile = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.LeftSide>
          <SC.HeadingTitle>PROFILE</SC.HeadingTitle>
          <SC.Span>Profile din tablă ambutisată</SC.Span>
          <SC.Title>Despre producția noastră de profile:</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            În facilitățile noastre de producție avansate, utilizăm tehnologii
            de ultimă generație. De la profile structurale robuste, folosite în
            proiecte industriale, la cele mai rafinate modele pentru proiecte
            rezidențiale, producem o gamă diversă care răspunde nevoilor variate
            ale clienților noștri. Fiecare etapă a procesului de producție este
            supervizată cu atenție pentru a asigura că fiecare profil este
            livrat cu precizie și conform celor mai înalte standarde de
            calitate.
          </SC.Descrp>
        </SC.LeftSide>

        <SC.Img src={IMG.produseDestribution} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
