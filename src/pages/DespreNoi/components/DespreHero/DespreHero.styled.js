import styled from "styled-components";

export const Wrapper = styled.div`
  background-position: 61% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 300px;
  padding-left: 10px;
  @media (min-width: 1280px) {
    min-height: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  color: #fff;
  margin: 0px;
  text-align: center;
  align-items: center;
  padding-top: 120px;
  @media (min-width: 768px) {
    padding-top: 90px;
  }
  @media (min-width: 1280px) {
    text-align: left;
    padding-top: 150px;
    padding-left: 130px;
  }
`;
