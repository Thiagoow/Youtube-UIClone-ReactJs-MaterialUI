import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";

function CustomButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500]
      },
      secondary: {
        main: red[500]
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
      <Button variant="contained" size="medium" color="primary">
        Botão :D
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
