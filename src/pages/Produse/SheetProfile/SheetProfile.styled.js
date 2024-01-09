import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 40px;
  padding-right: 10px;
  @media (min-width: 768px) {
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 80px;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    order: 1;
    padding: 10px 10px 10px 0;
  }
`;

export const HeadingTitle = styled.h3`
  color: #f2f2f2;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 15px;
  @media (min-width: 1280px) {
    font-size: 30px;
  }
`;
export const Span = styled.span`
  color: #a70101;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
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
    padding-right: 250px;
  }
`;

export const Line = styled.span`
border-top: 3px solid #A70101;
border-radius: 5px;
width: 100px;
display: flex;
margin: 0 auto;
@media(min-width: 768px) {
margin: 0;
}
`

export const Descrp = styled.p`
  font-size: 17px;
  color: #7a7a7a;
  margin-top: 15px;
  line-height: 1.2;
  margin-bottom: 30px;
  margin-top: 25px;
  @media (min-width: 768px) {
    padding-right: 25px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    padding-right: 70px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 14px;
  padding-bottom: 90px;
  @media (min-width: 768px) {
    order: 2;
    padding-left: 10px;
    min-width: 420px;
    min-height: 235px;
    padding-top: 160px;
  }
  @media (min-width: 1280px) {
    min-width: 595px;
    min-height: 335px;
    padding-top: 60px;
  }
`;