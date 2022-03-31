import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Icons:
import { Menu, AccountCircle, Mic, Apps, MoreVert } from "@mui/icons-material";
//Images:
import darkLogoImg from "../../assets/img/darkLogo.png";
import lightLogoImg from "../../assets/img/lightLogo.png";
//Components:
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Hidden
} from "@mui/material";
import VideoListing from "../components/VideoListing";
import SearchField from "../components/SearchField";
import DrawerMenu from "../components/DrawerMenu";

const CustomAppBar = styled(AppBar)({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
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

          <CustomIcons size="large" sx={{ mr: 3, p: 3 }}>
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

      <Box display="flex">
        <Hidden lgDown>
          <DrawerMenu />
        </Hidden>

        <VideoListing />
      </Box>
    </>
  );
}
