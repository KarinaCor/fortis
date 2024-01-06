import styled from "styled-components"

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
`;

export const Form = styled.form`
    /* margin: 50px auto 25px;
    max-width: 420px;
    padding-top: 50px;
    box-shadow: 0px 0px 10px;
    border-radius: 15px; */
    display: flex;
    flex-direction: column;

`

export const Label = styled.label`
  font-size: 17px;

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