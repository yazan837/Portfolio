import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing["2xl"]};
  margin-top: ${(props) => props.theme.spacing["3xl"]};
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${(props) => props.theme.spacing.xl};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.lg};
  }
`;

export const SkillCategory = styled.div`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  padding: ${(props) => props.theme.spacing["2xl"]};
  transition: all ${(props) => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  animation: fadeInUp 1s ease-out;
  animation-delay: ${(props) => props.index * 0.2}s;
  animation-fill-mode: both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.colors.gradient1};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.gradient1};
    opacity: 0;
    transition: opacity ${(props) => props.theme.transitions.normal};
    border-radius: ${(props) => props.theme.borderRadius.xl};
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.xl},
      ${(props) => props.theme.shadows.glow};
    border-color: ${(props) => props.theme.colors.accent1};

    &::after {
      opacity: 0.05;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.theme.spacing.xl};
  }
`;

export const SkillTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text1};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: center;
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  justify-content: center;
`;

export const SkillItem = styled.div`
  background: ${(props) => props.theme.colors.background3};
  color: ${(props) => props.theme.colors.text2};
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 1.3rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all ${(props) => props.theme.transitions.fast};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gradient1};
    opacity: 0;
    transition: all ${(props) => props.theme.transitions.fast};
  }

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
    border-color: ${(props) => props.theme.colors.accent1};

    &::before {
      left: 0;
      opacity: 0.1;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: ${(props) => props.theme.spacing.xs}
      ${(props) => props.theme.spacing.sm};
  }
`;
