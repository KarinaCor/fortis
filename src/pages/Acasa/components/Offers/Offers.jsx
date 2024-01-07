import * as SC from "../Offers/Offers.styled";
import { useOffers } from "../../../../common/components/hooks/useOffers";
import { ICON } from "../../../../images";

export const Offers = () => {
  const offers = useOffers();
  return (
    <>
      <SC.Wrapper>
      <SC.HeadingTitle>PRODUSE</SC.HeadingTitle>
        <SC.Span>CELE MAI BUNE PRODUSE</SC.Span>
        <SC.Title>Ce vă putem oferi?</SC.Title>
        <SC.Line></SC.Line>
        <SC.Descrp>
          Ne ocupăm cu distribuția de materiale de construcție, producție de
          profile din tablă ambutisată, containere și case modulare.
        </SC.Descrp>
        <SC.Blocks>
          <SC.List>
            {offers.map(({ id, href, title, text }) => (
           
              <SC.Item key={id}>
                <SC.Img src={ICON.icon} alt='icon'/>
                <SC.Headline>{title}</SC.Headline>
                <SC.Text>{text}</SC.Text>
                <SC.Button to={href}>Vezi mai mult</SC.Button>
              </SC.Item>
            ))}
          </SC.List>
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
