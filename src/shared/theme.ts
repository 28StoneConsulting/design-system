import { createMuiTheme } from '@material-ui/core/styles';
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
    errorBackground: React.CSSProperties['color'];
    warningBackground: React.CSSProperties['color'];
    infoBackground: React.CSSProperties['color'];
    successBackground: React.CSSProperties['color'];
    monochrome: {
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
  }
  interface PaletteOptions {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
    errorBackground: React.CSSProperties['color'];
    warningBackground: React.CSSProperties['color'];
    infoBackground: React.CSSProperties['color'];
    successBackground: React.CSSProperties['color'];
    monochrome: {
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
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface Typography {
    size: {
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
  }

  interface TypographyOptions {
    size: {
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
  }
}

const theme = createMuiTheme({
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
      main: '#f05a28',
    },
    secondary: {
      main: '#408C8C',
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
    monochrome: {
      lightest: '#FFFFFF',
      lighter: '#F8F8F8',
      light: '#F3F3F3',
      mediumlight: '#EEEEEE',
      medium: '#DDDDDD',
      mediumdark: '#999999',
      dark: '#666666',
      darker: '#444444',
      darkest: '#333333',
    },
    background: {
      paper: '#fff',
    },
    mainBackgroundColor: '#fff',
    panelBackgroundColor: '#f4f2f1',
    subPanelBackgroundColor: '#fff',
  },
});

theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        backgroundColor: '#fff',
        fontFamily: 'Nunito, sans-serif',
      },
      'button, input, textarea, select': {
        outline: 'none',
      },
      '#root': {
        height: '100%',
      },
      '.MuiPickersBasePicker-container .MuiPickersDay-day:focus.MuiPickersDay-daySelected': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiCard: {
    root: {
      padding: theme.spacing(2),
      boxShadow: 'none',
      border: 'solid 1px #d4d4d4',
    },
  },
  MuiCardActions: {
    root: {
      flexWrap: 'wrap',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    spacing: {
      '& > *': {
        marginBottom: theme.spacing(1),
      },
      '& > :not(:first-child)': {
        marginLeft: 0,
      },
      '& > :not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
  },
  MuiChip: {
    root: {
      height: 25,
      borderRadius: 0,
      fontSize: 12,
      textTransform: 'uppercase',
    },
  },
  MuiTab: {
    root: {
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        padding: '6px 20px',
        fontSize: 18,
      },
    },
    textColorPrimary: {
      color: theme.palette.common.black,
    },
  },
  MuiExpansionPanel: {
    root: {
      border: '1px solid #d4d4d4',
      boxShadow: 'none',
      '&:not(:first-child)': {
        marginTop: theme.spacing(3),
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
  },
  MuiExpansionPanelSummary: {
    root: {
      borderBottom: '1px solid #d4d4d4',
      padding: '0 15px',
      marginBottom: -1,
      height: 40,
      minHeight: 40,
      '&$expanded': {
        height: 40,
        minHeight: 40,
      },
    },
    content: {
      margin: '5px 0',

      '&$expanded': {
        margin: '5px 0',
      },
    },
  },
  MuiExpansionPanelDetails: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  MuiLink: {
    root: {
      '&:hover': {
        color: 'inherit',
      },
    },
  },
};

export type Theme = typeof theme;

export default theme;
