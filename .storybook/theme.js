import { create } from '@storybook/theming/create';
import logo from '../src/assets/img/logo-black.svg';
import theme from '../src/shared/theme';

const mainBackgroundColor = theme.palette.mainBackgroundColor;
const panelBackgroundColor = theme.palette.panelBackgroundColor;
const primaryColor = theme.palette.primary.main;
const textColor = theme.palette.text.primary;
const textColorInverse = theme.palette.getContrastText(primaryColor);
const fontFamily = theme.typography.fontFamily

export default create({
  base: 'light',

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
  barSelectedColor: primaryColor,
  barBg: mainBackgroundColor,

  // Form colors
  inputBg: panelBackgroundColor,
  // inputBorder: '#808ba3',
  inputTextColor: textColor,
  inputBorderRadius: 4,


  brandTitle: '28Stone',
  brandUrl: 'http://28stone.net',
  brandImage: logo,
});