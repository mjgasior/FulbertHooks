import React from "react";
import { useChat, useSocket, useTyping } from "./socketHooks";
import { SendMessage } from "./SendMessage";
import styled from "styled-components";
import Messages from "./Messages/Messages";

const Typing = styled.div`
  color: #a0a0a0;
`;

export const Conversation = ({ nickname }) => {
  const socket = useSocket(nickname);
  const { messages, publish } = useChat(socket);
  const { typingUsers, startTyping } = useTyping(socket);

  return (
    <div>
      <Messages messages={messages} />
      {typingUsers.map((nickname, index) => (
        <Typing key={index}>{nickname} is typing...</Typing>
      ))}
      <SendMessage publish={publish} startTyping={startTyping} />
    </div>
  );
};
