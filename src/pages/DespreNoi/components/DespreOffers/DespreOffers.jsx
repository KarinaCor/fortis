import * as SC from "../DespreOffers/DespreOffers.styled";
import { useOffers } from "../../../../common/components/hooks/useOffers";

export const DespreOffers = () => {
  const offers = useOffers();
  return (
    <>
      <SC.Wrapper>
        <SC.Span>Cele mai bune produse</SC.Span>
        <SC.Title>Ce vă putem oferi?</SC.Title>
        <SC.Descrp>
          Ne ocupăm cu distribuția de materiale de construcție, producție de
          profile din tablă ambutisată, containere și case modulare.
        </SC.Descrp>
        <SC.Blocks>
          <SC.List>
            {offers.map(({ id, href, title }) => (
              <SC.Item key={id}>
                <svg></svg>
                <SC.Headline>{title}</SC.Headline>
                <SC.Button to={href}>Vezi mai mult</SC.Button>
              </SC.Item>
            ))}
          </SC.List>
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
