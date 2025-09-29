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
            I'm a passionate full-stack developer with over 8 years of
            experience in building scalable mobile and web applications. My
            journey began with a fascination for mobile development, and I've
            since expanded my expertise to include modern web technologies and
            cloud platforms.
          </p>
          <p>
            I specialize in React Native and React.js development, with a strong
            focus on creating user-friendly interfaces and robust backend
            systems. My experience spans from startup environments to
            enterprise-level applications, where I've led teams and delivered
            projects that have reached thousands of users.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community. I believe in continuous learning and staying
            up-to-date with the latest industry trends and best practices.
          </p>
        </AboutText>

        <AboutStats>
          <StatItem>
            <StatNumber>8+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50k+</StatNumber>
            <StatLabel>App Downloads</StatLabel>
          </StatItem>
          <StatItem>
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
