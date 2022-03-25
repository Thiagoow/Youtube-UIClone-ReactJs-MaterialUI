import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Menu, AccountCircle, Mic, Apps, MoreVert } from "@mui/icons-material";

const CustomAppBar = styled(AppBar)({
  boxShadow: "none",

  "&:hover": {
    //backgroundColor: theme.palette.thirdColor.main
  }
});

const SpacingDiv = styled("div")({
  flexGrow: 1
});

const CustomIcons = styled(IconButton)({
  padding: theme.spacing(5)
});

export default function Home() {
  return (
    <>
      <CustomAppBar color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            sx={{ pr: theme.spacing(4), pl: theme.spacing(4) }}
          >
            <Menu />
          </IconButton>

          <SpacingDiv />

          <CustomIcons size="large" sx={{ mr: 0 }}>
            <Mic />
          </CustomIcons>

          <CustomIcons size="large" sx={{ mr: 0 }}>
            <Apps />
          </CustomIcons>

          <CustomIcons size="large" sx={{ mr: 0 }}>
            <MoreVert />
          </CustomIcons>

          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </CustomAppBar>
    </>
  );
}
