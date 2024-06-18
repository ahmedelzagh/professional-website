import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.secondary};
  padding: 1rem;
  text-align: center;
  color: white;
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
  </FooterContainer>
);

export default Footer;
