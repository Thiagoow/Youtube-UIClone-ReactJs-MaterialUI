import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Components:
import { AppBar, Toolbar, IconButton, Button, Hidden } from "@mui/material";
import SearchField from "../components/SearchField";
import DrawerMenu from "../components/DrawerMenu";
//Icons:
import { Menu, AccountCircle, Mic, Apps, MoreVert } from "@mui/icons-material";
//Images:
import darkLogoImg from "../../assets/img/darkLogo.png";
import lightLogoImg from "../../assets/img/lightLogo.png";

const CustomAppBar = styled(AppBar)({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1
});
const SpacingDiv = styled("div")({
  flexGrow: 1
});
const CustomIcons = styled(IconButton)({
  padding: theme.spacing(5)
});
const Logo = styled("img")({
  height: "1.8rem"
});

export default function TopBar() {
  return (
    <>
      <CustomAppBar color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            sx={{ ml: theme.spacing(1), mr: theme.spacing(4) }}
          >
            <Menu />
          </IconButton>

          <a href="/">
            <Logo
              src={theme.palette.type === "dark" ? darkLogoImg : lightLogoImg}
              style={{
                marginTop: "0.5rem"
              }}
            />
          </a>

          <SearchField />

          <CustomIcons
            size="large"
            sx={{ mr: 3, p: 3 }}
            style={{ backgroundColor: "transparent" }}
          >
            <Mic />
          </CustomIcons>

          <SpacingDiv />

          <CustomIcons size="large" sx={{ mr: 3, p: 3 }}>
            <Apps />
          </CustomIcons>

          <CustomIcons size="large" sx={{ mr: 3, p: 3 }}>
            <MoreVert />
          </CustomIcons>

          <Hidden lgDown>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
              style={{}}
            >
              Fazer Login
            </Button>
          </Hidden>
        </Toolbar>
      </CustomAppBar>

      <Hidden lgDown>
        <DrawerMenu />
      </Hidden>
    </>
  );
}
