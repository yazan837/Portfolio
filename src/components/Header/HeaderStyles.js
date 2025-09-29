import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1.5rem 2rem;
  padding-top: 2rem;
  background: ${(props) => props.theme.colors.background2};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: sticky;
  top: 0;
  z-index: ${(props) => props.theme.zIndex.sticky};
  transition: all ${(props) => props.theme.transitions.normal};

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 1.2rem 1.5rem;
    grid-column-gap: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem 1.2rem;
    grid-column-gap: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 1rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  margin-top: 0.75em;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.text3};
  transition: all ${(props) => props.theme.transitions.fast};
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.md};

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.gradient1};
    border-radius: ${(props) => props.theme.borderRadius.full};
    transition: all ${(props) => props.theme.transitions.fast};
    transform: translateX(-50%);
  }

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    background: ${(props) => props.theme.colors.background3};
    transform: translateY(-1px);

    &::before {
      width: 80%;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.6rem;
    padding: 0.4rem 0.8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.4rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.text3};
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.fast};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  align-items: center;
  gap: 0.5rem;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.text1};
    background: ${(props) => props.theme.colors.background3};
    transform: translateY(-1px);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.5rem;
    padding: 0.4rem 0.8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    padding: 0.3rem 0.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0.5rem;
    font-size: 1.3rem;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: all ${(props) => props.theme.transitions.fast};
  color: ${(props) => props.theme.colors.text3};
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    background: ${(props) => props.theme.colors.background3};
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${(props) => props.theme.shadows.lg};

    &::before {
      opacity: 0.1;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.6rem;
  }
`;
