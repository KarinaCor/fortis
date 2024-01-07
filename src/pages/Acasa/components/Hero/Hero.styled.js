import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: grey;
    /* opacity: 0.7; */
 
  background-position: 61% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 530px;
  padding-left: 10px;
  @media (min-width: 1200px) {
    min-height: 665px;
    background-position: 91% 0%;
  }
`;

export const MainTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: #FFFF;
  font-size: 40px;
  padding-top: 80px;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 44px;
    padding-top: 120px;
  }
  @media (min-width: 1280px) {
    width: 700px;
    text-align: center;
    margin: 0 auto;
    padding-top: 200px;
  }
`;

export const Descr = styled.p`
font-weight: 600;
color: #fff;
  font-size: 18px;
  padding-bottom: 70px;
  line-height: 1.1;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
    padding: 14px;
  }
  @media (min-width: 1280px) {
    width: 700px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background-color: #a70101;
  padding: 25px 50px;
  color: #ffffff;
  border-radius: 2px 2px 2px 2px;
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  box-shadow: none;
  text-decoration: none;
  line-height: 1;
  border-style: none;
  @media (min-width: 768px) {
    position: absolute;
    right: 300px;
    bottom: 115px;
  }
`;
