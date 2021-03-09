import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider, Global, css } from '@emotion/react';
import theme from '../../src/shared/theme';

export default storyFn => (
  <>
    <Global styles={globalStyle} />
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

const globalStyle = css`
  body {
    background-color: ${theme.palette.panelBackgroundColor};
  }
  p {
    margin: 0;
  }
`;