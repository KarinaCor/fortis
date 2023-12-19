import * as SC from "./Header.styled";

import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { SideMenu } from "../SideMenu/SideMenu";
import { IMG } from "../../../images";

let innerWidth = window.innerWidth >= 768;

export const Header = () => {
  console.log(innerWidth);
  return (
    <>
      <SC.Header>
        <SC.Logo>
          <SC.LogoLink>
            
            <img src={IMG.logo} width="190" height="57" />
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
