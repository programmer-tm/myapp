import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Message({messageList}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {messageList.map((message) => (
      <ListItem alignItems="flex-start" key={message.id}>
        <ListItemText
          primary="Новое сообщение:"
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