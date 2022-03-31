import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import { InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  //borderRadius: theme.shape.borderRadius,
  paddingLeft: theme.spacing(2),
  backgroundColor: "#000",
  borderTop: "1px solid #404040",
  borderBottom: "1px solid #404040",
  borderLeft: "1px solid #404040",

  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto"
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: "4%",
    paddingRight: "15%"
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "5%",
    paddingRight: "30%"
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "8%",
    paddingRight: "32%"
  }
}));
const CustomIcons = styled(IconButton)({
  padding: theme.spacing(5)
});

export default function SearchField() {
  return (
    <>
      <StyledInputBase
        placeholder="Pesquisar"
        inputProps={{ "aria-label": "pesquisar" }}
      />
      <CustomIcons
        type="submit"
        style={{
          backgroundColor: "#444",
          borderRadius: 0,
          padding: theme.spacing(1),

          border: "1px solid #404040",
          paddingRight: theme.spacing(4),
          paddingLeft: theme.spacing(4)
        }}
        aria-label="search"
      >
        <SearchIcon />
      </CustomIcons>
    </>
  );
}
