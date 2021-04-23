import { useDarkMode } from 'storybook-dark-mode';

// eslint-disable-next-line react/prop-types
export default function ThemeColor({ children }) {
  const isDarkMode = useDarkMode();

  return <div style={{ color: isDarkMode ? 'white' : 'black' }}>{children}</div>;
}
