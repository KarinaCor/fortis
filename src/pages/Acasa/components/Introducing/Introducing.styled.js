import styled from 'styled-components'




export const Wrapper = styled.div`
padding-left: 10px;
padding-right: 10px;
padding-top: 60px;

@media(min-width: 768px) {
display: flex;
}
@media(min-width: 1280px) {
padding-left:50px;
padding-right: 50px;
}
`

export const Block = styled.div`

`

export const HeadingTitle = styled.h3`
color: #F2F2F2;
font-size: 25px;
font-weight: 900;
margin-bottom: 15px;
@media(min-width: 1280px) {
font-size: 30px;
}

`

export const Span = styled.h3`
  color: #a70101;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 500;
  @media (min-width: 1280px) {
  }
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
@media(min-width: 768px) {
margin: 0;
}
`

export const Descrp = styled.p`
font-size: 17px;
color: #7a7a7a;
margin-top: 15px;
line-height: 1.2;
@media(min-width: 768px) {
padding-right: 10px;
}
@media(min-width: 1280px) {
padding-right: 20px;
}
`

export const Img = styled.img`
width: 100%;
height: 250px;
margin-top: 14px;
@media(min-width: 768px) {
min-width: 440px;
margin-top: 80px;
}
@media(min-width: 1280px) {
min-width:635px;
height:335px;
}
`