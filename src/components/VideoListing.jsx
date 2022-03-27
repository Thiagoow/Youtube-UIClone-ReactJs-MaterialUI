import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
//Components:
import { Box as MuiBox, Typography, Toolbar, Grid } from "@mui/material";
//Import videos array:
import videos from "../components/videos";

const Box = styled(MuiBox)({
  backgroundColor: theme.palette.background.dark
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
              <img
                style={{ width: "100%" }}
                alt={item.title}
                src={item.thumb}
              />

              <Box display="flex" alignItems="center" marginTop="0.2rem">
                <img
                  style={{
                    width: "38px",
                    height: "38px",
                    alignSelf: "start",
                    borderRadius: "50%"
                  }}
                  alt={item.channel}
                  src={item.avatar}
                />

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
                    {item.title}
                  </Typography>

                  <Typography
                    display="block"
                    color="textSecondary"
                    marginTop="0.5rem"
                    fontSize="0.75rem"
                  >
                    {item.channel}
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
