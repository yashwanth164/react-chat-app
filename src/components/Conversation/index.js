import {
  Box,
  Stack,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";





const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header/>
      {/* msg */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* chat footer */}
      <Footer/>
      
    </Stack>
  );
};

export default Conversation;
