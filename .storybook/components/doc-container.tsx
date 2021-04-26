import { css, Global, ThemeProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from '../../src/shared/theme';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();
  const theme = dark ? darkTheme : lightTheme;

  return (
    <>
      <Global styles={getGlobalStyle(theme)} />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <BaseContainer
              context={{
                ...context,
                parameters: {
                  ...context.parameters,
                  docs: {
                    // This is where the magic happens.
                    theme: dark ? themes.dark : themes.light,
                  },
                },
              }}
            >
              {children}
            </BaseContainer>
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
