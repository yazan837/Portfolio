import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  SocialLinks,
  SocialLink,
} from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <HeroContent>
          <HeroTitle>
            Hello, I'm <span>Yazan Hasan</span>
          </HeroTitle>
          <HeroSubtitle>Full-Stack Mobile & Web Developer</HeroSubtitle>
          <HeroDescription>
            I'm a passionate React Native and React.js developer with expertise
            in building scalable mobile applications and modern web solutions. I
            specialize in creating user-friendly interfaces and robust backend
            systems that deliver exceptional user experiences.
          </HeroDescription>

          <HeroButtons>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/files/resume.pdf";
                link.download = "Yazan_Hasan_Resume.pdf";
                link.click();
              }}
              alt
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download Resume
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "#projects";
              }}
            >
              View My Work
            </Button>
          </HeroButtons>

          <SocialLinks>
            <SocialLink
              href="https://github.com/yazanhasan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yazanhasan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/yazanhasan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
