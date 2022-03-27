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
      default: darkMode ? "#262626" : "#fdfdfd",
      dark: darkMode ? "#181818" : "#f7f7f7",
      paper: darkMode ? "#262626" : "#fdfdfd"
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
