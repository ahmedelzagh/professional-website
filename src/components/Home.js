import React from 'react';
import styled from 'styled-components';
import AnimationWrapper from './AnimationWrapper';
import homeImage from '../assets/homeImage.jpg'; // Make sure you have an image in the assets folder

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
`;

const Home = () => (
  <AnimationWrapper>
    <HomeContainer>
      <h1>Welcome to Our Professional Services</h1>
      <p>We provide the best solutions for your business needs.</p>
      <HomeImage src={homeImage} alt="Home" />
    </HomeContainer>
  </AnimationWrapper>
);

export default Home;
