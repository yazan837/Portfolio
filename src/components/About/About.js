import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutStats,
  StatItem,
  StatNumber,
  StatLabel,
  AboutImage,
  ImageContainer,
} from "./AboutStyles";

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <AboutContainer>
      <AboutContent>
        <AboutText>
          <p>
            With over 8+ years of prolific experience as a Software Engineer, I
            have consistently played pivotal leadership roles, steering
            companies toward unparalleled success through innovative strategies
            and technical prowess. My journey is marked by a series of impactful
            contributions to diverse projects and organizations, where I've not
            only showcased technical excellence but also provided strategic
            guidance to foster growth.
          </p>
          <p>
            My leadership extends beyond coding; I actively collaborate with
            cross-functional teams, aligning technical initiatives with
            overarching business objectives. Throughout my career, I have been a
            catalyst for success, leveraging my expertise to navigate complex
            challenges and optimize software solutions. My ability to envision
            and implement scalable architectures has significantly contributed
            to the efficiency and competitiveness of the companies I've been a
            part of.
          </p>
          <p>
            In addition to technical acumen, I specialize in creating a
            collaborative and empowering work culture. I have successfully
            mentored and led teams, nurturing talent and fostering an
            environment of continuous learning. My leadership style emphasizes
            transparency, open communication, and a results-driven mindset. As a
            seasoned Software Engineer, I bring not just technical skills but a
            holistic understanding of the intersection between technology and
            business.
          </p>
        </AboutText>

        <AboutStats>
          <StatItem index={0}>
            <StatNumber>8+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem index={1}>
            <StatNumber>20+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem index={2}>
            <StatNumber>50k+</StatNumber>
            <StatLabel>App Downloads</StatLabel>
          </StatItem>
          <StatItem index={3}>
            <StatNumber>10+</StatNumber>
            <StatLabel>Technologies</StatLabel>
          </StatItem>
        </AboutStats>
      </AboutContent>

      <ImageContainer>
        <AboutImage
          src="/images/profile.jpg"
          alt="Yazan Hasan - Full Stack Developer"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </ImageContainer>
    </AboutContainer>
  </Section>
);

export default About;
