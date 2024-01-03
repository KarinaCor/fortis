import * as SC from "./ContactHero.styled";
import { IMG } from "../../../../images";

export const ContactHero = () => {
  return (
    <>
      <SC.Wrapper style={{ backgroundImage: `url(${IMG.contactHero})` }}>
        <SC.Title>Contacts</SC.Title>
      </SC.Wrapper>
    </>
  );
};
