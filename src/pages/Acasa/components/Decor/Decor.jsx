import { FaCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import * as SC from './Decor.styled'

export const Decor = () => {
  return (
    <>
      <SC.Wrapper>
        <FaCalendarAlt fill="#A70101" size={50} />

        <SC.Span> 24/7 Suport </SC.Span>
        <FaCreditCard fill="#A70101" size={50} />
        <SC.Span>Preț Imbatabil </SC.Span>
        <FaStopwatch fill="#A70101" size={50} />
        <SC.Span>Livrare Rapidă </SC.Span>
      </SC.Wrapper>
    </>
  );
};
