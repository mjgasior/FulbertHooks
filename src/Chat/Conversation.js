import React, { useState } from "react";
import { useChat, useSocket, useTyping } from "./socketHooks";
import { SendMessage } from "./SendMessage";
import styled from "styled-components";
import Messages from "./Messages/Messages";
import { TypingMessage } from "./Messages/TypingMessage";

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

  const [isAtBottom, setIsAtBottom] = useState(true);

  const onScrolling = event => {
    const { target } = event;
    const maxScrollPosition = target.scrollHeight - target.clientHeight;
    const currentScrollPosition = target.scrollTop;
    const diff = maxScrollPosition - currentScrollPosition;
    setIsAtBottom(diff === 0);
  };

  return (
    <Container>
      <MessageBlock className="scroll" onScroll={onScrolling}>
          {groupedMessages.map((group, index) => (
            <Messages messages={group} key={index} />
          ))}
          {typingUsers.map((nickname, index) => (
            <TypingMessage canTriggerAutoScroll={isAtBottom} key={index + nickname} nickname={nickname} />
          ))}
      </MessageBlock>
      <SendMessage publish={publish} startTyping={startTyping} />
    </Container>
  );
};

const groupMessages = messages => {
  let lastType = null,
    lastNickname = undefined;
  const groupedMessages = [];
  let counter = -1;

  messages.forEach(message => {
    const currentType = message.type;
    const currentNickname = message.nickname;

    if (lastType !== currentType || lastNickname !== currentNickname) {
      counter++;
      groupedMessages[counter] = [];
    }

    groupedMessages[counter].push(message);
    lastType = currentType;
    lastNickname = currentNickname;
  });

  return groupedMessages;
};
