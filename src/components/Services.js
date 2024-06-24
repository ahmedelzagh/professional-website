import React from "react";
import styled from "styled-components";
import AnimationWrapper from "./AnimationWrapper";
import { useSpring, animated } from "react-spring";
import servicesBG from "../assets/backgrounds/servicesBG.webp";
import { FaServer, FaCode, FaEnvelope, FaHandshake } from "react-icons/fa";

const ServicesContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background: url(${servicesBG}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 1.5rem;
    margin: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
    margin: 1rem;
    width: 90%;
  }
`;

const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.5rem;
  }
`;

const ServiceItem = styled(animated.li)`
  flex: 1 1 300px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  transition: transform 0.3s;
  color: #333;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1 1 calc(100% - 2rem);
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Services = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 600 },
  });

  return (
    <AnimationWrapper>
      <ServicesContainer>
        <BlurOverlay />
        <Content>
          <h1>Our Services</h1>
          <ServiceList>
            <ServiceItem style={fadeIn}>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <h3>Email Services</h3>
              <p>Comprehensive email solutions to keep your business connected.</p>
            </ServiceItem>
            <ServiceItem style={fadeIn}>
              <IconWrapper>
                <FaHandshake />
              </IconWrapper>
              <h3>Cooperation Solutions</h3>
              <p>Effective solutions to enhance business cooperation and communication.</p>
            </ServiceItem>
            <ServiceItem style={fadeIn}>
              <IconWrapper>
                <FaServer />
              </IconWrapper>
              <h3>Web Hosting</h3>
              <p>Reliable and secure web hosting services for your business.</p>
            </ServiceItem>
            <ServiceItem style={fadeIn}>
              <IconWrapper>
                <FaCode />
              </IconWrapper>
              <h3>Website Development</h3>
              <p>Professional website development to make your business stand out.</p>
            </ServiceItem>
          </ServiceList>
        </Content>
      </ServicesContainer>
    </AnimationWrapper>
  );
};

export default Services;
