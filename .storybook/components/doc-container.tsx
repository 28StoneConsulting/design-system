import { css, Global, Theme } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from '../../src/shared/theme';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();
  const theme = dark ? darkTheme : lightTheme;

  return (
    <>
      <Global styles={getGlobalStyle(theme)} />
      <StylesProvider injectFirst>
        <StyledEngineProvider injectFirst>
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
