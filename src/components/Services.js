import React from 'react';
import styled from 'styled-components';
import AnimationWrapper from './AnimationWrapper';
import { FaServer, FaCode, FaEnvelope, FaHandshake } from 'react-icons/fa';

const ServicesContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceItem = styled.li`
  flex: 1 1 300px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Services = () => (
  <AnimationWrapper>
    <ServicesContainer>
      <h1>Our Services</h1>
      <ServiceList>
        <ServiceItem>
          <IconWrapper><FaServer /></IconWrapper>
          <h3>Web Hosting</h3>
          <p>Reliable and fast hosting solutions.</p>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper><FaCode /></IconWrapper>
          <h3>Website Development</h3>
          <p>Professional website development services.</p>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <h3>Email Services</h3>
          <p>Secure and robust email services.</p>
        </ServiceItem>
        <ServiceItem>
          <IconWrapper><FaHandshake /></IconWrapper>
          <h3>Cooperation Solutions</h3>
          <p>Effective cooperation solutions for businesses.</p>
        </ServiceItem>
      </ServiceList>
    </ServicesContainer>
  </AnimationWrapper>
);

export default Services;
