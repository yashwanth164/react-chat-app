import { Box, Stack, useTheme } from '@mui/material';
import React from 'react';
// import Chat_History from "../../data";
import {DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline} from "./MsgTypes";
import {Chat_History} from "../../data";

const Message = ({menu}) => {
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
                                return <MediaMsg el={el} menu={menu} />;
                            case "doc":
                                return <DocMsg el={el} menu={menu} />;
                            case "link":
                                return <LinkMsg el={el} menu={menu} />;
                            case "reply":
                                return <ReplyMsg el={el} menu={menu} />;
                            default:
                                return <TextMsg el={el} menu={menu} />;
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