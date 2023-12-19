import { useOurValues } from "../../../../common/components/hooks/useOurValues";
import * as SC from "../OurValues/OurValues.styled";

export const OurValues = () => {
  const ourValues = useOurValues();
  return (
    <>
      <SC.Wrapper>
        <SC.Span>Valori</SC.Span>
        <SC.Title>Valorile noastre sunt cărămizile poveștii Fortis</SC.Title>

        <SC.Blocks>
          <SC.List>
            {ourValues.map(({ id, text }) => (
              <SC.Item key={id}>
                <SC.Text>{text}</SC.Text>
              </SC.Item>
            ))}
          </SC.List>
          <SC.Img></SC.Img>
        
        </SC.Blocks>
      </SC.Wrapper>
    </>
  );
};
