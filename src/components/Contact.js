import React from 'react';
import styled from 'styled-components';
import AnimationWrapper from './AnimationWrapper';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.li`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const Contact = () => (
  <AnimationWrapper>
    <ContactContainer>
      <h1>Contact Us</h1>
      <ContactList>
        <ContactItem>
          <FaEnvelope /> info@yourcompany.com
        </ContactItem>
        <ContactItem>
          <FaPhone /> (123) 456-7890
        </ContactItem>
      </ContactList>
    </ContactContainer>
  </AnimationWrapper>
);

export default Contact;
