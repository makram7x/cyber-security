import { css } from "@emotion/react";

export const theme = {
  colors: {
    primary: {
      darkNavy: "#00101F",
      teal: "#00e6e6",
      lightTeal: "#83d0d0",
      white: "#FFFFFF",
    },
    secondary: {
      darkTeal: "rgba(0, 30, 40, 0.7)",
      darkerTeal: "rgba(0, 40, 50, 0.7)",
      lightGrey: "#e0e0e0",
      mediumGrey: "#cccccc",
      charcoal: "#333333",
    },
    overlay: {
      dark: "rgba(0, 16, 31, 0.8)",
      gradient:
        "linear-gradient(to top, rgba(0,16,31,0.9), rgba(0,16,31,0.4), transparent)",
    },
    border: {
      teal: "rgba(0, 230, 230, 0.3)",
      tealBright: "#00e6e6",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#e0e0e0",
      muted: "#83d0d0",
      accent: "#00e6e6",
    },
  },
  typography: {
    fonts: {
      heading: "Tajawal, Dubai, sans-serif",
      body: "Cairo, sans-serif",
      latin: "Open Sans, Roboto, sans-serif",
    },
    sizes: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.75rem",
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1.1rem",
      body: "1rem",
      small: "0.9rem",
      xsmall: "0.8rem",
    },
    lineHeights: {
      heading: 1.3,
      body: 1.6,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
  shadows: {
    card: "0 5px 15px rgba(0, 0, 0, 0.3)",
    glow: "0 0 15px rgba(0, 230, 230, 0.4)",
    softGlow: "0 0 10px rgba(0, 230, 230, 0.3)",
    strongGlow: "0 0 20px rgba(0, 230, 230, 0.5)",
  },
  borders: {
    radius: {
      small: "5px",
      medium: "8px",
      large: "10px",
      round: "50%",
    },
    width: {
      thin: "1px",
      medium: "2px",
      thick: "3px",
    },
  },
  transitions: {
    default: "all 0.3s ease",
  },
};

// Global styles
export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    direction: rtl;
  }

  body {
    font-family: ${theme.typography.fonts.body};
    line-height: ${theme.typography.lineHeights.body};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.primary.darkNavy};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.typography.fonts.heading};
    line-height: ${theme.typography.lineHeights.heading};
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.primary.teal};
  }

  h1 {
    font-size: ${theme.typography.sizes.h1};
    text-shadow: 0 0 10px rgba(0, 230, 230, 0.4);
  }
  h2 {
    font-size: ${theme.typography.sizes.h2};
  }
  h3 {
    font-size: ${theme.typography.sizes.h3};
  }
  h4 {
    font-size: ${theme.typography.sizes.h4};
  }
  h5 {
    font-size: ${theme.typography.sizes.h5};
  }
  h6 {
    font-size: ${theme.typography.sizes.h6};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.secondary};
  }

  a {
    color: ${theme.colors.primary.teal};
    text-decoration: none;
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary.lightTeal};
      text-shadow: 0 0 8px rgba(0, 230, 230, 0.5);
    }
  }

  button {
    font-family: ${theme.typography.fonts.body};
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.primary.teal};
    border: ${theme.borders.width.thin} solid ${theme.colors.primary.teal};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.borders.radius.small};
    transition: ${theme.transitions.default};
  }

  button:hover {
    background-color: rgba(0, 230, 230, 0.2);
    box-shadow: ${theme.shadows.softGlow};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Common card styles */
  .card {
    background-color: ${theme.colors.secondary.darkTeal};
    border-radius: ${theme.borders.radius.medium};
    box-shadow: ${theme.shadows.card};
    overflow: hidden;
    transition: ${theme.transitions.default};
    border: ${theme.borders.width.thin} solid ${theme.colors.border.teal};
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.glow};
  }

  /* Common section title styles */
  .section-title {
    color: ${theme.colors.primary.teal};
    font-size: ${theme.typography.sizes.h3};
    margin-bottom: ${theme.spacing.lg};
    border-right: ${theme.borders.width.thick} solid
      ${theme.colors.primary.teal};
    padding-right: ${theme.spacing.md};
  }
`;

// Utility functions
export const mediaQuery = {
  mobile: `@media (min-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
};

// Common UI component styles
export const uiComponents = {
  // Category badge/tag
  categoryTag: css`
    background-color: rgba(0, 230, 230, 0.2);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    border: 1px solid ${theme.colors.primary.teal};
    display: inline-block;
    color: ${theme.colors.primary.teal};
    font-size: ${theme.typography.sizes.small};
  `,

  // Primary button
  primaryButton: css`
    background-color: transparent;
    color: ${theme.colors.primary.teal};
    border: 2px solid ${theme.colors.primary.teal};
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    &:hover {
      background-color: rgba(0, 230, 230, 0.2);
      box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
    }
  `,

  // Filter button
  filterButton: css`
    background-color: transparent;
    color: ${theme.colors.primary.teal};
    border: 1px solid ${theme.colors.primary.teal};
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: ${theme.typography.sizes.small};
    &:hover {
      background-color: rgba(0, 230, 230, 0.2);
    }
    &.active {
      background-color: rgba(0, 230, 230, 0.3);
    }
  `,

  // Hexagonal element
  hexagonal: css`
    position: relative;
    background: linear-gradient(
      to bottom right,
      rgba(0, 40, 60, 0.8),
      rgba(0, 20, 35, 0.8)
    );
    padding: 3rem;
    clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
    border: 2px solid ${theme.colors.primary.teal};
    box-shadow: 0 0 20px rgba(0, 230, 230, 0.3);
  `,
};
