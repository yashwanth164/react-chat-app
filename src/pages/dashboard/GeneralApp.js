import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  // console.log(theme);
  const {sidebar} = useSelector((store)=>store.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? `calc(100vw - 740px)` : `calc(100vw - 420px)`,
          backgroundColor:( theme.palette.mode === "light"
          ? "#F0F4FA"
          : theme.palette.background.default),
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact Component */}
      {sidebar.open && <Contact/>}
    </Stack>
  );
};

export default GeneralApp;
