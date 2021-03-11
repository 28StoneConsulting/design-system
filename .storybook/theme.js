import { create } from '@storybook/theming/create';
import blackLogo from '../src/assets/img/logo-black.svg';
import whiteLogo from '../src/assets/img/logo-white.svg';
import { themeLight, themeDark } from '../src/shared/theme';

const getThemeVars = (dark) => { 
  const mainBackgroundColor = dark ? themeDark.palette.mainBackgroundColor : themeLight.palette.mainBackgroundColor;
  const panelBackgroundColor = dark ? themeDark.palette.panelBackgroundColor : themeLight.palette.panelBackgroundColor;
  const primaryColor = dark ? themeDark.palette.primary.main : themeLight.palette.primary.main;
  const secondaryColor = dark ? themeDark.palette.secondary.main : themeLight.palette.secondary.main
  const textColor = dark ? themeDark.palette.text.primary : themeLight.palette.text.primary;
  const textColorInverse = dark ? themeDark.palette.getContrastText(primaryColor) : themeLight.palette.getContrastText(primaryColor);
  const fontFamily = dark ? themeDark.typography.fontFamily : themeLight.typography.fontFamily;
  
  return {
    base: dark ? 'dark' : 'light',

    colorPrimary: primaryColor,
    colorSecondary: primaryColor,

    // UI
    appBg: mainBackgroundColor,
    appContentBg: panelBackgroundColor,
    appBorderColor: 'grey',
    appBorderRadius: 0,

    // Typography
    fontBase: fontFamily,

    // Text colors
    textColor: textColor,
    textInverseColor: textColorInverse,

    // Toolbar default and active colors
    barTextColor: textColor,
    barSelectedColor: themeLight.palette.primary.main,
    barBg: mainBackgroundColor,

    // Form colors
    inputBg: panelBackgroundColor,
    // inputBorder: '#808ba3',
    inputTextColor: textColor,
    inputBorderRadius: 4,


    brandTitle: '28Stone',
    brandUrl: 'http://28stone.net',
    brandImage: dark ? whiteLogo : blackLogo,
  }; 
};

export const lightTheme = create(getThemeVars());

export const darkTheme = create(getThemeVars(true));