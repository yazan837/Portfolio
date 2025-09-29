import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  /* Import modern fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-padding-top: 80px;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.text1};
    cursor: default;
    overflow-x: hidden;
    transition: all ${(props) => props.theme.transitions.normal};
    position: relative;
  }

  /* Add subtle background pattern */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  /* Enhanced typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: ${(props) => props.theme.colors.text1};
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    letter-spacing: -0.05em;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  h6 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    color: ${(props) => props.theme.colors.text2};
    line-height: 1.7;
  }

  /* Enhanced link styles */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    transition: all ${(props) => props.theme.transitions.fast};
    position: relative;
  }

  a:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }

  /* Enhanced button styles */
  button {
    font-family: ${(props) => props.theme.fonts.title};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${(props) => props.theme.transitions.fast};
  }

  button:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  /* Enhanced list styles */
  ul, ol {
    list-style: none;
  }

  /* Enhanced scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background2};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.background3};
    border-radius: ${(props) => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.accent1};
  }

  /* Enhanced selection */
  ::selection {
    background: ${(props) => props.theme.colors.accent1};
    color: ${(props) => props.theme.colors.text1};
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Enhanced mobile experience */
  @media ${(props) => props.theme.breakpoints.sm} {
    body {
      font-size: 1.4rem;
    }
    
    h1 {
      font-size: 3.6rem;
    }
    
    h2 {
      font-size: 2.8rem;
    }
    
    h3 {
      font-size: 2.2rem;
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    button, a {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    body {
      background: #000000;
      color: #FFFFFF;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
  }
`;

export default GlobalStyles;
