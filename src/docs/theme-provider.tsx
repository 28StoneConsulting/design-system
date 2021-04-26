import { useTheme } from '@emotion/react';

export default function ThemeProvider({ children }) {
  const theme = useTheme();
  return children({ theme });
}
