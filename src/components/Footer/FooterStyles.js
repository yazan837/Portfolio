import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1200px;
  padding: ${(props) => props.theme.spacing["3xl"]}
    ${(props) => props.theme.spacing["3xl"]}
    ${(props) => props.theme.spacing["4xl"]};
  margin: ${(props) => props.theme.spacing.xl} auto;
  box-sizing: content-box;
  background: ${(props) => props.theme.colors.background2};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.xl}
    ${(props) => props.theme.borderRadius.xl} 0 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 1000px;
    padding: ${(props) => props.theme.spacing["2xl"]}
      ${(props) => props.theme.spacing["2xl"]}
      ${(props) => props.theme.spacing["3xl"]};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.theme.spacing.xl}
      ${(props) => props.theme.spacing.xl}
      ${(props) => props.theme.spacing["2xl"]};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.theme.spacing.lg}
      ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.xl};
    width: calc(100vw - 32px);
    margin: ${(props) => props.theme.spacing.md} auto;
  }
`;

export const LinkItem = styled.a`
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text3};
  margin-bottom: ${(props) => props.theme.spacing.md};
  transition: all ${(props) => props.theme.transitions.fast};
  position: relative;
  left: 0;
  font-weight: 500;
  padding: ${(props) => props.theme.spacing.xs} 0;
  border-radius: ${(props) => props.theme.borderRadius.sm};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};
    transition: width ${(props) => props.theme.transitions.fast};
  }

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    left: 6px;
    background: ${(props) => props.theme.colors.background3};
    padding-left: ${(props) => props.theme.spacing.sm};

    &::before {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 1.4;
    margin-bottom: ${(props) => props.theme.spacing.sm};
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: ${(props) => props.theme.colors.text4};
  min-width: 300px;
  letter-spacing: 0.01em;
  font-size: 1.6rem;
  line-height: 1.6;
  padding-top: ${(props) => props.theme.spacing.md};
  font-weight: 400;
  font-style: italic;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.5rem;
    min-width: 280px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    line-height: 1.5;
    min-width: 250px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 1.4;
    font-size: 1.3rem;
    min-width: 200px;
    padding-top: ${(props) => props.theme.spacing.sm};
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
