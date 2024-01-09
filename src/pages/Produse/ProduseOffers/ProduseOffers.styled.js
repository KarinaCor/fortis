import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 80px;
  padding-right: 10px;
  padding-bottom: 25px;
  @media (min-width: 768px) {
    text-align: center;
    padding-top: 10px;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 60px;
  }
`;

export const HeadingTitle = styled.h3`
  color: #f2f2f2;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 15px;
  @media (min-width: 1280px){
    font-size: 30px;
  }
`;

export const Span = styled.h3`
  color: #a70101;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
`;

export const Title = styled.h2`
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 38px;
  }
`;

export const Line = styled.span`
border-top: 3px solid #A70101;
border-radius: 5px;
width: 100px;
display: flex;
margin: 0 auto;
margin-top: 25px;
@media(min-width: 768px) {

}
`

export const Descrp = styled.p`
  font-size: 17px;
  color: #7a7a7a;
  margin-top: 15px;
  line-height: 1.2;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (min-width: 1280px) {
    padding-left: 370px;
    padding-right: 370px;
  }
`;