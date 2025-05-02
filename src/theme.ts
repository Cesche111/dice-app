import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0'
    },
    secondary: {
      main: '#9C27B0',
      contrastText: '#fff'
    },
    error: {
      main: '#D32F2F'
    },
    success: {
      main: '#2E7D32'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 300,
      fontSize: '96px',
      lineHeight: 1.17,
      letterSpacing: '-1.5px'
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.15px'
    },
    caption: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '0.75rem',
      color: 'rgba(0, 0, 0, 0.6)'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          width: '100%',
          height: '42px',
          padding: '8px 22px',
          borderRadius: '4px',
          textTransform: 'none',
          fontSize: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s'
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiAlert-message': {
            width: '100%',
            paddingTop: '8px',
            paddingBottom: '8px'
          }
        },
        filledSuccess: {
          backgroundColor: '#2E7D32',
          '& .MuiTypography-caption': {
            color: '#fff !important'
          }
        },
        filledError: {
          backgroundColor: '#D32F2F',
          '& .MuiTypography-caption': {
            color: '#fff !important'
          }
        }
      }
    },
    MuiRadioGroup: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          marginBottom: '24px'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          width: '100%',
          marginTop: '16px',
          '& .MuiSlider-valueLabel': {
            fontFamily: 'Roboto',
            fontSize: '14px'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          fontFamily: 'Roboto',
          fontSize: '0.75rem',
          color: 'rgba(0, 0, 0, 0.6)'
        }
      }
    }
  },
  sizes: {
    container: '600px',
    controls: '320px',
    resultDisplayWidth: '100%',
    resultDisplayHeight: '200px'
  }
});

declare module '@mui/material/styles' {
  interface Theme {
    sizes: {
      container: string;
      controls: string;
      resultDisplayWidth: string;
      resultDisplayHeight: string;
    };
  }

  interface ThemeOptions {
    sizes?: {
      container?: string;
      controls?: string;
      resultDisplayWidth?: string;
      resultDisplayHeight?: string;
    };
  }
}

export default theme;