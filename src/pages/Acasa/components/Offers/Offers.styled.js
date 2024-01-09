import styled from 'styled-components'

export const Wrapper = styled.div`
padding-left: 10px;
padding-right: 10px;
padding-top: 60px;
@media(min-width: 1280px) {
padding-left:70px;
padding-right: 70px;
}
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

`

export const Descrp = styled.p`
  font-size: 17px;
  color: #7a7a7a;
  margin-top: 15px;
  margin-bottom: 35px;
 
`;

export const Blocks = styled.div`
color: #7a7a7a;
`

export const List = styled.ul`
@media(min-width: 768px) {
    display: flex;
   gap: 20px;
    flex-wrap: wrap;

}
`

export const Item = styled.li`
flex-basis: calc((100% - 20px) / 2);
list-style: none;
`

export const Img = styled.img`
width:60px;
height:60px;
`

export const Headline = styled.h2`
color: #7B7C7C;
    font-family: "Nunito Sans", Sans-serif; 
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2em;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
`

export const Text = styled.p`
  font-size: 16px;
  color: #7a7a7a;
  margin-bottom: 20px;
  @media (min-width: 1280px) {
    padding-right: 50px;
  }
`;

export const Button = styled.button`
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #ffffff;
  background-color: #a70101;
  border-radius: 2px 2px 2px 2px;
  padding: 12px 24px;
  border-style: none;

`;

