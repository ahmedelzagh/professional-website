import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  text-align: center;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
  </FooterContainer>
);

export default Footer;
