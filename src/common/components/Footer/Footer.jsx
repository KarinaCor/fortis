import { IMG } from "../../../images";
import * as SC from "./Footer.styled";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



export const Footer = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.LogoWrap>
          <SC.Img src={IMG.footerLogo} />
          <SC.Icons>
            <SC.FaceBookImg fill="#fff" size={15} />
            <SC.InstaImg fill="#fff" size={15} />
            <SC.Youtube fill="#fff" size={15} />
          </SC.Icons>
        </SC.LogoWrap>

        <SC.Blocks>
          <SC.CompanieWrap>
            <SC.Title>Companie</SC.Title>
            <SC.List>
              <SC.Item>Despre Noi</SC.Item>
              <SC.Item>Produse</SC.Item>
              <SC.Item>Politica de Confidentialitate</SC.Item>
              <SC.Item>Politica de Cookies</SC.Item>
            </SC.List>
          </SC.CompanieWrap>

          <SC.ContactWrap>
            <SC.Title>CONTACT</SC.Title>
            <SC.List>
              <FaRegBuilding fill="#a70101" size={15} />
              <SC.Item>PARCUL IMM Slobozia</SC.Item>
              <SC.Item>
                <MdOutlineEmail fill="#a70101" size={15} />
                <SC.Link href="mailto:office@zafini.ro">
                  office@zafini.ro
                </SC.Link>
              </SC.Item>
              <SC.Item>
                <FaPhone fill="#a70101" size={15} />
                <SC.Link href="tel:+1234567">
                  (0722) 540 998
                  <br />
                  (0726) 746 400
                </SC.Link>
              </SC.Item>
            </SC.List>

            <SC.Button>CONTACT</SC.Button>
          </SC.ContactWrap>
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
