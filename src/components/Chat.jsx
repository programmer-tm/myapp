import React, {useEffect, useRef} from "react";
import '../App.css';
import Message from './Message';
import { Box,TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { getMessageList } from "../redux/redusers/messageReducer/messageSelector";
import { getChatList } from "../redux/redusers/chatReducer/chatSelector";
var id = 1;
var idchat = 2;

function Chat() {
  const messageList = useSelector(getMessageList);
  const dispatch = useDispatch();

  function send(){
    dispatch({type: 'send', payload: [{id: id, autor: document.getElementById('autor').value, text: document.getElementById('text').value, chat: chat}]});
    id++;
  }

  var autor = useRef('');

  useEffect(()=>{
    if (document.getElementById('autor').value){
      setTimeout(()=>{
        console.log(document.getElementById('autor').value+", you message sended");}, 4000)
    }
    
  },[autor.current.value, messageList]);

  const chatList = useSelector(getChatList);
  const [chat,setChat] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  };

  function sendChat(){
    dispatch({type: 'sendChat', payload: [{value: idchat, label: document.getElementById('addchat').value}], meta: {delay: 3000}});
    idchat++;
   }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '20ch', height: '7.5ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>Add chat:</div>
        <div><TextField id="addchat" label="Чат" variant="outlined" autoFocus /></div>
        <Button onClick={sendChat} variant="outlined">Отправить</Button>
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch', height: '7.5ch'},
      }}
      noValidate
      autoComplete="off"
      >
        <div>Send message:</div>
        <div><TextField id="autor" label="Автор" variant="outlined" autoFocus /></div>
        <div><TextField id="text" label="Текст" variant="outlined" autoFocus /></div>
        <div><TextField
            id="chat"
            select
            label="Чат"
            value={chat}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {chatList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField></div>
        <Button onClick={send} variant="outlined">Отправить</Button>
      </Box>
      <Message messageList={messageList}/>
    </>
  );
}

export default Chat;