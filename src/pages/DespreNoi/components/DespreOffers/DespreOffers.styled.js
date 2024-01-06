import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 80px;
  padding-right: 10px;
  padding-bottom: 75px;
  @media (min-width: 768px) {
    text-align: center;
    padding-top: 10px;
  }
`;

export const HeadingTitle = styled.h3`
color: #F2F2F2;
font-size: 25px;
font-weight: 900;
margin-bottom: 15px;
`

export const Span = styled.h3`
color: #A70101;
margin-bottom: 20px;
font-size:17px;
font-weight: 500;
`

export const Title = styled.h2`
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    font-size: 32px;
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
  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
    text-align: center;
  }
`;

export const Blocks = styled.div`
  color: #7a7a7a;

`;

export const List = styled.ul`
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Item = styled.li`
  text-align: center;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const Headline = styled.h2`
color: #7B7C7C;
    font-family: "Nunito Sans", Sans-serif; 
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2em;
    letter-spacing: 0.5px;
`

export const Text = styled.p`
font-size: 20px;
color: #7a7a7a;

`

export const Button = styled.button`
    font-family: "Nunito Sans", Sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #FFFFFF;
    background-color: #A70101;
    border-radius: 2px 2px 2px 2px;
    padding: 12px 24px;
    margin-top:30px;
    border-style: none;
`

