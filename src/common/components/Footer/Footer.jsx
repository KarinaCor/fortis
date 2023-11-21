import * as SC from "./Footer.styled"

export const Footer = () => {
  return (
    <>
      <SC.Wrapper>
        <SC.LogoWrap>
          <svg></svg>
          <svg></svg>
          <svg></svg>
          <svg></svg>
        </SC.LogoWrap>
        <SC.CompanieWrap>
          <SC.List>
            <SC.Item>Despre Noi</SC.Item>
            <SC.Item>Produse</SC.Item>
            <SC.Item>Politica de Confidentialitate</SC.Item>
            <SC.Item>Politica de Cookies</SC.Item>
          </SC.List>
        </SC.CompanieWrap>
        <SC.ContactWrap>
            <SC.List>
            <SC.Item>PARCUL IMM Slobozia</SC.Item>
          <SC.Item>
            <SC.Link href="mailto:office@zafini.ro">office@zafini.ro</SC.Link>
          </SC.Item>
          <SC.Item>
            <SC.Link href="tel:+1234567">+1234567</SC.Link>
          </SC.Item>
            </SC.List>
          
          <SC.Button>CONTACT</SC.Button>
        </SC.ContactWrap>
      </SC.Wrapper>
    </>
  );
};