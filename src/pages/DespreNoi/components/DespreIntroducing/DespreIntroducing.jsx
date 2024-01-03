import * as SC from "../DespreIntroducing/DespreIntroducing.styled";
import {IMG} from '../../../../images'

export const DespreIntroducing = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.Block>
          <SC.HeadingTitle>DESPRE NOI</SC.HeadingTitle>
          <SC.Span>BUN VENIT!</SC.Span>
          <SC.Title>Câteva cuvinte despre noi</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            La Fortis, suntem convinși că fiecare proiect este o călătorie
            unică. Alăturați-vă nouă pentru a da viață ideilor dumneavoastră și
            pentru a crea împreună un viitor în care construcțiile nu sunt doar
            structuri, ci opere de artă funcționale.
          </SC.Descrp>
        </SC.Block>
        <SC.Img src={IMG.despreIntroducing} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
