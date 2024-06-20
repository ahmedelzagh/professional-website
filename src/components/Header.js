import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaImage, FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  display: flex;
    justify-content: center; /* Align center for desktop screens */
  align-items: center;
`;

const MenuIcon = styled(FaBars)`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    padding: 1rem 0;
    z-index: 100;
  }
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
    margin: 0.5rem 0;
    font-size: 1rem;
    justify-content: center;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <MenuIcon onClick={toggleMenu} />
      <NavLinks isOpen={isOpen}>
        <StyledNavLink to="/" onClick={toggleMenu}>
          <IconWrapper><FaHome /></IconWrapper>Home
        </StyledNavLink>
        <StyledNavLink to="/services" onClick={toggleMenu}>
          <IconWrapper><FaServicestack /></IconWrapper>Services
        </StyledNavLink>
        <StyledNavLink to="/samples" onClick={toggleMenu}>
          <IconWrapper><FaImage /></IconWrapper>Samples
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={toggleMenu}>
          <IconWrapper><FaInfoCircle /></IconWrapper>About
        </StyledNavLink>
        <StyledNavLink to="/contact" onClick={toggleMenu}>
          <IconWrapper><FaEnvelope /></IconWrapper>Contact
        </StyledNavLink>
      </NavLinks>
    </Nav>
  );
};

export default Header;
