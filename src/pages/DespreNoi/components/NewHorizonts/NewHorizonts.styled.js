import styled from "styled-components";


export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 50px;
  padding-right: 10px;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    display: flex;
    padding-top: 90px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 100px;
    padding-bottom: 0px;
   
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    order: 1;
    margin-top: 80px;
  }
  @media (min-width: 1280px) {
   padding-right: 40px;
   padding-left: 40px;
  }
`;



export const Title = styled.h2`
  color: #7b7c7c;
  font-size: 30px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 32px;
    padding-right: 15px;
  }
  @media (min-width: 1280px) {
    font-size: 38px;
    padding-right: 150px;
  }
`;

export const Line = styled.span`
  border-top: 3px solid #a70101;
  border-radius: 5px;
  width: 100px;
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const Descrp = styled.p`
font-size: 17px;
color: #7a7a7a;
margin-top: 15px;
line-height: 1.4;
margin-bottom: 30px;
font-weight: 400;
padding-right: 10px;
`




export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 14px;
  padding-bottom: 70px;
  @media (min-width: 768px) {
    min-width: 350px;
    margin-right: 20px;
    min-height: 500px;
  }
  @media (min-width: 1280px) {
    min-width: 550px;
    padding-bottom: 10px;
  
  }
`;

