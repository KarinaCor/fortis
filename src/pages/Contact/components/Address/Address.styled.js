import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 40px;
  padding-right: 10px;
  background-color: #f9f9f9;
`;

export const Span = styled.span`
  color: #a70101;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 25px;
  color: #7b7c7c;
  font-size: 31px;
  margin-bottom: 25px;
`;

export const Line = styled.span`
  border-top: 3px solid #a70101;
  border-radius: 5px;
  width: 100px;
  display: flex;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Descrp = styled.p`
  font-size: 18px;
  color: #7a7a7a;
  margin-top: 15px;
  line-height: 1.2;
  margin-bottom: 30px;
  margin-top: 25px;
`;

export const Div = styled.div``;

export const Block = styled.div`
  height: 155px;
  background-color: #7b7c7c;
  margin-bottom: 10px;
`;

export const HeadingTitle = styled.span`
  color: #fff;
  font-size: 16px;
`;

export const Information = styled.h3`
  color: #fff;
  font-size: 20px;
  font-family: "Nunito Sans", Sans-serif;
  font-weight: 600;
  line-height: 1.2em;
  letter-spacing: 0.4px;
`;
