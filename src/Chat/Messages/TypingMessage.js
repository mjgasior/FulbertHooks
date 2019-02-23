import React from "react";
import styled from "styled-components";
import { LeftMessage } from "./MessageStyles";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const TypingMessage = ({ nickname }) => {
  return (
    <Container>
      <LeftMessage isFirst={true} isLast={true}>
        {nickname} is typing...
      </LeftMessage>
    </Container>
  );
};
