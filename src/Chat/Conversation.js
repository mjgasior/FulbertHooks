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
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const Conversation = ({ nickname }) => {
  const socket = useSocket(nickname);
  const { messages, publish } = useChat(socket);
  const { typingUsers, startTyping } = useTyping(socket);
  const groupedMessages = groupMessages(messages);

  return (
    <Container>
      <MessageBlock>
        {groupedMessages.map((group, index) => (
          <Messages messages={group} key={index} />
        ))}
      </MessageBlock>
      {typingUsers.map((nickname, index) => (
        <Typing key={index}>{nickname} is typing...</Typing>
      ))}
      <SendMessage publish={publish} startTyping={startTyping} />
    </Container>
  );
};

const groupMessages = messages => {
  let lastType = null;
  const groupedMessages = [];
  let counter = -1;

  messages.forEach(message => {
    const currentType = message.type;

    if (lastType !== currentType) {
      counter++;
      groupedMessages[counter] = [];
    }

    groupedMessages[counter].push(message);
    lastType = currentType;
  });

  return groupedMessages;
};
