import React from "react";
import { Box, Avatar, Stack, Typography } from "@mui/material";
export default function StoriesList() {
  const stories = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

  return (
    <Stack flexDirection={"row"} margin={"10px"} gap={3}>
      {stories.map((story) => (
        <Box>
          <Avatar
            key={story}
            alt={story}
            src="/public/war-meme.gif"
            sx={{ width: 56, height: 56 }}
          />
          <Typography color="white" align="center">
            {" "}
            {story}
          </Typography>
          {story}
        </Box>
      ))}
    </Stack>
  );
}
