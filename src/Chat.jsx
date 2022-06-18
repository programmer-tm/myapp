import React, {useState, useEffect, useRef} from "react";
import './App.css';
import Message from './Message';
import { Box,TextField, Button } from "@mui/material";
var id = 1;

function Chat() {
  const [messageList, setMessageList] = useState([]);
  var autor = useRef('');
  
  useEffect(()=>{
    if (document.getElementById('autor').value){
      setTimeout(()=>{
        console.log(document.getElementById('autor').value+", you message sended");},1000)
    }
    
  },[autor.current.value, messageList]);

  function send(){
    setMessageList(messageList.concat([{id: id, autor: document.getElementById('autor').value, text: document.getElementById('text').value}]));
    id++;
  }
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch', height: '7.5ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div><TextField id="autor" label="Автор" variant="outlined" autoFocus /></div>
      <div><TextField id="text" label="Текст" variant="outlined" autoFocus /></div>
      <Button onClick={send} variant="outlined">Отправить</Button>
      <Message messageList={messageList}/>
    </Box>
  );
}

export default Chat;