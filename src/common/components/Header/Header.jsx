import * as SC from "./Header.styled";

import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { SideMenu } from "../SideMenu/SideMenu";
import { IMG } from "../../../images";
import { HeaderLine } from "../HeaderLine/HeaderLine";
import { HeaderNav } from "../HeaderNav/HeaderNav";

let innerWidth = window.innerWidth >= 1200;
let LineWidth = window.innerWidth >= 768;

export const Header = () => {
  console.log(innerWidth);
  return (
    <>
      {LineWidth && <HeaderLine />}
      <SC.Header>
        <SC.Logo>
          <SC.LogoLink>
            <img src={IMG.logo} width="178" height="53" alt="logo" />
          </SC.LogoLink>
        </SC.Logo>
        {innerWidth && <HeaderNav />}
        {!innerWidth && (
          <SC.Burger>
            <HamburgerButton></HamburgerButton>
          </SC.Burger>
        )}

        {innerWidth && <SideMenu />}
      
        {/* {innerWidth && <HamburgerButton />} */}
      </SC.Header>
    </>
  );
};
