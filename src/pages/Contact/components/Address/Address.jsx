import * as SC from "./Address.styled";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Address = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.Span>CONTACT</SC.Span>
        <SC.Title>Nu ezita să ne contactezi</SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          Ne poți contacta pe email, numărul de telefon sau completând
          formularul de mai jos.
        </SC.Descrp>
        <SC.Div>
          <SC.Block>
            {/* <SC.Icon> */}
              <FaRegBuilding fill="#a70101" size={40} />
            {/* </SC.Icon> */}

            <SC.HeadingTitle>ADRESA:</SC.HeadingTitle>
            <SC.Information>Parcul IMM Slobozia</SC.Information>
          </SC.Block>
          <SC.Block>
            <MdOutlineEmail fill="#a70101" size={50} />
            <SC.HeadingTitle>EMAIL:</SC.HeadingTitle>
            <SC.Information>office@zafini.ro</SC.Information>
          </SC.Block>
          <SC.Block>
            <FaPhone fill="#a70101" size={40} />
            <SC.HeadingTitle>TELEFON</SC.HeadingTitle>
            <SC.Information>(0722) 540 998 </SC.Information>
            <SC.Information>(0726) 746 400</SC.Information>
          </SC.Block>
        </SC.Div>
      </SC.Wrapper>
    </>
  );
};
