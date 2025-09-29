export default {
  // Modern font stack with fallbacks
  fonts: {
    title:
      "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    main: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', monospace",
  },
  // Enhanced color palette with better contrast and modern colors
  colors: {
    // Primary colors
    primary1: "#FFFFFF",
    primary2: "#F8FAFC",
    primary3: "#E2E8F0",

    // Background colors
    background1: "#0A0E1A",
    background2: "#1A1F2E",
    background3: "#2D3748",

    // Accent colors
    accent1: "#3B82F6", // Blue
    accent2: "#8B5CF6", // Purple
    accent3: "#06B6D4", // Cyan
    accent4: "#10B981", // Emerald

    // Gradient colors
    gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    gradient3: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    gradient4: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",

    // Text colors
    text1: "#FFFFFF",
    text2: "#E2E8F0",
    text3: "#94A3B8",
    text4: "#64748B",

    // Interactive colors
    button: "#3B82F6",
    buttonHover: "#2563EB",
    link: "#06B6D4",
    linkHover: "#0891B2",

    // Status colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Border and shadow colors
    border: "rgba(255, 255, 255, 0.1)",
    shadow: "rgba(0, 0, 0, 0.25)",
    shadowHover: "rgba(0, 0, 0, 0.4)",
  },
  // Enhanced spacing system
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
  },
  // Enhanced border radius system
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  // Enhanced shadow system
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    glow: "0 0 20px rgba(59, 130, 246, 0.3)",
  },
  // Enhanced breakpoints for responsive design
  breakpoints: {
    xs: "screen and (max-width: 475px)",
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
    "2xl": "screen and (max-width: 1536px)",
  },
  // Animation and transition settings
  transitions: {
    fast: "0.15s ease-in-out",
    normal: "0.3s ease-in-out",
    slow: "0.5s ease-in-out",
  },
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};
