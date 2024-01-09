import styled from "styled-components";

export const Wrapper = styled.div`
  background-position: 61% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  position: relative;
  min-height: 300px;
  padding-left: 10px;
  background-color: gray;
  background-position: center center;
  /* transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s; */
  @media (min-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1280px) {
    min-height: 400px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding-top: 120px;
  @media (min-width: 1280px) {
    font-size: 48px;
    text-align: left;
    padding-left: 140px;
    padding-top: 160px;
  }
`;