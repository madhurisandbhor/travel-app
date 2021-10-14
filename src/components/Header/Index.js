import React from "react";
import styled from "styled-components";
import HeaderLink from "./HeaderLink";

const NavBar = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline;
`;

const Header = () => (
  <NavBar>
    <NavItem>
      <HeaderLink exact to="/">
        Bon Voyage<b>!</b>
      </HeaderLink>
    </NavItem>
  </NavBar>
);

export default Header;
