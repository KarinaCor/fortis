import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const FaceBookImg = styled(FaFacebook)`
margin-right: 20px;
`;

export const InstaImg = styled(FaInstagram)`
  margin-right: 20px;
`;


export const Wrapper = styled.div`
background-color: #7b7c7c;
display: flex;
justify-content: space-between;
  padding: 15px;
`;

export const SocialIcons = styled.div`
 
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 1280px) {
    padding-right: 160px;
  }
`;

export const Phone = styled.h3`
 color: #fff;
 font-size: 13px;
 padding-right: 20px;
 padding-left: 10px;
 font-size: 300;
`;

export const Email = styled.h3`
  color: #fff;
  font-size: 13px;
  padding-right: 20px;
  padding-left: 10px;
`;

export const Schedule = styled.h3`
  color: #fff;
  font-size: 13px;
  padding-left: 10px;
`;

