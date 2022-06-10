import React, {useState, useEffect, useRef} from "react";
import './App.css';
import Message from './Message';
var id = 1;

function App() {
  const [messageList, setMessageList] = useState([]);
  var autor = useRef('');
  var text = useRef('');
  
  useEffect(()=>{
    setTimeout(()=>{
    console.log(autor.current.value+", you message sended");},1000)
  },[autor.current.value, messageList]);

  function send(){
    setMessageList(messageList.concat([{id: id, autor: autor.current.value, text: text.current.value}]));
    id++;
  }
  return (
    <div className="App">
      <form action="#">
      <input type="text" ref={autor}/>
      <input type="text" ref={text}/>
      <button onClick={send}>Send</button>
      </form>
      <Message messageList={messageList}/>
    </div>
  );
}

export default App;