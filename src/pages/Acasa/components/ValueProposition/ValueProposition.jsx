import { usePropositin } from "../../../../common/components/hooks/useProposition";
import * as SC from "../ValueProposition/ValueProposition.styled";

export const ValueProposition = () => {
  const proposition = usePropositin();
  return (
    <>
      <SC.Wrapper>
        <SC.Span>De ce noi?</SC.Span>
        <SC.Title>De ce sa alegi Fortis?</SC.Title>
        <SC.Descrp>
          Fortis nu este doar un furnizor de materiale de construcții. Suntem
          partenerul dumneavoastră de încredere pentru inovație și succes. Prin
          extinderea activității noastre și focalizarea pe soluții inovatoare,
          ne propunem să devenim catalizatorul transformărilor pozitive în
          domeniul construcțiilor și să aducem o valoare adăugată fiecărui
          partener.
        </SC.Descrp>
        <SC.Blocks>
          <SC.List>
            {proposition.map(({ id, href, title, text }) => (
              <SC.Item key={id}>
                <svg></svg>
                <SC.Headline>{title}</SC.Headline>
                <SC.Text>{text}</SC.Text>
              </SC.Item>
            ))}
            <SC.Img></SC.Img>
          </SC.List>
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
