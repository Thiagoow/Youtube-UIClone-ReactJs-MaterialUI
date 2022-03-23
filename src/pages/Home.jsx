import React from "react";
import { styled as muiStyled } from "@mui/material";
import CustomButton from "../components/CustomButton";

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
