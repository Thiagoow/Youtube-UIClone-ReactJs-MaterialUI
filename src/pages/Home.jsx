import React from "react";
import { styled as muiStyled } from "@mui/material";
import CustomButton from "../components/CustomButton";

/*{ themes } -> Catches from "props." the theme
which was defined inside the file which this component
is on. 👇🏽

If this component is inside App.jsx = It will 
catches the theme defined INSIDE the App.jsx file.
*/
const StyledContainer = muiStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100%",
  padding: theme.spacing(1),

  "&:hover": {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Home() {
  return (
    <StyledContainer>
      <CustomButton />
    </StyledContainer>
  );
}
