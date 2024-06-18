import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  &.active {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const Header = () => (
  <Nav>
    <StyledNavLink to="/">
      <IconWrapper><FaHome /></IconWrapper>Home
    </StyledNavLink>
    <StyledNavLink to="/services">
      <IconWrapper><FaServicestack /></IconWrapper>Services
    </StyledNavLink>
    <StyledNavLink to="/about">
      <IconWrapper><FaInfoCircle /></IconWrapper>About
    </StyledNavLink>
    <StyledNavLink to="/contact">
      <IconWrapper><FaEnvelope /></IconWrapper>Contact
    </StyledNavLink>
  </Nav>
);

export default Header;
