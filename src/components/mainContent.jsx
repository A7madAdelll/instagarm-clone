import React from "react";
import { Box } from "@mui/material";
import StoriesList from "./stories";
import { theme } from "../App";
import Post from "./post";
import Feed from "./feed";
export default function MainContent() {
  return (
    <>
      <Box theme={theme}>
        <StoriesList></StoriesList>
        <Feed></Feed>
      </Box>
    </>
  );
}
