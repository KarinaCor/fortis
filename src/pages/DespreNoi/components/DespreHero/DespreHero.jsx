import * as SC from "./DespreHero.styled";
import { IMG } from "../../../../images";

export const DespreHero = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.despreHero})` }}>
        <SC.Title>Despre Noi</SC.Title>
      </SC.Wrapper>
    </>
  );
};
