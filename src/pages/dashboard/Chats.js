import styled from "@emotion/styled";
// import { faker } from "@faker-js/faker";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  alpha,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import ChatElement from "../../components/ChatElement";











function Chats() {
    const theme=useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: theme.palette.mode==="light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0 0 0 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{height: "100vh"}}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" sx={{color:"#676767"}}>Chats</Typography>
          
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size="24" />
            <Button>Archive</Button>
          </Stack>
          <Divider variant="fullWidth" />
        </Stack>
        <Stack direction="column" sx={{flexGrow:1, overflow:"scroll", height:"100%"}} spacing={2}>
            <SimpleBarStyle timeout={500} clickOnTrack={false} >
            <Stack spacing={2.4}>
                <Typography variant="subtitle" sx={{color:"#676767"}}>Pinned</Typography>
                {ChatList.filter((el)=>
                    el.pinned).map((el)=>{
                        return <ChatElement {...el} />;
                    })}
            </Stack>
            <Stack spacing={2.4}>
                <Typography variant="subtitle" sx={{color:"#676767"}}>All Chats</Typography>
                {ChatList.filter((el)=>
                    !el.pinned).map((el)=>{
                        return <ChatElement {...el} />;
                    })}
            </Stack>
            </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;