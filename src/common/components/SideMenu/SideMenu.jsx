import React from "react";
import { NavLink } from "react-router-dom";
import { useMainNav } from "../hooks/useMainNav";

export const SideMenu = ({ toogleModal }) => {
  const mainNav = useMainNav();

  return (
    <nav>
      <ul>
        {mainNav.map(({ id, href, title }) => (
          <li key={id}>
            <NavLink onClick={toogleModal} to={href}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
