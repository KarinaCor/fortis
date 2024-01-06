import * as SC from "./HeaderLine.styled";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";

// let innerWidth = window.innerWidth >= 1200;

export const HeaderLine = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.SocialIcons>
          <FaFacebook fill="#fff" />
          <FaInstagram fill="#fff" />
          <FaYoutube fill="#fff" />
        </SC.SocialIcons>
        <SC.Adress>
          <FaPhone fill="#a70101" />
          <SC.Phone>(0722) 540 998 / (0726) 746 400</SC.Phone>
          <MdOutlineEmail fill="#a70101" />
          <SC.Email>office@zafini.ro</SC.Email>
          <LuClock3 color="#a70101" />
          <SC.Schedule>Luni - Vineri: 09:00 - 18:00</SC.Schedule>
        </SC.Adress>
      </SC.Wrapper>
    </>
  );
};
