import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";
import { getChatList } from '../redux/redusers/chatReducer/chatSelector';

export default function Message({messageList}) {
  const chatList = useSelector(getChatList);
  function getLable(id){
    Number(id = id - 1);
    return chatList[id].label;
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messageList.map((message) => (
      <ListItem alignItems="flex-start" key={message.id}>
        <ListItemText
          primary={getLable(message.chat)}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {!!(message.autor)?message.autor:"Anonimus"}
              </Typography>
              {": "}{!!(message.text)?message.text:"No message!"}
            </React.Fragment>
          }
        />
      </ListItem>
      ))}
    </List>
  );
}