import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
  }
  interface PaletteOptions {
    mainBackgroundColor: React.CSSProperties['background'];
    panelBackgroundColor: React.CSSProperties['background'];
    subPanelBackgroundColor: React.CSSProperties['background'];
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
  },
  palette: {
    primary: {
      main: '#f05a28',
    },
    secondary: {
      main: '#408C8C',
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
        backgroundColor: 'black',
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
