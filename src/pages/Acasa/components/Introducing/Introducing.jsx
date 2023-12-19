import * as SC from "../Introducing/Introducing.styled";
import { IMG } from "../../../../images"

export const Introducing = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.HeadingTitle>DESPRE NOI</SC.HeadingTitle>
        <SC.Span>Bun Venit!</SC.Span>
        <SC.Title>Câteva cuvinte despre noi</SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          La Fortis, suntem convinși că fiecare proiect este o călătorie unică.
          Alăturați-vă nouă pentru a da viață ideilor dumneavoastră și pentru a
          crea împreună un viitor în care construcțiile nu sunt doar structuri,
          ci opere de artă funcționale.
        </SC.Descrp>
       <SC.Img src={IMG.introducingImage} alt='introducing' />
      </SC.Wrapper>
    </>
  );
};
