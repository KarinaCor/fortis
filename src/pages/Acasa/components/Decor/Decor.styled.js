import styled from "styled-components";
import { FaStopwatch20 } from "react-icons/fa";

export const StyledImg = styled(FaStopwatch20)`

`



export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Span = styled.span`
font-size: 25px;
color: #7b7c7c;
font-weight: 700;
padding-bottom: 10px;
padding-top: 20px;

`;