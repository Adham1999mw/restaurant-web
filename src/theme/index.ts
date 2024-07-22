import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6fc2a6', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#16171a', 
      contrastText: '#ffffff', 
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff', 
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    action: {
      active: '#6fc2a6', 
      hover: '#d0f7f1', 
    },
  },
});


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#424242', 
      contrastText: '#fff', 
    },
    secondary: {
      main: '#c7c7c7', 
      contrastText: '#000000', 
    },
    background: {
      default: '#303030', 
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
    action: {
      active: '#6fc2a6',
      hover: '#00796b', 
    },
  },
});

export { lightTheme, darkTheme };
