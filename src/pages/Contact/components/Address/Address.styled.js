import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 40px;
  padding-right: 10px;
  background-color: #f9f9f9;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 100px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 30px;
    padding-bottom: 60px;
  }
`;

export const Span = styled.span`
  color: #a70101;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

export const Title = styled.h2`
  margin-top: 25px;
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  padding-right: 10px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 38px;
  }
`;

export const Line = styled.span`
  border-top: 3px solid #a70101;
  border-radius: 5px;
  width: 100px;
  display: flex;
  margin: 0 auto;
  @media (min-width: 768px) {
  }
`;

export const Descrp = styled.p`
  font-size: 18px;
  color: #7a7a7a;
  margin-top: 15px;
  line-height: 1.2;
  margin-bottom: 30px;
  margin-top: 25px;
  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
    margin-bottom: 50px;
  }
  @media (min-width: 1280px) {
    padding-left: 390px;
    padding-right: 390px;
  }
`;

export const Div = styled.div`
  @media (min-width: 768px) {
    display: flex;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding-top: 40px;
   justify-content: space-between;
  }
`;

export const Block = styled.div`
  height: 155px;
  background-color: #7b7c7c;
  margin-bottom: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media (min-width: 768px) {
    margin-right: 10px;
    padding: 10px;
    width: 235px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 360px;
    height: 155px;
  }
`;

// export const Icon = styled.div``

export const HeadingTitle = styled.span`
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
  padding-bottom: 20px;

  font-weight: 600;
  @media (min-width: 768px) {
    /* margin-bottom: 30px; */
    font-weight: 600;
  }
`;

export const Information = styled.h3`
  color: #fff;
  font-size: 20px;
  font-family: "Nunito Sans", Sans-serif;
  font-weight: 600;
  line-height: 1.2em;
  letter-spacing: 0.4px;
  @media (min-width: 768px) {
  }
`;
