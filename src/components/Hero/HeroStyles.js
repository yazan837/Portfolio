import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacing["4xl"]} 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: ${(props) => props.theme.spacing["3xl"]} 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: ${(props) => props.theme.spacing["2xl"]} 0;
    align-items: center;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: ${(props) => props.theme.spacing.xl} 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 6.4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease-out;
  position: relative;

  span {
    background: ${(props) => props.theme.colors.gradient2};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    animation: glow 2s ease-in-out infinite alternate;
  }

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

  @keyframes glow {
    from {
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    to {
      text-shadow: 0 0 30px rgba(59, 130, 246, 0.6),
        0 0 40px rgba(139, 92, 246, 0.3);
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 5.6rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4.8rem;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.6rem;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 3.2rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text2};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  line-height: 1.3;
  animation: fadeInUp 1s ease-out 0.2s both;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};
    animation: slideIn 1s ease-out 0.8s both;
  }

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 60px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    text-align: center;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text3};
  margin-bottom: ${(props) => props.theme.spacing["3xl"]};
  max-width: 600px;
  animation: fadeInUp 1s ease-out 0.4s both;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
    text-align: center;
    max-width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing["3xl"]};
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s both;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    gap: ${(props) => props.theme.spacing.md};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  align-items: center;
  animation: fadeInUp 1s ease-out 0.8s both;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.full};
  color: ${(props) => props.theme.colors.text3};
  font-size: 2rem;
  transition: all ${(props) => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gradient1};
    opacity: 0;
    transition: opacity ${(props) => props.theme.transitions.fast};
    border-radius: ${(props) => props.theme.borderRadius.full};
  }

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.lg};
    border-color: ${(props) => props.theme.colors.accent1};

    &::before {
      opacity: 0.1;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 48px;
    height: 48px;
    font-size: 1.8rem;
  }
`;
