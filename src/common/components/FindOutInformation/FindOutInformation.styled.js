import styled from 'styled-components'

export const Wrapper = styled.div`
padding-left: 10px;
padding-top: 10px;
background-position: 61% 0%;
  background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: #7B7C7C;
    min-height: 445px;
    @media(min-width: 768px){
      min-height: 383px;
      display: flex;
      gap: 60px;
    }
`

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
color: #FFFF;
font-size: 16px;
line-height: 1.5;
padding-top: 20px;
padding-bottom: 80px;
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
padding: 15px 30px;
margin: 0 auto;
/* margin-top: 25px; */
line-height: 1;

display: flex;
@media(min-width: 768px){
  margin-right: 20px;
  
}

`


