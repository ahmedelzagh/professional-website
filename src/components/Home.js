import React from "react";
import styled from "styled-components";
import AnimationWrapper from "./AnimationWrapper";
import homeBG from "../assets/backgrounds/homeBG.webp"; // Background image
import profileImage from "../assets/profileImage.jpg"; // Profile image (Make sure to add this image to your assets folder)
import { useSpring, animated } from "react-spring";
import { FaLinkedin, FaGithub, FaCloud } from "react-icons/fa"; // Import icons from react-icons library

const HomeContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  height: 100vh;
  background: url(${homeBG}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 2rem;
  }
`;

const ProfileImage = styled(animated.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 200px;
    height: 200px;
  }
`;

const Pref = styled(animated.p)`
  margin: 0;
  padding: 0 1rem;
  line-height: 1.6;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 1.25rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.primary}; /* Use theme primary color for icons */
  font-size: 2rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; /* Change color on hover */
  }
`;

const Home = () => {
  const profileAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 200,
  });

  const prefAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 400,
  });

  return (
    <AnimationWrapper>
      <HomeContainer>
        <ProfileContainer>
          <ProfileImage style={profileAnimation} src={profileImage} alt="Profile" />
          <Pref style={prefAnimation}>
            Hi, I'm Ahmed Elzagh, a professional software engineer with expertise in web hosting, website development, email services, and cooperation solutions for businesses.
          </Pref>
          <IconContainer>
            <IconLink href="https://www.linkedin.com/in/ahmed-elzagh" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="https://github.com/ahmedelzagh" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </IconLink>
            <IconLink href="https://nextcloud.elzagh.me/index.php/u/ahmedelzagh" target="_blank" rel="noopener noreferrer">
              <FaCloud />
            </IconLink>
          </IconContainer>
        </ProfileContainer>
      </HomeContainer>
    </AnimationWrapper>
  );
};

export default Home;
