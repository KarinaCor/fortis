import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  background-position: 61% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: #7b7c7c;
  min-height: 445px;
  
  @media (min-width: 768px) {
    min-height: 383px;
    display: flex;
    gap: 60px;
    justify-content: space-between;
  }
`;

export const LeftBlock = styled.div`

`

export const RightBlock = styled.div`
align-content: center;

`


export const Title = styled.h2`
color: #FFFF;
font-size: 30px;

 @media(min-width: 768px){
  padding-top: 40px;
 }
`

export const Descrp = styled.p`
  color: #ffff;
  font-size: 16px;
  line-height: 1.5;
  padding-top: 20px;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-right: 160px;
    text-align: justify;
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
  padding: 15px 30px;
  margin: 0 auto;
  border-style: none;
  line-height: 1;

  display: flex;
  @media (min-width: 768px) {
    margin-right: 20px;
    position: absolute;
    right: 0px;
    bottom: 170px;
   
  }
`;


