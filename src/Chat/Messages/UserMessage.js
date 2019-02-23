import React from "react";
import styled from "styled-components";
import { getDate } from "./dates";
import { LeftMessage } from "./MessageStyles";
import { useAutoScroll } from "./scrollHook";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const UserMessage = ({
  message,
  date,
  canTriggerAutoScroll,
  isFirst,
  isLast
}) => {
  const containerRef = useAutoScroll(canTriggerAutoScroll);

  return (
    <Container ref={containerRef}>
      <LeftMessage data-date={getDate(date)} isFirst={isFirst} isLast={isLast}>
        {message}
      </LeftMessage>
    </Container>
  );
};
