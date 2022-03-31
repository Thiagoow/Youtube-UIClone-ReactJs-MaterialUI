import React from "react";

import { Box } from "@mui/material";
import TopBar from "../components/TopBar";
import VideoListing from "../components/VideoListing";

export default function Home() {
  return (
    <Box display="flex">
      <TopBar />

      <VideoListing />
    </Box>
  );
}
