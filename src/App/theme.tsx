import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary: {
      main: grey[600],
      light: grey[500],
      dark: grey[700],
    },
    text: {
      secondary: grey[600],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          padding: 0,
          margin: 0,
        },
      }),
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});
