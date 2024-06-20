import React from 'react';
import styled from 'styled-components';
import AnimationWrapper from './AnimationWrapper';
import contactBG from '../assets/backgrounds/contactBG.webp'; // Background image (add image as needed)
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background: url(${contactBG}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 3rem;
  }
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

  /* Add cursor pointer style to make it clickable */
  &:first-child {
    cursor: pointer;
  }
`;

const Contact = () => {
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy email: ', error);
        alert('Failed to copy email. Please try again.');
      });
  };

  return (
    <AnimationWrapper>
      <ContactContainer>
        <BlurOverlay />
        <Content>
          <h1>Contact Us</h1>
          <ContactList>
            {/* Attach click event to copy email to clipboard */}
            <ContactItem onClick={() => handleCopyEmail('ahmed@elzagh.live')}>
              <FaEnvelope /> ahmed@elzagh.live
            </ContactItem>
            <ContactItem>
              <FaPhone /> (+20) 1205212495
            </ContactItem>
          </ContactList>
        </Content>
      </ContactContainer>
    </AnimationWrapper>
  );
};

export default Contact;
