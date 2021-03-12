import { lightTheme } from './shared/theme';
import '@emotion/react';

declare module '@emotion/react' {
  type EmotionTheme = typeof lightTheme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
}
