import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffac0c',
      dark: '#f8a300',
      light: 'rgba(255, 172, 12, 0.22)',
    },
    text: {
      main: '#3d3d3d',
      primary: '#727272',
    },
    background: {
      paper: '#e5e5e5',
      default: '#e5e5e5',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['CeraPro Regular', 'CeraPro Bold', 'CeraPro Black'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      ds: 477,
      sm: 600,
      dm: 715,
      md: 900,
      dl: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});

export default theme;
