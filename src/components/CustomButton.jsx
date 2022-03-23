import React from "react";
import { styled as muiStyled } from "@mui/material";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../theme";

const ButtonComponent = muiStyled(Button)({
  "&:hover": {
    backgroundColor: theme.palette.thirdColor.main,
    color: "#000"
  }
});

function CustomButton() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent variant="contained" size="medium" color="primary">
        Botão :D
      </ButtonComponent>
    </ThemeProvider>
  );
}

export default CustomButton;
