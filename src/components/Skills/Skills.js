import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { skills } from "../../constants/constants";
import {
  SkillsContainer,
  SkillCategory,
  SkillTitle,
  SkillList,
  SkillItem,
} from "./SkillsStyles";

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SkillsContainer>
      {skills.map((category, index) => (
        <SkillCategory key={index} index={index}>
          <SkillTitle>{category.title}</SkillTitle>
          <SkillList>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
      ))}
    </SkillsContainer>
  </Section>
);

export default Skills;
