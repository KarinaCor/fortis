import styled from "styled-components";

export const Wrapper = styled.div`
  background-position: 61% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 300px;
  padding-left: 10px;
  @media (min-width: 768px) {
    min-height: 300px;
    background-position: 91% 0%;
    text-align: center;
    
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 44px;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 90px;
  }
`;
