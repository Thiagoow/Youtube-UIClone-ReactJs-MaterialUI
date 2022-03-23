import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import Home from "./pages/Home";

/*Export this const won't change nothing❗

To make export a custom theme, use "theme.jsx"
file inside src folder has base, change the
values, and just use it in other file adding:
import theme from '../theme'; */
const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
