import * as SC from "./ComenziHero.styled";
import { IMG } from "../../../../images";

export const ComenziHero = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.produseHero})` }}>
        <SC.Title>Comenzi</SC.Title>
      </SC.Wrapper>
    </>
  );
};
