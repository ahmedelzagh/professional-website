import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
`;

const Header = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/services">Services</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
);

export default Header;
