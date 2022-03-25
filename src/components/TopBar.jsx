import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Components:
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  //Drawer:
  Drawer,
  Box,
  Divider,
  List,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText as MuiListItemText,
  Typography,
  ListSubheader as MuiListSubheader
} from "@mui/material";
//Icons:
import {
  Menu,
  AccountCircle,
  Mic,
  Apps,
  MoreVert,
  //Drawer:
  Home,
  Whatshot,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  LightbulbCircle,
  AddCircle
} from "@mui/icons-material";
//Images:
import darkLogoImg from "../../assets/img/darkLogo.png";

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
const DarkLogo = styled("img")({
  height: "1.8rem"
});
const ListItemText = styled(MuiListItemText)({
  fontSize: "13px"
});
const ListItem = styled(MuiListItem)({
  //Espaçamento entre os itens do DrawerMenu:
  paddingTop: "0.4rem",
  paddingBottom: "0.4rem"
});
const ListSubheader = styled(MuiListSubheader)({
  textTransform: "uppercase"
});

const drawerWidth = 240;

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

          <DarkLogo src={darkLogoImg} />

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

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            borderRight: "none",
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText primary="Em alta" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explorar" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText primary="Inscrições" />
            </ListItem>
          </List>

          <Divider />

          <List>
            {["Biblioteca", "Histórico"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <VideoLibrary /> : <History />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <Box p={7}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>

            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>

          <Divider />

          <List>
            <ListSubheader>O melhor do Youtube</ListSubheader>

            <ListItem button>
              <ListItemIcon>
                <LightbulbCircle />
              </ListItemIcon>
              <ListItemText primary="Categoria" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LightbulbCircle />
              </ListItemIcon>
              <ListItemText primary="Categoria" />
            </ListItem>
          </List>

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary="Procurar mais" />
          </ListItem>

          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
