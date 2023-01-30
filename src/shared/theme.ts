import { BrandColors, Components, createTheme, MonochromeColors, ThemeOptions } from '@mui/material/styles';
import { deepMerge } from '../utils/deep-merge';

declare module '@mui/material/styles' {
  export type BrandColors = {
    orange: React.CSSProperties['color'];
    darkGrey: React.CSSProperties['color'];
    lightGrey: React.CSSProperties['color'];
    black: React.CSSProperties['color'];
    white: React.CSSProperties['color'];
    yellow: React.CSSProperties['color'];
    lightCyan: React.CSSProperties['color'];
    darkCyan: React.CSSProperties['color'];
  };

  export type MonochromeColors = {
    lightest: React.CSSProperties['color'];
    lighter: React.CSSProperties['color'];
    light: React.CSSProperties['color'];
    mediumlight: React.CSSProperties['color'];
    medium: React.CSSProperties['color'];
    mediumdark: React.CSSProperties['color'];
    dark: React.CSSProperties['color'];
    darker: React.CSSProperties['color'];
    darkest: React.CSSProperties['color'];
  };
  interface Palette {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
    errorBackground: React.CSSProperties['color'];
    warningBackground: React.CSSProperties['color'];
    infoBackground: React.CSSProperties['color'];
    successBackground: React.CSSProperties['color'];
    brand: BrandColors;
    monochrome: MonochromeColors;
  }
  interface PaletteOptions {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
    errorBackground: React.CSSProperties['color'];
    warningBackground: React.CSSProperties['color'];
    infoBackground: React.CSSProperties['color'];
    successBackground: React.CSSProperties['color'];
    brand: BrandColors;
    monochrome: MonochromeColors;
  }
}
declare module '@mui/material/styles/createTypography' {
  export type TypographySize = {
    s1: string;
    s2: string;
    s3: string;
    m1: string;
    m2: string;
    m3: string;
    l1: string;
    l2: string;
    l3: string;
    code: string;
  };
  interface Typography {
    size: TypographySize;
  }

  interface TypographyOptions {
    size: TypographySize;
  }
}

const brand: BrandColors = {
  orange: '#DE582A',
  darkGrey: '#4A4A4A',
  lightGrey: '#D9D3D1',
  black: '#000',
  white: '#FFF',
  yellow: '#F99220',
  lightCyan: '#89CFD9',
  darkCyan: '#408C8C',
};

const monochrome: MonochromeColors = {
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
};

const lightThemeOptions: ThemeOptions = {
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1230,
      lg: 1560,
      xl: 2200,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontSize: 38,
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    size: {
      s1: '12',
      s2: '14',
      s3: '16',
      m1: '20',
      m2: '24',
      m3: '28',
      l1: '32',
      l2: '40',
      l3: '48',
      code: '90',
    },
  },
  palette: {
    primary: {
      main: brand.orange,
    },
    secondary: {
      main: brand.darkCyan,
    },
    error: {
      main: '#FF4400',
    },
    errorBackground: '#FEDED2',
    warning: {
      main: '#E69D00',
    },
    warningBackground: '#FFF5CF',
    info: {
      main: '#666666',
    },
    infoBackground: '#DDDDDD',
    success: {
      main: '#66BF3C',
    },
    successBackground: '#E1FFD4',
    brand,
    monochrome,
    mainBackgroundColor: brand.white,
    panelBackgroundColor: '#f4f2f1',
    subPanelBackgroundColor: brand.white,
  },
};

const darkThemeOptions: ThemeOptions = deepMerge({}, lightThemeOptions, {
  palette: {
    mode: 'dark',
    background: {
      paper: '#333333',
    },
    mainBackgroundColor: '#333333',
    panelBackgroundColor: '#292929',
    subPanelBackgroundColor: '#333333',
  },
} as ThemeOptions);

export const darkTheme = createTheme(darkThemeOptions);
export const lightTheme = createTheme(lightThemeOptions);

const lightOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        backgroundColor: lightThemeOptions.palette.mainBackgroundColor,
        fontFamily: 'Nunito, sans-serif',
      },
      'button, input, textarea, select': {
        outline: 'none',
      },
      '#root': {
        height: '100%',
      },
      '.MuiPickersBasePicker-container .MuiPickersDay-day:focus.MuiPickersDay-daySelected': {
        backgroundColor: lightTheme.palette.primary.main,
      },
      '.MuiAppBar-colorPrimary .MuiTabs-indicator': {
        backgroundColor: 'white',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: lightTheme.spacing(2),
        boxShadow: 'none',
        border: 'solid 1px #d4d4d4',
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        flexWrap: 'wrap',
        paddingRight: lightTheme.spacing(2),
        paddingLeft: lightTheme.spacing(2),
      },
      spacing: {
        '& > *': {
          marginBottom: lightTheme.spacing(1),
        },
        '& > :not(:first-child)': {
          marginLeft: 0,
        },
        '& > :not(:last-child)': {
          marginRight: lightTheme.spacing(1),
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        height: 30,
        borderRadius: 0,
        fontSize: 12,
        textTransform: 'uppercase',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        [lightTheme.breakpoints.up('sm')]: {
          padding: '6px 20px',
          fontSize: 18,
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        '&:hover': {
          color: 'inherit',
        },
      },
    },
  },
};

const darkOverrides: Components = deepMerge({}, lightOverrides, {
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        body: {
          color: darkTheme.palette.text.primary,
          backgroundColor: darkThemeOptions.palette.mainBackgroundColor,
        },
      },
    },
  },
} as Components);

lightTheme.components = lightOverrides;
darkTheme.components = darkOverrides;

export type Theme = typeof lightTheme;
