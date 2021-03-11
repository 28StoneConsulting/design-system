import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider, Global, css } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { themeLight, themeDark } from '../../src/shared/theme';

export default storyFn => {
  const theme = useDarkMode() ? themeDark : themeLight
  return (
  <>
    <Global styles={getGlobalStyle(theme)} />
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          {storyFn()}
        </ThemeProvider>
      </MuiThemeProvider>
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