import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 10px;
  margin-top: 45px;
  padding-right: 10px;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 100px;
    padding-bottom: 60px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    order: 1;
  }
  @media (min-width: 1280px) {
   
    padding-right: 40px;
  }
`;

export const Span = styled.h3`
  color: #a70101;
  margin-bottom: 25px;
  font-size: 17px;
  font-weight: 500;
`;

export const Title = styled.h2`
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  padding-right: 10px;
  @media (min-width: 768px) {
    padding-right: 25px;
    margin-bottom: 20px;
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
  margin-bottom: 25px;
  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

// export const Descrp = styled.p`
// color: #7b7c7c;
// `

export const Blocks = styled.div`
  color: #7a7a7a;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li``;

export const Text = styled.h3`
  line-height: 1.5;
  font-size: 17px;
  color: #7a7a7a;
  margin-bottom: 15px;
  font-weight: 500;
  @media (min-width: 1280px) {
    padding-right: 40px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 14px;
  padding-bottom: 95px;
  @media (min-width: 768px) {
    order: 2;
    min-width: 350px;
    /* margin-right: 20px; */
    min-height: 500px;
    padding-bottom: 0px;
    align-content: center;
    margin-top: 120px;
  }
  @media (min-width: 1280px) {
    min-width: 530px;
    width: 0%;
    margin-top: 0px;
  }
`;
