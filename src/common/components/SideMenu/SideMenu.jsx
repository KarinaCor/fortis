import React from "react";
import { NavLink } from "react-router-dom";
import { useMainNav } from "../hooks/useMainNav";
import * as SC from "../SideMenu/SideMenu.styled"

export const SideMenu = ({ toogleModal, burger }) => {
  const mainNav = useMainNav();

  return (
    <SC.Nav className={burger ? 'open' : 'close'}>
      <SC.List>
        {mainNav.map(({ id, href, title }) => (
          <SC.Item key={id}>
            <NavLink onClick={toogleModal} to={href}>
              {title}
            </NavLink>
          </SC.Item>
        ))}
      </SC.List>
    </SC.Nav>
  );
};
