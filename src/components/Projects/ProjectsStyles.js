import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  place-items: center;
  column-gap: ${(props) => props.theme.spacing.xl};
  row-gap: ${(props) => props.theme.spacing["3xl"]};
  max-width: 1400px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    column-gap: ${(props) => props.theme.spacing.lg};
    row-gap: ${(props) => props.theme.spacing["2xl"]};
    padding: ${(props) => props.theme.spacing["2xl"]} 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    column-gap: ${(props) => props.theme.spacing.md};
    row-gap: ${(props) => props.theme.spacing.xl};
    padding: ${(props) => props.theme.spacing.xl} 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing.xl}
      ${(props) => props.theme.spacing.md};
    gap: ${(props) => props.theme.spacing.xl};
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    padding: ${(props) => props.theme.spacing.lg}
      ${(props) => props.theme.spacing.sm};
    gap: ${(props) => props.theme.spacing.lg};
  }
`;
export const BlogCard = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.xl};
  text-align: center;
  width: 420px;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  transition: all ${(props) => props.theme.transitions.normal};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.colors.gradient1};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${(props) => props.theme.shadows["2xl"]};
    border-color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 380px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 340px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 400px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing["3xl"]};
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text2};
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0 ${(props) => props.theme.spacing.lg};

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: ${(props) => props.theme.spacing["2xl"]};
    font-size: 1.6rem;
    padding: 0 ${(props) => props.theme.spacing.md};
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.text1};
  padding: ${(props) => props.theme.spacing.sm} 0;
  margin-top: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => (props.title ? "2.8rem" : "2.2rem")};
  line-height: 1.2;
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? "2.4rem" : "1.8rem")};
    margin-top: ${(props) => props.theme.spacing.sm};
  }
`;

export const Hr = styled.hr`
  width: 60px;
  height: 4px;
  margin: ${(props) => props.theme.spacing.sm} auto;
  border: 0;
  background: ${(props) => props.theme.colors.gradient1};
  border-radius: ${(props) => props.theme.borderRadius.full};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

export const Intro = styled.div`
  width: 200px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.text3};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.6;
  font-weight: 400;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    font-size: 1.2rem;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing["2xl"]};
  color: ${(props) => props.theme.colors.text2};
  font-size: 1.6rem;
  line-height: 1.7;
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.xl};
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 ${(props) => props.theme.spacing.xl};
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 ${(props) => props.theme.spacing.lg};
    font-size: 1.4rem;
    margin-top: ${(props) => props.theme.spacing.lg};
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: ${(props) => props.theme.spacing["2xl"]} 0;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.sm};
    margin: ${(props) => props.theme.spacing.xl} 0;
  }
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.text1};
  font-size: 1.4rem;
  font-weight: 600;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.gradient1};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: all ${(props) => props.theme.transitions.normal};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left ${(props) => props.theme.transitions.slow};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};

    &::before {
      left: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.md};
    min-width: 100px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.xl}
    ${(props) => props.theme.spacing.lg};
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.theme.spacing.lg}
      ${(props) => props.theme.spacing.md};
  }
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.text3};
  font-size: 1.3rem;
  font-weight: 500;
  background: ${(props) => props.theme.colors.background3};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    background: ${(props) => props.theme.colors.accent1};
    transform: translateY(-1px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: ${(props) => props.theme.spacing.xs}
      ${(props) => props.theme.spacing.sm};
  }
`;
