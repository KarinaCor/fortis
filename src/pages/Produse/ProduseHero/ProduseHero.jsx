import * as SC from "./ProduseHero.styled";
import { IMG } from "../../../images";


export const ProduseHero = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.produseHero})`}}>
        <SC.Title>Produse</SC.Title>
      </SC.Wrapper>
    </>
  );
};