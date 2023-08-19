import { useTheme } from "@emotion/react";
import { styled } from '@mui/material/styles';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 17,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 10,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 40 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  console.log(theme);

  const {onToggleMode}=useSettings();

  return (
    <Stack direction="row">
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
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
