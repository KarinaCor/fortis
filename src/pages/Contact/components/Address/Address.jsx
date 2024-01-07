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
            <FaRegBuilding fill="#a70101" size={40} />
            <SC.HeadingTitle>ADRESA:</SC.HeadingTitle>
            <SC.Information>Parcul IMM Slobozia</SC.Information>
          </SC.Block>
          <SC.Block>
            <MdOutlineEmail fill="#a70101" size={45} />
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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d363747.594143694!2d27.388125!3d44.581109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b0513ff8bc4c8d%3A0x8063c821244e5943!2sParcul%20Industrial%20IMM%20Slobozia!5e0!3m2!1sen!2sus!4v1704636034669!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ display: "block", border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </SC.Wrapper>
    </>
  );
};
