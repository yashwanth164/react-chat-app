import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material";

const GeneralApp = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: `calc(100vw - 420px)`,
          backgroundColor:( theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default),
            
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
