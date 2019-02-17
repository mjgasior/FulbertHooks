import React from "react";
import { useChat, useSocket, useTyping } from "./socketHooks";
import { SendMessage } from "./SendMessage";
import styled from "styled-components";
import Messages from "./Messages/Messages";

const Typing = styled.div`
  color: #a0a0a0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: flex-end;
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Conversation = ({ nickname }) => {
  const socket = useSocket(nickname);
  const { messages, publish } = useChat(socket);
  const { typingUsers, startTyping } = useTyping(socket);

  return (
    <Container>
      <MessageBlock>
        <Messages messages={messages} />
        {typingUsers.map((nickname, index) => (
          <Typing key={index}>{nickname} is typing...</Typing>
        ))}
      </MessageBlock>
      <SendMessage publish={publish} startTyping={startTyping} />
    </Container>
  );
};
