import React, { useState, useEffect, useRef } from "react";
import { useChat, useSocket, useTyping } from "./socketHooks";
import { SendMessage } from "./SendMessage";
import styled from "styled-components";
import Messages from "./Messages/Messages";
import { Typing } from "./Typing";

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

  const [position, setPosition] = useState(0);

  const containerRef = useRef(null);
  const onScrolling = event => {
    const { target } = event;
    const maxScrollPosition = target.scrollHeight - target.clientHeight;
    const currentScrollPosition = target.scrollTop;
    const diff = maxScrollPosition - currentScrollPosition;
    setPosition(diff);
  };

  useEffect(() => {
    if (position < 1 && containerRef) {
      setTimeout(
        () =>
          (containerRef.current.scrollTop = containerRef.current.scrollHeight),
        100
      );
    }
  }, [messages, typingUsers]);

  return (
    <Container>
      <MessageBlock
        className="scroll"
        onScroll={onScrolling}
        ref={containerRef}
      >
        {groupedMessages.map((group, index) => (
          <Messages messages={group} key={index} />
        ))}

        <Typing mode={position < 1} users={typingUsers} />
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
