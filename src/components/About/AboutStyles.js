import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing["4xl"]};
  align-items: center;
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
    gap: ${(props) => props.theme.spacing["3xl"]};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing["2xl"]};
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["2xl"]};
`;

export const AboutText = styled.div`
  p {
    font-size: 1.6rem;
    line-height: 1.7;
    color: ${(props) => props.theme.colors.text2};
    margin-bottom: ${(props) => props.theme.spacing.lg};

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    p {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    p {
      font-size: 1.4rem;
    }
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing["2xl"]};
  background: ${(props) => props.theme.colors.background2};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.gradient1};
    opacity: 0.05;
    border-radius: ${(props) => props.theme.borderRadius.xl};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: ${(props) => props.theme.spacing.lg};
    padding: ${(props) => props.theme.spacing.xl};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.theme.spacing.md};
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: ${(props) => props.theme.colors.background3};
  transition: all ${(props) => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  animation: fadeInUp 1s ease-out;
  animation-delay: ${(props) => props.index * 0.1}s;
  animation-fill-mode: both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gradient1};
    opacity: 0;
    transition: all ${(props) => props.theme.transitions.normal};
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
    border-radius: ${(props) => props.theme.borderRadius.lg};
    transition: opacity ${(props) => props.theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.xl},
      ${(props) => props.theme.shadows.glow};

    &::before {
      left: 0;
      opacity: 0.1;
    }

    &::after {
      opacity: 0.05;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

export const StatNumber = styled.div`
  font-size: 3.2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.text1};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text3};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    order: -1;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.xl};
  transition: all ${(props) => props.theme.transitions.normal};
  border: 3px solid ${(props) => props.theme.colors.border};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows["2xl"]};
    border-color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 350px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 300px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 250px;
  }
`;
