import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["3xl"]};
  margin-top: ${(props) => props.theme.spacing["3xl"]};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};

    @media ${(props) => props.theme.breakpoints.sm} {
      left: 1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: ${(props) => props.theme.spacing["2xl"]};
  }
`;

export const ExperienceItem = styled.div`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  padding: ${(props) => props.theme.spacing["2xl"]};
  margin-left: 6rem;
  position: relative;
  transition: all ${(props) => props.theme.transitions.normal};

  &::before {
    content: "";
    position: absolute;
    left: -4.5rem;
    top: 2rem;
    width: 1.2rem;
    height: 1.2rem;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};
    border: 3px solid ${(props) => props.theme.colors.background1};
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.xl};
    border-color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 3rem;
    padding: ${(props) => props.theme.spacing.xl};

    &::before {
      left: -2.2rem;
    }
  }
`;

export const ExperienceHeader = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const ExperienceTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text1};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const ExperienceCompany = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text2};
  margin-bottom: ${(props) => props.theme.spacing.xs};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const ExperiencePeriod = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text3};
  font-weight: 500;
  background: ${(props) => props.theme.colors.background3};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const ExperienceDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text2};
  margin-bottom: ${(props) => props.theme.spacing.lg};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const ExperienceAchievements = styled.div`
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text1};
    margin-bottom: ${(props) => props.theme.spacing.md};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 1.4rem;
    }
  }
`;

export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AchievementItem = styled.li`
  position: relative;
  padding-left: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text2};

  &::before {
    content: "▶";
    position: absolute;
    left: 0;
    top: 0;
    color: ${(props) => props.theme.colors.accent1};
    font-size: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding-left: ${(props) => props.theme.spacing.md};
  }
`;
