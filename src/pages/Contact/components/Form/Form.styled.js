import styled from "styled-components"

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
  @media (min-width: 768px){
    display: flex;
  }
`;

export const LeftSide = styled.div`

`

export const Map = styled.div``;

export const Img = styled.img`
  width: 100%;
height: 250px;
  @media (min-width: 768px) {
   width: 380px;
height: 560px;
  }
  @media (min-width: 1280px) {
  
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 100px;
  }
`;

export const Form = styled.form`
  /* margin: 50px auto 25px;
    max-width: 420px;
    padding-top: 50px;
    box-shadow: 0px 0px 10px;
    border-radius: 15px; */
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    
  }
`;

export const Label = styled.label`
  font-size: 17px;
  @media (min-width: 768px) {
   
  }
`;

export const Input = styled.input`
  border-width: 1px 1px 1px 1px;
  margin-bottom: 15px;
  padding: 16px;
  width: 90%;
  border-color: red;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #a70101;
  color: #ffffff;
  min-height: 47px;
  border-radius: 2px 2px 2px 2px;
  padding: 15px 30px;
  border-color: none;
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  width: 120px;
`;
