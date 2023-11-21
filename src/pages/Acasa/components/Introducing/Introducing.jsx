import * as SC from "../Introducing/Introducing.styled";
import { IMG } from "../../../../images"

export const Introducing = () => {
  return (
    <>
      <SC.Wrapper style={{ image: `url(${IMG.introducingImage})` }}>
        <SC.Span>Bun Venit!</SC.Span>
        <SC.Title>Câteva cuvinte despre noi</SC.Title>
        <SC.Descrp>
          La Fortis, suntem convinși că fiecare proiect este o călătorie unică.
          Alăturați-vă nouă pentru a da viață ideilor dumneavoastră și pentru a
          crea împreună un viitor în care construcțiile nu sunt doar structuri,
          ci opere de artă funcționale.
        </SC.Descrp>
        <svg width="29" height="25"> 
        <use href=""></use>    
      </svg>
      </SC.Wrapper>
    </>
  );
};
