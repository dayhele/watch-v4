import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    orange: "#E96744",
    black: "#1E1E22",
    white: "#FAFAFA",
    lightGray: "#7A7A7A"
  },
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Roboto Condensed, sans-serif"
  },
  fontSizes: {
    lg: "64px",
    md: "40px",
    sm: "16px",
    xs: "14px",
    nano: "12px"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
