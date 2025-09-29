import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";
import {
  ExperienceContainer,
  ExperienceItem,
  ExperienceHeader,
  ExperienceTitle,
  ExperienceCompany,
  ExperiencePeriod,
  ExperienceDescription,
  ExperienceAchievements,
  AchievementList,
  AchievementItem,
} from "./ExperienceStyles";

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Professional Experience</SectionTitle>
    <ExperienceContainer>
      {experience.map((exp, index) => (
        <ExperienceItem key={index}>
          <ExperienceHeader>
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <ExperienceCompany>{exp.company}</ExperienceCompany>
            <ExperiencePeriod>{exp.period}</ExperiencePeriod>
          </ExperienceHeader>

          <ExperienceDescription>{exp.description}</ExperienceDescription>

          <ExperienceAchievements>
            <h4>Key Achievements:</h4>
            <AchievementList>
              {exp.achievements.map((achievement, achievementIndex) => (
                <AchievementItem key={achievementIndex}>
                  {achievement}
                </AchievementItem>
              ))}
            </AchievementList>
          </ExperienceAchievements>
        </ExperienceItem>
      ))}
    </ExperienceContainer>
  </Section>
);

export default Experience;
