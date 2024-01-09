import styled from 'styled-components'

import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #7b7c7c;
`;

export const Nav = styled.nav`
transition: 1000ms linear;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 180px;
 background-color: #fff;
  text-decoration: none;
  width: 100%;
  
  &.open{top:80px;
   left:0}
   &.close{top: -100px;
   left:0}

`;

export const List = styled.ul`
padding-left: 20px;
list-style: none;
text-decoration: none;

`

export const Item = styled.li`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 20px;
  
`;

// // export const LogoLink = styled.a`

// // `

// export const Menu = styled.nav`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   bottom: 0px;
//   z-index: 293;
//   display: block;
//   width: 400px;
//   max-width: 100%;
//   margin-top: 0px;
//   padding-top: 100px;
//   padding-right: 0px;
//   align-items: stretch;
//   background-color: #001698;
//   transform: translateX(-100%);
//   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

// `;

// export const MenuLink = styled.a`
//   position: relative;
//   display: block;
//   text-align: left;
//   max-width: 100%;
//   padding-top: 25px;
//   padding-bottom: 25px;
//   padding-left: 16%;

//   background-position: 88% 50%;
//   background-size: 36px;
//   background-repeat: no-repeat;
//   transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
//   text-decoration: none;
//   color: #fff;
//   font-size: 32px;
//   line-height: 120%;
//   font-weight: 500;

//   :hover {
//     background-position: 90% 50%;
//   }
// `;