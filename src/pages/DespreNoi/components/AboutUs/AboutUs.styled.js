import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 10px;
  margin-top: 60px;
  padding-right: 10px;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 20px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    order: 2;
  }
  @media (min-width: 1280px) {
   
    padding-left: 40px;
  }
`;

export const HeadingTitle = styled.h3`
  color: #f2f2f2;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    margin-top: 10px;
  }
  @media (min-width: 1280px) {
    font-size: 30px;
  }
`;

export const Span = styled.h3`
  color: #a70101;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 17px;
`;

export const Title = styled.h2`
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    padding-right: 20px;
    font-size: 32px;
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
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Descrp = styled.p`
  font-size: 17px;
  color: #7a7a7a;
  margin-top: 15px;
  line-height: 1.2;
  margin-bottom: 30px;
  @media (min-width: 1280px) {
    
    padding-right: 80px;
  }
`;

export const Blocks = styled.div`
  display: flex;
`;

export const List = styled.ul`


`;

export const Item = styled.li`
  list-style: none;
`;

export const Text = styled.h3`
  line-height: 1.2;
  font-size: 17px;
  color: #7a7a7a;
  margin-bottom: 15px;
  font-weight: 500;
  @media (min-width: 1280px) {
    padding-right: 80px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 14px;
  padding-bottom: 90px;
  @media (min-width: 768px) {
    min-width: 350px;
    margin-right: 20px;
    min-height: 500px;
    padding-bottom: 0px;
    align-content: center;
    margin-top: 120px;
  }
  @media (min-width: 1280px) {
    min-width: 530px;
    margin-top: 50px;
  }
`;
