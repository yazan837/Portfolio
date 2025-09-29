import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "48px 48px 0")};
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 1000px;
    padding: 40px 40px 0;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 32px 32px 0;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.lg};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "24px 24px 0")};
    width: calc(100vw - 48px);
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.md};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "5.6rem" : "4.8rem")};
  line-height: 1.1;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => (props.main ? "48px 0 16px" : "0")};
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "4.8rem" : "4.2rem")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "4.2rem" : "3.6rem")};
    line-height: 1.2;
    margin-bottom: ${(props) => props.theme.spacing.md};
    padding: ${(props) => (props.main ? "32px 0 12px" : "0")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? "3.2rem" : "2.8rem")};
    line-height: 1.3;
    margin-bottom: ${(props) => props.theme.spacing.sm};
    padding: ${(props) => (props.main ? "24px 0 8px" : "0")};
    max-width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: ${(props) => (props.main ? "2.8rem" : "2.4rem")};
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 2rem;
  line-height: 1.7;
  font-weight: 400;
  padding-bottom: ${(props) => props.theme.spacing["3xl"]};
  color: ${(props) => props.theme.colors.text2};
  letter-spacing: 0.01em;

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 720px;
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 100%;
    font-size: 1.8rem;
    line-height: 1.6;
    padding-bottom: ${(props) => props.theme.spacing["2xl"]};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 1.6;
    padding-bottom: ${(props) => props.theme.spacing.xl};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;

export const SectionDivider = styled.div`
  width: 80px;
  height: 6px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) =>
    props.colorAlt
      ? props.theme.colors.gradient2
      : props.theme.colors.gradient1};
  margin: ${(props) =>
    props.divider ? `${props.theme.spacing["2xl"]} 0` : "0"};
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

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 60px;
    height: 4px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 40px;
    height: 3px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "180px" : "280px")};
  height: ${({ alt }) => (alt ? "56px" : "64px")};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ alt }) => (alt ? "1.8rem" : "2rem")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: ${({ theme }) => theme.colors.text1};
  background: ${({ alt, theme }) =>
    alt ? theme.colors.gradient2 : theme.colors.gradient1};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left ${({ theme }) => theme.transitions.slow};
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl},
      ${({ theme }) => theme.shadows.glow};

    &::before {
      left: 100%;
    }

    &::after {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: ${({ alt }) => (alt ? "160px" : "240px")};
    height: ${({ alt }) => (alt ? "52px" : "56px")};
    font-size: ${({ alt }) => (alt ? "1.6rem" : "1.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "160px" : "200px")};
    height: ${({ alt }) => (alt ? "48px" : "52px")};
    font-size: ${({ alt }) => (alt ? "1.6rem" : "1.8rem")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "48px")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    height: 48px;
    font-size: 1.6rem;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    height: 44px;
    font-size: 1.4rem;
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text1};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt, theme }) =>
    alt ? theme.colors.gradient2 : theme.colors.gradient1};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: all ${({ theme }) => theme.transitions.normal};
  font-size: ${({ alt }) => (alt ? "1.8rem" : "2rem")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled, theme }) =>
    disabled ? theme.shadows.md : "none"};
  font-family: ${({ theme }) => theme.fonts.title};

  &:hover {
    opacity: 0;
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent1};
    outline-offset: 2px;
  }

  &:active {
    opacity: 1;
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background3};
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ alt }) => (alt ? "1.6rem" : "1.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "1.6rem" : "1.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${({ theme }) => theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.link};
`;
