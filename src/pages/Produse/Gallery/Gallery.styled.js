import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  background-color: #f9f9f9;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
  @media (min-width: 1280px) {
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 50px;
  }
`;

export const Title = styled.h2`
  margin-top: 25px;
  color: #7b7c7c;
  font-size: 30px;
  margin-bottom: 25px;
  @media (min-width: 768px){
    font-size: 34px;
  }
`;

export const List = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
   
  }
`;

export const Item = styled.li`
  list-style: none;
  @media (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 30px) / 4);
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 14px;
  @media (min-width: 768px) {
  margin-top: 0;
  }
`;
