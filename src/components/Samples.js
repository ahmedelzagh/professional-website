import React from "react";
import styled from "styled-components";
import AnimationWrapper from "./AnimationWrapper";
import { useSpring, animated } from "react-spring";
import samplesBG from "../assets/backgrounds/samplesBG.webp";
import hostingImage from "../assets/samples/hostingImage.jpg";
import webDevImage from "../assets/samples/webDevImage.jpg";
import calenderImage from "../assets/samples/nextcloud/nextcloud-groupware-calendar-mail-contacts-2.webp";
import filesImage from "../assets/samples/nextcloud/nextcloud-hub7-files-preview.webp";
import officeImage from "../assets/samples/nextcloud/nextcloud-hub8-office-preview.webp";
import contactsImage from "../assets/samples/nextcloud/nextcloud-groupware-Contacts-zoomed.webp";
import talkSampleVideo from "../assets/samples/nextcloud/Talk-Nextcloud-Hub-5.webm";
import talkSampleImage from "../assets/samples/nextcloud/nextcloud-hub7-talk-preview.webp";
import emailTemplatesImage from "../assets/samples/titan/email_templates.webp";
import emailScheduleImage from "../assets/samples/titan/schedule_send.webp";
import emailReadReceiptsImage from "../assets/samples/titan/read_receipts.webp";
import emailFollowUpImage from "../assets/samples/titan/reminder.webp";

const SamplesContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background: url(${samplesBG}) no-repeat center center;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
    margin: 1rem;
  }
`;

const CategoryTitle = styled.h2`
  margin: 1rem 0;
`;

const SampleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SampleItem = styled(animated.div)`
  flex: 1 1 calc(50% - 2rem);
  margin: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1rem;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1 1 calc(100% - 2rem);
  }
`;

const SampleImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const SampleVideo = styled.video`
  max-width: 100%;
  border-radius: 10px;
`;

const Samples = () => {
  const leftToRight = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 600 },
  });

  const rightToLeft = useSpring({
    from: { opacity: 0, transform: "translateX(20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 600 },
  });

  return (
    <AnimationWrapper>
      <SamplesContainer>
        <BlurOverlay />
        <Content>
          <h1>Our Work Samples</h1>

          <CategoryTitle>Hosting Services</CategoryTitle>
          <SampleList>
            <SampleItem style={{ ...leftToRight, gridColumn: "span 2" }}>
              <SampleImage src={hostingImage} alt="Hosting Sample" />
              <p>
                Our hosting services provide a reliable and secure platform for your business websites and applications. Enjoy high uptime, fast loading speeds, and robust security features to ensure
                your online presence is always available and protected.
              </p>
            </SampleItem>
          </SampleList>

          <CategoryTitle>Web Development</CategoryTitle>
          <SampleList>
            <SampleItem style={{ ...rightToLeft, gridColumn: "span 2" }}>
              <SampleImage src={webDevImage} alt="Web Development Sample" />
              <p>
                Our professional web development services are designed to create stunning and functional websites that represent your brand and engage your audience. From custom designs to scalable
                solutions, we deliver websites that drive results.
              </p>
            </SampleItem>
          </SampleList>

          <CategoryTitle>Email Services</CategoryTitle>
          <SampleList>
            <SampleItem style={{ ...rightToLeft, gridColumn: "span 2" }}>
              <p>
                Enhance your business communication with our Titan Email services. Enjoy features like Email Templates, Schedule Send, Read Receipts, Follow-up Reminders, and Signature Builder. Stay
                organized and efficient with our reliable email solutions.
              </p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={emailTemplatesImage} alt="Email Templates Sample" />
              <p>Save time by saving your frequently sent responses as templates and ensure that you always send a message that resonates with your customers.</p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={emailScheduleImage} alt="Schedule Send Sample" />
              <p>Whether you’ve identified the optimal send time for a customer or you need to draft a message during off-hours, schedule your emails to send when they’re most likely to be read.</p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={emailReadReceiptsImage} alt="Read Receipts Sample" />
              <p>Don't lose sleep wondering if your prospect read that crucial quote. With Read Receipts, get notified the moment your recipient opens your email.</p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={emailFollowUpImage} alt="Follow-up Reminders Sample" />
              <p>Don't settle for a non-reply to your important emails. Get nudges to circle back on the thread at the perfect time and keep your conversations going.</p>
            </SampleItem>
          </SampleList>

          <CategoryTitle>Cooperation Solutions</CategoryTitle>
          <SampleList>
            <SampleItem style={{...leftToRight, gridColumn: "span 2"}}>
              <p>
                Easy to use content collaboration platform accessible through mobile, desktop and web interfaces with Nextcloud. Teams can collaborate in real time on documents, chat and
                engage in video calls, access their email or plan meetings in calendars.
              </p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={officeImage} alt="Nextcloud Office" />
              <p>
                Nextcloud Office integrates seamlessly with your existing tools, providing a powerful suite for document creation and editing. Enhance your productivity with our collaborative office
                solutions.
              </p>
            </SampleItem>
            <SampleItem style={leftToRight}>
              <SampleImage src={calenderImage} alt="Nextcloud Calendar" />
              <p>Nextcloud Calendar allows you to manage and share your schedules with ease. Stay organized and ensure everyone is on the same page with our powerful calendar solutions.</p>
            </SampleItem>
            <SampleItem style={rightToLeft}>
              <SampleImage src={contactsImage} alt="Nextcloud Contacts" />
              <p>Nextcloud Contacts provides a central place to manage all your business contacts. Keep your contact information up-to-date and accessible from anywhere.</p>
            </SampleItem>
            <SampleItem style={leftToRight}>
              <SampleImage src={filesImage} alt="Nextcloud Files" />
              <p>Nextcloud Files offers secure file storage and sharing solutions. Access your files from anywhere and collaborate seamlessly with your team.</p>
            </SampleItem>
            <SampleItem style={{ ...rightToLeft, gridColumn: "span 2" }}>
              <SampleVideo poster={talkSampleImage} controls>
                <source src={talkSampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </SampleVideo>
              <p>Nextcloud Talk offers secure video conferencing and chat solutions. Enhance your team communication with real-time collaboration tools that are private and easy to use.</p>
            </SampleItem>
          </SampleList>
        </Content>
      </SamplesContainer>
    </AnimationWrapper>
  );
};

export default Samples;
