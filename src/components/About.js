import React from 'react';
import styled from 'styled-components';
import AnimationWrapper from './AnimationWrapper';
import aboutImage from '../assets/aboutImage.jpg'; // Make sure you have an image in the assets folder

const AboutContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
`;

const About = () => (
  <AnimationWrapper>
    <AboutContainer>
      <h1>About Us</h1>
      <p>We are a team of dedicated professionals providing top-notch solutions for your business.</p>
      <AboutImage src={aboutImage} alt="About Us" />
    </AboutContainer>
  </AnimationWrapper>
);

export default About;
