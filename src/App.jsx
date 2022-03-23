import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import Home from "./pages/Home";

export const theme = createTheme({
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
