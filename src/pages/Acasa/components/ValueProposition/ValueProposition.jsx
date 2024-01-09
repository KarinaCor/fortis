import { usePropositin } from "../../../../common/components/hooks/useProposition";
import { IMG } from "../../../../images";
import * as SC from "../ValueProposition/ValueProposition.styled";
// import { FaCheckCircle } from "react-icons/fa";

export const ValueProposition = () => {
  const proposition = usePropositin();
  return (
    <>
      <SC.Wrapper>
        <SC.RightBlock>
          <SC.HeadingTitle>BENEFICII</SC.HeadingTitle>
          <SC.Span>DE CE NOI?</SC.Span>
          <SC.Title>De ce sa alegi Fortis?</SC.Title>
          <SC.Line></SC.Line>
          <SC.Descrp>
            Fortis nu este doar un furnizor de materiale de construcții. Suntem
            partenerul dumneavoastră de încredere pentru inovație și succes.
            Prin extinderea activității noastre și focalizarea pe soluții
            inovatoare, ne propunem să devenim catalizatorul transformărilor
            pozitive în domeniul construcțiilor și să aducem o valoare adăugată
            fiecărui partener.
          </SC.Descrp>

          <SC.List>
            {proposition.map(({ id, href, title, text }) => (
              <SC.Item key={id}>
                <SC.Div>
                  <SC.StyledImg fill="#A70101" />
                  <SC.Block>
                    <SC.Headline>{title}</SC.Headline>
                    <SC.Text>{text}</SC.Text>
                  </SC.Block>
                </SC.Div>
              </SC.Item>
            ))}
          </SC.List>
        </SC.RightBlock>
        <SC.LeftBlock>
          <SC.Img src={IMG.worker} alt="worker" />
        </SC.LeftBlock>
      </SC.Wrapper>
    </>
  );
};
