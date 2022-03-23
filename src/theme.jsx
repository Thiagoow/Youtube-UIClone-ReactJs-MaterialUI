import { createTheme } from "@mui/material";
import { red, blue, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    },
    thirdColor: {
      main: yellow[500]
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

export default theme;
