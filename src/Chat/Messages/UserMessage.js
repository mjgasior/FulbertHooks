import React from "react";
import styled from "styled-components";
import { getDate } from "./dates";
import { LeftMessage } from "./MessageStyles";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const UserMessage = ({ message, date, isFirst, isLast }) => {
  return (
    <Container>
      <LeftMessage data-date={getDate(date)} isFirst={isFirst} isLast={isLast}>
        {message}
      </LeftMessage>
    </Container>
  );
};
