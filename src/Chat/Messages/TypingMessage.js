import React from "react";
import styled from "styled-components";
import { LeftMessage } from "./MessageStyles";
import { useAutoScroll } from "./scrollHook";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const TypingMessage = ({ nickname, canTriggerAutoScroll }) => {
  const containerRef = useAutoScroll(canTriggerAutoScroll);
  return (
    <Container ref={containerRef}>
      <LeftMessage isFirst={true} isLast={true}>
        {nickname} is typing...
      </LeftMessage>
    </Container>
  );
};
