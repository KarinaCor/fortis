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
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    order: 1;
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
`;
