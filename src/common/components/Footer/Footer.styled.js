import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const FaceBookImg = styled(FaFacebook)`
  margin-right: 20px;
  margin-left: 100px;
  background-color: #a70101;
  border: 8px solid #a70101;
 
`;

export const InstaImg = styled(FaInstagram)`
  margin-right: 20px;
  border: 8px solid #a70101;
  background-color: #a70101;

`;

export const Youtube = styled(FaYoutube)`
  border: 8px solid #a70101;
  background-color: #a70101;
 
`;

export const Wrapper = styled.div`
background-color: #414141;
min-height: 578px;
padding-left: 10px;

@media(min-width: 768px){
display: flex;
align-content: space-between;
gap: 90px;
min-height: 350px;
}

`

export const LogoWrap = styled.div`
align-items: center;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
flex-direction: row;
/* padding-left: 15px; */
`;

export const Img = styled.img`
width: 160px;
height: 160px;
padding-top: 30px;
margin-left: auto;
margin-right: auto;
@media(min-width: 768px){
  padding-top: 50px;
}
  
`

export const CompanieWrap = styled.div`
@media(min-width: 768px){
   padding-top: 50px;
   margin-right: 60px;
}
`
export const Title = styled.h2`
font-size: 20px;
color: #FFFF;
margin-bottom: 30px;
`
export const Blocks = styled.div`
display: flex;
`

export const List = styled.ul`

`

export const Item = styled.li`
list-style: none;
font-size: 16px;
color: #FFFF;
margin-bottom: 17px;
text-decoration: none;
padding-right: 30px;
line-height: 1.2;
`

export const Link = styled.a`
text-decoration: none;
color: #fff;
`

export const ContactWrap = styled.div`
@media(min-width: 768px){
   padding-top: 50px;
}
`

export const Button = styled.button`
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #ffffff;
  background-color: #a70101;
  border-radius: 2px 2px 2px 2px;
  padding: 9px 18px;
  text-decoration: none;
  border-style: none;
`;

