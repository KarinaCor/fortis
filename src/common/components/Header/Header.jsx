import * as SC from "./Header.styled";

import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { SideMenu } from "../SideMenu/SideMenu";
import { IMG } from "../../../images";

let innerWidth = window.innerWidth >= 1200;

export const Header = () => {
  console.log(innerWidth);
  return (
    <>
      <SC.Header>
        <SC.Logo>
          <SC.LogoLink>
            
            <img src={IMG.logo} width="178" height="53" alt="logo"/>
          </SC.LogoLink>
        </SC.Logo>

        {!innerWidth && (
          <SC.Burger>
            <HamburgerButton></HamburgerButton>
          </SC.Burger>
        )}
        {innerWidth && <SideMenu />}
      </SC.Header>
    </>
  );
};
