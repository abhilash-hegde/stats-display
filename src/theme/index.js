import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import theme from "./style";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
