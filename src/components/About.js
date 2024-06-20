import React from "react";
import styled from "styled-components";
import AnimationWrapper from "./AnimationWrapper";
import aboutBG from "../assets/backgrounds/aboutBG.webp"; // Background image (Make sure to add this image to your assets folder)
import { FaUserTie, FaLaptopCode, FaServer, FaHandshake } from "react-icons/fa";

const AboutContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: url(${aboutBG}) no-repeat center center;
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
  margin: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 3rem;
    margin: 2rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    margin: 0 0.5rem;
    font-size: 2rem;
  }
`;

const About = () => (
  <AnimationWrapper>
    <AboutContainer>
      <BlurOverlay />
      <Content>
        <Title>About Ahmed Elzagh</Title>
        <IconWrapper>
          <FaUserTie />
          <FaLaptopCode />
          <FaServer />
          <FaHandshake />
        </IconWrapper>
        <Paragraph>
          I am Ahmed Elzagh, a dedicated Software Engineer with extensive experience in self-hosting a variety of services and providing cooperation solutions for businesses. Despite being a
          one-person company, I work with a talented team to deliver top-notch services to our clients.
        </Paragraph>
        <Paragraph>
          My expertise lies in deploying and managing self-hosted solutions that enhance business productivity and collaboration. From web hosting to email services and comprehensive cooperation
          tools, my goal is to provide robust and secure solutions tailored to meet the specific needs of each client.
        </Paragraph>
        <Paragraph>
          By leveraging the latest technologies and best practices, I ensure that my clients have the tools they need to succeed in today's competitive environment. Whether it's setting up a reliable
          email service with advanced features or deploying a full-fledged cooperation suite, I am committed to delivering exceptional value and support.
        </Paragraph>
      </Content>
    </AboutContainer>
  </AnimationWrapper>
);

export default About;
