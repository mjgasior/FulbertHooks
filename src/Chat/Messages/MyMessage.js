import React from "react";
import styled from "styled-components";
import { getDate } from "./dates";
import { RightMessage } from "./MessageStyles";
import { useAutoScroll } from "./scrollHook";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`;

export const MyMessage = ({ message, date, canTriggerAutoScroll, isFirst, isLast }) => {
  const containerRef = useAutoScroll(canTriggerAutoScroll);

  return (
    <Container ref={containerRef}>
      <RightMessage data-date={getDate(date)} isFirst={isFirst} isLast={isLast}>
        {message}
      </RightMessage>
    </Container>
  );
};
