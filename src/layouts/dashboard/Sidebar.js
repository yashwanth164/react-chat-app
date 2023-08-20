import React, { useState }from 'react'
import { useTheme } from '@mui/material';
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Gear } from "phosphor-react";
import { Nav_Buttons } from "../../data";
import useSettings from '../../hooks/useSettings';
import { faker } from '@faker-js/faker';
import AntSwitch from '../../components/AntSwitch';
import logo from "../../assets/Images/logo.ico";

const Sidebar = () => {
    const theme=useTheme();
    const [selected, setSelected] = useState(0);
    const {onToggleMode}=useSettings();

  return (
    <Box
        p={2}
        sx={{
          background: theme.palette.background.paper,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height:"100%"}}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={logo} alt={"chat system"} />
          </Box>
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ width: "max-content" }}
            spacing={3}
          >
            {Nav_Buttons.map((ele) =>
              ele.index === selected ? (
                <Box
                  padding={2}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={ele.index}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={ele.index}
                  >
                    {ele.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(ele.index)}
                  sx={{ width: "max-content", color: theme.palette.mode==="light" ? "#000" :theme.palette.text.primary  }}
                  key={ele.index}
                >
                  {ele.icon}
                </IconButton>
              )
            )}
          </Stack>
          <Divider sx={{ width: "48px" }} />
          <Stack
            direction={"column"}
            alignItems={"center"}
            sx={{ width: "100" }}
            spacing={3}
          >
            {selected === 3 ? (
              <Box
                padding={2}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{ width: "max-content", color: theme.palette.mode==="light" ? "#000" :theme.palette.text.primary }}
                key={3}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
          </Stack>
          <Stack spacing={4} alignItems={"center"} direction={"column"} sx={{ width: "100" }}>
          <AntSwitch onChange={()=>{
            onToggleMode();
          }} defaultChecked />
          <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
  )
}

export default Sidebar;