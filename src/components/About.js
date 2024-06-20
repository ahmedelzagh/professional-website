import React from "react";
import styled from "styled-components";
import AnimationWrapper from "./AnimationWrapper";
import aboutBG from "../assets/backgrounds/aboutBG.webp"; // Background image (Make sure to add this image to your assets folder)

const AboutContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
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
  margin: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 3rem;
  }
`;

const About = () => (
  <AnimationWrapper>
    <AboutContainer>
      <BlurOverlay />
      <Content>
        <h1>About Ahmed Elzagh</h1>
        <p>
          I am Ahmed Elzagh, a dedicated Software Engineer with extensive experience in self-hosting a variety of services and providing cooperation solutions for businesses. Despite being a
          one-person company, I work with a talented team to deliver top-notch services to our clients.
        </p>
        <p>
          My expertise lies in deploying and managing self-hosted solutions that enhance business productivity and collaboration. From web hosting to email services and comprehensive cooperation
          tools, my goal is to provide robust and secure solutions tailored to meet the specific needs of each client.
        </p>
        <p>
          By leveraging the latest technologies and best practices, I ensure that my clients have the tools they need to succeed in today's competitive environment. Whether it's setting up a reliable
          email service with advanced features or deploying a full-fledged cooperation suite, I am committed to delivering exceptional value and support.
        </p>
      </Content>
    </AboutContainer>
  </AnimationWrapper>
);

export default About;
