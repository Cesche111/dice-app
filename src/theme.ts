import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    sizes: {
      container: number;
      controls: number;
    };
  }

  interface ThemeOptions {
    sizes?: {
      container?: number;
      controls?: number;
    };
  }

  interface TypographyVariants {
    historyTableHeader: React.CSSProperties;
    historyTableCell: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    historyTableHeader?: React.CSSProperties;
    historyTableCell?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    historyTableHeader: true;
    historyTableCell: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#9C27B0',
      dark: '#9C27B0',
      contrastText: '#fff',
    },
    error: {
      main: '#D32F2F',
    },
    success: {
      main: '#2E7D32',
    },
    background: {
      paper: alpha('#000', 0.04)
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.17,
      letterSpacing: '-1.5px'
    },
    historyTableHeader: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.43,
      letterSpacing: '0.17px'
    },
    historyTableCell: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.43,
      letterSpacing: '0.17px'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          width: '320px',
          height: 42,
          textTransform: 'none',
          transition: 'transform 0.3s',
          '&:hover, &:active, &:focus': {
            backgroundColor: '#9C27B0',
            transform: 'scale(1.05)'
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          width: '100%'
        },
        filledSuccess: {
          backgroundColor: '#2E7D32'
        },
        filledError: {
          backgroundColor: '#D32F2F'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        '@media (min-width:768px)': {
          html: {
            overflowY: 'scroll',
            scrollbarGutter: 'stable'
          }
        }
      })
    }
  },
  sizes: {
    container: 600,
    controls: 320
  }
});

export default theme;