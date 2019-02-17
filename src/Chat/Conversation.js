import React from "react";
import { useChat, useSocket, useTyping } from "./socketHooks";
import { SendMessage } from "./SendMessage";
import styled from 'styled-components';

const Typing = styled.div`
  color: #a0a0a0;
`;


export const Conversation = ({ nickname }) => {
  const socket = useSocket(nickname);
  const { messages, publish } = useChat(socket);
  const { typingUsers, startTyping } = useTyping(socket);
  
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      {typingUsers.map((nickname, index) => (
        <Typing key={index}>{nickname} is typing...</Typing>
      ))}
      <SendMessage publish={publish} startTyping={startTyping} />
    </div>
  );
};
