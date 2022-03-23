import { createTheme } from "@mui/material";

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

export default theme;
