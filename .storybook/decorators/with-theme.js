import React from 'react';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import {  StylesProvider } from '@mui/styles';
import {  ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import {  Global, css } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { lightTheme, darkTheme } from '../../src/shared/theme';

export default (storyFn, context) => {
  const theme = useDarkMode() ? darkTheme : lightTheme
  const isInDocs = context.viewMode === 'docs';
  
  return isInDocs ? storyFn() : (
  <>
    <Global styles={getGlobalStyle(theme)} />
    <StylesProvider injectFirst>
      <StyledEngineProvider injectFirst>
      <CssBaseline />
        <ThemeProvider theme={theme}>
            {storyFn()}
        </ThemeProvider>
      </StyledEngineProvider>
    </StylesProvider>
  </>
  );
};

const getGlobalStyle = theme => css`
  body {
    background-color: ${theme.palette.panelBackgroundColor};
  }
  p {
    margin: 0;
  }
`;