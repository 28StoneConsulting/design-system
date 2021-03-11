import { addDecorator } from '@storybook/react';
import { lightTheme, darkTheme } from './theme';
import withTheme from './decorators/with-theme';

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: lightTheme,
  },
  backgrounds: {
    disable: true,
  },
  viewport: {
    disable: true,
  },
  darkMode: {
    // Override the default dark theme
    dark: darkTheme,
    // Override the default light theme
    light: lightTheme,
  }
};

addDecorator(withTheme);
