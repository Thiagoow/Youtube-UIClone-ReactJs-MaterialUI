import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Components:
import {
  Box as MuiBox,
  Typography,
  IconButton,
  Toolbar,
  Grid
} from "@mui/material";
//Import videos array:
import videos from "../components/videos";
//Icons:
import { MoreVert } from "@mui/icons-material";

const Box = styled(MuiBox)({
  backgroundColor: theme.palette.background.dark
});
const Link = styled("a")({
  color: "inherit",
  textDecoration: "inherit"
});

export default function VideoListing() {
  return (
    <>
      <Box p={8}>
        {/*  */}
        <Toolbar />

        {/* <Typography
          variant="h5"
          color="textPrimary"
          style={{ fontWeight: 600 }}
          marginBottom="1.2rem"
        >
          Recomendados
        </Typography> */}

        <Grid container spacing={4.5}>
          {videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Link href={item.videoUrl}>
                <img
                  style={{ width: "100%", maxHeight: "161px" }}
                  alt="Thumbnail image"
                  src={item.thumb}
                />
              </Link>

              <Box display="flex" alignItems="center" marginTop="0.2rem">
                <Link
                  href={item.channelUrl}
                  style={{
                    alignSelf: "start"
                  }}
                >
                  <img
                    style={{
                      width: "38px",
                      height: "38px",
                      alignSelf: "start",
                      borderRadius: "50%"
                    }}
                    alt={item.channel + "Profile pic"}
                    src={item.avatar}
                  />
                </Link>

                <Grid marginLeft="1rem" alignItems="center">
                  <Typography
                    fontSize="0.875rem"
                    color="textPrimary"
                    style={{
                      fontWeight: 600,
                      maxHeight: "40px",
                      width: "11rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box"
                    }}
                  >
                    <Link href={item.videoUrl}>{item.title}</Link>
                  </Typography>

                  <Typography
                    display="block"
                    color="textSecondary"
                    marginTop="0.5rem"
                    fontSize="0.75rem"
                  >
                    <Link href={item.channelUrl}>{item.channel}</Link>
                  </Typography>

                  <Typography
                    marginBottom="1.5rem"
                    color="textSecondary"
                    marginTop="2px"
                    fontSize="0.75rem"
                  >
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Grid>

                <IconButton
                  size="small"
                  style={{
                    display: "inline-flex",
                    position: "relative",
                    alignSelf: "start"
                  }}
                >
                  <MoreVert />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
