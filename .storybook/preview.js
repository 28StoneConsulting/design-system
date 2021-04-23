import { lightTheme, darkTheme } from './theme';
import withTheme from './decorators/with-theme';
import { DocsContainer } from './components/doc-container';
// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    container: DocsContainer,
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

export const decorators = [withTheme];
