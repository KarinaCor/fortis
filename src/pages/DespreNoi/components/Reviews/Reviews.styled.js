import styled from "styled-components";


export const Wrapper = styled.div`
  padding-left: 10px;
  padding-bottom: 25px;
  padding-right: 10px;
  @media (min-width: 768px) {
    text-align: center;
    padding-top: 10px;
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
    padding-left: 65px;
    padding-right: 65px;
    text-align: justify;
    margin-top:20px;
  }
`;

export const Comments = styled.div`
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Blocks = styled.div`
  background-color: #7b7c7c;
  padding: 30px 16px 16px 16px;
  margin-bottom: 20px;
  border-radius: 2px 2px 2px 2px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;



export const Text = styled.h3`
  list-style: none;
  color: #fff;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 500;
  padding-top: 20px;
  @media (min-width: 768px) {
    text-align: justify;
  }
`;

export const Name = styled.h3`
color: #a70101;
font-size:16px;
line-height:1.5;
padding-top: 25px;
font-weight: 500;
`



