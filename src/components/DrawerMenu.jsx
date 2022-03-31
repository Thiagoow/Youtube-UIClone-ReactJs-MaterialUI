import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Components:
import {
  Drawer,
  Toolbar,
  Box,
  Divider,
  List,
  Button,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText as MuiListItemText,
  Typography,
  ListSubheader as MuiListSubheader
} from "@mui/material";
//Icons:
import {
  Home,
  Whatshot,
  Explore,
  Subscriptions,
  VideoLibrary,
  AccountCircle,
  History,
  LightbulbCircle,
  AddCircle
} from "@mui/icons-material";

const drawerWidth = 240;

const ListItemText = styled(MuiListItemText)({
  fontSize: "10px"
});
const ListItem = styled(MuiListItem)({
  //Espaçamento entre os itens do DrawerMenu:
  paddingTop: "0.4rem",
  paddingBottom: "0.4rem"
});
const ListSubheader = styled(MuiListSubheader)({
  textTransform: "uppercase"
});

export default function DrawerMenu() {
  return (
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
      <Box p={3} sx={{ overflow: "auto" }}>
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

        <Box p={4}>
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
  );
}
