import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import * as SC from "./HamburgerButton.styled";
import { SideMenu } from "../SideMenu/SideMenu";

export const HamburgerButton = () => {
  const [burger, setBurger] = useState(false);

  const toogleModal = () => {
    setBurger(!burger);
  };

  return (
    <>
      <SC.MenuButton onClick={toogleModal}>
        <RxHamburgerMenu size={30}/>
      </SC.MenuButton>
      {burger && <SideMenu toogleModal={toogleModal} />}
    </>
  );
};
 