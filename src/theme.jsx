import { createTheme } from "@mui/material";
import { red, blue, yellow } from "@mui/material/colors";
//DarkMode variables:
const darkMode = true;

const theme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light",
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    },
    thirdColor: {
      main: yellow[500]
    },
    background: {
      default: darkMode ? "#232323" : "#fcfcfc",
      dark: darkMode ? "#181818" : "#f4f6f8",
      paper: darkMode ? "#232323" : "#fcfcfc"
    }
  },
  typography: {
    button: {
      //textTransform: "none"
    }
  },
  spacing: 4
});

export default theme;
