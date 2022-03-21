import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";

function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" size="medium" color="primary" t>
        Botão :D
      </Button>
    </ThemeProvider>
  );
}

export default App;
