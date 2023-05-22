import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface MyProps {
    children?: React.ReactNode;
 }

const theme = createTheme({
  palette: {
    primary: {
        main: "#A95534"
    },
    secondary: {
        main: "#DFC13F"
    }
  }
});

export default function EduFundaTheme({ children }: MyProps) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}