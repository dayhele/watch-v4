import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    orange: "#E96744",
    darkOrange: "#B72600",
    black: "#1E1E22",
    white: "#FAFAFA",
    gray: "#7A7A7A",
    lightGray: "rgba(122, 122, 122, 0.2);",
    darkGray: "#1E1E22",
    blue: "#0065FF",
    fadedBlue: "rgb(0 101 255 / 20%)"
    
  },
  fonts: {
    primary: "Roboto, sans-serif",
    secondary: "Roboto Condensed, sans-serif"
  },
  fontSizes: {
    xl: "64px",
    lg: "40px",
    md: "24px",
    sm: "16px",
    xs: "14px",
    micro: "12px",
    nano: "10px"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
