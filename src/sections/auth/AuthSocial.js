import { Box, Divider, IconButton, Stack } from "@mui/material";
import { FacebookLogo, GoogleLogo, TwitterLogo, X } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <Box>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <IconButton>
            <GoogleLogo color="#DF3E30"/>
        </IconButton>
        <IconButton>
            <FacebookLogo color="#4267B2"/>
        </IconButton>
        <IconButton>
            <X color="#00ACEE"/>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AuthSocial;
