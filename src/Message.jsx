import React from "react";

function Message({messageList}) {
    return (
    <ol>
      {messageList.map((message) => (
        <li key={message.id}>Автор:{message.autor} Сообщение: {message.text}</li>
      ))}
    </ol>
    );
  }
  
  export default Message;