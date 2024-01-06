import { useOurValues } from "../../../../common/components/hooks/useOurValues";
import * as SC from "../OurValues/OurValues.styled";
import { IMG } from "../../../../images";
import { FaCheck } from "react-icons/fa";

export const OurValues = () => {
  const ourValues = useOurValues();
  return (
    <>
      <SC.Wrapper>
        <SC.LeftSide>
          <SC.Span>VALORI</SC.Span>
          <SC.Title>Valorile noastre sunt cărămizile poveștii Fortis</SC.Title>
          <SC.Line></SC.Line>
          <SC.Blocks>
            <SC.List>
              {ourValues.map(({ id, text }) => (
                <SC.Item key={id}>
                  <FaCheck fill="#A70101" size={15} />
                  <SC.Text>{text}</SC.Text>
                </SC.Item>
              ))}
            </SC.List>
          </SC.Blocks>
        </SC.LeftSide>

        <SC.Img src={IMG.despreOurValues} alt="introducing" />
      </SC.Wrapper>
    </>
  );
};
