import { Box, Stack, useTheme } from '@mui/material';
import React from 'react';
// import Chat_History from "../../data";
import {DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline} from "./MsgTypes";
import {Chat_History} from "../../data";

const Message = () => {
    const theme=useTheme();
  return (
    <Box p={3} sx={{backgroundColor: theme.palette.background.neutral}}>
        <Stack spacing={3}>
            {Chat_History.map((el)=>{
                switch(el.type) {
                    case "divider":
                        return <Timeline el={el}/>;
                    case "msg":
                        switch(el.subtype){
                            case "img":
                                return <MediaMsg el={el} />;
                            case "doc":
                                return <DocMsg el={el} />;
                            case "link":
                                return <LinkMsg el={el} />;
                            case "reply":
                                return <ReplyMsg el={el}/>;
                            default:
                                return <TextMsg el={el}/>;
                        }
                    default:
                        break;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message;